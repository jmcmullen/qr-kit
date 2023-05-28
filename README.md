# QR Code API

This template offers a straightforward solution for generating customizable, dynamic QR codes. It's a user-friendly tool designed for seamless integration into websites, emails, and more. Its flexibility caters to various use-cases and allows for on-the-fly creation of QR codes containing any form of data.

## Deploy your own

This API is an ideal starting point for anyone seeking a quick, ready-to-use solution for incorporating dynamic QR codes into their projects.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jmcmullen/qr-codes/api&project-name=qr-codes-api&repository-name=qr-codes-api)

## Options

Here are the query parameters you can specify to the API endpoint:

| Query Parameter | Type                 | Range/Values                                             | Default | Required |
| --------------- | -------------------- | -------------------------------------------------------- | ------- | -------- |
| value           | string               | -                                                        | -       | Yes      |
| size            | number               | 0 - 100,000                                              | 600     | No       |
| ecLevel         | string               | 'L', 'M', 'Q', 'H'                                       | 'M'     | No       |
| quietZone       | number               | 0 - 100,000                                              | 1       | No       |
| bgColor         | string               | Valid Hex Color String (4-9 characters, starts with '#') | '#fff'  | No       |
| fgColor         | string               | Valid Hex Color String (4-9 characters, starts with '#') | '#000'  | No       |
| logoImage       | string (URL) or null | -                                                        | null    | No       |
| logoWidth       | number               | 0 - 100,000                                              | 300     | No       |
| logoHeight      | number               | 0 - 100,000                                              | 300     | No       |
| logoOpacity     | number               | 0 - 100                                                  | 100     | No       |
| logoRemoveBg    | boolean              | true, false                                              | false   | No       |

Please ensure to pass the parameters correctly to avoid validation errors.

## Usage

GET request, all parameters are read from the URL query.

Here's a sample request:

```
https://api.example.com/endpoint?value=Hello%20world&size=800&ecLevel=Q&quietZone=2&bgColor=%23abcdef&fgColor=%23123456&logoImage=https%3A%2F%2Fexample.com%2Flogo.png&logoWidth=400&logoHeight=400&logoOpacity=80&logoRemoveBg=true
```
