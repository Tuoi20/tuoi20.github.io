import T2024 from "@/components/T2024";

export async function generateMetadata() {
  return {
    title: "Chúc mừng sinh nhật Tươi",
    description: "Tuổi 23",
    openGraph: {
      images: "/image/seo/2024.png",
      siteName: "Chúc mừng sinh nhật Tươi",
      url: `https://tuoi20.github.io/2024`,
    },
    icons: {
      icon: ["/favicon.ico"],
    },
  };
}

export default async function Tuoi2024() {
  return <T2024 />;
}
