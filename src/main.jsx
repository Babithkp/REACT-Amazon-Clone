import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PageContextProvider } from './store/amazon-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PageContextProvider>
    <App />
  </PageContextProvider>
)
