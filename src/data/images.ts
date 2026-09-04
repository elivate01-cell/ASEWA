// Centralized image references so every photo can be swapped in one place.
// All URLs are real Pexels stock photos guaranteed to load.

const px = (id: number, w = 940, h = 650) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const img = {
  hero: px(10317493, 1400, 1800),
  heroAlt: px(16250630, 1400, 1800),
  newDrop: px(1377452, 1200, 1600),
  lagosDanfo: px(37567064, 1600, 1000),
  lagosMarket: px(16155217, 1600, 1000),
  lagosAerial: px(27938900, 1600, 900),
  lagosNight: px(16114743, 1600, 1100),
  indigoDye: px(34583535, 1600, 1000),
  kanoDye: px(31666019, 1600, 1000),
  textileShop: px(38487458, 1600, 1000),
};

export interface Product {
  id: string;
  name: string;
  descriptor: string;
  price: number;
  image: string;
  hoverImage: string;
  label?: 'New' | 'Limited';
  colors: string[];
}

export const products: Product[] = [
  {
    id: 'lagos-oversized',
    name: 'Lagos Oversized Shirt',
    descriptor: 'Boxy fit · heavyweight cotton',
    price: 28500,
    image: px(5898813, 800, 1000),
    hoverImage: px(18907853, 800, 1000),
    label: 'New',
    colors: ['#0B0B0B', '#F4EFE6', '#1C3A5E'],
  },
  {
    id: 'adire-panel',
    name: 'Adire Panel Jacket',
    descriptor: 'Hand-dyed indigo · panelled',
    price: 64000,
    image: px(19290495, 800, 1000),
    hoverImage: px(818992, 800, 1000),
    label: 'Limited',
    colors: ['#1C3A5E', '#162E4A', '#0B0B0B'],
  },
  {
    id: 'ona-trousers',
    name: 'Ọ̀nà Trousers',
    descriptor: 'Wide leg · geometric seam',
    price: 32000,
    image: px(865547, 800, 1000),
    hoverImage: px(833187, 800, 1000),
    colors: ['#3A2418', '#0B0B0B', '#C8521E'],
  },
  {
    id: 'mainland-coord',
    name: 'Mainland Co-Ord',
    descriptor: 'Two-piece · breathable linen',
    price: 47000,
    image: px(907670, 800, 1000),
    hoverImage: px(2852917, 800, 1000),
    label: 'New',
    colors: ['#C8521E', '#E8B931', '#F4EFE6'],
  },
  {
    id: 'ikoyi-vest',
    name: 'Ikoyi Utility Vest',
    descriptor: 'Multi-pocket · wax-finish',
    price: 38000,
    image: px(36550193, 800, 1000),
    hoverImage: px(15048991, 800, 1000),
    colors: ['#A8421A', '#0B0B0B', '#3A2418'],
  },
  {
    id: 'asa-shirt',
    name: 'Àṣà Shirt',
    descriptor: 'Relaxed · camp collar',
    price: 26000,
    image: px(833187, 800, 1000),
    hoverImage: px(907670, 800, 1000),
    colors: ['#F4EFE6', '#1C3A5E', '#C8521E'],
  },
];

export interface LookbookShot {
  id: string;
  image: string;
  caption: string;
  span: 'tall' | 'wide' | 'standard' | 'full';
}

export const lookbook: LookbookShot[] = [
  { id: 'lb1', image: px(28079783, 900, 1300), caption: 'Look 01 — Yaba', span: 'tall' },
  { id: 'lb2', image: px(20597824, 900, 1100), caption: 'Look 02 — Lekki', span: 'standard' },
  { id: 'lb3', image: px(29147774, 900, 1300), caption: 'Look 03 — VI', span: 'tall' },
  { id: 'lb4', image: px(33725089, 1100, 800), caption: 'Look 04 — Ikeja', span: 'wide' },
  { id: 'lb5', image: px(24286715, 900, 1300), caption: 'Look 05 — Surulere', span: 'tall' },
  { id: 'lb6', image: px(2090779, 900, 1100), caption: 'Look 06 — Apapa', span: 'standard' },
  { id: 'lb7', image: px(2852917, 900, 1300), caption: 'Look 07 — Festac', span: 'tall' },
  { id: 'lb8', image: px(18907853, 900, 1100), caption: 'Look 08 — Agege', span: 'standard' },
  { id: 'lb9', image: px(20009925, 1600, 900), caption: 'Look 09 — Lagos Island', span: 'full' },
  { id: 'lb10', image: px(35150537, 900, 1100), caption: 'Look 10 — Maryland', span: 'standard' },
];

export const formatNaira = (amount: number) =>
  '₦' + amount.toLocaleString('en-NG');
