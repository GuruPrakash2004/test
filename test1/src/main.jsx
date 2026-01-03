import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


var ele = <App/>
const root = createRoot(document.getElementById('root'));
root.render(
   ele
);