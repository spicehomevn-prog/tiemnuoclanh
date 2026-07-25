export interface Product {
  id: string
  name: { vi: string; en: string }
  description: { vi: string; en: string }
  price: number | null
  categoryId: string
  signature?: boolean
  swatch: string
  imageSrc: string | null
}

export interface Category {
  id: string
  name: { vi: string; en: string }
}

export interface Topping {
  id: string
  name: { vi: string; en: string }
  price: number
}

export const categories: Category[] = [
  { id: 'rau-ma',   name: { vi: 'Rau Má',   en: 'Pennywort' } },
  { id: 'dua-tuoi', name: { vi: 'Dừa Tươi', en: 'Fresh Coconut' } },
  { id: 'ca-phe',   name: { vi: 'Cà Phê',   en: 'Coffee' } },
  { id: 'thao-moc', name: { vi: 'Thảo Mộc', en: 'Herbal' } },
  { id: 'theo-mua', name: { vi: 'Theo Mùa', en: 'Seasonal' } },
]

export const toppings: Topping[] = [
  { id: 'hat-e',             name: { vi: 'Hạt é',             en: 'Basil Seeds' },            price: 5000 },
  { id: 'tran-chau-dua',     name: { vi: 'Trân châu dừa',     en: 'Coconut Pearls' },         price: 7000 },
  { id: 'tran-chau-cu-nang', name: { vi: 'Trân châu củ năng', en: 'Water Chestnut Pearls' },  price: 7000 },
  { id: 'suong-sao',         name: { vi: 'Sương sáo',         en: 'Grass Jelly' },            price: 5000 },
  { id: 'thach-la-dua',      name: { vi: 'Thạch lá dứa',      en: 'Pandan Jelly' },           price: 5000 },
  { id: 'thach-dua-tuoi',    name: { vi: 'Thạch dừa tươi',    en: 'Fresh Coconut Jelly' },    price: 5000 },
]

export const products: Product[] = [
  // ── RAU MÁ ──────────────────────────────────────────────────────────────────
  { id: 'rau-ma-dua',                name: { vi: 'Rau Má Dừa Tươi',               en: 'Fresh Coconut Pennywort' },      description: { vi: '', en: '' }, price: 22000, categoryId: 'rau-ma', signature: true,  swatch: '#E3E9DD', imageSrc: null },
  { id: 'rau-ma-sua-dua',            name: { vi: 'Rau Má Sữa Dừa',                en: 'Coconut Milk Pennywort' },       description: { vi: '', en: '' }, price: 22000, categoryId: 'rau-ma', signature: true,  swatch: '#E3E9DD', imageSrc: null },
  { id: 'rau-ma-com-dua',            name: { vi: 'Rau Má Cơm Dừa',                en: 'Coconut Flesh Pennywort' },      description: { vi: '', en: '' }, price: 22000, categoryId: 'rau-ma', signature: true,  swatch: '#E3E9DD', imageSrc: null },
  { id: 'rau-ma-dau-xanh',           name: { vi: 'Rau Má Đậu Xanh',               en: 'Mung Bean Pennywort' },          description: { vi: '', en: '' }, price: 22000, categoryId: 'rau-ma', signature: true,  swatch: '#E3E9DD', imageSrc: null },
  { id: 'rau-ma-sau-rieng-sua-dua',  name: { vi: 'Rau Má Sầu Riêng Sữa Dừa',      en: 'Durian Coconut Milk Pennywort' }, description: { vi: '', en: '' }, price: 26000, categoryId: 'rau-ma', signature: true,  swatch: '#E3E9DD', imageSrc: null },
  { id: 'rau-ma-dau-xanh-sua-dua',   name: { vi: 'Rau Má Đậu Xanh Sữa Dừa',       en: 'Mung Bean Coconut Milk Pennywort' }, description: { vi: '', en: '' }, price: 22000, categoryId: 'rau-ma', signature: true, swatch: '#E3E9DD', imageSrc: null },
  { id: 'rau-ma-truyen-thong',       name: { vi: 'Rau Má Truyền Thống Nguyên Chất', en: 'Traditional Pure Pennywort' },  description: { vi: '', en: '' }, price: 14000, categoryId: 'rau-ma', swatch: '#E3E9DD', imageSrc: null },

  // ── DỪA TƯƠI ────────────────────────────────────────────────────────────────
  { id: 'dua-tuoi-ly',  name: { vi: 'Dừa Tươi Ly',  en: 'Fresh Coconut' },        description: { vi: '', en: '' }, price: 14000, categoryId: 'dua-tuoi', swatch: '#F0E8D8', imageSrc: null },
  { id: 'dua-sot-tac',  name: { vi: 'Dừa Sốt Tắc',  en: 'Coconut with Kumquat' }, description: { vi: '', en: '' }, price: 22000, categoryId: 'dua-tuoi', swatch: '#F0E8D8', imageSrc: null },
  { id: 'dua-la-dua',   name: { vi: 'Dừa Lá Dứa',   en: 'Pandan Coconut' },       description: { vi: '', en: '' }, price: 22000, categoryId: 'dua-tuoi', swatch: '#F0E8D8', imageSrc: null },

  // ── CÀ PHÊ ──────────────────────────────────────────────────────────────────
  { id: 'ca-phe-dua',     name: { vi: 'Cà Phê Dừa',     en: 'Coconut Coffee' },      description: { vi: '', en: '' }, price: 24000, categoryId: 'ca-phe', signature: true, swatch: '#D9CBAF', imageSrc: null },
  { id: 'ca-phe-den',     name: { vi: 'Cà Phê Đen',     en: 'Black Coffee' },        description: { vi: '', en: '' }, price: 15000, categoryId: 'ca-phe', swatch: '#D9CBAF', imageSrc: null },
  { id: 'ca-phe-sua',     name: { vi: 'Cà Phê Sữa',     en: 'Milk Coffee' },         description: { vi: '', en: '' }, price: 18000, categoryId: 'ca-phe', swatch: '#D9CBAF', imageSrc: null },
  { id: 'ca-phe-sua-dua', name: { vi: 'Cà Phê Sữa Dừa', en: 'Coconut Milk Coffee' }, description: { vi: '', en: '' }, price: 24000, categoryId: 'ca-phe', swatch: '#D9CBAF', imageSrc: null },

  // ── THẢO MỌC ────────────────────────────────────────────────────────────────
  { id: 'nuoc-sam', name: { vi: 'Nước Sâm Nhà Làm', en: 'Homemade Herbal Tea' }, description: { vi: '', en: '' }, price: 14000, categoryId: 'thao-moc', swatch: '#EBE3D2', imageSrc: null },

  // ── THEO MÙA ────────────────────────────────────────────────────────────────
  { id: 'ca-cao-sua-dua', name: { vi: 'Ca Cao Sữa Dừa', en: 'Coconut Milk Cacao' }, description: { vi: '', en: '' }, price: 24000, categoryId: 'theo-mua', swatch: '#CBD5C1', imageSrc: null },
]

export function formatPrice(price: number | null, lang: 'vi' | 'en' = 'vi'): string {
  if (price === null) return lang === 'vi' ? 'Liên hệ' : 'TBA'
  return price.toLocaleString('vi-VN') + 'đ'
}
