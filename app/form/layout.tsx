import { ReactNode } from 'react'

export default function FormLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="sv" className="h-full m-0 overflow-hidden">
      <body className="m-0 h-full">
        {children}
      </body>
    </html>
  )
}