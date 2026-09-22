import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = { title: { default: 'Boynton Beach Restroom Logistics | Portable Toilet Rental', template: '%s | Boynton Beach Restroom Logistics' }, description: 'Clean, reliable portable restroom rentals for construction sites, events, homes, and emergencies in Boynton Beach and Palm Beach County.', generator: 'v0.app', icons: { icon: '/images/Porta potty photos/favicon.png', apple: '/images/Porta potty photos/favicon.png' } }
export const viewport: Viewport = { colorScheme:'light', themeColor:'#fbfaf7', width:'device-width', initialScale:1, maximumScale:5 }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV==='production'&&<Analytics/>}</body></html>}
