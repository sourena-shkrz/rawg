import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./theme.ts"

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)
