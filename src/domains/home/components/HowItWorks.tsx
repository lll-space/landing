import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function HowItWorks() {
  const steps = [{
    icon: "🎟️",
    title: "Buy Tickets",
    description: "Purchase lottery tickets with TON or LLL tokens for daily, weekly, or monthly draws",
    color: "text-neon-yellow"
  }, {
    icon: "🏦",
    title: "Funds Get Staked",
    description: "Your deposits are pooled and staked in secure yield strategies on TON blockchain",
    color: "text-neon-cyan"
  }, {
    icon: "💰",
    title: "Yield Generates Prizes",
    description: "Jackpot prizes come from staking rewards, not from other players' money",
    color: "text-neon-pink"
  }, {
    icon: "🎉",
    title: "Win and Keep Principal",
    description: "Winners get prizes in 50% USDT + 50% LLL tokens. Everyone keeps their original deposit",
    color: "text-neon-orange"
  }];
  return <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            How It <span className="text-neon-cyan">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionary lossless lottery powered by DeFi yield strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => <Card key={index} className="relative bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              {/* Step number */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm glow-yellow">
                {index + 1}
              </div>
              
              <CardHeader className="pt-8">
                <div className={`text-4xl mb-3 ${step.color} text-glow group-hover:animate-pulse-glow`}>
                  {step.icon}
                </div>
                <CardTitle className="text-xl text-glow">{step.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>)}
        </div>

        {/* Key benefit callout */}
        <div className="mt-16 bg-gradient-to-r from-card/50 to-muted/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center glow-intense">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neon-yellow text-glow">
            🔒 Your Money is Always Safe
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlike traditional lotteries where losers fund winners, LLL.SPACE uses DeFi yield to create prizes. 
            Every player gets their principal back, making this a <span className="text-secondary font-semibold">truly risk-free</span> lottery experience.
          </p>
        </div>
      </div>
    </section>;
}