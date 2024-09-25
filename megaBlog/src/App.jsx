import { useState, useEffect } from 'react'

import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice';
import Header from './components/header/Header';
// import { Footer } from './components/footer/Footer'
import Footer from '/src/components/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';





function App() {

  const [loading, setLoading] = useState(true);
  const dispath = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispath(login({ userData }))
        } else {
          dispath(logout())
        }
      })

      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen w-full flex flex-col bg-gray-400'>
      <div className="flex-grow">
        <div >
          <Header />
          <main className='flex-grow mt-16 min-h-96'>
            <Outlet>

            </Outlet>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  ) : (null)

}

export default App
