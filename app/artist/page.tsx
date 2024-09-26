"use client";


import { interview } from "@/data/interview";
import { useState } from "react";

export default function ArtistPage({
    params,
}: {
    params: { categoryId: string };
}) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-black text-white-100 min-h-screen p-8 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <div className="p-5 bg-transparent rounded-lg shadow-lg">
                    {interview.map((item, index) => (
                        <div key={index} className="mb-6">
                            <button
                                onClick={() => {
                                    // toggleAnswer(index);
                                }}
                                className="w-full text-left px-4 py-3 border-slate-800 border text-gray-100 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:border-3"
                            >
                                <span className="flex justify-between items-center">
                                    <h2 className="text-lg ">
                                        {item.question}
                                    </h2>
                                    <svg
                                        className={`w-6 h-6 transition-transform duration-300 ${
                                            activeIndex === index
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="mt-2 px-4 py-3  text-gray-300 rounded-lg shadow-md">
                                    <p className="text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
