import { mainStyle, paragraphSectionStyle } from "@/app/styles/styles";

export default function Curriculum() {
    return (
        <>
            <div className="relative z-10">
                <main className={mainStyle}>
                    <ul className={"max-w-sm m-auto"}>
                        <li className={paragraphSectionStyle}>
                            La page blanche, comme amie que je noircis, ma
                            confidente, mon exutoire dans les écrits et les
                            dessins.
                        </li>
                        <li className={paragraphSectionStyle}>
                            Le lettrage, recherche de graphismes dans
                            l'écriture.
                        </li>
                        <li className={paragraphSectionStyle}>
                            La Nature au sens large, je suis Nature, m'en
                            immerge et m'en inspire.
                        </li>
                        <li className={paragraphSectionStyle}>
                            L'archéologie, fasciné par l'architecture antique,
                            l'art rupestre et l'histoire des civilisations
                            disparues.
                        </li>
                        <li className={paragraphSectionStyle}>
                            L'Espace et les théories scientifiques.
                        </li>
                        <li>
                            La mythologie, ses Dieux et Déesses, créatures,
                            contes et légendes, croyances et spiritualités.
                        </li>
                        <li className={paragraphSectionStyle}>
                            Le cabinet de curiosités, la richesse des formes,
                            textures, couleurs, géométries du vivant, collection
                            d'objets. (Ma cherrrie, Oui-Oui c'est toi)
                        </li>
                    </ul>
                </main>
            </div>
        </>
    );
}
