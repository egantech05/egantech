'use client'

import { useState } from 'react'
import { ContactBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function ContactBlock({ config }: { config: Section['config'] }) {
    const { heading, subheading } = config as unknown as ContactBlockConfig

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setError('')

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        })

        const data = await res.json()

        if (!res.ok) {
            setError(data.error ?? 'Something went wrong. Please try again.')
        } else {
            setSuccess(true)
            setName('')
            setEmail('')
            setMessage('')
        }

        setLoading(false)
    }

    return (
        <section className="w-full py-16 px-6">
            <div className="max-w-xl mx-auto">
                {heading && (
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        {heading}
                    </h2>
                )}
                {subheading && (
                    <p className="mt-2 text-gray-500">{subheading}</p>
                )}

                {success ? (
                    <div className="mt-8 p-6 bg-green-50 border border-green-100 rounded-lg text-center">
                        <p className="text-green-700 font-medium">Message sent successfully.</p>
                        <p className="text-green-600 text-sm mt-1">I will get back to you soon.</p>
                        <button
                            onClick={() => setSuccess(false)}
                            className="mt-4 text-sm text-green-600 underline hover:text-green-800"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                placeholder="Your name"
                                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="your@email.com"
                                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                required
                                rows={5}
                                placeholder="What would you like to say?"
                                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 self-start"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}