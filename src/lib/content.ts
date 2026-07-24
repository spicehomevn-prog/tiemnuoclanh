export type Lang = 'vi' | 'en'

export const content = {
  nav: {
    vi: {
      shop: 'Cửa hàng',
      story: 'Câu chuyện',
      contact: 'Liên hệ',
      order: 'Đặt hàng',
    },
    en: {
      shop: 'Shop',
      story: 'Our Story',
      contact: 'Contact',
      order: 'Order Now',
    },
  },
  promo: {
    vi: 'GIAO HÀNG MIỄN PHÍ CHO ĐƠN TỪ 300.000đ',
    en: 'FREE DELIVERY FOR ORDERS OVER 300,000đ',
  },
  hero: {
    vi: {
      eyebrow: 'Nguyên liệu thật',
      heading: 'Uống một điều tốt cho bản thân mỗi ngày.',
      description: 'Rau má, nước sâm và thảo mộc làm từ nguyên liệu thật — ít chế biến, không đường tinh luyện, không chất bảo quản.',
      featuredName: 'Rau Má Nguyên Chất',
      featuredDesc: 'Vị mát lành từ rau má tươi, cân bằng nhẹ nhàng cho ngày dài. Nguồn chất xơ và khoáng chất tự nhiên.',
      cta: 'Mua ngay',
      imageAlt: 'Chai rau má nguyên chất Lành',
    },
    en: {
      eyebrow: 'Real Ingredients',
      heading: 'Drink something good for yourself, every day.',
      description: 'Pennywort, herbal drinks, made from real ingredients — minimally processed, no refined sugar, no preservatives.',
      featuredName: 'Fresh Pennywort',
      featuredDesc: 'Cool and refreshing from fresh pennywort, a gentle balance for long days. A natural source of fiber and minerals.',
      cta: 'Buy Now',
      imageAlt: 'Lành fresh pennywort bottle',
    },
  },
  benefits: {
    vi: [
      { icon: 'Zap', label: 'Năng lượng' },
      { icon: 'Sprout', label: 'Tiêu hóa' },
      { icon: 'Brain', label: 'Tỉnh táo' },
      { icon: 'HeartPulse', label: 'Phục hồi' },
      { icon: 'Leaf', label: 'Thanh mát' },
    ],
    en: [
      { icon: 'Zap', label: 'Energy' },
      { icon: 'Sprout', label: 'Digestion' },
      { icon: 'Brain', label: 'Clarity' },
      { icon: 'HeartPulse', label: 'Recovery' },
      { icon: 'Leaf', label: 'Refreshing' },
    ],
  },
  brandIntro: {
    vi: {
      eyebrow: 'Về Lành',
      heading: 'Một khoảng dừng nhỏ, giữa ngày bận rộn.',
      paragraphs: [
        'Lành là một tiệm nước nhỏ nép mình trong một căn homestay yên tĩnh, với góc sân vườn xanh mát và sân thượng đón gió.',
        'Chúng mình phục vụ các loại đồ uống từ rau má, nước sâm thảo mộc, nước ép và những thức uống theo mùa, được làm từ nguyên liệu tươi sạch, tuyển chọn mỗi ngày. Mỗi ly nước đều được ưu tiên giữ trọn hương vị tự nhiên, không pha loãng.',
        'Dù bạn ghé mang đi, đặt giao tận nơi hay ngồi lại thư giãn một lúc, Lành hy vọng sẽ là một khoảng dừng nhỏ — nơi bạn có thể thưởng thức một ly nước ngon và dành cho mình một lựa chọn tốt hơn mỗi ngày.',
      ],
    },
    en: {
      eyebrow: 'About Lành',
      heading: 'A small pause, in the middle of a busy day.',
      paragraphs: [
        'Lành is a small drinks shop nestled in a quiet homestay, with a lush garden corner and a breezy rooftop.',
        'We serve drinks made from pennywort, herbal teas, fresh juices, and seasonal beverages — made from fresh, carefully selected ingredients every day. Each drink prioritizes preserving the natural flavor, undiluted.',
        'Whether you stop by for takeaway, order for delivery, or sit and relax for a while, Lành hopes to be a small pause — a place where you can enjoy a good drink and make a better choice for yourself each day.',
      ],
    },
  },
  products: {
    vi: {
      eyebrow: 'Cửa hàng',
      heading: 'Bộ sưu tập đồ uống lành',
      viewAll: 'Xem toàn bộ sản phẩm',
      buyNow: 'Mua ngay',
      addToCart: 'Thêm vào giỏ',
      priceUnit: 'đ',
    },
    en: {
      eyebrow: 'Shop',
      heading: 'The Lành drinks collection',
      viewAll: 'View all products',
      buyNow: 'Buy Now',
      addToCart: 'Add to cart',
      priceUnit: 'đ',
    },
  },
  story: {
    vi: {
      eyebrow: 'Câu chuyện',
      heading: 'Chăm sóc cơ thể bạn,\ntừng ngụm một.',
      link: 'Sự khác biệt của Lành',
      description: 'Lành bắt đầu từ một niềm tin giản dị: điều tốt cho sức khỏe không cần cầu kỳ. Chúng mình chọn nguyên liệu thật, chế biến tối giản và giữ lại trọn vẹn hương vị tự nhiên — để mỗi ly nước là một lựa chọn nhẹ nhàng, an yên giữa nhịp sống bận rộn.',
      imagePlaceholder: 'Ảnh không gian Lành',
    },
    en: {
      eyebrow: 'Our Story',
      heading: 'Taking care of your body,\none sip at a time.',
      link: "What makes Lành different",
      description: "Lành started from a simple belief: what's good for your health doesn't need to be complicated. We choose real ingredients, minimal processing, and preserve natural flavor in full — so each drink is a gentle, peaceful choice in the rush of daily life.",
      imagePlaceholder: 'Lành space photo',
    },
  },
  ctaBanner: {
    vi: {
      heading: 'Đặt hàng ngay hôm nay.',
      description: 'Giao hàng tận nơi hoặc ghé trực tiếp tại 128/4/3 Trần Hữu Trang, Phú Nhuận.',
      primary: 'Đặt hàng',
      secondary: 'Liên hệ',
    },
    en: {
      heading: 'Order today.',
      description: 'Delivery to your door or visit us at 128/4/3 Tran Huu Trang, Phu Nhuan.',
      primary: 'Order Now',
      secondary: 'Contact Us',
    },
  },
  footer: {
    vi: {
      tagline: 'Đồ uống tự nhiên từ nguyên liệu thật. Nguyên chất mỗi ngày.',
      newsletter: {
        label: 'Nhận ưu đãi & câu chuyện mới từ Lành.',
        placeholder: 'Email của bạn',
        button: 'Đăng ký',
      },
      badges: ['Nguyên liệu thật', 'Không chất bảo quản'],
      columns: [
        {
          heading: 'Cửa hàng',
          links: [
            { label: 'Tất cả sản phẩm', href: '/san-pham' },
            { label: 'Rau má', href: '/san-pham#rau-ma' },
            { label: 'Nước sâm', href: '/san-pham#nuoc-sam' },
            { label: 'Combo', href: '/san-pham#combo' },
          ],
        },
        {
          heading: 'Câu chuyện',
          links: [
            { label: 'Về Lành', href: '/cau-chuyen' },
            { label: 'Nguyên liệu', href: '/cau-chuyen#nguyen-lieu' },
            { label: 'Không gian', href: '/cau-chuyen#khong-gian' },
          ],
        },
        {
          heading: 'Hỗ trợ',
          links: [
            { label: 'Liên hệ', href: '/lien-he' },
            { label: 'Giao hàng', href: '/lien-he#giao-hang' },
            { label: 'Câu hỏi thường gặp', href: '/lien-he#faq' },
          ],
        },
      ],
      copyright: '© 2026 Lành · Nguyên chất mỗi ngày.',
    },
    en: {
      tagline: 'Natural drinks from real ingredients. Pure, every day.',
      newsletter: {
        label: 'Get updates & stories from Lành.',
        placeholder: 'Your email',
        button: 'Subscribe',
      },
      badges: ['Real Ingredients', 'No Preservatives'],
      columns: [
        {
          heading: 'Shop',
          links: [
            { label: 'All Products', href: '/san-pham' },
            { label: 'Pennywort', href: '/san-pham#rau-ma' },
            { label: 'Herbal', href: '/san-pham#nuoc-sam' },
            { label: 'Combo', href: '/san-pham#combo' },
          ],
        },
        {
          heading: 'Story',
          links: [
            { label: 'About Lành', href: '/cau-chuyen' },
            { label: 'Ingredients', href: '/cau-chuyen#nguyen-lieu' },
            { label: 'Our Space', href: '/cau-chuyen#khong-gian' },
          ],
        },
        {
          heading: 'Support',
          links: [
            { label: 'Contact', href: '/lien-he' },
            { label: 'Delivery', href: '/lien-he#giao-hang' },
            { label: 'FAQ', href: '/lien-he#faq' },
          ],
        },
      ],
      copyright: '© 2026 Lành · Pure, every day.',
    },
  },
  sanPham: {
    vi: {
      eyebrow: 'Sản phẩm',
      heading: 'Đồ uống tươi sạch, mỗi ngày',
      description: 'Làm từ nguyên liệu tươi, tuyển chọn kỹ lưỡng — không pha loãng, không chất bảo quản.',
    },
    en: {
      eyebrow: 'Products',
      heading: 'Fresh, clean drinks, every day',
      description: 'Made from fresh, carefully selected ingredients — undiluted, no preservatives.',
    },
  },
  cauChuyen: {
    vi: {
      eyebrow: 'Câu chuyện của Lành',
      heading: 'Một khoảng dừng nhỏ.',
      intro: 'Giữa nhịp sống hối hả, đôi khi điều chúng ta cần chỉ là một khoảng dừng nhỏ.',
      paragraphs: [
        'Lành bắt đầu từ một góc nhỏ trong căn homestay ấm cúng – nơi có khoảng sân xanh đón nắng, vài chiếc bàn gỗ yên tĩnh và sân thượng đầy gió. Một nơi để ghé nhanh mang đi, đặt giao tận nơi, hoặc ngồi lại vài phút để chậm hơn một chút.',
        'Chúng mình tin rằng, một ly nước ngon không cần quá cầu kỳ. Điều quan trọng nhất là nguyên liệu thật.',
        'Mỗi ngày, rau má, dừa, trái cây và các loại thảo mộc đều được tuyển chọn kỹ lưỡng từ những nguồn nguyên liệu tươi sạch. Nước được làm từ nguyên liệu nguyên chất, hạn chế chế biến, không pha loãng để giữ trọn hương vị tự nhiên.',
        'Từ ly rau má dừa mát lành đến nước sâm nấu mỗi ngày, mọi thức uống đều được chuẩn bị với mong muốn mang đến một lựa chọn tốt hơn cho sức khỏe mà vẫn thơm ngon, dễ uống và phù hợp với nhịp sống hiện đại.',
        'Lành không chỉ là một tiệm nước. Đó là một lời nhắc rằng, giữa những ngày bận rộn, bạn vẫn có thể dành cho mình một điều tử tế – bắt đầu từ một ly nước được làm bằng sự chỉn chu và nguyên liệu thật.',
      ],
      closing: 'Lành – Lành từ nguyên liệu, mát từ thiên nhiên.',
    },
    en: {
      eyebrow: "Lành's Story",
      heading: 'A small pause.',
      intro: 'In the rush of daily life, sometimes all we need is a small pause.',
      paragraphs: [
        'Lành started from a small corner in a cozy homestay — where a green yard soaks in the sun, a few quiet wooden tables, and a breezy rooftop. A place to stop by for takeaway, order for delivery, or sit for a few minutes to slow down a little.',
        "We believe a good drink doesn't need to be complicated. The most important thing is real ingredients.",
        'Every day, pennywort, coconut, fruit, and herbs are carefully selected from fresh, clean sources. Drinks are made from pure ingredients, minimally processed, undiluted — to preserve the full natural flavor.',
        'From the cool freshness of coconut pennywort to the herbal brew made each day, every drink is prepared with the hope of offering a better health choice that is still delicious, easy to drink, and suited to modern life.',
        'Lành is not just a drinks shop. It is a reminder that, in busy days, you can still give yourself something kind — starting with a drink made with care and real ingredients.',
      ],
      closing: 'Lành – Wholesome ingredients, fresh from nature.',
    },
  },
  lienHe: {
    vi: {
      eyebrow: 'Liên hệ',
      heading: 'Gặp chúng mình tại Lành.',
      address: {
        label: 'Địa chỉ',
        value: '128/4/3 Trần Hữu Trang, Phú Nhuận, TP.HCM',
      },
      phone: {
        label: 'Số điện thoại',
        thanh: '0979 80 4343 (Thanh)',
        hai: '0355 608 623 (Hải)',
      },
      hours: {
        label: 'Giờ mở cửa',
        value: 'Hàng ngày: 7:00 – 20:00',
      },
      form: {
        heading: 'Gửi tin nhắn',
        name: 'Họ tên',
        phone: 'Số điện thoại',
        message: 'Nội dung',
        submit: 'Gửi',
        note: 'Chúng mình sẽ liên hệ lại trong vòng 24 giờ.',
      },
    },
    en: {
      eyebrow: 'Contact',
      heading: 'Come find us at Lành.',
      address: {
        label: 'Address',
        value: '128/4/3 Tran Huu Trang, Phu Nhuan, Ho Chi Minh City',
      },
      phone: {
        label: 'Phone',
        thanh: '0979 80 4343 (Thanh)',
        hai: '0355 608 623 (Hải)',
      },
      hours: {
        label: 'Opening Hours',
        value: 'Daily: 7:00 AM – 8:00 PM',
      },
      form: {
        heading: 'Send a message',
        name: 'Full name',
        phone: 'Phone number',
        message: 'Message',
        submit: 'Send',
        note: "We'll get back to you within 24 hours.",
      },
    },
  },
  datHang: {
    vi: {
      title: 'Đặt hàng',
      customerSection: 'Thông tin của bạn',
      namePlaceholder: 'Họ và tên',
      phonePlaceholder: 'Số điện thoại',
      cartSection: 'Giỏ hàng',
      total: 'Tổng cộng',
      emptyCart: 'Giỏ hàng trống',
      emptyCartSub: 'Hãy thêm sản phẩm vào giỏ trước khi đặt hàng.',
      emptyCartLink: 'Xem sản phẩm',
      copyButton: 'Sao chép đơn hàng',
      copySuccess: 'Đã sao chép!',
      instruction: 'Sau khi sao chép đơn, bấm nút bên dưới để gửi qua Zalo — chúng mình sẽ xác nhận đơn và liên hệ bạn sớm nhất:',
      zaloButton: 'GỬI ĐƠN HÀNG QUA ZALO',
      thankYou: 'Cảm ơn bạn đã gửi đơn đặt hàng!',
      thankYouSub: 'Tiệm nước Lành sẽ liên hệ bạn sớm nhất.',
      remove: 'Xoá',
    },
    en: {
      title: 'Order',
      customerSection: 'Your Details',
      namePlaceholder: 'Full name',
      phonePlaceholder: 'Phone number',
      cartSection: 'Your Cart',
      total: 'Total',
      emptyCart: 'Your cart is empty',
      emptyCartSub: 'Add some products before placing an order.',
      emptyCartLink: 'View products',
      copyButton: 'Copy order',
      copySuccess: 'Copied!',
      instruction: 'After copying your order, tap the button below to send via Zalo — we will confirm and contact you shortly:',
      zaloButton: 'SEND ORDER VIA ZALO',
      thankYou: 'Thank you for your order!',
      thankYouSub: 'Lành will contact you as soon as possible.',
      remove: 'Remove',
    },
  },
} as const
