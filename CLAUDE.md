# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# [Tiệm nước Lành] — Project Guide


## Development Commands

All commands run from `[E:\Tiệm nước LÀNH]/`:

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build
npm run start      # Run production build locally
npm run lint       # ESLint check
npx tsc --noEmit    # Type-check
```

**Deployment:** Vercel — auto-deploy on push to `main`. Không dùng static export (`output: 'export'`); giữ mặc định Next.js SSR/ISR vì Vercel hỗ trợ native, không cần cấu hình đặc biệt trong `next.config.mjs`.

---

## Project Overview

Website cho Tiệm nước Lành, giao diện song ngữ Việt - Anh, có nút chọn ngôn ngữ ở góc phải trên cùng header. Thiết kế lấy cảm hứng từ file screenshot Chia Sisters (chiasisters.co.nz) — phong cách hữu cơ, tối giản, ấm áp, tập trung vào thiên nhiên/sức khỏe.

**Pages:**
- [Trang 1 — ví dụ: Homepage]
- [Trang 2 — ví dụ: Sản phẩm]
- [Trang 3 — ví dụ: Câu chuyện thương hiệu]
- [Trang 4 — ví dụ: Liên hệ]

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Images:** Next.js `<Image>` với asset local trong `/public/images/`
- **Icons:** Lucide React (line icon mảnh — khớp phong cách icon lợi ích của Chia Sisters)
- **Fonts:** Google Fonts — gợi ý serif hiện đại cho heading (vd. `Fraunces` hoặc `Instrument Serif`) + `Inter` cho body — **xác nhận lại với file design export thật nếu có chỉ định font cụ thể**
- **Deployment:** Vercel

---

## Design System

### Philosophy
Tối giản, hữu cơ, ấm áp — không dùng màu sắc sặc sỡ. Whitespace rộng rãi là đặc trưng chính. Ảnh sản phẩm/thiên nhiên dẫn dắt, chữ hỗ trợ. Nhịp điệu cuộn trang qua các section đổi nền sáng ↔ tối.

### Color Palette

```
Background:     #F7F4EE   (kem ấm)
Surface:        #FFFFFF
Dark:           #37493C   (xanh rêu đậm — section nhấn, navbar/footer)
Primary Text:   #22261F
Muted Text:     #6E7268
Accent:         #D4763A   (cam đất/terracotta — CTA, điểm nhấn)
Accent Hover:   #B85F28
Border:         #E5E1D6   (xám ấm nhạt)
```

All colors defined in both `globals.css` (CSS vars) and `tailwind.config.ts` (as Tailwind tokens).

> Đây là giá trị ước lượng từ screenshot — thay bằng hex chính xác nếu file design system export có chỉ định khác.

### Typography

```
Headings:   Font lấy từ E:\Tiệm nước LÀNH\Fonts\Fraunces, nhẹ nhàng — dùng cho H1/H2, không in hoa toàn bộ
Body:       Font lấy từ E:\Tiệm nước LÀNH\Fonts\Ysabeau_Infant — Regular cho đoạn văn, Medium cho label
Nav/UI:      Font lấy từ E:\Tiệm nước LÀNH\Fonts\Fraunces, uppercase, tracking-wide
```

Tailwind scale:
- Hero H1: `text-5xl md:text-7xl`
- Section H2: `text-3xl md:text-4xl`
- Card H3: `text-xl md:text-2xl`
- Body: `text-base`
- Caption/label: `text-sm`

### Spacing
Whitespace rất rộng rãi giữa các section — đây là đặc trưng chính của phong cách Chia Sisters, không làm layout bị chật. Section padding: `py-20 md:py-28`. Container: `max-w-6xl mx-auto px-6`.

### Components

**Navbar**
- Nền trong suốt/kem trên hero, chuyển đặc khi scroll (tùy chọn)
- Logo trái, nav links phải, uppercase tracking-wide text-sm
- CTA: button outline, hover fill accent

**Hero**
- Full-viewport hoặc large, ảnh sản phẩm/thiên nhiên full-bleed hoặc căn giữa
- H1 serif, có thể kèm mô tả ngắn bên dưới
- 2 cột: text trái + ảnh sản phẩm phải (tham khảo section "Our Chia Superfood Drinks" gốc)

**Section Layout**
- Đổi nền `#FFFFFF`/`#F7F4EE` (sáng) xen kẽ với `#37493C` (tối, chữ trắng)
- Section tối dùng cho nội dung "câu chuyện thương hiệu"/giá trị cốt lõi, có ảnh lifestyle đi kèm
- CTA dạng text + icon mũi tên tròn (→) thay vì button cho các link phụ (vd. "Our Difference", "Explore The Complete Range")

