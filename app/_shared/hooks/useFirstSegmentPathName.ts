import { usePathname } from "next/navigation";

export const useFirstSegmentPathName = () => {
    return `/${usePathname().split("/")[1]}`;
};
