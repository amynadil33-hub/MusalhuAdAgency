import { Link } from 'react-router-dom'

export default function VerifyEmail() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8fafc, #eef2f7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          maxWidth: 520,
          width: '100%',
          background: '#ffffff',
          borderRadius: 16,
          padding: '3rem 2.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <img
          src="/logo-dark.svg"
          alt="Musalhu Advertising"
          style={{ height: 42, marginBottom: 32 }}
        />

        <h1
          style={{
            fontSize: '1.8rem',
            fontWeight: 600,
            color: '#0f172a',
            marginBottom: 12,
          }}
        >
          Verify your email address
        </h1>

        <p
          style={{
            fontSize: '1rem',
            color: '#475569',
            lineHeight: 1.6,
            marginBottom: 28,
          }}
        >
          Thanks for signing up with <strong>Musalhu Advertising</strong>.
          <br />
          We’ve sent a verification link to your email.
          <br />
          Please confirm your address to activate your account.
        </p>

        <div
          style={{
            background: '#f1f5f9',
            borderRadius: 12,
            padding: '1rem 1.25rem',
            fontSize: '0.95rem',
            color: '#334155',
            marginBottom: 28,
          }}
        >
          Didn’t receive the email?
          <br />
          Check your spam folder or try again in a few minutes.
        </div>

        <Link
          to="/login"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.75rem',
            borderRadius: 999,
            background: '#0f172a',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 500,
            transition: 'opacity 0.2s ease',
          }}
        >
          Back to login
        </Link>

        <p
          style={{
            marginTop: 32,
            fontSize: '0.85rem',
            color: '#94a3b8',
          }}
        >
          © {new Date().getFullYear()} Musalhu Advertising
        </p>
      </div>
    </div>
  )
}
