export type Speciality = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export const specialities: Speciality[] = [
  {
    title: "Urology",
    description:
      "Specialist care for conditions affecting the urinary tract and male reproductive system.",
    href: "/specialization/urology/",
    image:
      "/images/speciality/NEPHROLOGY-1-r382e77l23dxwj005m4i27ciu4kqjlck34bogr2yt4.png",
  },
  {
    title: "Pain Management",
    description:
      "Assessment and management of acute and chronic pain to support patient comfort and recovery.",
    href: "/specialization/pain-management/",
    image: "/images/speciality/painmanagement.png",
  },
  {
    title: "Orthopaedic & Trauma Surgery",
    description:
      "Care for bone, joint and musculoskeletal conditions, including injuries and trauma.",
    href: "/specialization/orthopaedic-and-trauma-surgery/",
    image: "/images/speciality/orthopaedic.png",
  },
];
