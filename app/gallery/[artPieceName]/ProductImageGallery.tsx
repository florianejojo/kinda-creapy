type ProductImageGalleryProps = {
  image: string
  alt?: string
}

export const ProductImageGallery = ({
  image,
  alt = "",
}: ProductImageGalleryProps) => (
  <div className="w-full h-full overflow-hidden rounded-xl shadow-md">
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
)