**Cards (sản phẩm)**
- Nền trắng, ảnh sản phẩm căn giữa trên nền sáng
- Tên + giá bên dưới ảnh, button "Buy Now"/CTA full-width dạng outline
- Không bo góc nhiều (`rounded-sm` tối đa)
- Hover: `hover:shadow-md transition-shadow`

**Icon row (lợi ích/tính năng)**
- Grid 3-4 cột, line icon mảnh đơn sắc + 1 từ ngắn bên dưới, không mô tả dài

**Buttons**
- Primary: `bg-[#D4763A] text-white px-8 py-3 hover:bg-[#B85F28] transition-colors`
- Ghost/outline: `border border-current px-8 py-3 hover:bg-[#22261F] hover:text-white transition-colors`
- Giữ hình chữ nhật, viền mảnh — tránh nền filled đặc trên nhiều chỗ, giữ cảm giác nhẹ nhàng

**Footer**
- Nền `#37493C`, chữ trắng/kem
- Logo + tagline trái, form newsletter outline phải
- 3 cột link (Shop/Sản phẩm | Thông tin khác | Chi tiết liên hệ)
- Badge chứng nhận/cờ quốc gia (nếu có) ở dưới cùng

---

## Project Structure

```
[project-folder]/
├── public/
│   └── images/
│       ├── hero/
│       ├── products/
│       │   └── [product-slug]/
│       └── common/            # Ảnh dùng chung (lifestyle, story, v.v.)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout — fonts, Navbar, Footer
│   │   ├── globals.css        # CSS vars cho brand colors
│   │   ├── page.tsx           # Homepage
│   │   └── [...other pages]/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── SectionLabel.tsx
│   │   │   └── AnimateOnScroll.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── ProductCard.tsx
│   │       └── BenefitIcons.tsx
│   └── lib/
│       └── data/
│           └── products.ts    # Static data — id, images[], mô tả, giá
├── tailwind.config.ts
└── next.config.mjs
```

---

## Content Structure

### Homepage
1. **Hero** — Ảnh sản phẩm/thiên nhiên full-bleed hoặc 2 cột, tagline, CTA chính
2. **Brand Intro** — Lành là một tiệm nước nhỏ nép mình trong một căn homestay yên tĩnh, với góc sân vườn xanh mát và sân thượng đón gió.

Chúng mình phục vụ các loại đồ uống từ rau má, nước sâm thảo mộc, nước ép và những thức uống theo mùa, được làm từ nguyên liệu tươi sạch, tuyển chọn mỗi ngày. Mỗi ly nước đều được ưu tiên giữ trọn hương vị tự nhiên, không pha loãng, với mong muốn mang đến chất lượng chân thật trong từng ngụm uống.

Dù bạn ghé mang đi, đặt giao tận nơi hay ngồi lại thư giãn một lúc, Lành hy vọng sẽ là một khoảng dừng nhỏ, nơi bạn có thể thưởng thức một ly nước ngon và dành cho mình một lựa chọn tốt hơn mỗi ngày.
3. **Benefit Icons** — 3-4 icon + label ngắn (tham khảo Energy/Digestion/Brain Function/Recovery)
4. **Product Highlights** — Grid 3 cột sản phẩm nổi bật
5. **Story/Values Section** — Nền tối `#37493C`, ảnh lifestyle + Chúng mình tin rằng sức khỏe bắt đầu từ những lựa chọn nhỏ mỗi ngày.

