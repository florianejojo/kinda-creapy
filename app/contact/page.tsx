import { classNames } from "@/app/components/utils";
import { mainStyle, paragraphSectionStyle } from "@/app/styles/styles";

export default function Curriculum() {
    return (
        <main className={mainStyle}>
            <section
                className={
                    "flex flex-col  justify-center items-center min-h-96 text-lg "
                }
            >
                <a
                    className={paragraphSectionStyle}
                    href="mailto:verroeulst.rey@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    verroeulst.remy@gmail.com
                </a>

                <a
                    className={paragraphSectionStyle}
                    href="tel:0643800622"
                    target="_blank"
                    title="06 43 80 06 22"
                    rel="noreferrer"
                >
                    +33 6 20 13 33 73
                </a>
            </section>
        </main>
    );
}
