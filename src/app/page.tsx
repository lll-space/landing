import Home from "@/domains/home/home";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'LLL – The World’s First Lossless Crypto Lottery on TON',
  description: 'Play, win, and never lose your principal. LLL is a decentralized, lossless lottery powered by DeFi yields on TON. Stake, earn rewards, and join a fair, transparent, and community-governed gaming revolution.',
};

const Index = () => {
  return (
    <Home/>
  );
};

export default Index;
