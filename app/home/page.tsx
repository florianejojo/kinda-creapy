import { TreeCanvas } from "@/app/components/TreeCanvas";

import { GridFilledLayout } from "../components/GridFilledLayout";
import { Header } from "../components/Header";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between m-5 md:p-10  tracking-widest sm:max-w-7xl mx-auto">
                <div className="z-10">
                    <Suspense>
                        <GridFilledLayout />
                    </Suspense>
                </div>
            </main>
        </>
    );
}
