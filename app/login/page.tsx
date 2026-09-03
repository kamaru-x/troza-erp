'use client'

import { useState } from "react";
import { Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

const page = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log({ username, password });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
            <Card className="w-full max-w-md border-border/60 shadow-lg p-5">
                <CardHeader className="flex flex-col items-center gap-2 text-center">
                    <div className="w-50">
                        <img src="troza.png" alt="" />
                    </div>
                </CardHeader>
        
                <CardContent className="p-5">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <div className="relative">
                                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="jane.doe"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="h-12 pl-10 text-base"
                                />
                            </div>
                        </div>
            
                        <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="h-12 pl-10 text-base"
                            />
                        </div>
                        </div>
            
                        <Button type="submit" className="group mt-2 h-11 w-full">
                        Sign in
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default page