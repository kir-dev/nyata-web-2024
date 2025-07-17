import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import Image from "next/image";
import People from "@/logos/people.svg";

export function Programs() {
  return (
    <Section id="programs" className="space-y-[29px] flex flex-col items-start w-full relative mt-20 tablet:mt-28">
      <div className="tablet:ml-[58px]">
        <Title text="Programleírás hamarosan" icon={<Image src="/programok_ikon.png" alt="programok" height={63} width={63} className="h-[63px] w-[63px]" />} />
      </div>
      <Box shadow="right">
        <p className="laptop:pr-96">A <strong>NYATA 2025</strong> tematikája az <strong>Akadémiai és Vállalati szektorok
            találkozása.</strong> Érdekel, hogyan hat az <strong>innováció</strong> a gazdaság különféle szektoraira és fordítva? Szeretnél betekintést nyerni a piacon lévő <strong>vállalatok</strong> és <strong>intézmények</strong> működésébe és megismerni azok előnyeit és kihívásait? Esetleg a <strong>civil-
            és nonprofit szervezetek</strong> felépítése érdekel? Ha bármelyikre igen a válasz, akkor <strong>csatlakozz
            hozzánk</strong> augusztusban 18-22-ig és keresük meg a választ együtt!</p>
      </Box>

      <div className="absolute laptop:-top-24 hidden tablet:block tablet:-top-6 tablet:right-0 laptop:right-7">
        <People className="tablet:w-[264px] tablet:h-[139px] laptop:w-[528px] laptop:h-[278px]" />
      </div>
    </Section>
  )
}