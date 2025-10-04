import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const RoadmapSection = () => {
  const roadmapPhases = [
    { phase: "Phase 1", title: "Pre-Launch Game & Public Sale", status: "in-progress" },
    { phase: "Phase 2", title: "Official Launch + Day-1 DAO", status: "planned" },
    { phase: "Phase 3", title: "USDe Pool", status: "planned" },
    { phase: "Phase 4", title: "VIP Rooms", status: "planned" },
    { phase: "Phase 5", title: "Real-Time SPINS", status: "planned" },
    { phase: "Phase 6", title: "NFT Lottery", status: "planned" },
    { phase: "Phase 7", title: "DAO Expansion & Cross-Chain", status: "planned" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-neon-purple/5 to-neon-cyan/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-neon-purple text-neon-purple">
            Development Timeline
          </Badge>
          <h2 className="text-4xl font-bold font-orbitron text-white mb-4">
            Project <span className="text-neon-cyan">Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our journey to build the ultimate lossless lottery ecosystem on TON
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {roadmapPhases.map((phase, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-neon-purple/20 hover:border-neon-purple/50 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neon-purple/10 border border-neon-purple/30 flex-shrink-0">
                <Zap className="w-5 h-5 text-neon-cyan" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan text-xs">
                    {phase.phase}
                  </Badge>
                  {phase.status === "in-progress" && (
                    <Badge className="bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30 text-xs">
                      In Progress
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white font-orbitron">
                  {phase.title}
                </h3>
              </div>

              <ArrowRight className="w-5 h-5 text-neon-purple/50 group-hover:text-neon-purple group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/roadmap">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:opacity-90 font-semibold"
            >
              View Full Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;