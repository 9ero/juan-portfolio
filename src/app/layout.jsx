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
      <main className={`${sora.className} flex flex-col items-center justify-center min-h-full bg-gradient-to-b bg-no-repeat w-full from-primary to-secondary text-white py-16 scroll-smooth `}>
        {children}
      </main>
      </body>
    </html>
  )
}
