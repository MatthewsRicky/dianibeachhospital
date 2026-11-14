export type Branch = {
  id: string;
  name: string;
  address: string;
  postalCode: string;
};

export const branches: Branch[] = [
  {
    id: "shika-adabu",
    name: "Shika Adabu",
    address: "Likoni – Ukunda Road, near Likoni Fire Station",
    postalCode: "Likoni – 80110",
  },
  {
    id: "likoni",
    name: "Likoni",
    address: "Likoni – Ukunda Road, near Oilcom Petrol Station",
    postalCode: "Likoni – 80110",
  },
  {
    id: "kwale",
    name: "Kwale",
    address: "Behind Equity, Kinango Road",
    postalCode: "Kwale – 80403",
  },
  {
    id: "ukunda",
    name: "Ukunda",
    address: "Matuga Plaza, next to Equity Bank, Diani Beach Road",
    postalCode: "Ukunda – 80400",
  },
  {
    id: "mtongwe",
    name: "Mtongwe",
    address: "Mtongwe–Kenya Navy Road, next to Dongo Kundu SEZ",
    postalCode: "Mtongwe – 80111",
  },
];
