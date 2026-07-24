type Variant = 'default' | 'cream' | 'mono'

interface Props {
  size?: number
  variant?: Variant
  className?: string
}

const colorMap: Record<Variant, { text: string; leaf: string; vein: string }> = {
  default: { text: '#34462F', leaf: '#6B7645', vein: '#FAF6EE' },
  cream:   { text: '#FAF6EE', leaf: '#AFC08A', vein: '#34462F' },
  mono:    { text: '#34462F', leaf: '#34462F', vein: '#FAF6EE' },
}

export default function Logo({ size = 120, variant = 'default', className = '' }: Props) {
  const width  = Math.round(250 * (size / 120))
  const height = Math.round(96  * (size / 120))
  const { text, leaf, vein } = colorMap[variant]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 96"
      width={width}
      height={height}
      role="img"
      aria-label="Lành"
      className={className}
    >
      <text
        x="6"
        y="66"
        style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
        fontWeight="600"
        fontSize="70"
        letterSpacing="-1"
        fill={text}
      >
        Lanh
      </text>
      <g transform="translate(74,15) rotate(-40) scale(0.66) translate(-22,-27)">
        <path
          d="M22 3 C39 15 41 36 24 51 C23 51.6 21 51.6 20 51 C3 36 5 15 22 3 Z"
          fill={leaf}
        />
        <path
          d="M22 9 C22 24 22 38 22 48"
          stroke={vein} strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.5"
        />
        <path
          d="M22 20 L31 15 M22 30 L31 26 M22 20 L13 15 M22 30 L13 26"
          stroke={vein} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.4"
        />
      </g>
    </svg>
  )
}
