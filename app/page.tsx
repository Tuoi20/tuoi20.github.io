import Birthday from "@/components/Birthday";

export async function generateMetadata() {
  return {
    title: "Chúc mừng sinh nhật Tươi",
    description: "",
    openGraph: {
      images: "/image/seo/home.png",
      siteName: "Chúc mừng sinh nhật Tươi",
      url: `https://tuoi20.github.io/`,
    },
    icons: {
      icon: ["/favicon.ico"],
    },
  };
}


export default async function Home() {
  return <Birthday />;
}
