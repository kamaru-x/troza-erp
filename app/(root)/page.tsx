import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Banknote,
    Landmark,
    FileText,
    Smartphone,
    ArrowDownToLine,
    ArrowUpFromLine,
} from "lucide-react";

const investors = [
    {
        name: "Rahul Menon",
        photo: "",
        invested: "₹12,50,000",
        investedRaw: 1250000,
        lastInvestedDate: "28 Aug 2026",
        lastInvestedAmount: "₹2,00,000",
    },
    {
        name: "Anjali Nair",
        photo: "",
        invested: "₹8,75,000",
        investedRaw: 875000,
        lastInvestedDate: "25 Aug 2026",
        lastInvestedAmount: "₹1,50,000",
    },
    {
        name: "Sanjay Kumar",
        photo: "",
        invested: "₹6,40,000",
        investedRaw: 640000,
        lastInvestedDate: "20 Aug 2026",
        lastInvestedAmount: "₹90,000",
    },
    {
        name: "Fathima Rasheed",
        photo: "",
        invested: "₹4,20,000",
        investedRaw: 420000,
        lastInvestedDate: "15 Aug 2026",
        lastInvestedAmount: "₹75,000",
    },
];

const totalInvested = investors.reduce((sum, inv) => sum + inv.investedRaw, 0);

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

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Investor stat cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {investors.map((investor) => (
                    <Card key={investor.name}>
                        <CardContent>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={investor.photo} alt={investor.name} />
                                    <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                                        {getInitials(investor.name)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-foreground">
                                        {investor.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">Investor</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                                    INVESTED AMOUNT
                                </p>
                                <p className="mt-1 text-xl font-bold text-foreground">
                                    {investor.invested}
                                </p>
                            </div>

                            <div className="mt-3">
                                <div className="flex items-center justify-between">
                                    <p className="text-[11px] text-muted-foreground">Share of total</p>
                                    <p className="text-[11px] font-medium text-foreground">
                                        {((investor.investedRaw / totalInvested) * 100).toFixed(1)}%
                                    </p>
                                </div>
                                <Progress
                                    value={(investor.investedRaw / totalInvested) * 100}
                                    className="mt-1.5 h-1.5"
                                />
                            </div>

                            <div className="mt-3 grid grid-cols-2 gap-2">
                                <div className="rounded-md border border-border bg-muted/40 px-2.5 py-2">
                                    <p className="text-[10px] text-muted-foreground">Last Invested</p>
                                    <p className="mt-0.5 text-sm font-semibold text-foreground">
                                        {investor.lastInvestedAmount}
                                    </p>
                                </div>
                                <div className="rounded-md border border-border bg-muted/40 px-2.5 py-2">
                                    <p className="text-[10px] text-muted-foreground">Date</p>
                                    <p className="mt-0.5 text-sm font-semibold text-foreground">
                                        {investor.lastInvestedDate}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Investment history + expenses */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {/* Investment History */}
                <div>
                    <div className="flex flex-row items-center justify-between mb-3">
                        <h1 className="text-base font-semibold">
                            Investment History
                        </h1>
                        <button className="text-sm font-medium text-primary hover:underline">
                            View all
                        </button>
                    </div>
                    <div className="space-y-3">
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

                {/* Recent Expenses (money out) */}
                <div>
                    <div className="flex flex-row items-center justify-between mb-3">
                        <h1 className="text-base font-semibold">
                            Recent Expenses
                        </h1>
                        <button className="text-sm font-medium text-primary hover:underline">
                            View all
                        </button>
                    </div>
                    <div className="space-y-3">
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
        </div>
    );
}