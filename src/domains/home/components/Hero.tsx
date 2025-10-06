import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Crypto Matrix Background */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--neon-pink))_0%,transparent_60%)] opacity-30 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--neon-cyan))_0%,transparent_60%)] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--neon-yellow))_0%,transparent_70%)] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Crypto grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,0,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating crypto elements */}
        <div className="absolute top-20 left-10 w-8 h-8 border-2 border-neon-cyan/30 rotate-45 animate-spin" style={{ animationDuration: '10s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-neon-yellow/40 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-neon-pink/30 rotate-45" />
        <div className="absolute bottom-20 right-32 text-neon-cyan/20 text-6xl font-bold">₿</div>
        <div className="absolute top-60 left-1/3 text-neon-yellow/15 text-4xl">◊</div>
      </div>

      {/* Revolutionary Header */}
      <div className="relative z-10 container px-4 text-center py-8">
        {/* Revolutionary Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full border-2 border-neon-cyan/50 bg-card/20 backdrop-blur-md glow-cyan">
          <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
          <span className="text-neon-cyan font-orbitron font-bold text-sm tracking-wider">REVOLUTIONIZING LOTTERIES</span>
          <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
        </div>

        {/* Main Logo/Title */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            {/* Crypto slot machine visual */}
            <div className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-pink/20 via-neon-yellow/20 to-neon-cyan/20 rounded-2xl border-2 border-neon-yellow/50 glow-yellow backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-yellow to-neon-orange rounded-xl flex items-center justify-center text-black text-2xl font-bold shadow-lg animate-pulse">L</div>
              <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-yellow rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-pulse" style={{ animationDelay: '0.3s' }}>L</div>
              <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-pulse" style={{ animationDelay: '0.6s' }}>L</div>
            </div>
          </div>
          
          <div className="text-3xl md:text-4xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-yellow bg-clip-text text-transparent">PLAY. WIN.</span>{" "}
            <span className="text-neon-pink glow-pink">NEVER LOSE.</span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The first <span className="text-neon-yellow font-bold">LOSSLESS LOTTERY</span> on TON blockchain.
            <br />
            Your crypto works for you while you play to win.
          </p>
        </div>

        {/* Revolutionary CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            variant="default" 
            size="lg" 
            className="group bg-gradient-to-r from-neon-yellow to-neon-orange text-black font-bold px-12 py-6 text-xl rounded-2xl glow-yellow hover:glow-intense transition-all duration-500 hover:scale-105"
          >
            <span className="mr-3 text-2xl group-hover:animate-spin">🚀</span>
            Play & Earn LLL
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black px-12 py-6 text-xl rounded-2xl glow-cyan transition-all duration-500 hover:scale-105"
          >
            <span className="mr-3 text-2xl group-hover:animate-bounce">💎</span>
            Buy on STON.fi
          </Button>
        </div>

        {/* Revolutionary Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-neon-yellow/10 to-neon-orange/10 backdrop-blur-md border-2 border-neon-yellow/30 rounded-2xl p-6 glow-yellow group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-orbitron font-black text-neon-yellow mb-2">25K+</div>
            <div className="text-muted-foreground font-semibold">EARLY ACCESS PLAYERS</div>
            <div className="w-full h-1 bg-neon-yellow/20 rounded-full mt-3">
              <div className="w-4/5 h-full bg-gradient-to-r from-neon-yellow to-neon-orange rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10 backdrop-blur-md border-2 border-neon-cyan/30 rounded-2xl p-6 glow-cyan group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-orbitron font-black text-neon-cyan mb-2">2M LLL</div>
            <div className="text-muted-foreground font-semibold">AIRDROP POOL</div>
            <div className="w-full h-1 bg-neon-cyan/20 rounded-full mt-3">
              <div className="w-3/5 h-full bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-neon-pink/10 to-neon-yellow/10 backdrop-blur-md border-2 border-neon-pink/30 rounded-2xl p-6 glow-pink group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-orbitron font-black text-neon-pink mb-2">100%</div>
            <div className="text-muted-foreground font-semibold">PRINCIPAL SAFE</div>
            <div className="w-full h-1 bg-neon-pink/20 rounded-full mt-3">
              <div className="w-full h-full bg-gradient-to-r from-neon-pink to-neon-yellow rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-neon-orange/10 to-neon-cyan/10 backdrop-blur-md border-2 border-neon-orange/30 rounded-2xl p-6 glow-orange group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-orbitron font-black text-neon-orange mb-2">100%</div>
            <div className="text-muted-foreground font-semibold">GOVERNED DAO</div>
            <div className="w-full h-1 bg-neon-orange/20 rounded-full mt-3 relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-neon-orange to-neon-cyan rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Crypto Innovation Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-neon-pink/5 via-neon-cyan/5 to-neon-yellow/5 rounded-3xl border border-neon-cyan/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-2">POWERED BY TON BLOCKCHAIN</h3>
              <p className="text-muted-foreground">Zero-loss gaming meets DeFi yield. The future of fair play is here.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                <div className="w-6 h-6 bg-neon-cyan rounded-full"></div>
              </div>
              <Badge className="px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-pink text-white border-0 text-sm font-bold">
                MAINNET SOON
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-10 w-6 h-6 border-2 border-neon-yellow rounded-full animate-ping opacity-60" />
      <div className="absolute top-1/3 right-16 w-4 h-4 bg-neon-pink rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-neon-cyan rotate-45 animate-bounce opacity-40" />
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-neon-orange rounded-full animate-pulse opacity-40" />
      <div className="absolute top-1/2 left-5 text-neon-yellow/30 text-3xl animate-spin" style={{ animationDuration: '8s' }}>⬢</div>
      <div className="absolute bottom-1/2 right-10 text-neon-cyan/20 text-4xl animate-pulse">⬢</div>
    </section>
  );
}