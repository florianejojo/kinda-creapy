"use client";

import { useState } from "react";

const interview = [
    {
        question: "Peux-tu nous parler de ton parcours artistique ?",
        answer: "Mon chemin a toujours été empreint de curiosité. J’ai fait des passages éclairs dans plusieurs écoles d’art, de communication visuelle, d’architecture d’intérieur, et aux Beaux-Arts. Mais finalement, je me suis dirigé vers la nature, vers le végétal. C'est là que je suis devenu fleuriste et paysagiste. Cependant, la nécessité de créer – de gribouiller, peindre, écrire – ne m’a jamais vraiment quitté.",
    },
    {
        question: "Qu’est-ce qui a déclenché ton retour vers l'art ?",
        answer: "À un moment, la créativité est devenue une faim, quelque chose qui m'a littéralement dévoré. J’ai arrêté mon activité de paysagiste pour explorer de nouvelles façons de penser et de vivre. La permaculture et l’éco-construction sont devenues mes nouvelles passions. Puis est arrivée la Covid, un moment qui m'a rappelé à quel point la nature et l'art s'entrelacent. J’ai compris que je devais créer et m'enraciner quelque part.",
    },
    {
        question: "Pourquoi la Bretagne comme terre d’enracinement ?",
        answer: "La Bretagne, c’est le terreau parfait pour laisser libre cours à mon imagination. C'est un endroit où je peux me reconnecter à la terre et à mes créations. C’est ici que l’histoire de KINDA CREAPY commence. Un univers à la fois brut et sensible, où chaque forme a son langage, où la nature et l’art se répondent.",
    },
    {
        question:
            "Ton travail semble avoir une dimension mystique, notamment avec la question de la matrice. Peux-tu nous en dire plus ?",
        answer: "J’ai toujours été fasciné par les formes cachées, les structures invisibles qui sous-tendent notre monde. Vivons-nous dans une matrice ? Qui sait. Mais pour moi, chaque création est une tentative de révéler ces formes, de donner vie à ce qui est souvent imperceptible. C’est ce qui me pousse à créer, à explorer des concepts au-delà de ce que l’on voit.",
    },
    {
        question: "Quelles sont tes principales inspirations ?",
        answer: "La nature, bien sûr, mais aussi l’archéologie et l’histoire des civilisations disparues. J’adore explorer les symboles, les mythes, les formes anciennes. L’écriture, elle aussi, est une grande source d’inspiration pour moi. Je suis toujours en quête de nouvelles façons de combiner le texte et l’image, de donner un sens profond à mes œuvres.",
    },
    {
        question: "Comment décrirais-tu ton univers artistique ?",
        answer: "C’est un mélange entre l’instinct brut et la réflexion profonde. Mon art est à la fois humble et audacieux, un pont entre le visible et l’invisible. C’est un univers où l’imagination n’a pas de limites, où chaque élément, chaque forme, a une histoire à raconter.",
    },
    {
        question: "Un dernier mot pour ceux qui découvrent ton travail ?",
        answer: "Mon univers est fait pour être exploré, ressenti. J’invite chacun à plonger dans ces formes, à écouter ce que l’art et la nature ont à dire, et à laisser libre cours à sa propre imagination. Alors, accrochez-vous... et GAZ !",
    },
];

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
        <div>
            <p>
                <a
                    href="mailto:verroeulst.rey@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    verroeulst.remy@gmail.com
                </a>
            </p>
            <p>
                <a
                    href="tel:0620133373"
                    target="_blank"
                    title="06 20 13 33 73"
                    rel="noreferrer"
                >
                    +33 6 20 13 33 73
                </a>
            </p>

            <div className="max-w-4xl mx-auto p-5">
                {interview.map((item, index) => (
                    <div key={index} className="mb-6">
                        <button
                            onClick={() => toggleAnswer(index)}
                            className="w-full text-left px-4 py-3 bg-slate-800 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-slate-700"
                        >
                            <span className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">
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
                            <div className="mt-2 px-4 py-3 bg-slate-900 text-white rounded-lg shadow-md">
                                <p className="text-sm leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
