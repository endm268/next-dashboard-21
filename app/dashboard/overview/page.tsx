import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartCandlestick, SquarePlus, TicketSlash } from "lucide-react";
import Cards from "./_components/cards";
import { BarChartMultiple } from "./_components/Bar-chart-multiple";
import { AreaGraph } from "./_components/area-graph";
import { PieGraph } from "./_components/pie-graph";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-6 space-y-2 pb-10">
      <div className="flex items-center justify-start gap-2 space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          مرحبًا، أهلاً بعودتك
        </h2>
        <h2 className="text-2xl font-bold tracking-tight">👋</h2>
      </div>

      {/* Cards Section */}
      <Cards role={"admin"} />

      {/* Graphs - Only show if user is admin */}
      {/*      
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="col-span-1 lg:col-span-3 xl:col-span-6">
            <BarChartMultiple />
          </div>
          <div className="col-span-1 lg:col-span-4 xl:col-span-4">
            <AreaGraph />
          </div>
          <div className="col-span-1 md:col-span-2 xl:col-span-2">
            <PieGraph />
          </div>
        </div> */}
    </div>
  );
}