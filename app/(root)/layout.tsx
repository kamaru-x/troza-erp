import React from 'react'

import { Sidebar } from "@/components/custom/sidebar";
import { Header } from "@/components/custom/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
        </div>
    )
}

export default Layout