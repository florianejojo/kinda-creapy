// app/about/page.tsx
import React from "react";

export default function AboutPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mt-10">
                About the Artist
            </h1>
            <div className="mt-4">
                <p className="text-lg">
                    [Artist's Name] is an accomplished surrealist artist based
                    in [City]. With a passion for creating evocative and
                    thought-provoking works, [Artist's Name] has exhibited in
                    numerous galleries and exhibitions around the world. Their
                    art explores themes of [mention some themes], utilizing
                    techniques such as [mention techniques].
                </p>
                <p className="text-lg mt-4">
                    [Artist's Name] began their artistic journey at [mention
                    some background], and has since developed a unique style
                    that captivates and inspires. When not in the studio,
                    [Artist's Name] enjoys [mention hobbies or other interests].
                </p>
            </div>
        </div>
    );
}
