import Roadmap from "@/domains/roadmap/roadmap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LLL Roadmap – From Pre-Launch Game to DAO Governance',
  description: 'Explore the full roadmap of LLL: from Telegram mini-game and token launch to DAO governance, staking, and yield vaults. Join the journey toward a transparent and fair lossless lottery future.',
};

const Index = () => {
  return (
    <Roadmap/>
  );
};

export default Index;
