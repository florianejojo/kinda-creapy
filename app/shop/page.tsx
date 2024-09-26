import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShopPage({}: { params: { categoryId: string } }) {
    return (
        <div className=" min-h-40 flex items-center flex-col justify-between ">
            <h1>SOON ... </h1>
            <FontAwesomeIcon icon={faCartShopping} className="text-6xl" />
        </div>
    );
}
