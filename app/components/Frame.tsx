import Image from "next/image";

export const Frame = ({ children }) => {
    return (
        <div className="border-4 border-b-orange-900/90 border-r-orange-900/90  border-t-black border-l-black">
            <div className="border-8 border-orange-900/70">
                <div className="bg-yellow-100/90 p-10">
                    <div className="border-4 border-white/55">{children}</div>
                </div>
            </div>
        </div>
    );
};
