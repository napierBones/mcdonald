type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  catSlug: string;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const SingleProduct: Product = 
  {
    id: 1,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: '/pizza/pz1.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pizza',
  };

export const Pizza: Products = [
  {
    id: 1,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: '/pizza/pz1.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pizza',
  },
  {
    id: 2,
    title: 'Spanish',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: '/pizza/pz2.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pizza',
  },
  {
    id: 3,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: '/pizza/pz3.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pizza',
  },
  {
    id: 4,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: '/pizza/pz4.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pizza',
  },
  {
    id: 5,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: '/pizza/pz5.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pizza',
  },
  {
    id: 6,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: '/pizza/pz6.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pizza',
  },
];

export const Burgers: Products = [
  {
    id: 1,
    title: 'Classic Burger',
    desc: 'Take a bold bite into our sizzling burger, layered with spicy jalapeños, crispy bacon, melted pepper jack cheese, and a dash of smoky chipotle sauce, delivering a fiery flavor explosion with every mouthful.',
    img: '/burger/b1.png',
    price: 24.9,
    options: [
      {
        title: 'Chicken',
        additionalPrice: 0,
      },
      {
        title: 'Zinger',
        additionalPrice: 4,
      },
      {
        title: 'Beef',
        additionalPrice: 6,
      },
    ],
    catSlug: 'burger',
  },
  {
    id: 2,
    title: 'Classic Burger',
    desc: 'Take a bold bite into our sizzling burger, layered with spicy jalapeños, crispy bacon, melted pepper jack cheese, and a dash of smoky chipotle sauce, delivering a fiery flavor explosion with every mouthful.',
    img: '/burger/b2.png',
    price: 24.9,
    options: [
      {
        title: 'Chicken',
        additionalPrice: 0,
      },
      {
        title: 'Zinger',
        additionalPrice: 4,
      },
      {
        title: 'Beef',
        additionalPrice: 6,
      },
    ],
    catSlug: 'burger',
  },
  {
    id: 3,
    title: 'Classic Burger',
    desc: 'Take a bold bite into our sizzling burger, layered with spicy jalapeños, crispy bacon, melted pepper jack cheese, and a dash of smoky chipotle sauce, delivering a fiery flavor explosion with every mouthful.',
    img: '/burger/b3.png',
    price: 24.9,
    options: [
      {
        title: 'Chicken',
        additionalPrice: 0,
      },
      {
        title: 'Zinger',
        additionalPrice: 4,
      },
      {
        title: 'Beef',
        additionalPrice: 6,
      },
    ],
    catSlug: 'burger',
  },
  {
    id: 4,
    title: 'Classic Burger',
    desc: 'Take a bold bite into our sizzling burger, layered with spicy jalapeños, crispy bacon, melted pepper jack cheese, and a dash of smoky chipotle sauce, delivering a fiery flavor explosion with every mouthful.',
    img: '/burger/b4.png',
    price: 24.9,
    options: [
      {
        title: 'Chicken',
        additionalPrice: 0,
      },
      {
        title: 'Zinger',
        additionalPrice: 4,
      },
      {
        title: 'Beef',
        additionalPrice: 6,
      },
    ],
    catSlug: 'burger',
  },
  {
    id: 5,
    title: 'Classic Burger',
    desc: 'Take a bold bite into our sizzling burger, layered with spicy jalapeños, crispy bacon, melted pepper jack cheese, and a dash of smoky chipotle sauce, delivering a fiery flavor explosion with every mouthful.',
    img: '/burger/b5.png',
    price: 24.9,
    options: [
      {
        title: 'Chicken',
        additionalPrice: 0,
      },
      {
        title: 'Zinger',
        additionalPrice: 4,
      },
      {
        title: 'Beef',
        additionalPrice: 6,
      },
    ],
    catSlug: 'burger',
  },
  {
    id: 6,
    title: 'Classic Burger',
    desc: 'Take a bold bite into our sizzling burger, layered with spicy jalapeños, crispy bacon, melted pepper jack cheese, and a dash of smoky chipotle sauce, delivering a fiery flavor explosion with every mouthful.',
    img: '/burger/b6.png',
    price: 24.9,
    options: [
      {
        title: 'Chicken',
        additionalPrice: 0,
      },
      {
        title: 'Zinger',
        additionalPrice: 4,
      },
      {
        title: 'Beef',
        additionalPrice: 6,
      },
    ],
    catSlug: 'burger',
  },
];

