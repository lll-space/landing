import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Tokenomics() {
  const features = [
    {
      icon: "🎯",
      title: "Utility Token",
      description: "Use LLL for ticket purchases, governance voting, and enhanced staking rewards",
      color: "text-neon-yellow"
    },
    {
      icon: "🔥",
      title: "Deflationary Model",
      description: "Regular token burns from yield conversion create scarcity and value appreciation",
      color: "text-neon-orange"
    },
    {
      icon: "⚖️",
      title: "Governance Rights",
      description: "Vote on reward splits, staking strategies, and platform development decisions",
      color: "text-neon-cyan"
    },
    {
      icon: "💎",
      title: "Staking Rewards",
      description: "Stake LLL tokens for bonus lottery entries and higher voting power",
      color: "text-neon-pink"
    }
  ];

  const tokenomics = [
{ label: "Max Supply", value: "100M LLL", percentage: 100 },
{ label: "Public Sale", value: "35M LLL", percentage: 35 },
{ label: "Marketing", value: "20M LLL", percentage: 20 },
{ label: "Community & Staking Rewards", value: "12M LLL", percentage: 12 },
{ label: "Team & Advisors", value: "10M LLL", percentage: 10 },
{ label: "Development", value: "10M LLL", percentage: 10 },
{ label: "Liquidity", value: "8M LLL", percentage: 8 },
{ label: "Reserve & Partnerships", value: "5M LLL", percentage: 5 },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--neon-yellow))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(var(--neon-cyan))_0%,transparent_50%)]" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white border-0 glow-pink">
            💎 LLL TOKEN
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            <span className="text-neon-cyan">Tokenomics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            LLL token powers the entire ecosystem with utility, governance, and value accrual mechanisms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-cyan text-glow mb-8">Token Utility</h3>
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`text-2xl ${feature.color} text-glow group-hover:animate-pulse-glow`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg text-glow">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Token Distribution */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-yellow text-glow mb-8">Token Distribution</h3>
            <Card className="bg-card/50 backdrop-blur-sm border-border glow-yellow">
              <CardHeader>
                <CardTitle className="text-center text-neon-yellow text-glow">
                  Total Supply: 100,000,000 LLL
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tokenomics.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{item.label}</span>
                      <span className="text-primary font-semibold">{item.value}</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-neon-yellow to-neon-orange transition-all duration-1000 ease-out" 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Value Accrual */}
        <div className="bg-gradient-to-r from-card/50 to-muted/50 backdrop-blur-sm border border-border rounded-2xl p-8 glow-intense">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-neon-cyan text-glow">
            🚀 Value Accrual Mechanisms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3 text-neon-yellow text-glow">🔥</div>
              <h4 className="text-lg font-bold mb-2 text-neon-yellow">Token Burns</h4>
              <p className="text-muted-foreground text-sm">Regular burns from yield conversion reduce supply</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3 text-neon-pink text-glow">💰</div>
              <h4 className="text-lg font-bold mb-2 text-neon-pink">Prize Payouts</h4>
              <p className="text-muted-foreground text-sm">50% of prizes paid in LLL creates buying pressure</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3 text-neon-cyan text-glow">🏆</div>
              <h4 className="text-lg font-bold mb-2 text-neon-cyan">Staking Rewards</h4>
              <p className="text-muted-foreground text-sm">Stakers earn bonus entries and governance power</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}