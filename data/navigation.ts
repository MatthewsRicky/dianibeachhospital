export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/services/" },
  { label: "Specialization", href: "/speciality-centres/" },
  { label: "Branches", href: "/branches/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const appointmentHref = "/appointment-booking/";
