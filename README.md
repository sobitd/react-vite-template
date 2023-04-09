<h1 align="center">
  Vite React Typescript with Jest, ESLint & Prettier
</h1>

<p align="center">
    A <a href="https://vitejs.dev">Vite</a> + <a href="https://reactjs.org">React</a> + <a href="https://jestjs.io/">Jest</a> + <a href="https://eslint.org/">ESLint</a> + <a href="https://prettier.io/">Prettier </a> starter template.
</p>


## Folder Structure

No configuration or complicated folder structures, just the files you need to build your app:

```
vite-template-react
├── node_modules
├── public
│   ├── vite.svg
│
└── src
    ├── assets
    │   ├── react.svg
    ├── tests
    │   ├── mocks
    │   │   ├── fileMock.js
    │   ├── App.test.tsx
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── vite-env.d.ts
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── index.html
├── jest.config.ts
├── jest.setup.ts
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/sobitd/react-vite-template.git
cd react-vite-template
```

Make it your own:

```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```
npm install
```

Now, you can start a local web server by running:

```
npm run dev
```

And then open http://localhost:5173 to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run test  | Runs tests in the application.                      |
| npm run lint  | Applies linting to the code.                        |

## Credits

Vite Template React is built and maintained by [Daniel Sobit]().

## License

This project is licensed under the terms of the [MIT license]