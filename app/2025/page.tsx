import T2025 from "@/components/T2025";

export async function generateMetadata() {
  return {
    title: "Chúc mừng sinh nhật Tươi",
    description: "Tuổi 25",
    openGraph: {
      images: "/image/seo/2025.png",
      siteName: "Chúc mừng sinh nhật Tươi",
      url: `https://tuoi20.github.io/2025`,
    },
    icons: {
      icon: ["/favicon.ico"],
    },
  };
}

export default async function Tuoi2025() {
  return <T2025 />;
}
