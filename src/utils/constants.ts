import { z } from "zod";

export const APP_TITLE = "OmniShop Meats";

export const customer_testimonials = [
    {
        "name": 'Alex P.',
        "review": "OmniShop has the best selection I've ever seen. Their customer service is top-notch too!"
    },
    {
        "name": 'Sarah M.',
        "review": 'I love how easy it is to find exactly what I need. The website is so user-friendly.'
    },
    {
        "name": 'Chris L.',
        "review": 'Fast shipping and great prices. OmniShop is now my go-to for all my shopping needs.'
    }
];

export const meatCategories = [
    {
      title: "Poultry",
      items: ["Chicken", "Duck", "Turkey", "Guinea Fowl"],
    },
    {
      title: "Seafood",
      items: ["Trout", "Tuna", "Oysters", "Crabs"],
    },
    {
      title: "Ruminants",
      items: ["Sheep", "Beef", "Goat", "Ham"],
    },
]

export const heroSlides = [
    {
        image: "/meat_variety.jpg",
        title: "Unmatched Variety",
        description: "From tender poultry to succulent seafood, our extensive range of frozen meat products meets all your culinary needs.",
        cta: "Start shopping",
    },
    {
        image: "/meat_sustainable.jpg",
        title: "Sustainably Sourced",
        description: "At OmniShop, we prioritize sustainability and quality. Our products come from environmentally responsible sources, ensuring every bite is not only delicious but also ethically sound.",
        cta: "Shop Now",
    },
    {
        image: "/meat_premium.jpg",
        title: "Premium Quality Meats",
        description: "Discover the finest selection of frozen meats sourced from trusted farms and suppliers. Every cut is expertly processed and flash-frozen to lock in flavor and freshness.",
        cta: "Shop Now",
    },
    {
        image: "/meat_discount.jpg",
        title: "Exclusive Deals and Discounts",
        description: "Join our community of meat lovers and enjoy access to exclusive deals, seasonal offers, and discounts on your favorite products. Great taste doesn’t have to break the bank!",
        cta: "Shop Now",
    },
]

export const meatCategoriesOnly = ["Poultry", "Ruminants", "Seafood"];

export const meatCategoryPlusDescription = [
    {
      title: "Premium Cuts",
      image: "/meat_premium.jpg",
      description: "Hand-selected premium meat cuts",
    },
    {
      title: "Organic Selection",
      image: "/meat_variety.jpg",
      description: "100% organic certified meats",
    },
    {
      title: "Special Offers",
      image: "/meat_discount.jpg",
      description: "Limited time deals on quality meats",
    },
]; 

export const landingPagePremiumSelections = [
  {
    title: 'Prime Beef Cuts',
    bio: "Flash frozen for maximum freshness",
    imgUrl: "/frozen_meat.jpg",
    desc: "Savor the rich flavors of our premium prime beef cuts"
  },
  {
    title: 'Organic Chicken',
    bio: "Fresh-sourced, organic chicken frozen with care",
    imgUrl: "/frozen_chicken.jpg",
    desc: "Enjoy the best of chicken without the hassle"
  },
  {
    title: 'Wild-Caught Seafood',
    bio: "Hand-selected, wild-caught seafood frozen for maximum freshness",
    imgUrl: "/frozen_seafood.jpg",
    desc: "Experience the unparalleled taste of wild-caught seafood"
  }
]

export const appFEatures = [
  { title: 'Premium Quality', description: 'Sourced from the finest farms and fisheries' },
  { title: 'Flash-Frozen', description: 'Locks in flavor and nutrients' },
  { title: 'Convenient Delivery', description: 'Straight to your doorstep in insulated packaging' }
];

export const howItWorks = [
  { step: '1', title: 'Choose Your Meats', description: 'Select from our wide range of premium frozen meats' },
  { step: '2', title: 'We Prepare Your Order', description: 'Your selections are carefully packed in insulated boxes' },
  { step: '3', title: 'Enjoy at Home', description: 'Receive your delivery and savor restaurant-quality meats' }
]

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});