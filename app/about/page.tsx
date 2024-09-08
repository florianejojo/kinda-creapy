export default function About() {
    const sectionStyle = " p-5 text-sm";
    const titleSectiontyle = "text-lg py-5";

    return (
        <>
            <div className="relative z-10">
                <main className="flex min-h-screen flex-col items-center justify-between m-5 md:p-10  tracking-widest sm:max-w-7xl mx-auto">
                    <div className="z-10 max-w-5xl border mx-auto font-extralight">
                        <section className={sectionStyle}>
                            <h2 className={titleSectiontyle}>
                                Curry-cul l'homme
                            </h2>
                            <p>
                                Après des passages éclairs en écoles d'art, en
                                communication visuelle/architecture d'intérieur
                                et aux Beaux-Arts, je m'oriente vers le végétal
                                et deviens fleuriste/paysagiste. Jusqu'au jour
                                où la nécessité de gribouiller, peindre, écrire,
                                bref de créer me dévore. J'arrête et pars en
                                quête de nouvelles façons de penser et vibrer le
                                monde, je découvre la permaculture et
                                l'eco-construction. Le/la Covid tape à la porte,
                                c'est un nouveau rappel à l'ordre, la Nature et
                                l'Art hurlent de concert. J'entends ! Il me faut
                                trouver un terreau et m'y enraciner, chose faite
                                en Bretagne. C'est ici que l'histoire de KINDA
                                CREAPY commence, alors on s'accroche et GAZ !
                                Bienvenu(es)
                            </p>
                        </section>

                        <section className={sectionStyle}>
                            <h2 className={titleSectiontyle}>Mes Amours</h2>
                            <ul>
                                <li>
                                    La page blanche, comme amie que je noircis,
                                    ma confidente, mon exutoire dans les écrits
                                    et les dessins.
                                </li>
                                <li>
                                    Le lettrage, recherche de graphismes dans
                                    l'écriture.
                                </li>
                                <li>
                                    La Nature au sens large, je suis Nature,
                                    m'en immerge et m'en inspire.
                                </li>
                                <li>
                                    L'archéologie, fasciné par l'architecture
                                    antique, l'art rupestre et l'histoire des
                                    civilisations disparues.
                                </li>
                                <li>L'Espace et les théories scientifiques.</li>
                                <li>
                                    La mythologie, ses Dieux et Déesses,
                                    créatures, contes et légendes, croyances et
                                    spiritualités.
                                </li>
                                <li>
                                    Le cabinet de curiosités, la richesse des
                                    formes, textures, couleurs, géométries du
                                    vivant, collection d'objets. (Ma cherrrie,
                                    Oui-Oui c'est toi)
                                </li>
                            </ul>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}
