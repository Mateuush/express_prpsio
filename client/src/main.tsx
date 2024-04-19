import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Main from './Pages/Main'
import Login from './Pages/Login'
import Register from './Pages/Register'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
  </BrowserRouter>
)
