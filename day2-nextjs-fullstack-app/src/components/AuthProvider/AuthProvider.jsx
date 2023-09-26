"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
// since session provider use context api hence it can only be used at client side ,hence we are mnaking this  as use client
const AuthProvider = ({children}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider
