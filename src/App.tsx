import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import SearchPage from './pages/search'
import AboutPage from './pages/about'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/about/:id' element={<AboutPage />} />
    </Routes>
  )
}

export default App
