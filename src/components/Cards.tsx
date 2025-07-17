import { FeatureCard } from "@/components/FeatureCard";
import Profession from "@/logos/profession.svg";
import Community from "@/logos/community.svg";
import Workshops from "@/logos/workshops.svg";
import Hand from "@/icons/hand.svg";

export function Cards() {
  return (
    <div className="flex flex-col laptop:flex-row items-start justify-between laptop:space-x-[28px] space-y-[28px] laptop:space-y-0 mt-[104px]">
      <FeatureCard
        image={<Profession className="w-40 h-40" />}
        title="Szakmai élet"
        description={
          <>
          <strong>Fontos számunkra</strong>, hogy minden résztvevő úgy távozzon majd a táborból, hogy azt érzi, hogy sok <strong>hasznos tudással</strong> lett gazdagabb. Ennek érdekében olyan <strong>vezetőket</strong> és <strong>szakembereket</strong> hívunk az <strong>előadások</strong> és <strong>kerekasztal beszélgetések</strong> megtartására, akik első kézből tudják ezt átadni Nektek.
          </>
        }
      />
      <FeatureCard
        image={<Community className="w-40 h-40" />}
        title="Közösség"
        description={
          <>
              Akár ez az első NYATÁ-d, akár a sokadik, itt egy olyan <strong>nyitott, befogadó és széles látókörű csapat</strong> vár, akikkel biztos <strong>nem fogsz unatkozni</strong>! Alakíts ki új barátságokat, vagy találkozz régi ismerőseiddel és vegyetek részt közösen <strong>kreatív workshopokon</strong> és <strong>kötetlen beszélgetéseken</strong>, illetve <strong>csapatépítő</strong> és <strong>sport programjainkon</strong>. Esténként pedig egy <strong>hatalmas buli</strong> vár rátok, két színpadon.
          </>
        }
      />
      <FeatureCard
        image={<Workshops className="w-40 h-40" />}
        title="Workshopok"
        description={
          <>
              Alkossunk valami izgalmasat: gondolkodjunk és dolgozzunk együtt a NYATA-n! Kisebb csoportos foglalkozások <strong>szakkolisoktól szakkolisoknak</strong>.
          </>
        }
      >
        {process.env.NEXT_PUBLIC_WORKSHOP_STATUS === "open" && (
          <a
            href={process.env.NEXT_PUBLIC_WORKSHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mx-[-26px] mb-[-21px] mt-[28px] tablet:mx-[-58px] tablet:mb-[-42px] border-8 border-primary-light bg-primary uppercase flex flex-col items-center space-y-2 py-4 hover:border-primary hover:bg-primary-light hover:text-black text-white transition-colors">
              <Hand />
              <p className="text-[26px] font-display px-8 laptop:px-20 text-center leading-none">
                Jelentkezek workshopot tartani!
              </p>
            </div>
          </a>
        )}
      </FeatureCard>
    </div>
  );
}
