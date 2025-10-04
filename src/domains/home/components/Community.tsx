import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Calendar, Zap } from "lucide-react";

const Community = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 15
  });

  // Launch date countdown (placeholder - replace with actual launch date)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 45); // 45 days from now

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      name: "Twitter/X",
      url: "https://twitter.com/lll_lotto",
      icon: "𝕏",
      followers: "12.5K"
    },
    {
      name: "Telegram Global",
      url: "https://t.me/lll_lotto",
      icon: "📱",
      members: "8.2K"
    },
    {
      name: "Telegram Announcements",
      url: "https://t.me/lll_lotto_news",
      icon: "📢",
      members: "15.1K"
    },
    {
      name: "Discord",
      url: "https://discord.gg/lll-lotto",
      icon: "💬",
      members: "4.7K"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-neon-magenta/5 to-neon-yellow/5">
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-orbitron text-neon-yellow mb-4">
            Join Our Community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow players, stay updated on the latest developments, 
            and be the first to know about the official launch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Launch Countdown */}
          <Card className="bg-surface/50 border-neon-yellow/20 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                <Calendar className="h-6 w-6 text-neon-yellow" />
                <CardTitle className="text-2xl font-orbitron text-neon-yellow">
                  Official Launch
                </CardTitle>
              </div>
              <CardDescription>
                Get ready for the most exciting lossless lottery on TON
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-neon-yellow/20 rounded-lg p-4 border border-neon-yellow/30">
                    <div className="text-2xl font-bold text-neon-yellow font-orbitron">
                      {timeLeft.days}
                    </div>
                    <div className="text-sm text-muted-foreground">Days</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-neon-magenta/20 rounded-lg p-4 border border-neon-magenta/30">
                    <div className="text-2xl font-bold text-neon-magenta font-orbitron">
                      {timeLeft.hours}
                    </div>
                    <div className="text-sm text-muted-foreground">Hours</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-neon-cyan/20 rounded-lg p-4 border border-neon-cyan/30">
                    <div className="text-2xl font-bold text-neon-cyan font-orbitron">
                      {timeLeft.minutes}
                    </div>
                    <div className="text-sm text-muted-foreground">Minutes</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-neon-purple/20 rounded-lg p-4 border border-neon-purple/30">
                    <div className="text-2xl font-bold text-neon-purple font-orbitron">
                      {timeLeft.seconds}
                    </div>
                    <div className="text-sm text-muted-foreground">Seconds</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-4 w-4 text-neon-yellow" />
                <Badge variant="secondary" className="bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30">
                  Early Bird Rewards Available
                </Badge>
              </div>

                            <div className="mt-6 p-4 bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-neon-cyan">📮</span>
                  <span className="font-semibold text-neon-cyan">Contact & Press</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  For partnerships, press inquiries, or business development
                </p>
                <a 
                  href="mailto:hello@lll.space" 
                  className="text-sm text-neon-cyan hover:underline"
                >
                  hello@lll.space
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-surface/50 border-neon-cyan/20 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                <Users className="h-6 w-6 text-neon-cyan" />
                <CardTitle className="text-2xl font-orbitron text-neon-cyan">
                  Social Hub
                </CardTitle>
              </div>
              <CardDescription>
                Follow us across all platforms for updates and community engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    asChild
                    className="w-full justify-between bg-background/50 border-neon-cyan/30 hover:bg-neon-cyan/10 hover:border-neon-cyan/50 transition-all"
                  >
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{social.icon}</span>
                        <span className="font-semibold">{social.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {social.followers || social.members}
                        </Badge>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
              

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;