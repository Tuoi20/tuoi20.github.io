"use client";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function T2025() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerWidth < window.innerHeight);
    };

    checkOrientation();

    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  const imageList = [
    "/image/seo/2023.png",
    "/image/seo/2024.png",
    "/image/seo/home.png",
  ];

  const remainingNumbers = Array.from({ length: 11 }, (_, i) => i + 5);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap");
      `}</style>

      {/* #C5BCB3 */}
      <div className="h-screen w-screen bg-[#8bccf5] px-8 py-16 sm:p-16 flex flex-col justify-between">
        <div
          className={`h-full text-center grid ${
            isPortrait ? "grid-cols-3 grid-rows-5" : "grid-cols-5 grid-rows-3"
          } gap-4 sm:gap-6`}
        >
          <div
            className={`
              flex items-center justify-center
              font-['Dancing_Script'] text-[70px] leading-[70px] sm:text-[120px] sm:leading-[120px] text-white
              ${isPortrait ? "col-span-2 row-span-2" : "col-span-2 row-span-2"}
            `}
            style={{
              gridColumn: isPortrait ? "1 / 3" : "1 / 3",
              gridRow: isPortrait ? "1 / 3" : "1 / 3",
            }}
          >
            {/* today is your day */}
            <img src="/gif/today.gif" alt="" className="w-auto h-full" />
          </div>

          {remainingNumbers.map((number, index) => (
            <div
              key={number}
              className={`flex items-center justify-center ${
                number === 15 ||
                (isPortrait && number === 11) ||
                (!isPortrait && number === 9)
                  ? "text-white font-['Roboto_mono'] text-xl sm:text-3xl"
                  : "shadow-md bg-cover bg-center"
              }`}
              style={{
                backgroundImage:
                  number !== 15 &&
                  !(
                    (isPortrait && number === 11) ||
                    (!isPortrait && number === 9)
                  )
                    ? `url('${imageList[index % imageList.length]}')`
                    : "none",
                border:
                  (isPortrait && [6, 8, 10, 12, 14].includes(number)) ||
                  (!isPortrait && [6, 8, 10, 12, 14].includes(number))
                    ? "4px solid white"
                    : "none",
              }}
            >
              {isPortrait && number === 11
                ? "Happy birthday"
                : !isPortrait && number === 9
                ? "Happy birthday"
                : number === 15
                // ? "i love u"
                ? ""
                : null}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-4 flex items-center justify-center">
          <img src="/gif/heart.gif" alt="" className="w-32 h-auto" />
        </div>
      </div>
    </>
  );
}
