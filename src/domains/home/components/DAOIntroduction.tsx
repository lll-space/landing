import { ArrowRight, Users, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const DAOIntroduction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-neon-purple/5 to-neon-cyan/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-orbitron text-neon-cyan mb-4">
            Decentralized Governance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Shape the future of LLL.SPACE through community-driven decisions. 
            Stake LLL tokens to gain voting power and govern protocol parameters.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-surface/50 border-neon-purple/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Vote className="h-8 w-8 text-neon-purple" />
              <CardTitle className="text-2xl font-orbitron text-neon-purple">
                LLL DAO
              </CardTitle>
            </div>
            <CardDescription className="text-lg">
              Community ownership, transparent governance, decentralized control
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-neon-cyan mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Community Proposals</h3>
                <p className="text-sm text-muted-foreground">
                  Submit and vote on protocol improvements
                </p>
              </div>
              <div className="text-center">
                <Vote className="h-12 w-12 text-neon-yellow mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">veLLL Power</h3>
                <p className="text-sm text-muted-foreground">
                  Lock LLL tokens for increased voting weight
                </p>
              </div>
              <div className="text-center">
                <ArrowRight className="h-12 w-12 text-neon-magenta mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Treasury Control</h3>
                <p className="text-sm text-muted-foreground">
                  Govern protocol parameters and treasury allocation
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild size="lg" className="bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold">
                <Link href="/dao">
                  Enter DAO Governance
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DAOIntroduction;