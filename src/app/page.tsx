import FeasuredCardSection from "@/components/FeasuredCardSection";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
	return (
		<main className="min-h-screen bg-black/[0.96] bg-grid-white/[0.06] antialiased">
			<HeroSection />
			<FeasuredCardSection />
			<WhyChooseUs />
			<TestimonialCards/>
		</main>
	);
}
