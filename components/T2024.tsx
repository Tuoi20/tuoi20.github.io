import Image from "next/image";

export default function T2024() {
  return (
    <>
      <div
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 md:px-8 min-[320px]:px-4 md:pb-8 min-[320px]:pb-4 md:pt-16 min-[320px]:pt-8 shadow rounded-md"
        id="tuoi"
      >
        <div
          className="absolute md:top-10 md:-mt-4 min-[320px]:-mt-8 md:left-[320px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white md:text-5xl min-[320px]:text-lg font-bold text-center
                    md:px-8 min-[320px]:px-4 md:py-4 min-[320px]:py-2 md:w-[690px] min-[320px]:w-full min-[320px]:right-0 min-[320px]:left-0 rounded-md"
        >
          Chúc mừng sinh nhật Tươi
        </div>
        <div className="bg-white md:p-4 min-[320px]:p-2 rounded-md">
          <div className="grid md:grid-cols-2 md:px-12 min-[320px]:px-6 md:pb-12 min-[320px]:pb-6 md:pt-16 min-[320px]:pt-8 gap-4 rounded-md">
            <div className="md:col-span-1 mx-auto">
              <div className="flex gap-4 py-4">
                <Image
                  src="/image/2024/1.jpg"
                  className="md:w-60 min-[320px]:w-40 md:h-36 min-[320px]:h-24 shadow-md rounded-md"
                  width={260}
                  height={150}
                  alt=""
                />
                <Image
                  src="/image/2024/2.jpg"
                  className="md:w-36 min-[320px]:w-24 md:h-60 min-[320px]:h-40 shadow-md rounded-md"
                  width={260}
                  height={150}
                  alt=""
                />
              </div>
              <div className="absolute md:top-[310px] min-[320px]:top-[195px] min-[320px]:left-[150px] md:left-[320px]">
                {/* <Image src="/image/2024/cake.png" className="md:w-32 min-[320px]:w-20 h-auto opacity-80" width={260} height={150} alt=""/> */}
              </div>
              <div className="flex gap-4 py-4">
                <Image
                  src="/image/2024/3.jpg"
                  className="md:w-36 min-[320px]:w-24 md:h-60 min-[320px]:h-40 min-[320px]:-mt-16 md:-mt-24 shadow-md rounded-md"
                  width={260}
                  height={150}
                  alt=""
                />
                <Image
                  src="/image/2024/4.jpg"
                  className="md:w-60 min-[320px]:w-40 md:h-36 min-[320px]:h-24 shadow-md rounded-md"
                  width={260}
                  height={150}
                  alt=""
                />
              </div>
            </div>
            <div className="md:col-span-1 min-[320px]:border-t-2 font-bold">
              <Image
                src="/image/banner/banner-03.png"
                className="w-full h-auto opacity-30"
                width={260}
                height={150}
                alt=""
              />
              <div className="md:py-4 md:mx-8 min-[320px]:p-2 text-center">
                Hôm nay là sinh nhật Tươi, chúc Tươi một tuổi mới luôn xinh
                tươi, vui vẻ, tràn đầy năng lượng.
                <br />
                Thành công trong công việc và đạt được những dự định lớn trong
                tương lai.
                <br />
                Và luôn hạnh phúc bên gia đình và người mình thương nhé.
                <br />
                Mừng một ngày sinh nhật thật đặc biệt cùng khởi đầu tuổi mới đầy
                nhiệm màu nhé 😉.
              </div>
              <div className="h-6 text-center">by 🤪</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
