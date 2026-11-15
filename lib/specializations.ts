import { specializations } from "@/data/specializations";
import type { MedicalSpecialization } from "@/types/healthcare";

export function getSpecializationBySlug(
  slug: string,
): MedicalSpecialization | undefined {
  return specializations.find((specialization) => specialization.slug === slug);
}
