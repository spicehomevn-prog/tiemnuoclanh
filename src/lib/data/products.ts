export interface Product {
  id: string
  name: { vi: string; en: string }
  description: { vi: string; en: string }
  price: number
  badge?: { vi: string; en: string }
  swatch: string
  imageSrc: string | null
}

export const products: Product[] = [
  {
    id: 'rau-ma',
    name: { vi: 'Rau Má Nguyên Chất 300ml', en: 'Fresh Pennywort 300ml' },
    description: {
      vi: 'Vị mát lành từ rau má tươi, cân bằng nhẹ nhàng cho ngày dài. Nguồn chất xơ và khoáng chất tự nhiên.',
      en: 'Cool and refreshing from fresh pennywort, a gentle balance for long days. A natural source of fiber and minerals.',
    },
    price: 42000,
    badge: { vi: 'Bán chạy', en: 'Bestseller' },
    swatch: '#E3E9DD',
    imageSrc: null,
  },
  {
    id: 'nuoc-sam',
    name: { vi: 'Nước Sâm Bí Đao 300ml', en: 'Winter Melon Herbal 300ml' },
    description: {
      vi: 'Nước sâm truyền thống nấu từ bí đao và thảo mộc, thanh nhiệt giải độc, ngọt tự nhiên.',
      en: 'Traditional herbal drink brewed from winter melon and herbs, cooling and naturally sweet.',
    },
    price: 45000,
    swatch: '#F0E8D8',
    imageSrc: null,
  },
  {
    id: 'thao-moc',
    name: { vi: 'Thảo Mộc Thanh Mát 300ml', en: 'Cooling Herbal Blend 300ml' },
    description: {
      vi: 'Hỗn hợp thảo mộc mùa hè: sâm dứa, mía lau, cỏ ngọt — thanh mát, bồi bổ sức khỏe.',
      en: 'Summer herbal blend: pandan root, sugarcane, stevia — refreshing and nourishing.',
    },
    price: 45000,
    swatch: '#EBE3D2',
    imageSrc: null,
  },
  {
    id: 'combo',
    name: { vi: 'Combo Tươi Mới 6 chai', en: 'Fresh Combo 6 bottles' },
    description: {
      vi: '2 chai rau má + 2 chai nước sâm + 2 chai thảo mộc — tiết kiệm hơn mua lẻ.',
      en: '2 pennywort + 2 winter melon + 2 herbal — save more than buying individually.',
    },
    price: 240000,
    badge: { vi: 'Mới', en: 'New' },
    swatch: '#CBD5C1',
    imageSrc: null,
  },
]

export function formatPrice(price: number): string {
  return price.toLocaleString('vi-VN') + 'đ'
}
