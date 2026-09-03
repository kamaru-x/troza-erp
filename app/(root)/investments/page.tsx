import React from 'react'

import {
    Banknote,
    Landmark,
    FileText,
    Smartphone,
    ArrowDownToLine,
    ArrowUpFromLine,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentInvestments = [
    {
        investor: "Rahul Menon",
        photo: "",
        role: "Investor",
        amount: "₹2,00,000",
        date: "28 Aug 2026",
        method: "bank_transfer",
        accountNumber: "XXXX XXXX 4821",
        bankName: "HDFC Bank",
        transactionId: "TXN2608A104",
    },
    {
        investor: "Anjali Nair",
        photo: "",
        role: "Investor",
        amount: "₹1,50,000",
        date: "25 Aug 2026",
        method: "upi",
        upiId: "anjali.nair@okhdfc",
        transactionId: "UPI25082611239",
    },
    {
        investor: "Sanjay Kumar",
        photo: "",
        role: "Investor",
        amount: "₹90,000",
        date: "20 Aug 2026",
        method: "cheque",
        chequeNumber: "004521",
        bankName: "SBI",
    },
    {
        investor: "Fathima Rasheed",
        photo: "",
        role: "Investor",
        amount: "₹75,000",
        date: "15 Aug 2026",
        method: "cash",
    },
    {
        investor: "Rahul Menon",
        photo: "",
        role: "Investor",
        amount: "₹1,00,000",
        date: "10 Aug 2026",
        method: "bank_transfer",
        accountNumber: "XXXX XXXX 4821",
        bankName: "HDFC Bank",
        transactionId: "TXN2608A098",
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
                        Investment History
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    {recentInvestments.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-lg border border-border p-3"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={item.photo} alt={item.investor} />
                                        <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                                            {getInitials(item.investor)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            {item.investor}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700">
                                    <ArrowDownToLine className="h-3 w-3" />
                                    <span className="text-xs font-semibold">
                                        {item.amount}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                <span>{item.date}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <MethodIcon method={item.method} />
                                    {methodLabel(item.method)}
                                </span>
                            </div>

                            {(item.method === "bank_transfer" ||
                                item.method === "cheque" ||
                                item.method === "upi") && (
                                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border pt-2 text-xs sm:grid-cols-3">
                                    {item.method === "bank_transfer" && (
                                        <>
                                            <div>
                                                <p className="text-muted-foreground">Bank</p>
                                                <p className="font-medium text-foreground">
                                                    {item.bankName}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Account No.</p>
                                                <p className="font-medium text-foreground">
                                                    {item.accountNumber}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Txn ID</p>
                                                <p className="font-medium text-foreground">
                                                    {item.transactionId}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                    {item.method === "cheque" && (
                                        <>
                                            <div>
                                                <p className="text-muted-foreground">Bank</p>
                                                <p className="font-medium text-foreground">
                                                    {item.bankName}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Cheque No.</p>
                                                <p className="font-medium text-foreground">
                                                    {item.chequeNumber}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                    {item.method === "upi" && (
                                        <>
                                            <div>
                                                <p className="text-muted-foreground">UPI ID</p>
                                                <p className="font-medium text-foreground">
                                                    {item.upiId}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Txn ID</p>
                                                <p className="font-medium text-foreground">
                                                    {item.transactionId}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page