import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { LiveMap } from "@/components/dashboard/LiveMap";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { ScheduledBroadcasts } from "@/components/dashboard/ScheduledBroadcasts";
import { CitizenFeedback } from "@/components/dashboard/CitizenFeedback";
import { Users, UserCheck, MapPin, Truck } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back, Okwuchukwu!</h1>
          <p className="text-muted-foreground">Monitor activity across all active routes and zones</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Users"
            value="1000"
            icon={Users}
            trend={{ value: "20.5%", type: "up" }}
            iconColor="orange"
          />
          <StatsCard
            title="Total Staffs"
            value="400"
            icon={UserCheck}
            iconColor="green"
          />
          <StatsCard
            title="Dropoff Points"
            value="80"
            icon={MapPin}
            iconColor="gray"
            indicators={{ green: 70, red: 10 }}
          />
          <StatsCard
            title="Total Trucks"
            value="100"
            icon={Truck}
            iconColor="blue"
            indicators={{ green: 80, red: 20 }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Map - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <LiveMap />
          </div>
          
          {/* Analytics Chart */}
          <div>
            <AnalyticsChart />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Scheduled Broadcasts - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <ScheduledBroadcasts />
          </div>
          
          {/* Citizen Feedback */}
          <div>
            <CitizenFeedback />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
