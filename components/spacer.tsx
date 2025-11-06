import React from "react"

interface SpacerProps {
  size?: string | number
  horizontal?: boolean
  className?: string
}

const Spacer: React.FC<SpacerProps> = ({ size = 16, horizontal = false, className = "" }) => {
  const style = horizontal
    ? { width: size, height: "1px", display: "inline-block" }
    : { height: size, width: "1px", display: "block" }

  return <span style={style} aria-hidden="true" className={className} />
}

export default Spacer
