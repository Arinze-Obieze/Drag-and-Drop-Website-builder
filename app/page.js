import Image from "next/image";
import Hero from "@/components/Hero";
import LandingPageBody from "@/components/landing/body";
import Roadmap from "@/components/Roadmap";
import Cta from "@/components/cta";
import CtaCard from "@/components/CtaCard";
import Faq from "@/components/Faq";
import Stats from "@/components/Stats";
import Offer from "@/components/Offer";
import FeaturesCard from "@/components/FeaturesCard";
import BlogCta from "@/components/BlogCta";
const faqData = [
  {
    question: "Can I build my website for free?",
    answer:
      "Yes, There is a free plan that allows you to build for free and get a free subdomain which doesn't require inputing your credit card.",
  },
  {
    question: "What level of customization can I have for my websites design ?",
    answer: `
    We understand the importance of a unique and branded online presence. Our web builder offers you multiple choices, You can build from scratch or you can customize from a variety of templates
    `,
  },
  {
    question: "Do i get my own domain name?",
    answer: "Yes, Domain name are for purchase",
  },
];
export default function Home() {
  return (
    <div className="bg-blue-800">
      <Hero />
      <Stats />
      <LandingPageBody />
      <Offer />
      <FeaturesCard />
      <CtaCard />
      <Roadmap />
      <BlogCta />
      <Faq faqData={faqData} />
      <Cta />
    </div>
  );
}
