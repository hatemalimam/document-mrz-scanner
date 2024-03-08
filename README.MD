# document-mrz-scanner 🛂

Detect and extract MRZ (Machine Readable Zone) information using tesseract from various types of document images, including identity documents, driver's licenses, passports, and more.

## Installation

Before you can use this module, you need to install `tesseract` dependency.

### Linux

To install Tesseract run this command:

```bash
sudo apt-get install tesseract-ocr
```

### Mac (Homebrew)

To install Tesseract run this command:

```bash
brew install tesseract
```

The tesseract directory can then be found using `brew info tesseract` , e.g. `/usr/local/Cellar/tesseract/5.3.3/share/tessdata/`

### Other platforms

You can find the installation instructions [here](https://tesseract-ocr.github.io/tessdoc/Installation.html)

```
yarn add document-mrz-scanner
```

## Configration

Copy `fast.traineddata` file from `node_modules/document-mrz-scanner/tessdata` to tessdata directory of tesseract installation.
To find the location of the tessdata directory run `tesseract --list-langs` and look for the `tessdata` directory.
Once you have found the tessdata directory, copy the `fast.traineddata` file to the tessdata directory.

In the example above, the tessdata directory is `/usr/local/Cellar/tesseract/5.3.3/share/tessdata/`

## Usage

Install the package:

```bash
yarn add document-mrz-scanner
```

Code usage

```javascript
const documentMrzScanner = require('document-mrz-scanner');

const buffer = fs.readFileSync(path.join(__dirname, 'passport-test.png'));

const documentInformation = await mrzScanner.scan(buffer);
```

The `scan` function accepts a buffer of the image file and returns a promise that resolves to the MRZ data.

## Example (Passport)

![Passport](http://hatemalimam.com/uploads/passport-test.png)

## Output

```json
{
  "format": "TD3",
  "details": [
    {
      "label": "Document code",
      "field": "documentCode",
      "value": "P",
      "valid": true,
      "ranges": [Array],
      "line": 0,
      "start": 0,
      "end": 1,
      "autocorrect": []
    },
    {
      "label": "Issuing state",
      "field": "issuingState",
      "value": null,
      "valid": false,
      "ranges": [Array],
      "line": 0,
      "start": 2,
      "end": 5,
      "autocorrect": [],
      "error": "invalid state code: UTO"
    },
    {
      "label": "Last name",
      "field": "lastName",
      "value": "ERIKSSON",
      "valid": true,
      "ranges": [Array],
      "line": 0,
      "start": 5,
      "end": 13,
      "autocorrect": []
    },
    {
      "label": "First name",
      "field": "firstName",
      "value": "ANNA MARIA",
      "valid": true,
      "ranges": [Array],
      "line": 0,
      "start": 15,
      "end": 25,
      "autocorrect": []
    },
    {
      "label": "Document number",
      "field": "documentNumber",
      "value": "L898902C3",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 0,
      "end": 9,
      "autocorrect": []
    },
    {
      "label": "Document number check digit",
      "field": "documentNumberCheckDigit",
      "value": "6",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 9,
      "end": 10,
      "autocorrect": []
    },
    {
      "label": "Nationality",
      "field": "nationality",
      "value": null,
      "valid": false,
      "ranges": [Array],
      "line": 1,
      "start": 10,
      "end": 13,
      "autocorrect": [],
      "error": "invalid state code: UTO"
    },
    {
      "label": "Birth date",
      "field": "birthDate",
      "value": "740812",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 13,
      "end": 19,
      "autocorrect": []
    },
    {
      "label": "Birth date check digit",
      "field": "birthDateCheckDigit",
      "value": "2",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 19,
      "end": 20,
      "autocorrect": []
    },
    {
      "label": "Sex",
      "field": "sex",
      "value": "female",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 20,
      "end": 21,
      "autocorrect": []
    },
    {
      "label": "Expiration date",
      "field": "expirationDate",
      "value": "120415",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 21,
      "end": 27,
      "autocorrect": []
    },
    {
      "label": "Expiration date check digit",
      "field": "expirationDateCheckDigit",
      "value": "9",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 27,
      "end": 28,
      "autocorrect": []
    },
    {
      "label": "Personal number",
      "field": "personalNumber",
      "value": "ZE184226B",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 28,
      "end": 37,
      "autocorrect": []
    },
    {
      "label": "Personal number check digit",
      "field": "personalNumberCheckDigit",
      "value": "1",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 42,
      "end": 43,
      "autocorrect": []
    },
    {
      "label": "Composite check digit",
      "field": "compositeCheckDigit",
      "value": "0",
      "valid": true,
      "ranges": [Array],
      "line": 1,
      "start": 43,
      "end": 44,
      "autocorrect": []
    }
  ],
  "fields": {
    "documentCode": "P",
    "issuingState": null,
    "lastName": "ERIKSSON",
    "firstName": "ANNA MARIA",
    "documentNumber": "L898902C3",
    "documentNumberCheckDigit": "6",
    "nationality": null,
    "birthDate": "740812",
    "birthDateCheckDigit": "2",
    "sex": "female",
    "expirationDate": "120415",
    "expirationDateCheckDigit": "9",
    "personalNumber": "ZE184226B",
    "personalNumberCheckDigit": "1",
    "compositeCheckDigit": "0"
  },
  "valid": false
}
```

## License

MIT ©
