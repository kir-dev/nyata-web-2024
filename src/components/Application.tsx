import { Box } from "@/components/Box";
import { Title } from "@/components/Title";
import Tent from "@/icons/tent.svg";
import Message from "@/logos/message.svg";
import { SignUpButton } from "./SignUpButton";
import Image from "next/image";

export function Application() {
  if (process.env.NEXT_PUBLIC_APPLICATION_STATUS === "open") {
    return (
      <div className="mt-[26px] laptop:mt-[52px]">
        <div className="flex flex-row items-center justify-between tablet:ml-[58px]">
          <Title text="JELENTKEZÉS" icon={<Tent />} />
        </div>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-[71px] mt-[40px] tablet:mt-[70px]">
          <div className="flex flex-col space-y-[50px]">
            <Box shadow="right">
              <div className="text-3xl font-display space-y-2">
                <p>
                  <strong>BÉRLETEK ÉS NAPIJEGYEK A KÉSZLET EREJÉIG!</strong>
                  <br />
                </p>
                <p>
                  <strong>BÉRLETEK</strong>: 35.000 Ft-tól
                </p>
                <p>
                  <strong>NAPIJEGYEK</strong>: 9.000 Ft-tól
                </p>
              </div>
            </Box>
            <div className="shadow-box-right">
              <SignUpButton />
            </div>
          </div>
          <div className="relative mt-[200px] laptop:mt-0">
            <div className="z-10">
              <div className="absolute -top-[250px] right-[67px] z-0">
                <Message className="w-[436px] h-[382px]" />
              </div>
              <div className="relative">
                <Box shadow="left">
                  <p>
                    Kattints a “Jelentkezem” gombra, ha Te is részt szeretnél
                    venni a 2024-es{" "}
                    <strong>Nyári Szakkollégiumi Találkozón!</strong>
                  </p>
                  <br />
                  <p>
                    A kattintás után az oldal átnavigál téged a jegy- és
                    bérletértékesítő felületre, ahol{" "}
                    <strong>
                      Te magad állíthatod össze saját NYATA-csomagod
                    </strong>
                    : beállíthatod, hány napra jönnél, szeretnél-e tábori
                    étkezést, milyen merch cuccokat kérsz.
                  </p>
                  <br />
                  <p>
                    Azt javasoljuk,{" "}
                    <strong>szerezd be minél előbb bérleted</strong>, hiszen a
                    Super Early Bird és Early Bird jegyek csak limitált számban
                    állnak rendelkezésünkre.
                  </p>
                  <br />
                  <p>
                    ℹ️ Amennyiben támogatni szeretnéd a többi táborozót, és
                    részt szeretnél venni a visszaosztásban, lehetőséged van
                    Támogatói Jegyet venned!
                  </p>
                  <p>
                    ℹ️ Amennyiben visszaosztást igényelnél, azt a
                    regisztrációkor tudod jelezni majd megjegyzésben.
                  </p>
                  <p>
                    ⚠️ A NYATA-pólót és -repoharat az alap jegy vagy bérlet nem
                    tartalmaz, ezeket külön termékként tudod beszerezni a{" "}
                    <a
                      href={process.env.NEXT_PUBLIC_APPLICATION_URL}
                      target="_blank"
                      className="text-primary hover:text-secondary transition-colors underline"
                    >
                      {process.env.NEXT_PUBLIC_APPLICATION_URL}
                    </a>{" "}
                    oldalon!
                  </p>
                  <p>
                    ⚠️ A táborban csak repohárral tudunk majd kiszolgálni a
                    pultoknál, így arra kérünk, vagy vegyél egyet a jegyed
                    mellé, vagy pedig ne felejtsd otthon saját repoharad!
                  </p>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="mt-[26px] relative">
      <div className="flex flex-row items-center justify-between tablet:ml-[58px]">
        <Title text="JELENTKEZÉS" icon={<Image src={"/jelentkezés_ikon.png"} alt={"jelentkezes"} height={63} width={63} className="h-[63px] w-[63px]" />} />
      </div>

      <div className="mt-16 relative">
        <div className="-top-64 absolute right-[67px] z-0 hidden tablet:block">
          <Message className="w-[436px] h-[382px]" />
        </div>
        <div className="text-center text-2xl z-10 relative">
          <Box shadow="left">
            <strong>Jelentkezés hamarosan!</strong>
          </Box>
        </div>
      </div>
    </div>
  );
}
