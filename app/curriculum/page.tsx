import { classNames } from "@/app/components/utils";
import { mainStyle, paragraphSectionStyle } from "@/app/styles/styles";

export default function Curriculum() {
    return (
        <main className={mainStyle}>
            <p className={paragraphSectionStyle}>
                Après des passages éclairs en écoles d'art, en communication
                visuelle/architecture d'intérieur et aux Beaux-Arts, je
                m'oriente vers le végétal et deviens fleuriste/paysagiste.
                Jusqu'au jour où la nécessité de gribouiller, peindre, écrire,
                bref de créer me dévore.
            </p>
            <p className={paragraphSectionStyle}>
                J'arrête et pars en quête de nouvelles façons de penser et
                vibrer le monde, je découvre la permaculture et
                l'eco-construction.{" "}
            </p>
            <p className={paragraphSectionStyle}>
                Le/la Covid tape à la porte, c'est un nouveau rappel à l'ordre,
                la Nature et l'Art hurlent de concert.
            </p>
            <p className={paragraphSectionStyle}>
                J'entends ! Il me faut trouver un terreau et m'y enraciner,
                chose faite en Bretagne. C'est ici que l'histoire de KINDA
                CREAPY commence, alors on s'accroche et GAZ !
            </p>
            <p className={paragraphSectionStyle}>Bienvenu(es)</p>
            <p className={classNames(paragraphSectionStyle, "text-right")}>
                R. Verroeulst
            </p>
        </main>
    );
}
