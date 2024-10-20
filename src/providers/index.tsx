"use client"

import { ReactQueryProvider } from "./react-query/provider"

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
    )
}