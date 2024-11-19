import { Card, CardContent } from "@/components/ui/card";
import {
    DoorClosedIcon as EnvelopeClosed,
    PencilLine,
    FileCheck,
} from "lucide-react";

interface StatCardProps {
    icon: React.ReactNode;
    count: number;
    percentage: number;
    label: string;
    color: string;
    style?: React.CSSProperties; // Add the style prop
}

function StatCard({ icon, count, percentage, label, color, style, borderColor }: StatCardProps) {
    return (
        <Card className="overflow-hidden h-full" 
        style={{
            backgroundImage: `linear-gradient(to right, ${borderColor}, rgba(255, 0, 0, 0))`,
            backgroundPosition: "top",
            backgroundSize: "100% 4px", // Adjust height of the border here
            backgroundRepeat: "no-repeat",
        }}
        > {/* Apply style here */}
            <CardContent className="p-0 h-full">
                <div className="flex items-center h-full"
                style={{paddingLeft:'1vh'}}
              >
                    <div
                        className={`p-2 sm:p-3 md:p-4 ${color} h-full flex items-center justify-center`}
                        style={{maxHeight:'5vh', maxWidth:'5vh', borderRadius:'1vh'}}
                    >
                        {icon}
                    </div>
                    <div className="p-2 sm:p-3 md:p-4 mb-[3%] flex-grow" >
                        <div 
                        className="flex items-center gap-1 sm:gap-2"
                        style={{height:'5vh', maxWidth:'5vh'}}

                        >
                            <span className="text-lg sm:text-xl md:text-2xl font-bold"
                                style={{ fontSize: "clamp(1px, 2.8vh, 3vh)" }}
                            >
                                {count}
                            </span>
                            <span className="text-xs sm:text-sm text-muted-foreground bg-muted px-1 py-0.5 rounded"
                                style={{ fontSize: "clamp(1px, 1.6vh, 1.8vh)" }}

                            >
                                {percentage}%
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate"
                            style={{ fontSize: "clamp(1px, 1.6vh, 1.8vh)" }}

                        >
                            {label}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


export default function Component() {
    return (
        <div
            className="grid grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
            style={{ height: "9vh", maxHeight: "9vh" }}
        >
            <StatCard
                icon={
                    <span
                        className="text-xl sm:text-2xl font-bold text-blue-600"
                        style={{ fontSize: "clamp(2vh, 3vh, 4vh)" }}
                    >
                        N
                    </span>
                }
                style={{ fontSize: 'clamp(1px, 1px, 1px)' }}
                count={268}
                percentage={1}
                label="New (24H)"
                color="bg-blue-100"
                borderColor='blue'
            />
            <StatCard
                icon={
<span
                        className="text-xl sm:text-2xl font-bold text-blue-600"
                        style={{ fontSize: "clamp(2vh, 3vh, 4vh)" }}
                    >
                        U
                    </span>                }
                style={{ fontSize: "clamp(2vh, 3vh, 4vh)" }}
                count={2195}
                percentage={10}
                label="Unopened"
                color="bg-indigo-100"
                borderColor='blue'

            />
            <StatCard
                icon={
<span
                        className="text-xl sm:text-2xl font-bold text-yellow-600"
                        style={{ fontSize: "clamp(2vh, 3vh, 4vh)" }}
                    >
                        W
                    </span>                    }
                style={{ fontSize: "clamp(2vh, 3vh, 4vh)" }}
                count={323}
                percentage={1}
                label="Waiting signature"
                color="bg-yellow-100"
                borderColor='yellow'

            />
            <StatCard
                icon={
<span
                        className="text-xl sm:text-2xl font-bold text-teal-600"
                        style={{ fontSize: "clamp(2vh, 3vh, 4vh)" }}
                    >
                        P
                    </span>                  }
                count={323}
                style={{ fontSize: "clamp(2vh, 3vh, 4vh)" }}
                percentage={1}
                label="Processed"
                color="bg-teal-100"
                borderColor='green'

            />
        </div>
    );
}
