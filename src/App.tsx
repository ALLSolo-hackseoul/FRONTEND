import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import SearchPage from './pages/search'
<<<<<<< HEAD
import AuthPage from './pages/auth'
=======
import AboutPage from './pages/about'
>>>>>>> 11d34fbe9febf245e0ce4a56bf9f3ed16df77f69

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
<<<<<<< HEAD
      <Route path='/auth' element={<AuthPage />} />
=======
      <Route path='/about/:id' element={<AboutPage />} />
>>>>>>> 11d34fbe9febf245e0ce4a56bf9f3ed16df77f69
    </Routes>
  )
}

export default App
