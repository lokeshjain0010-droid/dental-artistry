import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Treatments from "@/components/Treatments";
import Specialist from "@/components/Specialist";
import ClinicTour from "@/components/ClinicTour";
import Reviews from "@/components/Reviews";
import BookingForm from "@/components/BookingForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Treatments />
        <Specialist />
        <ClinicTour />
        <Reviews />
        <BookingForm />
      </main>
      <WhatsAppWidget />
      <Footer />
    </>
  );
}
