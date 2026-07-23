interface Props {
  size?: number
  color?: string
  leafColor?: string
  className?: string
}

export default function Logo({ size = 120, color = '#34462F', leafColor = '#6B7645', className = '' }: Props) {
  const scale = size / 120
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 96"
      width={250 * scale}
      height={96 * scale}
      role="img"
      aria-label="Lành"
      className={className}
    >
      <text
        x="6"
        y="66"
        fontFamily="var(--font-display), Georgia, serif"
        fontWeight="600"
        fontSize="70"
        fill={color}
        letterSpacing="-1"
      >
        Lành
      </text>
      <g transform="translate(96,8) rotate(62)">
        <path d="M2 12 C6 4 20 0 28 2 C25 12 10 15 2 12 Z" fill={leafColor} />
        <path
          d="M5 11 C12 8 20 5 26 3"
          stroke={color}
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
          opacity=".5"
        />
      </g>
    </svg>
  )
}
