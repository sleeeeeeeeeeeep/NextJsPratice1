import './globals.css'

export const metadata = {
  title: 'NextJS Practice',
  description: 'NextJS Practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
