import * as React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Error from './components/Error'
import Layout from './components/Layout'
import AuthProvider from './contexts/AuthProvider'
import Content from './pages/Content'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-center" />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<Create />} />
          <Route path="/content/:id" element={<Content />} />
          <Route path="/content/:id/edit" element={<Edit />} />
          <Route path="*" element={<Error message="Page Not Found" />} />
          {/* 
          <Route path="/register" element={<Register />} />
           */}
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
