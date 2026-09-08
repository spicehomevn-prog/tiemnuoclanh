export interface Product {
  id: string
  name: { vi: string; en: string }
  description: { vi: string; en: string }
  price: number | null
  categoryId: string
  signature?: boolean
  swatch: string
  imageSrc: string | null
  imagePosition?: string
}

export interface Category {
  id: string
  name: { vi: string; en: string }
}

export interface Topping {
  id: string
  name: { vi: string; en: string }
  price: number
  imageSrc?: string | null
}

export const categories: Category[] = [
  { id: 'rau-ma',       name: { vi: 'Rau Má',       en: 'Pennywort'    } },
  { id: 'dua-tuoi',     name: { vi: 'Dừa Tươi',     en: 'Fresh Coconut'} },
  { id: 'ca-phe',       name: { vi: 'Cà Phê',        en: 'Coffee'       } },
  { id: 'tra-trai-cay', name: { vi: 'Trà Trái Cây',  en: 'Fruit Tea'    } },
]

export const toppings: Topping[] = [
  // Trân châu
  { id: 'tran-chau-dua',                   name: { vi: 'Trân Châu Dừa',                             en: 'Coconut Pearls'                        }, price: 7000,  imageSrc: '/images/products/tran-chau-dua-non.JPG'                   },
  { id: 'tran-chau-dua-la-dua',            name: { vi: 'Trân Châu Dừa Lá Dứa',                       en: 'Pandan Coconut Pearls'                 }, price: 7000,  imageSrc: '/images/products/tran-chau-dua-non-la-dua.JPG'            },
  { id: 'tran-chau-dua-thanh-long-do',     name: { vi: 'Trân Châu Dừa Thanh Long Đỏ',                en: 'Red Dragon Fruit Coconut Pearls'       }, price: 7000,  imageSrc: '/images/products/tran-chau-dua-thanh-long-do.JPG'         },
  { id: 'tran-chau-cu-nang',               name: { vi: 'Trân Châu Củ Năng',                           en: 'Water Chestnut Pearls'                 }, price: 5000,  imageSrc: '/images/products/tran-chau-cu-nang.JPG'                   },
  { id: 'tran-chau-cu-nang-thanh-long-do', name: { vi: 'Trân Châu Củ Năng Thanh Long Đỏ',            en: 'Red Dragon Fruit Water Chestnut Pearls'}, price: 5000,  imageSrc: '/images/products/tran-chau-cu-nang-thanh-long-do.JPG'    },
  // Thạch
  { id: 'thach-dua-tuoi',                  name: { vi: 'Thạch Dừa Tươi',                              en: 'Fresh Coconut Jelly'                   }, price: 5000,  imageSrc: '/images/products/thach-dua-tuoi.JPG'                      },
  { id: 'thach-la-dua',                    name: { vi: 'Thạch Lá Dứa',                                 en: 'Pandan Jelly'                          }, price: 5000,  imageSrc: '/images/products/thach-la-dua.JPG'                        },
  { id: 'thach-thanh-long-do',             name: { vi: 'Thạch Thanh Long Đỏ',                          en: 'Red Dragon Fruit Jelly'                }, price: 5000,  imageSrc: '/images/products/thach-thanh-long.JPG'                    },
  { id: 'mix-3-loai-thach',               name: { vi: 'Mix 3 Loại Thạch (Thanh Long, Lá Dứa, Dừa)',  en: 'Mix 3 Jellies (Dragon Fruit, Pandan, Coconut)' }, price: 10000, imageSrc: '/images/products/mix-3-thach.jpg'              },
  // Hạt
  { id: 'hat-dac-rim-thot-not',            name: { vi: 'Hạt Đác Rim Thốt Nốt',                        en: 'Palm Seeds in Palm Sugar'              }, price: 7000,  imageSrc: null                                                       },
]

