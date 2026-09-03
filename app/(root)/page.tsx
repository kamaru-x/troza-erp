import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const activity = [
    {
        user: "Kamarudheen U",
        action: "Login : User logged in.",
        time: "03 Sep 2026, 05:31 PM",
    },
    {
        user: "Kamarudheen U",
        action: "Logout : User logged out.",
        time: "03 Sep 2026, 05:05 PM",
    },
];

const stats = [
    { label: "TOTAL LEADS", value: "0", color: "text-foreground" },
    { label: "TODAY'S FOLLOW-UPS", value: "0", color: "text-blue-600" },
    { label: "OVERDUE FOLLOW-UPS", value: "0", color: "text-destructive" },
    { label: "CONVERSION RATE", value: "0%", color: "text-emerald-600" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Usage overview */}
            <Card>
                <CardContent className="grid grid-cols-1 gap-8 py-6 sm:grid-cols-2">
                    <div>
                        <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                            USERS
                        </p>
                        <p className="mt-1 text-2xl font-bold text-foreground">1 / 1</p>
                        <Progress value={100} className="mt-3 h-2" />
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                                LEADS
                            </p>
                            <Badge variant="secondary">Trial Plan</Badge>
                        </div>
                        <p className="mt-1 text-2xl font-bold text-foreground">0 / 10000</p>
                        <Progress value={0} className="mt-3 h-2" />
                    </div>
                </CardContent>
            </Card>

            {/* Stat cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.label}>
                        <CardContent className="py-6">
                            <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                                {stat.label}
                            </p>
                            <p className={`mt-2 text-2xl font-bold ${stat.color}`}>
                                {stat.value}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Activity + recent leads */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <Card>
                    <CardContent className="py-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-base font-semibold text-foreground">
                                Recent Activity
                            </h2>
                            <button className="text-sm font-medium text-primary hover:underline">
                                View all
                            </button>
                        </div>
                        <div className="divide-y divide-border">
                            {activity.map((item, i) => (
                                <div key={i} className="py-3 first:pt-0 last:pb-0">
                                    <p className="text-sm text-foreground">
                                        <span className="font-semibold">{item.user}</span> —{" "}
                                        {item.action}
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {item.time}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="py-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-base font-semibold text-foreground">
                                Recently Added Leads
                            </h2>
                            <button className="text-sm font-medium text-primary hover:underline">
                                View all
                            </button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            No leads yet. Add your first lead or import a CSV to get
                            started.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}