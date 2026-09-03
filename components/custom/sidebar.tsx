'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Contact } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Dashboard", href: "/", icon: LayoutDashboard },
    { label: "Investments", href: "/investments", icon: Contact },
];

export function SidebarContent() {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center gap-2 px-5 py-5">
                <div className="w-32">
                    <img src="/troza-nobg.png" alt="Troza" />
                </div>
            </div>

            <p className="px-5 py-5 text-xs font-semibold tracking-wide text-muted-foreground">
                ADMIN PANEL
            </p>

            <nav className="flex-1 space-y-1 overflow-y-auto px-3">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <Icon className="h-4 w-4 shrink-0" />
                            <span className="flex-1">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

export function Sidebar() {
    return (
        <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-background md:flex">
            <SidebarContent />
        </aside>
    );
}