import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Main settings
const userData = localStorage.getitem('userData') || false

// Guest
import { index as Guest } from './routes/guest'

import SignIn from './routes/guest/SignIn'
import SignUp from './routes/guest/SignUp'

// User
import Dashboard from './routes/user/dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route index path="/" element={<Guest />} />

        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="/dashboard" element={<Dashboard />} />
      
      </Routes>

    </BrowserRouter>

  </React.StrictMode>

)