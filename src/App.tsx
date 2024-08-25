import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import SearchPage from './pages/search'
import AuthPage from './pages/auth'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/auth' element={<AuthPage />} />
    </Routes>
  )
}

export default App
