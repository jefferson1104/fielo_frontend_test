import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#222f3e',
        color: '#ffffff',
        height: '100vh'
      }}
    >
      <h1 style={{ fontSize: '36px' }}>404 - Page Not Found</h1>
      <Link href="/">
        <a style={{ fontSize: '24px', marginTop: '40px', color: '#f2f2f2' }}>
          Go back home
        </a>
      </Link>
    </div>
  )
}
