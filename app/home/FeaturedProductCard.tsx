import { Frame } from "@/app/_shared/Frame"

type FeaturedProductCardProps = {
  title: string
  image: string
  price: string
  alt: string
}

export const FeaturedProductCard = ({
  title,
  image,
  price,
  alt,
}: FeaturedProductCardProps) => (
  <div
    className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"
    style={{ animation: "fadeInUp 0.5s ease-in-out forwards" }}
  >
    <div className="w-full h-64 object-cover">
      <Frame image={image} alt={alt} isLazyLoaded={false} />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  </div>
)
