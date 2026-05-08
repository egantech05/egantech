'use client'

import { useEffect, useRef, useState } from 'react'

type AnimationType = 'fade' | 'slideLeft' | 'slideRight'

const getInitialTransform = (type: AnimationType) => {
    switch (type) {
        case 'slideRight': return 'translateX(-40px)'
        case 'slideLeft': return 'translateX(40px)'
        case 'fade': return 'translateY(20px)'
    }
}

export default function Animation({
    children,
    type = 'fade',
    delay = 0,
    duration = 600,
    className = '',
}: {
    children: React.ReactNode
    type?: AnimationType
    delay?: number
    duration?: number
    className?: string
}) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translate(0)' : getInitialTransform(type),
                transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}