import '@/styles/global.css'
import { Suspense } from 'react';
import Nav from './nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-full bg-gray-50">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  )
}