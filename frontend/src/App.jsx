import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from "../utils/firebase"
import { useEffect } from 'react'
import getCurrentUser from './features/getCurrentUser'
import api from "../utils/axios"
import Home from './pages/home'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'

const App = () => {

  const dispatch = useDispatch()
useEffect(()=>{
  const getUser = async ()=>{
    const data = await getCurrentUser()
    dispatch(setUserData(data))
  }
  getUser();
},[])
  return (
<>
<Home/>
</>
  )
}

export default App
