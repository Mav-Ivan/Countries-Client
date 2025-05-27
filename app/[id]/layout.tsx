import { Metadata } from "next";

type Props = {
  params: Promise<{ name: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { name } = resolvedParams;
  const decodedName = decodeURIComponent(name);
  const title = Array.isArray(decodedName) ? decodedName[0] : decodedName;

  return {
    title: `${title} - Country Details`,
    description: `Detailed information about ${title}`,
    openGraph: {
      title: `${title} - Country Details`,
      description: `Learn more about ${title}, including population, region, capital, and more.`,
    },
  };
}

export default function CountryLayout({ children }: Props) {
  return <>{children}</>;
}
