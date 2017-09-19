# Mars Rovers React App

### Build Steps:

- `cd <project-directory>`
- `create-react-app mars-rover-react-app` <= <name-of-your-daily-project>
- `cd <name-of-your-daily-project>`
- `atom .`
- `cd src`
- `mkdir components`
- `mkdir styles`
- drag and drop App.css into styles
- drag and drop App.js into components
- in App.js `import '../styles/App.css';`
- delete `import logo ...`
- in index.js `import App from './components/App.js'`
- `cd components`
- `touch apiKey.js`
- in .gitignore `src/components/apikey.js`
- in App.js `import apiKey from './apiKey'`
- sign up for NASA API key
- in apiKey.js `const key = '<API_KEY>';
export default key;`
- check that it works
- `cd <name-of-your-daily-project>`
- `git init`
- `git add .`
- `git commit -m 'initial commit'`
