type Props = {
  children: React.ReactNode;
};

export async function generateMetadata() {
  return {
    title: `Country Details`,
    description: `Detailed information about country`,
  };
}

export default function CountryLayout({ children }: Props) {
  return <>{children}</>;
}