export const products: Product[] = [
  // ── RAU MÁ ──────────────────────────────────────────────────────────────────
  {
    id: 'rau-ma-truyen-thong',
    name:        { vi: 'Rau Má Nguyên Chất Truyền Thống', en: 'Natural Fresh Pennywort Juice' },
    description: { vi: 'Rau má nguyên chất, ép tươi mỗi ngày — vị thanh mát, giữ trọn hương vị tự nhiên.', en: 'Pure pennywort pressed fresh daily — clean, naturally refreshing.' },
    price: 14000, categoryId: 'rau-ma', swatch: '#E3E9DD', imageSrc: '/images/products/rau-ma-truyen-thong.JPG', imagePosition: 'top 20%',
  },
  {
    id: 'rau-ma-dua',
    name:        { vi: 'Rau Má Dừa Tươi', en: 'Fresh Coconut Pennywort' },
    description: { vi: 'Rau má kết hợp nước dừa tươi — thanh ngọt, bổ mát.', en: 'Pennywort blended with fresh coconut juice — light, sweet and cooling.' },
    price: 22000, categoryId: 'rau-ma', swatch: '#E3E9DD', imageSrc: '/images/products/rau-ma-dua-tuoi.JPG', imagePosition: 'top 20%',
  },
  {
    id: 'rau-ma-dau-xanh',
    name:        { vi: 'Rau Má Đậu Xanh', en: 'Mung Bean Pennywort' },
    description: { vi: 'Rau má xay cùng đậu xanh — bổ dưỡng, thanh nhiệt.', en: 'Pennywort with blended mung bean — nourishing and cooling.' },
    price: 22000, categoryId: 'rau-ma', swatch: '#E3E9DD', imageSrc: '/images/products/rau-ma-dau-xanh.JPG',
  },
  {
    id: 'rau-ma-sua-dua',
    name:        { vi: 'Rau Má Sữa Dừa', en: 'Coconut Milk Pennywort' },
    description: { vi: 'Rau má hoà cùng sữa dừa béo nhẹ — vị mượt mà, thơm dịu.', en: 'Pennywort blended with creamy coconut milk — smooth and subtly fragrant.' },
    price: 22000, categoryId: 'rau-ma', signature: true, swatch: '#E3E9DD', imageSrc: '/images/products/rau-ma-sua-dua.JPG',
  },
  {
    id: 'rau-ma-dau-xanh-sua-dua',
    name:        { vi: 'Rau Má Đậu Xanh Sữa Dừa', en: 'Mung Bean Coconut Milk Pennywort' },
    description: { vi: 'Bộ ba hoàn hảo: rau má tươi, đậu xanh và sữa dừa — đậm đà, bổ dưỡng.', en: 'The perfect trio: fresh pennywort, mung bean and coconut milk.' },
    price: 24000, categoryId: 'rau-ma', signature: true, swatch: '#E3E9DD', imageSrc: '/images/products/rau-ma-dau-xanh-sua-dua.JPG',
  },
  {
    id: 'rau-ma-dau-xanh-sua-dua-tran-chau',
    name:        { vi: 'Rau Má Đậu Xanh Sữa Dừa Trân Châu Dừa Non', en: 'Mung Bean Coconut Milk Pennywort with Coconut Pearls' },
    description: { vi: 'Rau má đậu xanh sữa dừa thêm trân châu dừa non giòn dai — thức uống đầy đặn nhất của Lành.', en: 'Our richest drink — mung bean coconut pennywort topped with chewy young coconut pearls.' },
    price: 26000, categoryId: 'rau-ma', swatch: '#E3E9DD', imageSrc: '/images/products/rau-ma-dau-xanh-sua-dua-tran-chau.JPG',
  },

  // ── DỪA TƯƠI ────────────────────────────────────────────────────────────────
  {
    id: 'dua-tuoi-ly',
    name:        { vi: 'Dừa Tươi Ly', en: 'Fresh Coconut Juice' },
    description: { vi: 'Nước dừa tươi nguyên chất, lạnh mát — thanh giải nhiệt tức thì.', en: 'Pure fresh coconut juice, served chilled — instantly refreshing.' },
    price: 14000, categoryId: 'dua-tuoi', swatch: '#F0E8D8', imageSrc: null,
  },
  {
    id: 'dua-tuoi-sot-tac-tran-chau',
    name:        { vi: 'Dừa Tươi Sốt Tắc Trân Châu Dừa Non', en: 'Coconut Juice with Kumquat Sauce & Coconut Pearls' },
    description: { vi: 'Nước dừa tươi rưới sốt tắc chua ngọt, thêm trân châu dừa non giòn dai.', en: 'Fresh coconut juice with tangy kumquat sauce and chewy young coconut pearls.' },
    price: 22000, categoryId: 'dua-tuoi', swatch: '#F0E8D8', imageSrc: '/images/products/dua-tac-tran-chau-dua-non.JPG',
  },
  {
    id: 'dua-tuoi-tran-chau-dua-non',
    name:        { vi: 'Dừa Tươi Trân Châu Dừa Non', en: 'Fresh Coconut Juice with Coconut Pearls' },
    description: { vi: 'Nước dừa tươi cùng trân châu dừa non — đơn giản mà ngon.', en: 'Fresh coconut juice with young coconut pearls — simple and delicious.' },
    price: 22000, categoryId: 'dua-tuoi', swatch: '#F0E8D8', imageSrc: '/images/products/dua-tuoi-tran-chau-dua-non.JPG',
  },

  // ── CÀ PHÊ ──────────────────────────────────────────────────────────────────
  {
    id: 'ca-phe-den',
    name:        { vi: 'Cà Phê Đen', en: 'Black Coffee' },
    description: { vi: 'Cà phê phin truyền thống — đậm vị, thơm nồng.', en: 'Traditional Vietnamese drip coffee — bold and aromatic.' },
    price: 15000, categoryId: 'ca-phe', swatch: '#D9CBAF', imageSrc: '/images/products/ca-phe-den.jpg',
  },
  {
    id: 'ca-phe-sua',
    name:        { vi: 'Cà Phê Sữa', en: 'Vietnamese Iced Coffee' },
    description: { vi: 'Cà phê đen pha sữa đặc — đậm ngọt kiểu truyền thống Việt.', en: 'Drip coffee with condensed milk — classic Vietnamese style.' },
    price: 18000, categoryId: 'ca-phe', swatch: '#D9CBAF', imageSrc: '/images/products/ca-phe-sua.jpg',
  },
  {
    id: 'ca-phe-sua-tuoi',
    name:        { vi: 'Cà Phê Sữa Tươi', en: 'Coffee with Fresh Milk' },
    description: { vi: 'Cà phê phin pha cùng sữa tươi — vị dịu nhẹ, thanh hơn sữa đặc.', en: 'Drip coffee with fresh milk — lighter and smoother.' },
    price: 20000, categoryId: 'ca-phe', swatch: '#D9CBAF', imageSrc: '/images/products/ca-phe-sua-tuoi.jpg',
  },
  {
    id: 'ca-phe-sua-dua',
    name:        { vi: 'Cà Phê Sữa Dừa', en: 'Coconut Milk Coffee' },
    description: { vi: 'Cà phê hoà quyện sữa dừa béo nhẹ — thơm dịu, khác biệt.', en: 'Coffee blended with creamy coconut milk — fragrant and unique.' },
    price: 22000, categoryId: 'ca-phe', swatch: '#D9CBAF', imageSrc: '/images/products/ca-phe-sua-dua.jpg',
  },

  // ── TRÀ TRÁI CÂY ────────────────────────────────────────────────────────────
  {
    id: 'tra-tac-tran-chau-dua-non',
    name:        { vi: 'Trà Tắc Trân Châu Dừa Non', en: 'Kumquat Tea with Coconut Pearls' },
    description: { vi: 'Trà tắc chua ngọt thanh mát, thêm trân châu dừa non giòn dai.', en: 'Sweet-tangy kumquat tea topped with chewy young coconut pearls.' },
    price: 22000, categoryId: 'tra-trai-cay', swatch: '#F5E6C8', imageSrc: '/images/products/tra-tac-tran-chau-dua-non.JPG',
  },
  {
    id: 'tra-tac-thach-3-vi',
    name:        { vi: 'Trà Tắc Thạch 3 Vị', en: 'Kumquat Tea with Mixed Jelly' },
    description: { vi: 'Trà tắc kết hợp 3 loại thạch: thanh long đỏ, lá dứa và dừa tươi — màu sắc bắt mắt, vị đa tầng.', en: 'Kumquat tea with 3 jelly flavours: dragon fruit, pandan and coconut.' },
    price: 22000, categoryId: 'tra-trai-cay', swatch: '#F5E6C8', imageSrc: null,
  },
  {
    id: 'tra-thanh-long-do-thach-thanh-long',
    name:        { vi: 'Trà Thanh Long Đỏ Thạch Thanh Long', en: 'Red Dragon Fruit Tea with Dragon Fruit Jelly' },
    description: { vi: 'Trà thanh long đỏ tươi, thêm thạch thanh long — màu đỏ hồng rực rỡ, vị ngọt thanh.', en: 'Fresh red dragon fruit tea topped with dragon fruit jelly — vibrant and refreshing.' },
    price: 22000, categoryId: 'tra-trai-cay', swatch: '#F5E6C8', imageSrc: '/images/products/tra-thanh-long-do.JPG',
  },
]

export function formatPrice(price: number | null, lang: 'vi' | 'en' = 'vi'): string {
  if (price === null) return lang === 'vi' ? 'Liên hệ' : 'TBA'
  return price.toLocaleString('vi-VN') + 'đ'
}