export const Pastas: Products = [
  {
    id: 1,
    title: 'Delicious Pasta',
    desc: 'Indulge in our fiery pasta, tossed with spicy Italian sausage, roasted red peppers, fresh chili flakes, and creamy marinara, creating a bold, spicy twist that will keep you coming back for more.',
    img: '/pasta/ps1.png',
    price: 24.9,
    options: [
      {
        title: 'Italian',
        additionalPrice: 0,
      },
      {
        title: 'Mexican',
        additionalPrice: 4,
      },
      {
        title: 'Chinese',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pasta',
  },
  {
    id: 2,
    title: 'Delicious Pasta',
    desc: 'Indulge in our fiery pasta, tossed with spicy Italian sausage, roasted red peppers, fresh chili flakes, and creamy marinara, creating a bold, spicy twist that will keep you coming back for more.',
    img: '/pasta/ps2.png',
    price: 24.9,
    options: [
      {
        title: 'Italian',
        additionalPrice: 0,
      },
      {
        title: 'Mexican',
        additionalPrice: 4,
      },
      {
        title: 'Chinese',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pasta',
  },
  {
    id: 3,
    title: 'Delicious Pasta',
    desc: 'Indulge in our fiery pasta, tossed with spicy Italian sausage, roasted red peppers, fresh chili flakes, and creamy marinara, creating a bold, spicy twist that will keep you coming back for more.',
    img: '/pasta/ps3.png',
    price: 24.9,
    options: [
      {
        title: 'Italian',
        additionalPrice: 0,
      },
      {
        title: 'Mexican',
        additionalPrice: 4,
      },
      {
        title: 'Chinese',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pasta',
  },
  {
    id: 4,
    title: 'Delicious Pasta',
    desc: 'Indulge in our fiery pasta, tossed with spicy Italian sausage, roasted red peppers, fresh chili flakes, and creamy marinara, creating a bold, spicy twist that will keep you coming back for more.',
    img: '/pasta/ps4.png',
    price: 24.9,
    options: [
      {
        title: 'Italian',
        additionalPrice: 0,
      },
      {
        title: 'Mexican',
        additionalPrice: 4,
      },
      {
        title: 'Chinese',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pasta',
  },
  {
    id: 5,
    title: 'Delicious Pasta',
    desc: 'Indulge in our fiery pasta, tossed with spicy Italian sausage, roasted red peppers, fresh chili flakes, and creamy marinara, creating a bold, spicy twist that will keep you coming back for more.',
    img: '/pasta/ps5.png',
    price: 24.9,
    options: [
      {
        title: 'Italian',
        additionalPrice: 0,
      },
      {
        title: 'Mexican',
        additionalPrice: 4,
      },
      {
        title: 'Chinese',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pasta',
  },
  {
    id: 6,
    title: 'Delicious Pasta',
    desc: 'Indulge in our fiery pasta, tossed with spicy Italian sausage, roasted red peppers, fresh chili flakes, and creamy marinara, creating a bold, spicy twist that will keep you coming back for more.',
    img: '/pasta/ps6.png',
    price: 24.9,
    options: [
      {
        title: 'Italian',
        additionalPrice: 0,
      },
      {
        title: 'Mexican',
        additionalPrice: 4,
      },
      {
        title: 'Chinese',
        additionalPrice: 6,
      },
    ],
    catSlug: 'pasta',
  },
];



export const concatProducts = (...products: Products[]): Products => {
  return products.flat();
};

export const AllProducts = concatProducts(Pizza, Burgers, Pastas);



type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
