"use client";
type FrameProps = {
    children: React.ReactNode;
    color: string;
};

export const Frame = ({ children, color }: FrameProps) => {
    return (
        <div
            className="border-4 "
            style={{
                borderColor: color,
                backgroundColor: "white",
            }}
        >
            {children}
        </div>
    );
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
