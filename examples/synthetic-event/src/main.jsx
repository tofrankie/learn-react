// import { createRoot } from 'react-dom/client' // react 19/18
import { render } from 'react-dom' // react 17
import App from './App'
import './index.css'

// createRoot(document.getElementById('root')).render(<App />) // react 19/18
render(<App />, document.getElementById('root')) // react 17
