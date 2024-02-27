import { Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'


const sora = Sora({ subsets: ['latin'], weight: ['200','300', '400','500'] })

export const metadata = {
  title: "Juan Miguel Fernandez's Portfolio",
  description: 'Full stack developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header className={sora.className}/>
      <main className={`${sora.className} flex flex-col items-center justify-center min-h-full gap-24 bg-gradient-to-b bg-no-repeat w-screen from-primary to-secondary text-white py-16`}>
        {children}
      </main>
      </body>
    </html>
  )
}
