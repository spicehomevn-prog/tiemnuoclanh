interface Props {
  size?: number
  color?: string
  leafColor?: string
  veinsColor?: string
  className?: string
}

export default function Logo({
  size = 120,
  color = '#34462F',
  leafColor = '#6B7645',
  veinsColor = '#FAF6EE',
  className = '',
}: Props) {
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
        letterSpacing="-1"
        fill={color}
      >
        Lành
      </text>
      <g transform="translate(86,15) rotate(-40) scale(0.66) translate(-22,-27)">
        <path
          d="M22 3 C39 15 41 36 24 51 C23 51.6 21 51.6 20 51 C3 36 5 15 22 3 Z"
          fill={leafColor}
        />
        <path
          d="M22 9 C22 24 22 38 22 48"
          stroke={veinsColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          opacity={0.5}
        />
        <path
          d="M22 20 L31 15 M22 30 L31 26 M22 20 L13 15 M22 30 L13 26"
          stroke={veinsColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity={0.4}
        />
      </g>
    </svg>
  )
}
