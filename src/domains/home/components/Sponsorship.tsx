import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Crown, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

const Sponsorship = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-neon-cyan text-neon-cyan">
            Partnership Opportunities
          </Badge>
          <h2 className="text-4xl font-bold font-orbitron text-white mb-4">
            Become a <span className="text-neon-yellow">Sponsor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boost prize pools, gain brand exposure, and support the lossless lottery ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card/50 border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300">
            <CardHeader>
              <Crown className="h-8 w-8 text-neon-yellow mb-2" />
              <CardTitle className="text-white">Prize Booster</CardTitle>
              <CardDescription>
                Deposit TON to directly increase prize pools and attract more players
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• No lottery weight (fair play)</li>
                <li>• Brand visibility on epoch cards</li>
                <li>• Custom sponsor badge</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-neon-cyan mb-2" />
              <CardTitle className="text-white">LLL Burner</CardTitle>
              <CardDescription>
                Buy & burn LLL tokens for maximum brand exposure across the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Logo in Telegram mini app</li>
                <li>• "Sponsored by" mentions</li>
                <li>• Press coverage inclusion</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300">
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-neon-purple mb-2" />
              <CardTitle className="text-white">Partnership</CardTitle>
              <CardDescription>
                Strategic partnerships with crypto projects, exchanges, and TON ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cross-promotion opportunities</li>
                <li>• Integration possibilities</li>
                <li>• Revenue sharing models</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/sponsors">
            <Button size="lg" className="bg-neon-yellow text-black hover:bg-neon-yellow/90 font-semibold">
              Explore Sponsorship
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;