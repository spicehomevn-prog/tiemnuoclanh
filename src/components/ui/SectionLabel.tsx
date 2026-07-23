interface Props {
  children: React.ReactNode
  inverse?: boolean
  rule?: boolean
  className?: string
}

export default function SectionLabel({ children, inverse = false, rule = true, className = '' }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {rule && (
        <span
          className={`block h-px w-8 flex-shrink-0 ${inverse ? 'bg-cream/40' : 'bg-olive/40'}`}
        />
      )}
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
