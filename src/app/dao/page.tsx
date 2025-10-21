import Dao from "@/domains/dao/dao";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LLL DAO – Community Governance & veLLL Voting Power',
  description: 'Shape the future of LLL through decentralized governance. Lock LLL for veLLL, vote on proposals, and take part in key decisions shaping the world’s first lossless lottery on TON.',
};

const Index = () => {
  return (
    <Dao/>
  );
};

export default Index;
