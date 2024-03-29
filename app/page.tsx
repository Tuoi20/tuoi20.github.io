'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const [activeOption, setActiveOption] = useState("2023");

    const options = ["2023", "2024"];

    const handleOptionClick = (option: any) => {
        setActiveOption(option);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentIndex = options.indexOf(activeOption);
            const nextIndex = (currentIndex + 1) % options.length;
            const nextOption = options[nextIndex];
            setActiveOption(nextOption);
        }, 5000);
        return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeOption]);

    return (
        <div>
            <div className="main-content">
                <div className="window">
                    <div className="animal">
                        {/* <Image alt="" src="/image/home/2024.png" width={80} height={80} className="w-20 h-20"/> */}
                        <svg width="80px" viewBox="0 0 15.59 15.59">
                            <path d="M14.42,11.993c-0.104-1.334-0.709-2.336-1.57-3.153c-0.479-0.449-0.906-0.563-1.414-0.563c0,0-0.204,0.005-0.041,0.212  c0.215,0.271,1.791,2.328,1.768,4.011c-0.029,1.948-1.958,1.837-1.958,1.837c0.812-1.542,0.402-3.001,0.276-3.512  c-0.238-0.943-0.709-1.857-1.417-2.738C9.191,6.988,8.312,6.468,7.425,6.523c-0.379-0.654-0.716-1.18-1.011-1.61  C8.02,3.479,6.974,2.787,6.063,0c-0.211,0.591-0.38,1.028-0.507,1.31c-0.644-0.08-2.071-0.08-2.714,0  C2.716,1.028,2.547,0.591,2.336,0C1.423,2.794,0.374,3.467,1.999,4.909c0.173,3.278,0.849,4.149,1.942,5.732  c0.9,1.304,0.675,1.768,1.098,3.569c-3.197,2.014,2.223,1.241,3.063,1.2C10.266,15.305,14.777,16.6,14.42,11.993z">
                            </path>
                        </svg>
                    </div>
                    <div className="flex justify-between my-4 mx-4">
                        <div className="circle"/>
                        <div className="circle"/>
                        <div className="circle"/>
                        <div className="circle"/>
                        <div className="circle"/>
                    </div>
                    <div className="illustration">
                        <Image alt="" src={`/image/home/${activeOption}.png`} width={80} height={80} className="img"/>
                    </div>
                 </div>
                <div className="option-wrapper">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`option ${activeOption === option ? 'active' : ''} hover:cursor-pointer`}
                            onClick={() => handleOptionClick(option)}
                            data-option={option}
                        >
                            <Link href={`/${option}`}>{option}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
