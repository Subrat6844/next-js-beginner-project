import FeasuredCardSection from "@/components/FeasuredCardSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
	return (
		<main className="min-h-screen bg-black/[0.96] bg-grid-white/[0.06] antialiased">
			<HeroSection />
			<FeasuredCardSection />
			<WhyChooseUs />
			<TestimonialCards/>
			<UpcomingWebinars/>
			<Instructors/>
			<Footer/>
		</main>
	);
}
