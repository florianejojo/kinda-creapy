export default function ShopPage({
    params,
}: {
    params: { categoryId: string };
}) {
    const { categoryId } = params;
    return "SHOP";
    return (
        <div>
            <h1>Shop Page - Category: {categoryId}</h1>
            {/* Utilisation du composant CategoryFilter avec le chemin de base pour Shop */}
            {/* <CategoryFilter basePath="/home/shop" /> */}

            {/* Afficher les produits filtrés en fonction de la catégorie */}
            <div>
                <p>Produits pour la catégorie : {categoryId}</p>
            </div>
        </div>
    );
}
