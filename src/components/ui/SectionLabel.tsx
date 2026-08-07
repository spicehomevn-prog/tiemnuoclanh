interface Props {
  children: React.ReactNode
  inverse?: boolean
  rule?: boolean
  className?: string
}

function PennywortLeaf({ inverse }: { inverse: boolean }) {
  return (
    <svg
      viewBox="0 0 11 14"
      width={11}
      height={14}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`flex-shrink-0 ${inverse ? 'text-cream/50' : 'text-olive/60'}`}
    >
      {/* Leaf body — round with slightly pointed tip */}
      <path d="M5.5 1 C8.5 1 10 3.5 10 6 C10 9.2 8 11.5 5.5 11.5 C3 11.5 1 9.2 1 6 C1 3.5 2.5 1 5.5 1 Z" />
      {/* Center vein */}
      <line x1="5.5" y1="5.5" x2="5.5" y2="11.5" />
      {/* Upper side veins */}
      <line x1="5.5" y1="4.5" x2="2.5" y2="6.5" />
      <line x1="5.5" y1="4.5" x2="8.5" y2="6.5" />
      {/* Lower side veins */}
      <line x1="5.5" y1="7.5" x2="3" y2="9.8" />
      <line x1="5.5" y1="7.5" x2="8" y2="9.8" />
      {/* Stem */}
      <line x1="5.5" y1="11.5" x2="5.5" y2="13.5" />
    </svg>
  )
}

export default function SectionLabel({ children, inverse = false, rule = true, className = '' }: Props) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {rule && <PennywortLeaf inverse={inverse} />}
      <span
        className={`text-xs font-semibold uppercase tracking-eyebrow ${
          inverse ? 'text-cream/70' : 'text-olive'
        }`}
      >
        {children}
      </span>
    </div>
  )
}
