import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { ImageCarouselSection } from "./carousel/image-carousel-section";
import CalendarIcon from "@/icons/calendar-simple.svg";
import LocationIcon from "@/icons/pin.svg";
import { SignUpButton } from "./SignUpButton";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="space-y-[60px] mt-10 tablet:mt-20" id="introduction">
      <div className="flex laptop:flex-row flex-col gap-[40px]">
        <div className="space-y-[11px] laptop:w-1/2 w-full">
          <div className="flex justify-center">
            <Title text="Mi az a NYATA?" icon={<Image src={"/miazanyata_ikon.png"} alt={"Mi az a NYATA"} height={63} width={63} className="h-[63px] w-[63px]" />} />
          </div>
          <Box shadow="right" className="!p-0">
            <div className="px-[26px] py-[21px] tablet:px-[58px] tablet:py-[42px]">
              A <b>Nyári Szakkollégiumi Találkozó</b> egy évente megrendezésre
              kerülő tábor, amely összehozza a Kárpát-medence különböző
              tudományterületein hallgató és kutató szakkollégistáit. A
              hangsúlyos esemény teret ad számos{" "}
              <b>workshopnak, előadásnak, beszélgetésnek</b>, amelyek alatt a
              résztvevők közösen gondolkodhatnak{" "}
              <b>aktuális társadalmi kérdésekről</b>.<br />
              Mindemellett a rendezvény nagyszerű alkalom kapcsolatok építésére,
              inspirálódásra és nem utolsó sorban, egy{" "}
              <b>nagy nyári kikapcsolódásra</b> is.
            </div>
            <div className="px-[26px] py-[10px] tablet:px-[58px] tablet:py-[20px] bg-gray-darkest text-white uppercase font-display text-2xl tablet:text-3xl font-semibold">
              <div className="flex flex-row gap-4">
                <Image src={"/programok_ikon.png"} alt={"datum"} height={32} width={32} className="h-[32px] w-[32px]" />
                2025. augusztus 18-22.
              </div>
              <div className="flex flex-row gap-4 mt-2">
                <Image src={"/helyszin_ikon.png"} alt={"helyszin"} height={32} width={32} className="h-[32px] w-[32px]" />
                Sopron
              </div>
            </div>
          </Box>
        </div>
        <div className="max-w-full mx-auto flex flex-col justify-center">
          <ImageCarouselSection />
        </div>
      </div>

      {process.env.NEXT_PUBLIC_APPLICATION_STATUS === "open" && (<SignUpButton />)}
    </Section>
  );
}
