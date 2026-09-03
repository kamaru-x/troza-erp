'use client'

import { useState } from "react";
import { useTheme } from "next-themes";
import { Bell, Search, Sun, Moon, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarContent } from "@/components/custom/sidebar";

export function Header() {
    const { theme, setTheme } = useTheme();
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-background px-4 sm:px-6">
            {mobileSearchOpen ? (
                <div className="flex w-full items-center gap-2">
                    <div className="relative flex-1">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            autoFocus
                            placeholder="Search leads by name or phone"
                            className="h-10 rounded-full bg-muted/50 pl-9 text-sm"
                        />
                    </div>
                    <button
                        onClick={() => setMobileSearchOpen(false)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-2">
                        <Sheet>
                            <SheetTrigger className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground md:hidden">
                                <Menu className="h-5 w-5" />
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64 p-0">
                                <SidebarContent />
                            </SheetContent>
                        </Sheet>

                        <h1 className="text-base font-semibold text-foreground sm:text-lg">
                            Dashboard
                        </h1>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Full search bar — sm and up */}
                        <div className="relative hidden w-72 sm:block">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search leads by name or phone"
                                className="h-10 rounded-full bg-muted/50 pl-9 text-sm"
                            />
                        </div>

                        {/* Capsule: search (mobile only) + theme toggle + notifications + profile */}
                        <div className="flex h-10 items-center gap-1 rounded-full border border-border bg-muted/50 p-1">
                            <button
                                onClick={() => setMobileSearchOpen(true)}
                                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground sm:hidden"
                            >
                                <Search className="h-4 w-4" />
                            </button>

                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="relative flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                            >
                                <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            </button>

                            <button className="relative flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground">
                                <Bell className="h-4 w-4" />
                            </button>

                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-full outline-none">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                                        K
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-44">
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Log out</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}