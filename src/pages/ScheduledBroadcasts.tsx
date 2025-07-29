import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const broadcasts = [
  {
    date: "June 12, 8:00am",
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Pending",
    statusType: "warning"
  },
  {
    date: "June 12, 8:00am", 
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Successful",
    statusType: "success"
  },
  {
    date: "June 12, 8:00am",
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Successful",
    statusType: "success"
  },
  {
    date: "June 12, 8:00am",
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Unsuccessful",
    statusType: "destructive"
  },
  {
    date: "June 12, 8:00am",
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Successful",
    statusType: "success"
  },
  {
    date: "June 12, 8:00am",
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Successful",
    statusType: "success"
  },
  {
    date: "June 12, 8:00am",
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Successful",
    statusType: "success"
  },
  {
    date: "June 12, 8:00am",
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Successful",
    statusType: "success"
  },
  {
    date: "June 12, 8:00am",
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Successful",
    statusType: "success"
  }
];

const ScheduledBroadcasts = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Scheduled Broadcasts</h1>
      </div>

      <div className="bg-card rounded-lg border shadow-card">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary/10 hover:bg-primary/10">
              <TableHead className="font-semibold text-foreground">Date/Time</TableHead>
              <TableHead className="font-semibold text-foreground">Local Govt.</TableHead>
              <TableHead className="font-semibold text-foreground">Assigned to</TableHead>
              <TableHead className="font-semibold text-foreground">Task Title</TableHead>
              <TableHead className="font-semibold text-foreground">Channels</TableHead>
              <TableHead className="font-semibold text-foreground">Status</TableHead>
              <TableHead className="font-semibold text-foreground">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {broadcasts.map((broadcast, index) => (
              <TableRow key={index}>
                <TableCell className="text-muted-foreground">{broadcast.date}</TableCell>
                <TableCell>{broadcast.location}</TableCell>
                <TableCell>{broadcast.assignedTo}</TableCell>
                <TableCell>{broadcast.taskTitle}</TableCell>
                <TableCell>{broadcast.channels}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      broadcast.statusType === "success" ? "default" : 
                      broadcast.statusType === "warning" ? "secondary" : 
                      "destructive"
                    }
                    className={`text-xs ${
                      broadcast.statusType === "success" 
                        ? "bg-success/10 text-success border-success/20" 
                        : broadcast.statusType === "warning"
                        ? "bg-warning/10 text-warning border-warning/20"
                        : "bg-destructive/10 text-destructive border-destructive/20"
                    }`}
                  >
                    {broadcast.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ScheduledBroadcasts;