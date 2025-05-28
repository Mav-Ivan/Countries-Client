"use client";

import useSWR from "swr";
import { ArrowLeft } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { addCommas, fetcher } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Loading from "../loading";

export default function CountryPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, error } = useSWR(`/countries/${id}`, fetcher);

  if (error) {
    throw new Error(error);
  }

  if (isLoading) {
    return <Loading />;
  }

  const { flag, population, region, capital, subregion, topLevelDomain, languages, name } = data;

  const populationWithComas = addCommas(population);
  const allLanguages = Object.values(languages).map((lang: any) => lang.name);

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="px-10 bg-[#fafafa] dark:bg-[#222d37] min-h-screen">
      <div className="h-15 md:h-35 flex items-center">
        <Button variant="outline" onClick={handleClick}>
          <ArrowLeft /> Back
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-[15%] items-center">
        <Image
          className="h-[30vh] w-[80vw]  lg:h-[40vh] lg:w-[40vw]"
          src={flag}
          width={600}
          height={600}
          alt="Nation flag"
        />
        <div>
          <h1 className="font-bold text-3xl md:text-4xl my-7 md:mb-15">{name}</h1>
          <div className="flex gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-semibold lg:font-bold">
                Population: <span className="text-gray-500">{populationWithComas}</span>
              </p>
              <p className="font-semibold lg:font-bold">
                Region: <span className="text-gray-500">{region}</span>
              </p>
              <p className="font-semibold lg:font-bold">
                Sub Region: <span className="text-gray-500">{subregion}</span>
              </p>
              <p className="font-semibold lg:font-bold">
                Capital: <span className="text-gray-500">{capital}</span>
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold lg:font-bold">
                Top Level Domain: <span className="text-gray-500">{topLevelDomain}</span>
              </p>
              <p className="font-semibold lg:font-bold">
                Languages:{" "}
                {allLanguages.map((el, indx) => (
                  <span className="text-gray-500" key={uuidv4()}>
                    {el}
                    {indx < allLanguages.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
