interface LoadingCircleProps {
  size?: number
}

export default function LoadingCircle({ size = 30 }: LoadingCircleProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={"border-4 border-blue-500 border-t-transparent rounded-full animate-spin"}
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>
    </div>
  )
}
