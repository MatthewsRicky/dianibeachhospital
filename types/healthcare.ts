export type ServiceGroupKey = "general" | "diagnostics" | "critical" | "allied";

export type ServiceGroup = {
  key: ServiceGroupKey;
  number: string;
  title: string;
  description: string;
  services: HospitalService[];
};


export type MedicalSpecialization = {
  name: string;
  slug: string;
  heroImage?: string;
  sourceUrl: string;

  introduction: string;

  sections: HealthcareSection[];

  verification: "source-content" | "needs-verification";
};

export type HealthcareContentItem = {
  title: string;
  description: string;
  relatedServices?: string[];
};

export type HealthcareSection = {
  heading: string;
  introduction?: string;
  content: HealthcareContentItem[];
};

export type HealthcarePageContent = {
  name: string;
  slug: string;
  introduction: string;
  heroImage?: string;
  sourceUrl: string;
  sections: HealthcareSection[];
  verification: "source-content" | "needs-verification";
};

export type HospitalService = HealthcarePageContent & {
  group: ServiceGroupKey;
  relatedSpecializations?: string[];
  name: string;
  slug: string;
};

