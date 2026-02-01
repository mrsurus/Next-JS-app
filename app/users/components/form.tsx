"use client"

import React, { useState } from 'react'

type Props = {
  onSubmit?: (data: { name: string; email: string; isSeller: string }) => Promise<void> | void
}

export const dynamic = "force-dynamic";

export default function SimpleForm({ onSubmit }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [sellerInfo, setSellerInfo] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  // derive the isSeller string from the boolean flag without causing re-renders
  const isSeller = sellerInfo ? 'seller' : 'buyer'



  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setMessage(null)
    const payload = { name, email, isSeller }
    try {
      if (onSubmit) {
        await onSubmit(payload)
      } else {
        const res = await fetch('https://practice-app-lovat.vercel.app/api/items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error('Network error')
      }
      setMessage('Submitted successfully')
      setName('')
      setEmail('')
      setSellerInfo(false)
    } catch (err) {
      setMessage('Submission failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Name
        <input name="name" value={name} onChange={e => setName(e.target.value)} style={styles.input} />
      </label>

      <label style={styles.label}>
        Gmail
        <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} />
      </label>

      <label style={styles.checkboxLabel}>
        <input name="sellerInfo" type="checkbox" checked={sellerInfo} onChange={e => setSellerInfo(e.target.checked)} />
        <span style={{ marginLeft: 8 }}>isSeller</span>
      </label>

      <button type="submit" disabled={submitting} style={styles.button}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>

      {message && <div style={styles.message}>{message}</div>}
    </form>
  )
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    maxWidth: 480,
    margin: '16px auto',
    padding: 16,
    borderRadius: 10,
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
  label: { fontSize: 14, color: '#111', display: 'flex', flexDirection: 'column', gap: 6 },
  input: { padding: '8px 10px', borderRadius: 8, border: '1px solid #e6e6f0', fontSize: 14 },
  checkboxLabel: { display: 'flex', alignItems: 'center', gap: 8 },
  button: { padding: '10px 12px', borderRadius: 8, border: 'none', background: '#2563eb', color: '#fff', cursor: 'pointer' },
  message: { marginTop: 8, color: '#064e3b', fontWeight: 600 },
}

