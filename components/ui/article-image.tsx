import Image from "next/image"

interface ArticleImageProps {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export function ArticleImage({ src, alt, width, height, caption }: ArticleImageProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && <figcaption className="text-center text-sm text-gray-500 mt-2">{caption}</figcaption>}
    </figure>
  )
}
