import { Arimo, Bungee, Libre_Franklin, Sriracha, Noto_Sans, Paytone_One } from 'next/font/google'

export const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arimo',
  display: 'swap',
})

export const bungee = Bungee({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bungee',
  display: 'swap',
})

export const libre = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
  display: 'swap',
})

export const sriracha = Sriracha({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sriracha',
  display: 'swap',
})

export const notosan = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-noto',
  display: 'swap',
})

export const paytoneOne = Paytone_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-paytone',
  display: 'swap',
})