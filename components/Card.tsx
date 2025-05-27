import { addCommas } from "@/lib/utils";
import { Country } from "@/types/Country.interface";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Card({ id, name, region, population, capital, flags }: Country) {
  const router = useRouter();
  const populationWithComas = addCommas(population);

  const handleClick = () => {
    router.push(`/${id}`);
  };

  return (
    <div
      className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-[#2c3743] min-h-[360px] flex flex-col h-full"
      onClick={handleClick}
    >
      <Image
        src={flags?.svg}
        alt="Flag Image"
        className="w-full object-cover"
        width={600}
        height={300}
        style={{ aspectRatio: "600/300" }}
      />
      <div className="p-7 space-y-4">
        <h3 className="text-xl font-semibol mb-7 font-bold">{name}</h3>
        <p className="font-bold">
          Population: <span className="text-gray-500">{populationWithComas}</span>
        </p>
        <p className="font-bold">
          Region: <span className="text-gray-500">{region}</span>
        </p>
        <p className="font-bold">
          Capital: <span className="text-gray-500">{capital}</span>
        </p>
      </div>
    </div>
  );
}
