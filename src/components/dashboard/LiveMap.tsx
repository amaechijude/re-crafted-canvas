import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LiveMap() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Live Collection Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <p className="text-muted-foreground">Interactive map would be loaded here</p>
            <p className="text-xs text-muted-foreground">Showing live collection routes and points</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}