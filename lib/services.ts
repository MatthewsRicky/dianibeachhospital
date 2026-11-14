import { serviceGroups } from "@/data/services";
import type { HospitalService } from "@/types/healthcare";

export const services: HospitalService[] = serviceGroups.flatMap(
  (group) => group.services,
);

export function getServiceBySlug(slug: string): HospitalService | undefined {
  return services.find((service) => service.slug === slug);
}
