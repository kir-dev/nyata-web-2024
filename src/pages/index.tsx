import { Application } from "@/components/Application";
import { Cards } from "@/components/Cards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Programs } from "@/components/Programs";
import { ProgramsTable } from "@/components/program-table/ProgramsTable";

export default function Home() {
  return (
    <main className="d-flex min-h-screen flex-col">
      <Header />
      <div className="max-w-[1260px] mx-auto px-6 desktop:px-0">
        <Hero />
        <Programs />
        <Cards />
        {process.env.NEXT_PUBLIC_SHOW_PROGRAMS_TABLE === "true" && (<ProgramsTable />)}
        <Location />
        <Application />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
