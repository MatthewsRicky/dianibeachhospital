import type { MedicalSpecialization } from "@/types/healthcare";

export const specializations: MedicalSpecialization[] = [
  {
    name: "Gastroenterology & Hepatology",
    slug: "gastroenterology-and-hepatology",
  },
  {
    name: "Orthopaedic & Trauma Surgery",
    slug: "orthopaedic-and-trauma-surgery",
  },
  {
    name: "Paediatrics & Neonatology",
    slug: "paediatrics-and-neonatology",
  },
  {
    name: "Obstetrics & Gynaecology",
    slug: "obstetrics-and-gynaecology",
  },
  {
    name: "Ear, Nose & Throat (ENT)",
    slug: "ear-nose-and-throat-ent",
  },
  {
    name: "Nephrology",
    slug: "nephrology",
  },
  {
    name: "Oncology (Cancer Treatment)",
    slug: "oncology-cancer-treatment",
  },
  {
    name: "Urology",
    slug: "urology",
  },
  {
    name: "Plastic & Reconstructive Surgery",
    slug: "plastic-and-reconstructive-surgery",
  },
  {
    name: "Dermatology",
    slug: "dermatology",
  },
  {
    name: "Neurosurgery & Neurology",
    slug: "neurosurgery-and-neurology",
  },
  {
    name: "Mental Health & Psychiatry",
    slug: "mental-health-and-psychiatry",
  },
  {
    name: "Rehabilitation Services",
    slug: "rehabilitation-services",
  },
  {
    name: "Pain Management",
    slug: "pain-management",
  },
];

export function getSpecializationBySlug(slug: string) {
  return specializations.find((specialization) => specialization.slug === slug);
}
