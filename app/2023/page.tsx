import T2023 from "@/components/T2023";

export async function generateMetadata() {
  return {
    title: "Chúc mừng sinh nhật Tươi",
    description: "Tuổi 23",
    openGraph: {
      images: "/image/seo/2023.png",
      siteName: "Chúc mừng sinh nhật Tươi",
      url: `https://tuoi20.github.io/2023`,
    },
    icons: {
      icon: ["/favicon.ico"],
    },
  };
}

export default async function Tuoi2023() {
  return <T2023 />;
}
