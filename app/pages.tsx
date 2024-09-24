import { useRouter } from "next/navigation";

export default function ShopPage() {
    const router = useRouter();
    console.log(router);
    const categoryId = router.query.categoryId || "all"; // Par défaut, on pourrait afficher "all" ou une catégorie par défaut

    return (
        <div>
            <h1>Shop Page - Category: {categoryId}</h1>
            {/* Utilisation du composant CategoryFilter avec le chemin de base pour Shop */}
            {/* <CategoryFilter basePath="/home/shop" /> */}

            {/* Afficher les produits filtrés en fonction de la catégorie */}
            <div>
                {/* Afficher ici les produits en fonction de la catégorie */}
                <p>Produits pour la catégorie : {categoryId}</p>
            </div>
        </div>
    );
}
