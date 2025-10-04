import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Pools() {
  const pools = [
    {
      name: "Daily Lightning",
      frequency: "Every 24h",
      ticketPrice: "10 USDT",
      currentPrize: "2,500 USDT",
      participants: "1,240",
      nextDraw: "14:32:16",
      gradient: "gradient-gold",
      glow: "glow-yellow",
      accent: "text-neon-yellow"
    },
    {
      name: "Weekly Thunder",
      frequency: "Every 7 days",
      ticketPrice: "50 USDT",
      currentPrize: "18,750 USDT",
      participants: "892",
      nextDraw: "3d 8h 45m",
      gradient: "gradient-cyber",
      glow: "glow-cyan",
      accent: "text-neon-cyan"
    },
    {
      name: "Monthly Mega",
      frequency: "Every 30 days",
      ticketPrice: "200 USDT",
      currentPrize: "125,000 USDT",
      participants: "456",
      nextDraw: "18d 12h 30m",
      gradient: "gradient-neon",
      glow: "glow-pink",
      accent: "text-neon-pink"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--neon-yellow))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(var(--neon-cyan))_0%,transparent_50%)]" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Active <span className="text-neon-yellow">Lottery Pools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred draw frequency and prize pool size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pools.map((pool, index) => (
            <Card key={index} className={`relative bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 ${pool.glow} group`}>
              {/* Prize badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className={`${pool.gradient} text-white border-0 px-4 py-1 font-bold`}>
                  🏆 {pool.currentPrize}
                </Badge>
              </div>
              
              <CardHeader className="pt-8 text-center">
                <CardTitle className={`text-2xl font-bold ${pool.accent} text-glow group-hover:animate-pulse-glow`}>
                  {pool.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {pool.frequency} • {pool.ticketPrice} per ticket
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-muted/30 rounded-lg p-3 text-center">
                    <div className="text-foreground font-semibold">{pool.participants}</div>
                    <div className="text-muted-foreground">Players</div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-3 text-center">
                    <div className={`font-semibold ${pool.accent}`}>{pool.nextDraw}</div>
                    <div className="text-muted-foreground">Next Draw</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Prize Pool Growth</span>
                    <span className="text-primary">+12.5% APY</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div className={`h-full rounded-full ${pool.gradient} animate-pulse`} style={{ width: '68%' }} />
                  </div>
                </div>

                <Button 
                  className={`w-full ${pool.gradient} text-white font-bold hover:opacity-90 transition-opacity ${pool.glow}`}
                  size="lg"
                >
                  Buy Tickets 🎟️
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 max-w-4xl mx-auto glow-cyan">
            <h3 className="text-xl font-bold mb-3 text-neon-cyan text-glow">💡 Pro Tip</h3>
            <p className="text-muted-foreground">
              Bigger pools have larger prizes but lower winning odds. Daily pools offer more frequent chances to win! 
              Remember: <span className="text-primary font-semibold">all deposits are returned regardless of winning</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}