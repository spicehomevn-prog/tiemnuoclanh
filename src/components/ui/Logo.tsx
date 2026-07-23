import Image from 'next/image'

type Variant = 'default' | 'cream' | 'mono'

interface Props {
  size?: number
  variant?: Variant
  className?: string
}

const srcMap: Record<Variant, string> = {
  default: '/images/logo-lanh.svg',
  cream: '/images/logo-lanh-cream.svg',
  mono: '/images/logo-lanh-mono.svg',
}

export default function Logo({ size = 120, variant = 'default', className = '' }: Props) {
  const width = Math.round(250 * (size / 120))
  const height = Math.round(96 * (size / 120))
  return (
    <Image
      src={srcMap[variant]}
      alt="Lành"
      width={width}
      height={height}
      priority
      className={className}
    />
  )
}
