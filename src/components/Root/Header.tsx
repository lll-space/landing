import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet, ExternalLink, Gamepad } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectWallet = () => {
    setIsConnected(!isConnected);
  };

  const navItems = [
    { name: '_LLL_', href: '/' },
    // { name: 'Pools', href: '/pools' },
    // { name: 'Prizes', href: '/prizes' },
    { name: 'Sponsorship', href: '/sponsorship' },
    { name: 'Token', href: '/token' },
    { name: 'Vision', href: '/roadmap' },
    { name: 'DAO', href: '/dao' },
    { name: 'Docs', href: '/docs' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/8f13af63-df58-4637-9d54-c7f9ab22e591.png"
                alt="LLL.SPACE Logo"
                className="w-10 h-10"
              />
              <div className="text-2xl font-bold font-orbitron text-glow">
                <span className="bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-cyan bg-clip-text">LLL.SPACE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-neon-cyan transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                // onClick={handleConnectWallet}
                variant={isConnected ? "outline" : "default"}
                className={"gradient-primary text-white glow-primary"}
              >
                <a href="https://go.lll.space/play" target="_blank" className="flex items-center">
                  <Gamepad className="w-4 h-4 mr-2" />
                  Play LLL Game
                </a>
              </Button>

              {/* <Button asChild variant="outline" className="border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-background">
                <Link href="/app">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Telegram
                </Link>
              </Button> */}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-foreground hover:text-neon-cyan"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-neon-cyan transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                  <Button
                    variant={"default"}
                    className={"gradient-primary text-white"}
                  >
                    <a href="https://go.lll.space/play" target="_blank" className="flex items-center">
                      <Gamepad className="w-4 h-4 mr-2" />
                      Play LLL Game
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Epoch Countdown Widget */}
      {/* <div className="fixed top-16 left-0 right-0 z-40 bg-neon-magenta/10 border-b border-neon-magenta/20 px-4 py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-center lg:justify-between text-sm">
            <Badge variant="outline" className="text-neon-magenta border-neon-magenta glow-primary">
              🎯 Epoch #127 • Next Draw in 23h 42m • 7 Winners • 284 TON Prize Pool
            </Badge>
            <div className="hidden lg:block text-xs text-muted-foreground">
              TVL: 2,847 TON • APY: ~8.4%
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Header;