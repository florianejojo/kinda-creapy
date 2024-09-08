import { classNames } from "@/app/components/utils";
import { mainStyle, paragraphSectionStyle } from "@/app/styles/styles";

export default function Curriculum() {
    return (
        <main className={mainStyle}>
            <section className={"max-w-sm grid grid-rows-[1fr_auto] m-auto "}>
                <p
                    className={classNames(
                        paragraphSectionStyle,
                        "text-center min-h-96 flex items-center justify-center text-2xl"
                    )}
                >
                    +336 20 13 33 73
                </p>
            </section>
        </main>
    );
}
