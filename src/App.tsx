import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import SearchPage from './pages/search'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  )
}

export default App
