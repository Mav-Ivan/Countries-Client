import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import { Country } from "@/types/Country.interface";

interface CardsContainerProps {
  countries: Country[];
}

export default function CardsContainer({ countries }: CardsContainerProps) {
  if (countries.length === 0) {
    return <h3 className="text-xl font-semibol mt-17 font-bold">No countries to display</h3>;
  }

  return (
    <div className="w-full mt-15 md:grid lg:grid-cols-4 md:grid-cols-3 lg:gap-7 flex flex-col gap-5 ">
      {countries?.map(country => (
        <Card
          key={uuidv4()}
          id={country._id}
          name={country.name}
          region={country.region}
          population={country.population}
          capital={country.capital}
          flags={country.flags}
        />
      ))}
    </div>
  );
}
