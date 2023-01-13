import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import "@/global-style/style.tsx"
import { activeColor, frontColor } from './constans/theme'
//pages
import { Todo } from './pages/Todo'
import { Daka } from './pages/Daka'

const root = document.getElementById('root') as HTMLElement
root.style.backgroundColor = activeColor
root.style.color = frontColor

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/daka" element={<Daka />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
