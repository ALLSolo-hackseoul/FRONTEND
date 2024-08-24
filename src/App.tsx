import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<MainPage />} />
    </Routes>
  )
}

export default App
