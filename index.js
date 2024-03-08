const Tesseract = require('node-tesseract-ocr');
const mrz = require('mrz').parse;
const sharp = require('sharp');

const config = {
  lang: 'fast'
};

const scan = async (buffer, rotate) => {
  if (!rotate) {
    buffer = await sharp(buffer)
      .greyscale()
      .toBuffer();
  }

  if (rotate > 180) return null;

  if (rotate) {
    buffer = await sharp(buffer)
      .rotate(rotate)
      .toBuffer();
  }

  const text = await Tesseract.recognize(buffer, config);
  const regex = /([A-Z])([A-Z0-9<])([A-Z]{3})([A-Z<]{39})\n([A-Z0-9<]{9})([0-9])([A-Z]{3})([0-9]{6})([0-9])([MF<])([0-9]{6})([0-9])([A-Z0-9<]{14})([0-9])([0-9])/;
  const result = text.match(regex);

  if (!result) {
    return scan(buffer, rotate ? rotate + 30 : 30);
  }

  const matches = result.filter(() => {
    return new RegExp(regex).test(text);
  });

  if (matches.length === 0) {
    return null;
  }

  const resultJSON = mrz(matches[0]);

  return resultJSON;
};

module.exports = {
  scan
};
