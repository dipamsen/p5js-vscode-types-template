# p5.js + VSCode Starter Template (Global Mode)

This template adds p5.js intellisense to get autocompletion and documentation in your p5.js sketches in VSCode.

![image](https://user-images.githubusercontent.com/59444569/239292714-01987bbd-2f05-44d1-9259-a958c0265163.png)

## How to use

1. Clone this repository

```bash
git clone https://github.com/dipamsen/p5js-vscode-types-template.git
```

2. Install the dependencies (Installs p5.js typings)

```bash
npm install
```

3. Open the project in VSCode

```bash
code .
```

4. Run the project using a web server. You can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VSCode.

Now, any javascript file with the following `reference` directive at the top of the file will have p5.js intellisense.

```javascript
/// <reference path="./node_modules/@types/p5/global.d.ts" />
```

## Credits

The p5.js typings are generated by [p5.ts](https://github.com/p5-types/p5.ts), which is published to npm.