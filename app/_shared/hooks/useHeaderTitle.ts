import { useFirstSegmentPathName } from "@/app/_shared/hooks/useFirstSegmentPathName";
import { HEADER_TITLE, PATHS } from "@/app/types/types";
import { usePathname } from "next/navigation";

export const useHeaderTitle = () => {
    const pathName = usePathname();
    const firstSegpath = useFirstSegmentPathName();
    if (firstSegpath === PATHS.gallery)
        return pathName.split("/").pop()?.split("-").join(" ");
    return HEADER_TITLE[pathName as PATHS];
};
