import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="max-w-9xl mx-auto px-4 lg:px-6">{children}</div>
}
