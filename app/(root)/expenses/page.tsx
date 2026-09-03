import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import {
    Banknote,
    Landmark,
    FileText,
    Smartphone,
    ArrowDownToLine,
    ArrowUpFromLine,
} from "lucide-react";

const recentExpenses = [
    {
        title: "Office Rent",
        amount: "₹40,000",
        category: "Rent",
        date: "30 Aug 2026",
        paidTo: "Greenview Properties",
        paidFrom: "Troza LLP - Current A/C",
        transactionId: "TXN2608B211",
    },
    {
        title: "Staff Salary",
        amount: "₹25,000",
        category: "Payroll",
        date: "27 Aug 2026",
        paidTo: "Arjun P.",
        paidFrom: "Troza LLP - Current A/C",
        transactionId: "TXN2608B198",
    },
    {
        title: "Investor Payout",
        amount: "₹60,000",
        category: "Returns",
        date: "22 Aug 2026",
        paidTo: "Rahul Menon",
        paidFrom: "Troza LLP - Current A/C",
        transactionId: "TXN2608B172",
    },
    {
        title: "Software Subscription",
        amount: "₹15,000",
        category: "Operations",
        date: "18 Aug 2026",
        paidTo: "Zoho Corp",
        paidFrom: "Troza LLP - Current A/C",
        transactionId: "TXN2608B150",
    },
    {
        title: "Investor Payout",
        amount: "₹20,000",
        category: "Returns",
        date: "12 Aug 2026",
        paidTo: "Anjali Nair",
        paidFrom: "Troza LLP - Current A/C",
        transactionId: "TXN2608B119",
    },
];

function getInitials(name: string) {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

function MethodIcon({ method }: { method: string }) {
    const className = "h-3.5 w-3.5";
    switch (method) {
        case "bank_transfer":
            return <Landmark className={className} />;
        case "cheque":
            return <FileText className={className} />;
        case "upi":
            return <Smartphone className={className} />;
        default:
            return <Banknote className={className} />;
    }
}

function methodLabel(method: string) {
    switch (method) {
        case "bank_transfer":
            return "Bank Transfer";
        case "cheque":
            return "Cheque";
        case "upi":
            return "UPI";
        default:
            return "Cash";
    }
}

const page = () => {
    return (
        <div>
            <div>
                <div className="flex flex-row items-center justify-between mb-3">
                    <h1 className="text-base font-semibold">
                        Recent Expenses
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    {recentExpenses.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-lg border border-border p-3"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        {item.title}
                                    </p>
                                    <Badge variant="secondary" className="mt-1 text-[10px]">
                                        {item.category}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-destructive">
                                    <ArrowUpFromLine className="h-3 w-3" />
                                    <span className="text-xs font-semibold">
                                        {item.amount}
                                    </span>
                                </div>
                            </div>

                            <p className="mt-2 text-xs text-muted-foreground">
                                {item.date}
                            </p>

                            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border pt-2 text-xs sm:grid-cols-3">
                                <div>
                                    <p className="text-muted-foreground">Paid To</p>
                                    <p className="font-medium text-foreground">
                                        {item.paidTo}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Paid From</p>
                                    <p className="font-medium text-foreground">
                                        {item.paidFrom}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Txn ID</p>
                                    <p className="font-medium text-foreground">
                                        {item.transactionId}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page