Một ly nước được làm từ nguyên liệu tươi sạch, nguyên chất và được chuẩn bị cẩn thận có thể khiến một ngày bận rộn trở nên dễ chịu hơn.

Vì thế, Lành chọn làm mọi thứ đơn giản: nguyên liệu thật, hương vị thật và sự chân thành trong từng ly nước.
6. **CTA Banner** — Nền accent hoặc tối, link đặt hàng/liên hệ

### [Trang sản phẩm/dịch vụ]
- List layout: ảnh trái, chi tiết phải (hoặc grid card)
- Mỗi entry: tên, mô tả ngắn, giá, CTA

### [Trang câu chuyện thương hiệu]
- Ảnh + timeline/nội dung kể chuyện
- Giữa nhịp sống hối hả, đôi khi điều chúng ta cần chỉ là một khoảng dừng nhỏ.

Lành bắt đầu từ một góc nhỏ trong căn homestay ấm cúng – nơi có khoảng sân xanh đón nắng, vài chiếc bàn gỗ yên tĩnh và sân thượng đầy gió. Một nơi để ghé nhanh mang đi, đặt giao tận nơi, hoặc ngồi lại vài phút để chậm hơn một chút.

Chúng mình tin rằng, một ly nước ngon không cần quá cầu kỳ. Điều quan trọng nhất là nguyên liệu thật.

Mỗi ngày, rau má, dừa, trái cây và các loại thảo mộc đều được tuyển chọn kỹ lưỡng từ những nguồn nguyên liệu tươi sạch. Nước được làm từ nguyên liệu nguyên chất, hạn chế chế biến, không pha loãng để giữ trọn hương vị tự nhiên và những gì vốn có của từng loại nguyên liệu.

Từ ly rau má dừa mát lành đến nước sâm nấu mỗi ngày, mọi thức uống đều được chuẩn bị với mong muốn mang đến một lựa chọn tốt hơn cho sức khỏe mà vẫn thơm ngon, dễ uống và phù hợp với nhịp sống hiện đại.

Lành không chỉ là một tiệm nước.

Đó là một lời nhắc rằng, giữa những ngày bận rộn, bạn vẫn có thể dành cho mình một điều tử tế – bắt đầu từ một ly nước được làm bằng sự chỉn chu và nguyên liệu thật.

Dù bạn ghé qua để mang đi, đặt giao tận nơi hay ngồi lại dưới tán cây ở góc sân vườn hoặc đón gió trên sân thượng, chúng mình hy vọng mỗi lần đến Lành đều mang lại cảm giác nhẹ nhàng, dễ chịu và bình yên.

Lành – Lành từ nguyên liệu, mát từ thiên nhiên.

### [About/Contact]
- Địa chỉ/liên hệ: 
128/4/3 Trần Hữu Trang, Phú Nhuận, TP.HCM.
SĐT: 0979 80 4343 (Thanh) hoặc 0355 608 623 (Hải)
---

## Content & Language

- **Ngôn ngữ:** [Việt/Anh]
- **Tông giọng:** Ấm áp, tự nhiên, gần gũi — tập trung vào con người + thiên nhiên, tránh ngôn ngữ marketing hô hào

---

## Development Notes
- Dựa theo và sử dụng các yếu tố trong folder E:\Tiệm nước LÀNH\Lành Design System cho thiết kế
- Định nghĩa brand colors ở cả `globals.css` (CSS vars) và `tailwind.config.ts`
- Dùng Next.js `<Image>` cho mọi ảnh — không dùng `<img>` thô
- Không dùng thư viện UI component ngoài — giữ bundle tối giản
- Mobile-first responsive toàn bộ
- Lighthouse targets: Performance > 90, Accessibility > 95
- Lazy-load ảnh below-fold
- Giữ nội dung tĩnh trong `/src/lib/data/` — chưa cần CMS ở giai đoạn đầu
- Luôn có hover effect trên button
- Whitespace rộng — nếu phân vân, chọn spacing lớn hơn
- Mỗi section có animation khi cuộn (qua `AnimateOnScroll` wrapper)
- Chụp screenshot và so sánh với bản trước sau mỗi thay đổi đáng kể về UI
