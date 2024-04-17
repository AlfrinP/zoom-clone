
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling app",
  icons: {
    icon: "/icons/logo.svg",
  }
};

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <StreamVideoProvider>
      {children}
    </StreamVideoProvider>
  )
}

export default RootLayout
