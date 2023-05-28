# QR Code API

This template offers a straightforward solution for generating customizable, dynamic QR codes. It's designed for seamless integration into websites, emails, and more.

## Deploy your own

This API is an ideal starting point for anyone seeking a quick, ready-to-use solution for incorporating dynamic QR codes into their projects.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jmcmullen/qr-kit&project-name=qr-codes-api&repository-name=qr-kit)

## Usage

GET request, all parameters are read from the URL query.

Here's a sample request:

```
https://qr-kit.vercel.app/api?value=https://github.com/jmcmullen/qr-kit&size=200&ecLevel=H&logoImage=https://qr-kit.vercel.app/sash.svg&logoHeight=80&logoWidth=80
```

Result:

![](https://qr-kit.vercel.app/api?value=https://github.com/jmcmullen/qr-kit&size=200&ecLevel=H&logoImage=https://qr-kit.vercel.app/sash.svg&logoHeight=80&logoWidth=80)

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
