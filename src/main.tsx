import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import "./global-style/style.tsx"

//pages
import { Todo } from './pages/Todo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
