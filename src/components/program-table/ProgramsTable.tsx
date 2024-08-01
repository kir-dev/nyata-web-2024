import { DayCard } from "@/components/program-table/DayCard"
import { ProgramCard } from "@/components/program-table/ProgramCard"
import { Section } from "@/components/Section"
import clsx from "clsx"
import { PropsWithChildren } from "react"

function Banner() {
  return (
    <div className="text-xl uppercase bg-white py-3 text-center font-extrabold">
      <span className="text-secondary">
        Narancs: szakmai program</span>
      <span className="text-gray-lighter hidden tablet:inline">{" "}|{" "}</span> <br className="tablet:hidden" />
      <span className="text-primary">Zöld: közösségi program</span>
    </div>
  )
}

type DayColumnProps = PropsWithChildren<{
  column: number;
}>

function DayColumn({ children, column }: DayColumnProps) {
  return (
    <div className={clsx("grid col-span-full tablet:col-span-1  gap-3 content-start", {
      "laptop:col-start-1": column === 1,
      "laptop:col-start-2": column === 2,
      "laptop:col-start-3": column === 3,
      "laptop:col-start-4": column === 4,
    })}>
      {children}
    </div>
  )
}

export function ProgramsTable() {
  return (
    <Section id="programs">

    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 laptop:gap-x-10 gap-x-2 tablet:gap-x-6 tablet:gap-y-6 gap-y-12 font-body mt-16">
      <div className="block laptop:hidden col-span-full col-start-1">
        <Banner />
      </div>
      <div className="laptop:col-span-1 laptop:col-start-1 hidden laptop:block">
        <DayCard day="csütörtök" />
      </div>
      <div className="laptop:col-span-1 laptop:col-start-2 hidden laptop:block">
        <DayCard day="péntek" />
      </div>
      <div className="laptop:col-span-1 laptop:col-start-3 hidden laptop:block">
        <DayCard day="szombat" />
      </div>
      <div className="laptop:col-span-1 laptop:col-start-4 hidden laptop:block">
        <DayCard day="vasárnap" />
      </div>

      <div className="laptop:block hidden col-span-full col-start-1">
        <Banner />
      </div>

      {/* csutortok */}
      <DayColumn column={1}>
        <div className="mb-3 laptop:hidden">
          <DayCard day="csütörtök" />
        </div>
        <ProgramCard time="15:00 - 17:00" color="green" name="ismerkedős játékok" />
        <ProgramCard time="17:00 - 18:00" color="green" name="Találkozz a többi szakkolissal!" description="kötetlen beszélgetés" />
        <ProgramCard time="18:00 - 19:00" color="black" name="vacsora" />
        <ProgramCard time="19:00 - 20:00" color="green" name="zumba" />
        <ProgramCard time="20:00 - 22:00" color="green" name="esti játékok" />
        <ProgramCard time="22:00 - 04:00" color="green" name="Buli" />
      </DayColumn>

      {/* pentek */}
      <DayColumn column={2}>
        <div className="mb-3 laptop:hidden">
          <DayCard day="péntek" />
        </div>
        <ProgramCard time="10:00 - 11:30" color="green" name="Kézműves foglalkozások" />
        <ProgramCard time="11:30 - 13:00" color="black" name="ebéd" />
        <ProgramCard time="13:00 - 14:15" color="orange" name="Vádirat a tudomány ellen" description="beszélgetés Pálinkás Józseffel" />
        <ProgramCard time="14:30 - 18:00" color="green" name="Vászonfestés / AI játék kiállítás / Szabad sport " />
        <ProgramCard time="15:00 - 16:00" color="orange" name="IT mindig és mindenhol - Új helyzetek, új készségek" description="Telekom - előadás" />
        <ProgramCard time="16:00 - 18:00" color="orange" name="Workshopok" />
        <ProgramCard time="18:00 - 19:00" color="black" name="vacsora" />
        <ProgramCard time="19:00 - 20:00" color="green" name="Akadályverseny" />
        <ProgramCard time="20:00 - 21:30" color="green" name="Borkóstoló" />
        <ProgramCard time="20:00 - 21:00" color="orange" name="Topológia a Kriptozoológiában" description="Andorfi-Csonka-Eper" />
        <ProgramCard time="22:00 - 04:00" color="green" name="Buli" description="szakkolis dj-kkel" />
      </DayColumn>

      {/* szombat */}
      <DayColumn column={3}>
        <div className="mb-3 laptop:hidden">
          <DayCard day="szombat" />
        </div>
        <ProgramCard time="9:00 - 9:30" color="green" name="Streching" />
        <ProgramCard time="9:30 - 10:30" color="green" name="Origami" />
        <ProgramCard time="10:30 - 11:30" color="green" name="Workshop: Győzd le Pityut és Mikit versekben!" />
        <ProgramCard time="10:30 - 11:30" color="orange" name="Elektromos autózás ma és holnap" description="Samsung SDI - előadás" />
        <ProgramCard time="11:30 - 13:00" color="black" name="ebéd" />
        <ProgramCard time="13:00 - 14:30" color="orange" name="EgészségTechre! A holnap egészség-ügye" description="Kerekasztal-beszélgetés" />
        <ProgramCard time="13:00 - 17:00" color="green" name="fociBAJNOKSÁg (+teqball, kosár, kidobós, pingpong, tollas)" />
        <ProgramCard time="14:30 - 16:00" color="orange" name="Mélytanulás - A kütyügeneráció és a mai neveléstan kihívásai" description="Kissné Dr. Zsámboki Réka - előadás" />
        <ProgramCard time="16:00 - 17:00" color="orange" name="A velünk alkotó AI -AI  a játék- és terméktervezésben" description="Barta Jenő, graphisoft - előadás" />
        <ProgramCard time="17:00 - 18:00" color="green" name="Közös fotó" />
        <ProgramCard time="18:00 - 19:00" color="black" name="vacsora" />
        <ProgramCard time="19:00 - 20:30" color="green" name="Táncház" />
        <ProgramCard time="21:00 - 24:00" color="green" name="Koncertek: gulugulu, sezlony" />
        <ProgramCard time="24:00 - 04:00" color="green" name="Buli" />
      </DayColumn>

      {/* vasarnap */}
      <DayColumn column={4}>
        <div className="mb-3 laptop:hidden">
          <DayCard day="vasárnap" />
        </div>
        <ProgramCard time="9:30 - 10:00" color="green" name="Stretching" />
        <ProgramCard time="10:00 - 11:30" color="orange" name="Addiktív design - Miért olvasunk kevesebbet és nézzük helyette a TikTok-ot?" description="Sipka Bence - előadás" />
        <ProgramCard time="11:30 - 13:00" color="black" name="ebéd" />
        <ProgramCard time="13:00 - 14:00" color="orange" name="Az AI határai - múlt és jelen" description="(Mérő lászó, Turbine - előadás)" />
        <ProgramCard time="14:00 - 15:00" color="green" name="Vízicsata" />
        <ProgramCard time="15:00 - 16:30" color="orange" name="Hívő és hitetlen tudomány" description="Csókay András - beszélgetés" />
        <ProgramCard time="16:30 - 18:00" color="green" name="Nagyvetélkedő / túra" />
        <ProgramCard time="18:00 - 19:00" color="black" name="vacsora" />
        <ProgramCard time="19:30 - 21:00" color="green" name="kvíz" />
        <ProgramCard time="22:00 - 04:00" color="green" name="Buli" />
      </DayColumn>
    </div>

    </Section>

  )
}