# p5.js + VSCode Starter Template (JavaScript)

This template adds p5.js intellisense to get autocompletion and documentation in your p5.js sketches in VSCode.

<img src="https://user-images.githubusercontent.com/59444569/239292714-01987bbd-2f05-44d1-9259-a958c0265163.png" alt="image">
<img src="https://user-images.githubusercontent.com/59444569/240663218-7299bcdc-038f-42c2-904f-e82b9700f86f.png" alt="image">

## How to use

1. Download this repository

```bash
npx degit dipamsen/p5js-vscode-types-template project_name
```

2. Install the dependencies (Installs p5.js typings)

```bash
cd project_name
npm install
```

3. Open the project in VSCode

```bash
code .
```

4. Run the project using a web server. You can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VSCode.

Now, any javascript file with the following `reference` directive at the top of the file will have p5.js intellisense.

Global Mode:
```javascript
/// <reference types="p5/global" />
```

Instance Mode:
```javascript
/// <reference types="p5" />
```

## Credits

The p5.js typings are generated by [p5-types/p5.ts](https://github.com/p5-types/p5.ts) from the p5.js source code.
