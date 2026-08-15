import Header from "./components/Header";
import Hero from "./components/Hero";
import DownloadSection from "./components/DownloadSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DownloadSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
