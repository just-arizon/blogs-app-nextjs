import Link from "next/link"
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    { path: './fonts/GogaTest-Regular-BF6646d5d84f69b.otf', weight: '400', style: 'normal' },
    { path: './fonts/GogaTest-Medium-BF6646d5d84754e.otf', weight: '500', style: 'normal' },
    { path: './fonts/GogaTest-Semibold-BF6646d5d8544cf.otf', weight: '600', style: 'normal' },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <nav>
          <Link href="/">home</Link>
          {" | "}
          <Link href="/blogs">blogs</Link>
          {" | "}
          <Link href="/blogs/new">create new</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}