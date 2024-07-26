import { Box } from "@/components/Box";
import { Title } from "@/components/Title";
import Tent from "@/icons/tent.svg";
import Message from "@/logos/message.svg";

export function Application() {
  return (
    <div className="mt-[26px] relative">
      <div className="flex flex-row items-center justify-between tablet:ml-[58px]">
        <Title text="JELENTKEZÉS" icon={<Tent />} />
      </div>

      <div className="mt-16 relative">
        <div className="-top-64 absolute right-[67px] z-0 hidden tablet:block">
          <Message className="w-[436px] h-[382px]" />
        </div>
        <div className="text-center text-2xl z-10 relative">
          <Box shadow="left">
            <strong>A jelentkezés lezárult</strong>, köszönjük az érdeklődést,<br />
            és találkozunk hamarosan Sopronban!
          </Box>
        </div>
      </div>
    </div>
  )
}
