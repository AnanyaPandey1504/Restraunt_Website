
import { MenuSection } from './types';

export const BUSINESS_INFO = {
  name: "Nancy’s Hustle",
  description: "Nancy’s Hustle is a modern bistro and wine bar located in the East End district of Houston, Texas (EaDo). The restaurant focuses on seasonal, refined New-American cuisine with European influences, natural wine, craft cocktails, cider, and dishes that highlight rich flavors — “butter, natural wine, cider, and cocktails that pair well with food.”",
  address: "2704 Polk Street, Houston, Texas 77003, United States",
  phone: "(346) 571-7931",
  email: "info@nancyshustle.com",
  website: "https://www.nancyshustle.com/",
  walkIns: "Welcome",
  reservationsNote: "Recommended",
  hours: "Tuesday–Sunday from 5:00 PM to 11:00 PM",
  additionalHoursNote: "Now open 7 days a week (effective starting Monday, May 5th).",
  bookingInfo: [
    "Reservations accepted via Resy",
    "Reservations can also be made by phone after 2:00 PM Tuesday–Sunday"
  ],
  partyPolicy: [
    "Largest party size is 6 guests",
    "Parties of 6 are subject to a 20% gratuity",
    "Multiple reservations made to seat a larger party may not be seated together"
  ],
  sisterRestaurant: {
    name: "Tiny Champions",
    url: "https://www.tinychampions.com/"
  }
};

export const MENU: MenuSection[] = [
  {
    title: "SAVORY — SMALL & LARGE PLATES",
    items: [
      { name: "Pickle party (alpine cheese, Italian salami, olives)", price: "$12" },
      { name: "Bluefin tuna belly, brioche toast, saffron aioli", price: "$26" },
      { name: "Gem lettuce w/ pancetta, anchovies & sherry vinaigrette", price: "$16" },
      { name: "Escarole salad, blue cheese dressing, marinated pears", price: "$18" },
      { name: "Parmesan & pancetta croquettes", price: "$12" },
      { name: "Lamb dumplings w/ labneh, confit tomatoes, crispy garlic", price: "$18" },
      { name: "Nancy Cakes (cultured butter, smoked trout roe & chives)", price: "$20" },
      { name: "Oysters w/ tempranillo mignonette & grilled Spanish chorizo w/ saffron aioli", price: "$30" }
    ]
  },
  {
    title: "Middle & Bigger Savory Plates",
    items: [
      { name: "Roasted mushrooms, buttered chickpea purée, chili oil, fenugreek", price: "$18" },
      { name: "Boudin noir, crispy potato, sauerkraut aioli, saba", price: "$18" },
      { name: "Crispy panisse w/ braised fennel, chanterelles, bone marrow & tripe", price: "$24" },
      { name: "Cheeseburger on brioche English muffin w/ American cheese & pickles", price: "$18" },
      { name: "Butternut squash tortellini, brown butter, pecans, ricotta salata", price: "$26" },
      { name: "Grilled whole snapper, piri-piri sauce, turnips, Meyer lemon", price: "$48" },
      { name: "Seared duck breast, cauliflower purée, roasted mushrooms & black garlic demi-glace", price: "$42" }
    ]
  },
  {
    title: "Mains",
    items: [
      { name: "Wood-grilled half chicken, sumac, braised shallots, preserved lemon & chili jus", price: "$32" },
      { name: "Grilled ribeye, beef fat sticky rice, fermented chili beurre blanc, crispy shallot", price: "Market Price" }
    ]
  },
  {
    title: "Sides & Add-Ons",
    items: [
      { name: "White wheat sourdough with cultured butter", price: "$5" },
      { name: "Hand-cut fries w/ aioli", price: "$6" },
      { name: "Beef fat sticky rice w/ crispy shallot", price: "$8" }
    ]
  },
  {
    title: "SWEETS / DESSERTS",
    items: [
      { name: "Toasted vanilla bean ice cream w/ almond chili crisp", price: "$8" },
      { name: "Pumpkin & brie ice cream w/ candied pumpkin & caramelized puff pastry", price: "$13" },
      { name: "Parmesan cheesecake w/ black pepper & honey", price: "$13" },
      { name: "Pistachio pavlova, lemon bay leaf mousse, seasonal citrus", price: "$13" }
    ]
  }
];
