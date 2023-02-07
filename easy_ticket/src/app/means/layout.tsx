import '../globals.css'
import Nav from '../Nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className=' w-full'>
        <div className=' w-full absolute z-10'>
            <Nav/>
        </div>
        <div>{children}</div>
        </div>
        </body>
    </html>
  )
}
