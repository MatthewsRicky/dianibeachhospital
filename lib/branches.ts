import { branches } from "@/data/branches";

export function getBranchBySlug(slug: string) {
  return branches.find((branch) => branch.slug === slug);
}
