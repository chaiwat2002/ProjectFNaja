import React from 'react'

interface AppProps {
    children: React.ReactNode
}

const App = ({ children }: AppProps) => {
    return (
        <div className='min-h-screen'>{children}</div>
    )
}

export default App