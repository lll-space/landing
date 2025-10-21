import Docs from "@/domains/docs/docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LLL Documentation – Contracts, Tokenomics, and Integration Guides',
  description: 'Discover everything about LLL: smart contract architecture, Jetton standards, veLLL governance, RNG engine, referral system, and developer integration guides for TON ecosystem.',
};

const Index = () => {
  return (
    <Docs/>
  );
};

export default Index;
