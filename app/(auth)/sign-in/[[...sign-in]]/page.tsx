import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInpage = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <SignIn/>
    </div>
  )
}

export default SignInpage
