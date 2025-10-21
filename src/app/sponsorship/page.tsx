import Sponsorship from "@/domains/sponsorship/sponsorship";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Sponsorship & Partnerships – LLL on TON',
  description: 'Become an official sponsor or partner of LLL. Collaborate with a fast-growing TON ecosystem project that blends GameFi, DeFi, and community engagement into one lossless experience.',
};

const Index = () => {
  return (
    <Sponsorship/>
  );
};

export default Index;
