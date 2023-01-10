import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '~/styles/main.scss'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(<StrictMode>Entrée utilisateur</StrictMode>)
