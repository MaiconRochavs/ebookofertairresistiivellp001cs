import About from "@/components/About";
import Aida from "@/components/Aida";
import Cost from "@/components/Cost";
import Discovery from "@/components/Discovery";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Problem from "@/components/Problem";
import SocialProof from "@/components/SocialProof";
import ValueStack from "@/components/ValueStack";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Problem />
      <Aida />
      <Cost />
      <SocialProof />
      <About />
      <Discovery />
      <ValueStack />
      <Offer />
      <Faq />
    </main>
  );
} 