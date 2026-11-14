import type { HospitalService, ServiceGroup } from "@/types/healthcare";

export const serviceGroups: ServiceGroup[] = [
  {
    key: "general",
    number: "01",
    title: "General & Patient Care",
    description:
      "Services supporting patients through routine consultations, hospital admission and everyday healthcare needs.",
    services: [
      {
        name: "Outpatient Services",
        slug: "outpatient-services",
        group: "general",
        sourceUrl: "https://dianibeachhospital.com/outpatient/",
        heroImage:
          "/images/services/outpatient/dianobeachhospital.F-1-r2vxj03otk1fblmqxy39feo93vxhuigqspx7zzydh4.png",
        verification: "needs-verification",
        introduction:
          "At Diani Beach Hospital, we understand that not every health concern requires an overnight stay. Our outpatient services are designed to offer high-quality care without the need for hospitalisation. Whether you are seeking preventive care, a routine check-up or specialised treatment, we aim to make your experience convenient, efficient and comprehensive.",
        sections: [
          {
            heading: "Types of Services Offered",
            content: [
              {
                title: "Routine Check-ups",
                description:
                  "Preventive services such as annual physical examinations, executive health checks, screenings for diabetes, elevated cholesterol and cancer, and vaccinations.",
              },
              {
                title: "Diagnostic Services",
                description:
                  "Laboratory tests, imaging including X-rays, MRI and CT scans, and other diagnostic procedures.",
              },
              {
                title: "Minor Surgeries",
                description:
                  "Procedures such as endoscopies, colonoscopies, abscess drainage, wound suturing and dressings, and mole removals that do not require hospitalisation.",
              },
              {
                title: "Specialty Care",
                description:
                  "Consultations with specialists in fields such as cardiology, urology, gynaecology, ENT, neurology, paediatrics, spine surgery, dermatology, orthopaedics and mental health.",
              },
              {
                title: "Therapies",
                description:
                  "Physical, occupational, speech and respiratory therapies.",
              },
              {
                title: "Chronic Disease Management",
                description:
                  "Ongoing care for conditions such as diabetes, hypertension, arthritis and asthma.",
              },
            ],
          },
          {
            heading: "Advantages of Outpatient Care",
            content: [
              {
                title: "Cost-Effective",
                description:
                  "Outpatient services are typically less expensive than inpatient care because they do not involve the costs associated with an overnight hospital stay.",
              },
              {
                title: "Convenience",
                description:
                  "Patients can receive care and return to their normal daily activities on the same day.",
              },
              {
                title: "Flexibility",
                description:
                  "Many outpatient appointments can be scheduled during regular office hours, making it easier for patients to find convenient times for care.",
              },
              {
                title: "Fewer Risks",
                description:
                  "As patients are not admitted to the hospital, they may be less exposed to hospital-acquired infections and complications associated with prolonged bed rest.",
              },
            ],
          },
          {
            heading: "Patient Experience",
            content: [
              {
                title: "Shorter Wait Times",
                description:
                  "The hospital states that outpatients typically experience shorter waiting times for treatments compared with inpatient services.",
              },
              {
                title: "Faster Recovery",
                description:
                  "Because outpatient procedures tend to be less invasive and patients can return home on the same day, recovery can take place in the comfort of their own homes.",
              },
              {
                title: "Reduced Disruption",
                description:
                  "Outpatient management can help reduce the disruption and stress associated with hospitalisation, allowing patients to maintain their daily routines.",
              },
            ],
          },
          {
            heading: "Role in Healthcare Systems",
            content: [
              {
                title: "Resource Optimisation",
                description:
                  "Outpatient care allows hospital resources to be focused on patients who need more intensive treatment or overnight stays, helping to manage hospital capacity efficiently.",
              },
              {
                title: "Chronic Disease Management",
                description:
                  "It plays an essential role in the ongoing management of chronic conditions, where patients require regular visits to the doctor for monitoring and adjustments to their treatment plans.",
              },
              {
                title: "Prevention Focus",
                description:
                  "Outpatient settings provide opportunities for preventive care, as regular check-ups and screenings can help identify health issues before they become more serious.",
              },
            ],
          },
        ],
      },
      {
        name: "Inpatient Services",
        slug: "inpatient-services",
        group: "general",
        sourceUrl: "https://dianibeachhospital.com/inpatient/",
        heroImage:
          "/images/services/inpatient/Inpatient-2-r34gv0xxrxuq32iqtfjrofu1p6rmwnvcmjud9j7tfc.png",
        verification: "needs-verification",
        introduction:
          "Inpatient facilities at Diani Beach Hospital extend beyond direct medical services to include non-medical amenities and supportive services intended to enhance patient comfort, safety and the overall hospital stay. These facilities aim to provide an environment that supports recovery and well-being.",
        sections: [
          {
            heading: "Accommodation & Patient Rooms",
            content: [
              {
                title: "Types of Rooms",
                description:
                  "The hospital describes offering shared wards, private rooms and semi-private rooms, with accommodation options depending on the patient's condition, preference and financial ability. Private and semi-private rooms are intended to provide additional comfort, privacy and a quieter environment.",
              },
              {
                title: "Room Amenities",
                description:
                  "Rooms are described as having essential furniture such as beds, chairs and bedside tables. Private rooms are listed as having additional amenities including televisions, telephones, Wi-Fi access and refrigerators.",
              },
              {
                title: "Cleanliness and Hygiene",
                description:
                  "Regular cleaning services are provided to maintain a clean and hygienic environment that supports patient recovery.",
              },
            ],
          },
          {
            heading: "Nutrition & Food Services",
            content: [
              {
                title: "Meal Planning",
                description:
                  "The hospital describes providing nutritious meals tailored to patients' needs, with meal planning coordinated with the medical team to accommodate dietary requirements such as diabetic, low-sodium and high-protein diets.",
              },
              {
                title: "Dietary Consultation",
                description:
                  "The source mentions dietitian involvement in preparing specialised meal plans for patients with specific health conditions. It gives examples of higher-calorie and higher-protein diets for patients recovering from surgery or illness.",
              },
              {
                title: "Meal Delivery",
                description:
                  "Meals are described as being delivered to patient rooms at scheduled times.",
              },
            ],
          },
          {
            heading: "Visiting Facilities",
            content: [
              {
                title: "Visiting Hours",
                description:
                  "The hospital describes having set visiting hours for family members and friends, which may vary depending on the patient's condition.",
              },
              {
                title: "Visitor Amenities",
                description:
                  "Waiting areas with seating and restroom facilities are mentioned for visitors.",
              },
              {
                title: "Special Visiting Areas",
                description:
                  "The source mentions private rooms or areas where family members may stay overnight, particularly in connection with intensive care or paediatric wards.",
              },
            ],
          },
          {
            heading: "Security & Safety",
            content: [
              {
                title: "Security Personnel",
                description:
                  "The hospital describes round-the-clock security, with staff managing entry and exit points, controlling access to sensitive areas and addressing safety concerns.",
              },
              {
                title: "Patient Monitoring Systems",
                description:
                  "The source refers to patient monitoring systems in certain wards, particularly areas caring for intensive-care or high-risk patients, to track vital signs and alert medical staff to changes in a patient's condition.",
              },
              {
                title: "Fire Safety",
                description:
                  "The source describes fire-safety procedures including alarms, emergency exits and fire drills.",
              },
            ],
          },
          {
            heading: "Physical Environment & Comfort",
            content: [
              {
                title: "Lighting and Ventilation",
                description:
                  "The hospital describes providing natural and artificial lighting and ventilation to support a comfortable environment.",
              },
              {
                title: "Air Conditioning and Temperature Control",
                description:
                  "The source states that most rooms have air conditioning or climate-control systems to regulate room temperature.",
              },
              {
                title: "Noise Control",
                description:
                  "Efforts are described to minimise noise and maintain a calm environment conducive to rest and recovery.",
              },
            ],
          },
          {
            heading: "Administrative & Support Services",
            content: [
              {
                title: "Patient Information",
                description:
                  "Administrative staff are described as assisting with hospital policies, insurance and billing matters, and patient enquiries.",
              },
              {
                title: "Billing and Insurance Services",
                description:
                  "The source describes administrative support for billing information, insurance claims and payment arrangements.",
              },
              {
                title: "Discharge Planning",
                description:
                  "The administrative team is described as helping coordinate discharge and providing information about follow-up care, medications and additional services.",
              },
            ],
          },
          {
            heading: "Transportation & Parking",
            content: [
              {
                title: "Parking Facilities",
                description:
                  "The hospital states that free parking is available for patients and visitors in a secure parking area.",
              },
              {
                title: "Emergency Transport",
                description:
                  "The source describes an advanced cardiac ambulance being on standby to transport critically ill patients to the hospital from their homes or hotels.",
              },
            ],
          },
        ],
      },
      {
        name: "Pharmacy",
        slug: "pharmacy",
        group: "general",
        sourceUrl: "https://dianibeachhospital.com/pharmacy/",
        heroImage:
          "/images/services/pharmacy/Pharmacy-2-r34h2lj4tw7vlzislpdkrj1pyxg2wvxic116frznaw.png",
        verification: "needs-verification",
        introduction:
          "Welcome to the Pharmacy Services at Diani Beach Hospital, where we are committed to providing safe, effective and personalised pharmaceutical care. Our pharmacy team works alongside healthcare professionals to support appropriate medication use, helping patients receive the right medication at the right time and in the correct dosage. Whether you are an inpatient, outpatient or receiving specialised care, our pharmacy services are designed to support your treatment and recovery.",
        sections: [
          {
            heading: "Inpatient Pharmacy Services",
            introduction:
              "Our inpatient pharmacy team is dedicated to medication management for patients during their hospital stay. Services include accurate dispensing, appropriate dosing and monitoring for potential drug interactions, allergies and side effects.",
            content: [
              {
                title: "Medication Dispensing & Administration Support",
                description:
                  "Medication dispensing and support to help ensure that prescribed medicines are supplied and administered appropriately.",
              },
              {
                title: "Intravenous (IV) Medication Preparation",
                description:
                  "Preparation of intravenous medications for patients requiring treatment through an IV route.",
              },
              {
                title: "Pain Management Support",
                description:
                  "Pharmaceutical support for medication used in the management of pain.",
              },
              {
                title: "Clinical Pharmacist Consultations",
                description:
                  "Consultations with clinical pharmacists concerning medication use and management.",
              },
            ],
          },
          {
            heading: "Outpatient Pharmacy Services",
            introduction:
              "For patients who have been discharged or are attending outpatient services, the pharmacy provides services intended to support continuity of care and medication adherence.",
            content: [
              {
                title: "Prescription Filling & Medication Counselling",
                description:
                  "Filling prescriptions and providing guidance on the appropriate use of prescribed medication.",
              },
              {
                title: "Chronic Disease Medication Management",
                description:
                  "Medication management support for chronic conditions such as diabetes and hypertension.",
              },
              {
                title: "Medication Refill Services",
                description:
                  "Medication refills to support continuity of prescribed treatment.",
              },
              {
                title: "Medication Synchronisation Programs",
                description:
                  "Medication synchronisation services intended to help coordinate prescription refill schedules.",
              },
            ],
          },
          {
            heading: "Specialised Pharmacy Services",
            introduction:
              "The hospital describes specialised pharmaceutical support for patients requiring complex treatment regimens, including those receiving critical care or cancer treatment.",
            content: [
              {
                title: "Oncology Pharmacy Services",
                description:
                  "Pharmaceutical support for patients undergoing cancer treatment.",
              },
              {
                title: "Paediatric & Geriatric Pharmacy Care",
                description:
                  "Medication-related care for children and older adults.",
              },
              {
                title: "Critical Care & Intensive Care Unit (ICU) Support",
                description:
                  "Pharmacy support for patients receiving critical and intensive care.",
              },
              {
                title: "Chemotherapy Medication Preparation & Management",
                description:
                  "Preparation and management of medications used in chemotherapy treatment.",
              },
            ],
          },
          {
            heading: "Over-the-Counter Services",
            content: [
              {
                title: "Over-the-Counter Medication & Products",
                description:
                  "The pharmacy offers a range of over-the-counter medications and products intended to help manage common health concerns and support general well-being.",
              },
              {
                title: "Pharmacy Guidance",
                description:
                  "The pharmacy team is available to guide patients in choosing appropriate over-the-counter products and understanding their safe and effective use. Examples mentioned by the hospital include pain relief, allergy medication and personal care products.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "diagnostics",
    number: "02",
    title: "Diagnostic & Imaging",
    description: "...",
    services: [
      {
        name: "Laboratory",
        slug: "laboratory",
        group: "diagnostics",
        sourceUrl: "https://dianibeachhospital.com/laboratory/",
        heroImage:
          "/images/services/lab/LABORATORY-2-r34lg3dlyjtgxur0xs76jsa57564n56enk618ugwqg.png",
        verification: "needs-verification",
        introduction:
          "At Diani Beach Hospital, we offer a wide range of laboratory tests to help diagnose, monitor and manage health conditions. Our services are designed to support the needs of inpatients, outpatients and patients receiving specialised care. The laboratory provides essential support for disease detection, treatment planning and disease prevention.",
        sections: [
          {
            heading: "Our Laboratory Services",
            content: [
              {
                title: "Routine Diagnostics",
                description:
                  "Routine laboratory investigations supporting the assessment and monitoring of patients' health conditions.",
              },
              {
                title: "Microbiology",
                description:
                  "Laboratory investigations involving microorganisms.",
              },
              {
                title: "Pathology",
                description:
                  "Pathological investigations supporting the examination and diagnosis of disease.",
              },
              {
                title: "Clinical Chemistry",
                description:
                  "Laboratory testing involving the chemical components of blood and other body fluids.",
              },
              {
                title: "Haematology",
                description:
                  "Laboratory investigations relating to blood and blood-forming tissues.",
              },
              {
                title: "Blood Transfusion",
                description:
                  "Laboratory services supporting blood transfusion requirements.",
              },
              {
                title: "Molecular Diagnostics",
                description:
                  "Diagnostic investigations using molecular techniques.",
              },
              {
                title: "Endocrinology & Metabolic Testing",
                description:
                  "Laboratory investigations relating to hormones and metabolic functions.",
              },
              {
                title: "Allergy & Immunology",
                description:
                  "Laboratory investigations relating to allergic conditions and immune system function.",
              },
            ],
          },
          {
            heading: "Why Choose Our Laboratory Services?",
            content: [
              {
                title: "Advanced Technology",
                description:
                  "The hospital describes its laboratory as being equipped with advanced diagnostic equipment intended to support accurate and reliable test results.",
              },
              {
                title: "Experienced Team",
                description:
                  "The laboratory is supported by trained and experienced professionals responsible for processing and reporting test results.",
              },
              {
                title: "Timely Results",
                description:
                  "The laboratory aims to process test results efficiently to support timely clinical decisions and treatment.",
              },
              {
                title: "Confidentiality & Accuracy",
                description:
                  "Patient privacy and result accuracy are identified as priorities, supported by quality-control and confidentiality procedures.",
              },
              {
                title: "Comprehensive Care",
                description:
                  "Laboratory services work alongside the hospital's healthcare teams to support a coordinated, patient-centred approach to care.",
              },
            ],
          },
        ],
      }, // Laboratory
      {
        name: "MRI – Magnetic Resonance Imaging",
        slug: "mri",
        group: "diagnostics",
        sourceUrl:
          "https://dianibeachhospital.com/mri-magnetic-resonance-imaging/",
        heroImage:
          "/images/services/mri/MRI-1-r34haqss27dc8bot1856dh1jb5almg9rgcko63wtdk.png",
        verification: "needs-verification",
        introduction:
          "Welcome to the MRI (Magnetic Resonance Imaging) Service at Diani Beach Hospital. The hospital describes its MRI facility as the first in Kwale County, providing non-invasive diagnostic imaging to support the assessment and management of a range of medical conditions. MRI produces detailed images of the body's internal structures, helping healthcare professionals with diagnosis and treatment planning.",
        sections: [
          {
            heading: "Our MRI Services",
            content: [
              {
                title: "Brain & Nervous System Imaging",
                description:
                  "MRI scans can assist in assessing neurological conditions such as strokes, bleeding, multiple sclerosis and neurodegenerative diseases. Imaging can also help detect and monitor brain tumours and lesions, and assess spinal cord injuries, disc herniation and nerve compression associated with conditions such as sciatica and spinal stenosis.",
              },
              {
                title: "Musculoskeletal Imaging",
                description:
                  "MRI is used to assess soft tissues including ligaments, tendons and cartilage in joints such as the knees, shoulders, hips and elbows. It can assist in evaluating sports injuries, arthritis, fractures, muscle strains and tears, and support orthopaedic assessment and treatment planning.",
              },
              {
                title: "Cardiovascular Imaging",
                description:
                  "MRI can be used to assess the structure and function of the heart and blood vessels. Cardiac MRI may assist in evaluating conditions such as congenital heart disease, heart attacks, myocarditis, pericarditis and heart failure. Vascular imaging can also help assess the aorta and other arteries for abnormalities such as aneurysms and blockages.",
              },
              {
                title: "Abdominal & Pelvic Imaging",
                description:
                  "MRI can provide detailed images of abdominal and pelvic organs, including the liver, kidneys and gallbladder. It may also be used in gynaecological imaging to assess the uterus and ovaries, including conditions such as fibroids and endometriosis, and in prostate imaging to investigate abnormalities.",
              },
              {
                title: "Oncology (Cancer) Imaging",
                description:
                  "MRI can support the detection, assessment and monitoring of certain cancers, including those affecting the brain, spine, breast, liver and pelvis. The hospital's source also describes its use in treatment monitoring and as an imaging method for guiding biopsies where appropriate.",
              },
              {
                title: "Paediatric Imaging",
                description:
                  "MRI can be used in children to assess developmental concerns, congenital abnormalities and injuries. It provides detailed imaging without using ionising radiation.",
              },
              {
                title: "Full Body Imaging",
                description:
                  "The hospital describes full-body MRI as an option for imaging multiple organ systems. It also mentions imaging for pre-surgical assessment to provide detailed views of internal structures.",
              },
            ],
          },
          {
            heading: "Why Choose Our MRI Services?",
            content: [
              {
                title: "MRI Facility in Kwale County",
                description:
                  "The hospital describes its MRI facility as the first of its kind in Kwale County, bringing MRI diagnostic imaging services closer to the local community. The historical 'first and only' claim should be confirmed before publication.",
              },
              {
                title: "Radiological Expertise",
                description:
                  "The hospital states that its radiologists review MRI scans and prepare detailed reports to assist healthcare providers with diagnosis and treatment decisions.",
              },
              {
                title: "Patient Comfort & Safety",
                description:
                  "The hospital describes its MRI suite as designed with patient comfort in mind and states that procedures are performed with attention to safety.",
              },
              {
                title: "Imaging Without Ionising Radiation",
                description:
                  "MRI uses magnetic fields and radio waves rather than ionising radiation to produce diagnostic images. Suitability still depends on individual patient circumstances and clinical assessment.",
              },
              {
                title: "Timely Results",
                description:
                  "The hospital states that its MRI team aims to provide prompt reports while maintaining the quality of imaging and interpretation.",
              },
            ],
          },
          {
            heading: "How to Book an MRI Appointment",
            content: [
              {
                title: "Outpatient Appointments",
                description:
                  "Outpatients can arrange an MRI appointment by contacting the hospital's front office team.",
              },
              {
                title: "Inpatient Services",
                description:
                  "For admitted patients, the healthcare provider arranges MRI imaging according to the patient's medical needs.",
              },
              {
                title: "Walk-in MRI",
                description:
                  "The hospital states that walk-in MRI appointments may be available in some cases, depending on urgency and availability.",
              },
            ],
          },
          {
            heading: "Contact & Appointment Enquiries",
            content: [
              {
                title: "Contact the Hospital",
                description:
                  "Patients can contact Diani Beach Hospital for further information or assistance with arranging an MRI appointment.",
              },
            ],
          },
        ],
      }, // MRI
      {
        name: "CT Scan – Computed Tomography",
        slug: "ct-scan",
        group: "diagnostics",
        sourceUrl:
          "https://dianibeachhospital.com/ct-scan-computed-tomography/",
        heroImage:
          "/images/services/ct-scan/CT-1-r34hiu6qwug87fxjrq3iufifgledwmejwet6xvwrso.png",
        verification: "needs-verification",
        introduction:
          "At Diani Beach Hospital, we offer CT Scan (Computed Tomography) services to support the diagnosis of a wide range of health conditions. CT imaging provides detailed views of internal structures and assists healthcare professionals in assessing medical concerns ranging from trauma and injuries to chronic conditions. The hospital describes its CT service as supporting outpatient, inpatient and emergency care.",
        sections: [
          {
            heading: "Our CT Scan Services",
            content: [
              {
                title: "Brain Imaging",
                description:
                  "CT scans can help identify neurological conditions such as strokes, brain haemorrhages, tumours and traumatic brain injuries. They can also help detect intracranial bleeding and assess brain tumours and other lesions to support treatment decisions.",
              },
              {
                title: "Trauma & Emergency Imaging",
                description:
                  "CT imaging supports the rapid assessment of head, spine and neck injuries. It can also help identify internal bleeding, organ damage and fractures following abdominal trauma, as well as lung injuries, rib fractures and other internal chest injuries.",
              },
              {
                title: "Chest Imaging",
                description:
                  "CT scans can help assess lung conditions including pneumonia, pulmonary embolism, lung cancer and tuberculosis. The source also describes imaging for coronary artery disease, heart-related damage and vascular conditions. CT pulmonary angiography (CTPA) is used to investigate blood clots in the lungs.",
              },
              {
                title: "Abdominal & Pelvic Imaging",
                description:
                  "CT scans provide detailed images of organs including the liver, kidneys, spleen, pancreas and intestines. They can assist in investigating organ disease, kidney stones, tumours, infections, abscesses and inflammatory conditions such as appendicitis and diverticulitis.",
              },
              {
                title: "Musculoskeletal Imaging",
                description:
                  "CT imaging provides detailed views of bones and joints, helping assess fractures, bone infections and deformities. It can also assist in evaluating joint conditions such as arthritis, bone spurs and joint infections, as well as vertebral fractures, spinal injuries and certain spinal abnormalities.",
              },
              {
                title: "Cardiovascular Imaging",
                description:
                  "CT angiography can be used to visualise coronary arteries and investigate narrowing or blockages. CT imaging can also help identify and monitor aortic aneurysms, aortic dissections and other abnormalities affecting blood vessels.",
              },
              {
                title: "Cancer Detection & Monitoring",
                description:
                  "CT scans can support cancer detection, staging and monitoring in areas including the lungs, liver, pancreas and colon. They can also help identify metastatic disease and, where appropriate, guide biopsy procedures by helping clinicians target areas of concern.",
              },
              {
                title: "Pre-Surgical Planning",
                description:
                  "CT imaging provides detailed views of organs, bones and tissues to assist surgeons in planning procedures. It can also help locate tumours or abnormal tissue that may require surgical removal or biopsy.",
              },
            ],
          },
          {
            heading: "Why Choose Our CT Scan Services?",
            content: [
              {
                title: "Advanced Imaging Technology",
                description:
                  "The hospital describes using advanced CT imaging technology to produce detailed diagnostic images that support clinical assessment and treatment planning.",
              },
              {
                title: "Radiological Expertise",
                description:
                  "The hospital states that its radiologists interpret CT images and work with healthcare providers to support diagnosis and treatment recommendations.",
              },
              {
                title: "Timely Results",
                description:
                  "The CT service aims to provide prompt results to support timely clinical decisions.",
              },
              {
                title: "Comprehensive Care",
                description:
                  "The hospital describes an integrated approach in which doctors, specialists and the imaging team work together to inform patient care.",
              },
              {
                title: "Comfort & Safety",
                description:
                  "The original page identifies patient comfort and radiation safety as priorities during CT imaging.",
              },
            ],
          },
          {
            heading: "How to Book a CT Scan Appointment",
            content: [
              {
                title: "Outpatient Appointments",
                description:
                  "Patients can arrange an appointment through the Patient Services team by telephone or by visiting the hospital registration desk.",
              },
              {
                title: "Emergency Cases",
                description:
                  "The hospital states that its emergency department can arrange CT scans for urgent cases.",
              },
              {
                title: "Inpatient Services",
                description:
                  "For admitted patients, the healthcare provider arranges the necessary CT imaging according to the patient's medical needs.",
              },
            ],
          },
          {
            heading: "Contact & Appointment Enquiries",
            content: [
              {
                title: "Contact the Hospital",
                description:
                  "Patients can contact Diani Beach Hospital for further information or assistance with arranging a CT scan appointment.",
              },
            ],
          },
        ],
      }, // CT Scan
      {
        name: "X-Ray – Radiography",
        slug: "x-ray",
        group: "diagnostics",
        sourceUrl: "https://dianibeachhospital.com/x-ray-radiography/",
        heroImage:
          "/images/services/x-ray/Xray-1-r34hmu01yhx3js4nfy9fxx7ycjpjmb9hg6mhd7zjco.png",
        verification: "needs-verification",
        introduction:
          "At Diani Beach Hospital, X-ray services provide diagnostic images that help healthcare professionals assess a range of medical conditions. The hospital describes its radiography service as supporting early diagnosis, treatment planning and the monitoring of health conditions. Imaging may be required following an injury, as part of a routine health assessment or to investigate a specific medical concern.",
        sections: [
          {
            heading: "Why Choose Our X-Ray Services?",
            content: [
              {
                title: "Digital Imaging Technology",
                description:
                  "The hospital describes using digital X-ray technology to produce clear diagnostic images efficiently. Digital imaging can also reduce radiation exposure compared with some traditional radiographic techniques, depending on the equipment and examination.",
              },
              {
                title: "Radiological Expertise",
                description:
                  "The source describes trained radiologists interpreting X-ray images and preparing reports to support diagnosis and treatment decisions.",
              },
              {
                title: "Quick & Efficient Imaging",
                description:
                  "X-ray examinations are generally quick, and the hospital aims to make results available promptly so that healthcare teams can make timely clinical decisions.",
              },
              {
                title: "Patient-Centred Care",
                description:
                  "The radiology team aims to make the imaging process comfortable and to guide patients through the procedure.",
              },
              {
                title: "Radiation Safety",
                description:
                  "The hospital identifies radiation safety as a priority and describes the use of precautions by radiology staff to minimise unnecessary exposure during examinations.",
              },
            ],
          },
          {
            heading: "How to Book an X-Ray Appointment",
            content: [
              {
                title: "Outpatient Appointments",
                description:
                  "Patients can arrange an X-ray appointment by contacting Patient Services or visiting the hospital registration desk.",
              },
              {
                title: "Emergency & Inpatient Services",
                description:
                  "The hospital states that emergency X-ray examinations can be arranged for urgent cases, while imaging for admitted patients is organised by their healthcare provider.",
              },
              {
                title: "Walk-in X-Ray",
                description:
                  "Walk-in X-ray examinations may be available for certain types of imaging, depending on radiology team availability.",
              },
            ],
          },
          {
            heading: "Contact & Appointment Enquiries",
            content: [
              {
                title: "Contact the Hospital",
                description:
                  "Patients can contact Diani Beach Hospital for further information or assistance with arranging an X-ray appointment.",
              },
            ],
          },
        ],
      }, // X-Ray
      {
        name: "Ultrasound (Sonography)",
        slug: "ultrasound",
        group: "diagnostics",
        sourceUrl: "https://dianibeachhospital.com/ultrasound-sonography/",
        heroImage:
          "/images/services/ultrasound/Ultrasound-1-r34hv4wqbtaa3s2gyjgsytsj92s9m284la2vz7oce0.png",
        verification: "needs-verification",
        introduction:
          "Diani Beach Hospital offers ultrasound (sonography) services designed to provide diagnostic imaging for a variety of medical conditions. Using high-frequency sound waves, ultrasound creates images of organs, tissues and blood vessels inside the body, helping healthcare providers diagnose, treat and monitor a range of health conditions. The service is described as being used in obstetrics, cardiology, musculoskeletal evaluations and other areas of care.",
        sections: [
          {
            heading: "Why Choose Our Ultrasound Services?",
            content: [
              {
                title: "Advanced Ultrasound Technology",
                description:
                  "The hospital states that it uses modern ultrasound machines designed to provide high-definition images to support accurate diagnosis and timely results.",
              },
              {
                title: "Experienced Sonographers & Specialists",
                description:
                  "The hospital describes its sonographers and radiologists as experienced in ultrasound imaging, with responsibility for performing examinations and interpreting results.",
              },
              {
                title: "Non-Invasive and Safe",
                description:
                  "Ultrasound is a non-invasive imaging technique that uses sound waves rather than ionising radiation. The source page describes it as suitable for patients of different ages, including pregnant women and infants.",
              },
              {
                title: "Fast and Reliable Results",
                description:
                  "Ultrasound examinations are generally quick, and the hospital states that it aims to provide timely results to support treatment planning.",
              },
              {
                title: "Comprehensive Care",
                description:
                  "The hospital states that it provides detailed reports to give healthcare providers information to support diagnosis and treatment decisions.",
              },
            ],
          },
          {
            heading: "How to Book an Ultrasound Appointment",
            introduction:
              "The hospital describes several ways for patients to access ultrasound imaging, depending on whether they are attending as outpatients, admitted patients or emergency cases.",
            content: [
              {
                title: "Outpatient Appointments",
                description:
                  "Patients can arrange an ultrasound appointment by contacting the Patient Services team.",
              },
              {
                title: "Inpatient Services",
                description:
                  "For admitted patients, the healthcare provider arranges the necessary ultrasound imaging.",
              },
              {
                title: "Emergency Cases",
                description:
                  "The source page states that the emergency department can provide ultrasound imaging for urgent medical situations.",
              },
            ],
          },
        ],
      }, // Ultrasound
      {
        name: "Echocardiogram (ECHO) & Electrocardiogram (ECG)",
        slug: "echocardiography-ecg",
        group: "diagnostics",
        sourceUrl: "https://dianibeachhospital.com/echo-electrocardiogram-ecg/",
        heroImage:
          "/images/services/ecg/Echo-2-r34i5i2np1h44z0ffiroypmj31ozhwdkcl2ni2b1rs.png",
        verification: "needs-verification",
        introduction:
          "Diani Beach Hospital offers Echocardiogram (ECHO) and Electrocardiogram (ECG) services to assess heart health and cardiovascular function. These diagnostic tests help identify a range of heart conditions and support doctors in making diagnoses and planning treatment. The services are described as supporting the monitoring of heart function, diagnosis of heart disease and long-term cardiovascular health.",
        sections: [
          {
            heading: "What is an Echocardiogram (ECHO)?",
            introduction:
              "An echocardiogram is a non-invasive test that uses high-frequency sound waves (ultrasound) to create images of the heart's structure and function. It allows doctors to assess the heart's chambers, valves and blood flow.",
            content: [
              {
                title: "Heart Valve Problems",
                description:
                  "Echocardiography can help assess the structure and function of the heart valves and identify abnormalities.",
              },
              {
                title: "Congenital Heart Defects",
                description:
                  "The examination can help identify structural heart conditions that are present from birth.",
              },
              {
                title: "Heart Failure",
                description:
                  "Echocardiography can help assess how effectively the heart is functioning.",
              },
              {
                title: "Residual Effects from Heart Attacks",
                description:
                  "The examination can help assess changes in heart structure or function following a heart attack.",
              },
              {
                title: "Pericardial Effusion",
                description:
                  "An echocardiogram can identify fluid accumulation around the heart.",
              },
              {
                title: "Cardiomyopathy",
                description:
                  "The examination can help assess diseases affecting the heart muscle.",
              },
            ],
          },
          {
            heading: "What is an Electrocardiogram (ECG or EKG)?",
            introduction:
              "An electrocardiogram is a simple, painless test that records the electrical activity of the heart. It measures heart rhythm, electrical impulses and timing, helping identify irregular heartbeats and other signs of heart disease.",
            content: [
              {
                title: "Arrhythmias",
                description:
                  "An ECG can help identify irregular heart rhythms.",
              },
              {
                title: "Heart Attacks",
                description:
                  "An ECG can help detect electrical changes associated with a heart attack.",
              },
              {
                title: "Heart Failure",
                description:
                  "ECG findings can contribute to the assessment of patients with suspected or known heart failure.",
              },
              {
                title: "Electrolyte Imbalances",
                description:
                  "Changes in the heart's electrical activity can provide clues to certain electrolyte disturbances.",
              },
            ],
          },
          {
            heading: "Our Echocardiogram (ECHO) and ECG Services Include",
            content: [
              {
                title: "Resting ECG",
                description:
                  "A standard ECG records the heart's electrical activity while the patient is at rest. It can help identify irregularities in heart rhythm and other electrical abnormalities.",
              },
              {
                title: "Stress ECG (Exercise ECG)",
                description:
                  "This test records the heart's response to physical exertion, typically while the patient walks on a treadmill or pedals a stationary bicycle. It can help assess exercise-related rhythm abnormalities and possible coronary artery disease.",
              },
              {
                title: "Holter Monitoring",
                description:
                  "A portable ECG device records the heart's activity over an extended period, typically 24 or 48 hours. This can help identify irregular heart rhythms that may not be detected during a standard ECG.",
              },
              {
                title: "Transthoracic Echocardiogram (TTE)",
                description:
                  "The most common type of echocardiogram. A transducer is placed on the patient's chest to capture images of the heart.",
              },
              {
                title: "Transesophageal Echocardiogram (TEE)",
                description:
                  "A specialised echocardiogram in which a probe is passed into the oesophagus to obtain more detailed images of the heart, particularly when a transthoracic examination does not provide sufficient detail.",
              },
              {
                title: "Doppler Echocardiogram",
                description:
                  "Uses Doppler ultrasound to assess blood flow through the heart and blood vessels, helping evaluate valve abnormalities and circulation.",
              },
              {
                title: "3D Echocardiogram",
                description:
                  "Provides three-dimensional images of the heart to support the assessment of complex cardiac conditions.",
              },
              {
                title: "Fetal Echocardiogram",
                description:
                  "A specialised examination used to assess the heart of a developing baby during pregnancy. It may be considered where there is a family history of congenital heart defects or maternal health factors that could affect the baby's heart.",
              },
            ],
          },
          {
            heading: "Why Choose Our ECHO & ECG Services?",
            content: [
              {
                title: "Cutting-Edge Technology",
                description:
                  "The hospital states that it uses modern equipment to produce cardiac images and electrical recordings for heart health assessment.",
              },
              {
                title: "Expert Cardiologists & Technicians",
                description:
                  "The source page describes its cardiologists and technicians as experienced in cardiac testing, performing examinations and analysing results.",
              },
              {
                title: "Non-Invasive & Safe",
                description:
                  "The page describes ECHO and ECG as non-invasive procedures. The suitability of individual tests depends on the patient's circumstances and the examination being performed.",
              },
              {
                title: "Quick Results for Fast Action",
                description:
                  "The hospital states that it aims to perform tests promptly and provide results in a timely manner to support clinical decisions.",
              },
              {
                title: "Comprehensive Heart Care",
                description:
                  "The hospital describes ECHO and ECG as part of its cardiology services, supporting the assessment and management of cardiovascular conditions.",
              },
            ],
          },
          {
            heading: "How to Book an ECHO or ECG Appointment",
            content: [
              {
                title: "Outpatient Appointments",
                description:
                  "Patients can arrange an ECHO or ECG by contacting the Patient Services team. The source page states that a referral is not required for most tests, although patients referred by a specialist can be assisted with the process.",
              },
              {
                title: "Inpatient Services",
                description:
                  "For admitted patients, the attending physician arranges the necessary cardiac tests.",
              },
              {
                title: "Emergency Services",
                description:
                  "The source page states that the emergency department offers ECHO and ECG testing for patients requiring urgent cardiac assessment.",
              },
            ],
          },
          {
            heading: "Contact & Appointment Enquiries",
            content: [
              {
                title: "Contact the Hospital",
                description:
                  "Patients with questions or wishing to arrange an ECHO or ECG appointment can contact the hospital's team for assistance.",
              },
            ],
          },
        ],
      }, // Echocardiography / ECG
    ],
  },
  {
    key: "critical",
    number: "03",
    title: "Critical & Specialised Facilities",
    description: "...",
    services: [
      {
        name: "Intensive Care Unit (ICU)",
        slug: "intensive-care-unit",
        group: "critical",
        sourceUrl: "https://dianibeachhospital.com/intensive-care-unit/",
        heroImage:
          "/images/services/icu/ICU-1-r34iqb80zzyn66s8x0lcnykwj54iwnzmvl0mzlga0o.png",
        verification: "needs-verification",
        introduction:
          "At Diani Beach Hospital, the Intensive Care Unit (ICU) provides care for patients with life-threatening conditions requiring close monitoring and advanced medical support. The hospital describes its ICU as supporting patients recovering from major surgery, severe infections, heart conditions, trauma, respiratory failure and other critical health concerns. Care is intended to be delivered in a supportive and closely monitored environment.",
        sections: [
          {
            heading: "Our ICU Services",
            content: [
              {
                title: "Advanced Respiratory Support",
                description:
                  "The ICU page describes mechanical ventilation for patients who have difficulty breathing independently or require respiratory assistance. It also mentions non-invasive ventilation, including CPAP and BiPAP, to support patients with respiratory distress and other breathing-related conditions.",
              },
              {
                title: "Cardiac Monitoring & Management",
                description:
                  "Continuous ECG monitoring is described for assessing heart rhythm and vital signs in patients with cardiac conditions, arrhythmias or those recovering from heart surgery. The service also mentions haemodynamic monitoring to assess blood pressure, circulation and indicators of organ perfusion.",
              },
              {
                title: "Post-Surgical Care",
                description:
                  "The ICU provides post-operative monitoring and support for patients recovering from complex or major procedures. The source specifically mentions cardiac surgery, neurosurgery and trauma surgery.",
              },
              {
                title: "Sepsis & Infection Management",
                description:
                  "The hospital describes ICU care for patients with sepsis, including interventions such as antibiotics and intravenous fluids to stabilise their condition. Infection-control procedures are also identified as part of patient care.",
              },
              {
                title: "Trauma & Accident Care",
                description:
                  "The ICU supports patients with serious injuries resulting from accidents, trauma or falls. The page also mentions neurological assessment and monitoring for patients with traumatic brain injuries, strokes and spinal injuries.",
              },
              {
                title: "Renal Support",
                description:
                  "The source identifies dialysis as a form of renal support for patients experiencing kidney failure or other renal complications.",
              },
              {
                title: "Multidisciplinary Care",
                description:
                  "The ICU team is described as working with specialists in areas such as cardiology, neurology, pulmonology and infectious diseases. Pain management, sedation and comfort care are also mentioned as part of support during critical recovery.",
              },
            ],
          },
          {
            heading: "Why Choose Our ICU Services?",
            content: [
              {
                title: "Experienced Medical Team",
                description:
                  "The hospital describes an ICU team comprising intensivists and other specialists who work together to provide individualised care.",
              },
              {
                title: "Advanced Monitoring Equipment",
                description:
                  "The source mentions medical equipment including ventilators, cardiac monitors and imaging tools to support continuous patient monitoring and clinical assessment.",
              },
              {
                title: "24-Hour Care & Monitoring",
                description:
                  "The hospital states that the ICU operates around the clock, providing continuous care and monitoring for critically ill patients.",
              },
              {
                title: "Comprehensive Support",
                description:
                  "The hospital describes physical, emotional and psychological support for patients and their families during critical and challenging periods.",
              },
              {
                title: "Safe & Clean Environment",
                description:
                  "The ICU page identifies infection prevention, cleanliness and a safe clinical environment as priorities.",
              },
            ],
          },
          {
            heading: "ICU Bed Capacity",
            content: [
              {
                title: "Three-Bed Intensive Care Unit",
                description:
                  "The original hospital page states that the ICU has three beds, each equipped with patient-monitoring equipment. It also describes a high nurse-to-patient ratio intended to provide individualised attention and care.",
              },
            ],
          },
        ],
      }, // ICU
      {
        name: "Neonatal Intensive Care Unit (NICU)",
        slug: "neonatal-intensive-care-unit",
        group: "critical",
        sourceUrl:
          "https://dianibeachhospital.com/neonatal-intensive-care-unit/",
        heroImage:
          "/images/services/nicu/NICU-2-r34ihvm5oif105195vcusl70nooyufic1uasz7yfug.png",
        verification: "needs-verification",
        introduction:
          "Diani Beach Hospital describes its Neonatal Intensive Care Unit (NICU) as a specialised facility providing advanced care for newborns who require critical medical attention. The unit is intended for premature and low-birth-weight infants, as well as babies born with complex health conditions. The source page describes round-the-clock care supported by neonatal equipment and a team that includes paediatricians, neonatologists, nurses and respiratory therapists.",
        sections: [
          {
            heading: "Our NICU Services Include",
            content: [
              {
                title: "Premature Newborn Care",
                description:
                  "The unit describes providing care for premature babies born before 37 weeks of gestation, including incubator support, respiratory assistance and specialised nutrition.",
              },
              {
                title: "Developmental Support",
                description:
                  "The team monitors the growth and development of premature infants, assessing progress towards developmental milestones and identifying treatment needs.",
              },
              {
                title: "Advanced Respiratory Support",
                description:
                  "The source page describes respiratory support for newborns experiencing breathing difficulties.",
              },
              {
                title: "Ventilator Care",
                description:
                  "Mechanical ventilation and non-invasive respiratory support, such as continuous positive airway pressure (CPAP), are described as options for babies who need assistance with breathing.",
              },
              {
                title: "Surfactant Therapy",
                description:
                  "The page describes surfactant administration for premature babies whose lungs are not fully developed, helping manage respiratory distress syndrome.",
              },
              {
                title: "Oxygen Therapy",
                description:
                  "Supplemental oxygen is provided to infants who require support to maintain appropriate oxygen levels.",
              },
              {
                title: "Jaundice Management",
                description:
                  "The unit describes the use of phototherapy to treat newborn jaundice by helping break down excess bilirubin in the baby's bloodstream.",
              },
              {
                title: "Neonatal Surgery and Post-Surgical Care",
                description:
                  "The page describes post-operative care for newborns who require surgery for congenital conditions, including certain heart or intestinal conditions.",
              },
              {
                title: "Specialised Post-Operative Monitoring",
                description:
                  "Newborns recovering from surgery receive monitoring and ongoing care during the post-operative period.",
              },
              {
                title: "Nutritional Support",
                description:
                  "The unit describes nutritional support tailored to the needs of newborns who require additional assistance with feeding.",
              },
              {
                title: "Breastfeeding Support",
                description:
                  "Breastfeeding support includes lactation consultation and breast milk fortification for premature infants where required.",
              },
              {
                title: "Parenteral Nutrition (TPN)",
                description:
                  "For babies who cannot receive sufficient nutrition by mouth or through breastfeeding, the page describes intravenous nutritional support through parenteral nutrition.",
              },
              {
                title: "Nasogastric Feeding",
                description:
                  "Tube feeding is described for babies who are not yet able to feed independently, helping provide nutrition while they develop strength.",
              },
              {
                title: "Infection Control and Monitoring",
                description:
                  "The NICU describes infection prevention measures intended to reduce infection risks for newborn patients.",
              },
              {
                title: "Continuous Monitoring",
                description:
                  "The page describes continuous monitoring of vital signs, including heart rate, oxygen saturation, blood pressure and body temperature.",
              },
              {
                title: "Family-Centred Care",
                description:
                  "The hospital describes involving parents in their baby's care through regular updates and opportunities to participate in the care process.",
              },
              {
                title: "Emotional Support",
                description:
                  "The NICU team describes providing guidance, counselling and emotional support to families during their baby's admission.",
              },
            ],
          },
          {
            heading: "Why Choose Our NICU Services?",
            content: [
              {
                title: "Expert Team of Neonatologists and Specialists",
                description:
                  "The source page describes a team that includes neonatologists, paediatricians, nurses, respiratory therapists and other specialists involved in newborn care.",
              },
              {
                title: "State-of-the-Art Equipment",
                description:
                  "The unit describes using neonatal equipment such as incubators, ventilators and monitoring systems to support the care of newborn patients.",
              },
              {
                title: "24/7 Care and Monitoring",
                description:
                  "The hospital states that the NICU operates around the clock, providing continuous monitoring and support.",
              },
              {
                title: "Comprehensive Care",
                description:
                  "The page describes care spanning premature birth, neonatal medical needs and recovery following surgery.",
              },
              {
                title: "Family-Centred Approach",
                description:
                  "Parents are encouraged to participate in their baby's care, with the team providing education, guidance and emotional support.",
              },
            ],
          },
          {
            heading: "NICU Bed Capacity",
            content: [
              {
                title: "Four-Bed Neonatal Intensive Care Unit",
                description:
                  "The source page states that the NICU has a capacity of four beds, each equipped with monitoring and life-support equipment. It also describes a high nurse-to-patient ratio intended to support attentive, individualised care.",
              },
            ],
          },
        ],
      }, // NICU
      {
        name: "High Dependency Unit (HDU)",
        slug: "high-dependency-unit",
        group: "critical",
        sourceUrl: "https://dianibeachhospital.com/high-dependency-unit/",
        heroImage:
          "/images/services/hdu/HDU-1-r34ijlni7kryaej53m68d5jfv476ygcmadcunhegfs.png",
        verification: "needs-verification",
        introduction:
          "Diani Beach Hospital describes its High Dependency Unit (HDU) as a specialised facility for patients who require closer monitoring and more intensive treatment than can be provided in a standard hospital ward, but who do not require admission to an Intensive Care Unit (ICU).",
        sections: [
          {
            heading: "Who Needs Care in the HDU?",
            introduction:
              "Patients admitted to the HDU typically require close observation, monitoring and medical intervention. The hospital identifies the following as common reasons for HDU admission:",
            content: [
              {
                title: "Post-Operative Care",
                description:
                  "Close monitoring and support following major surgical procedures, such as heart surgery and organ transplants.",
              },
              {
                title: "Respiratory Distress",
                description:
                  "Monitoring and treatment for patients experiencing breathing difficulties or requiring oxygen support.",
              },
              {
                title: "Cardiac Monitoring",
                description:
                  "Monitoring and recovery support for patients following a heart attack or cardiac surgery.",
              },
              {
                title: "Severe Infections",
                description:
                  "Care for patients with serious infections requiring intravenous antibiotic treatment and close observation.",
              },
              {
                title: "Neurological Conditions",
                description:
                  "Continuous monitoring for patients with neurological conditions requiring closer medical supervision.",
              },
              {
                title: "Severe Trauma and Accidents",
                description:
                  "Specialised monitoring and treatment for patients recovering from serious injuries or accidents.",
              },
              {
                title: "Renal Failure",
                description:
                  "Monitoring and support for patients with kidney failure who require dialysis.",
              },
            ],
          },
          {
            heading: "Our HDU Facilities",
            introduction:
              "The hospital describes its HDU as an environment designed around patient comfort, safety and effective treatment.",
            content: [
              {
                title: "24/7 Medical Monitoring",
                description:
                  "Continuous monitoring of patients' vital signs using medical monitoring equipment, allowing the healthcare team to identify changes and provide timely interventions.",
              },
              {
                title: "Private Cubicles & Advanced Equipment",
                description:
                  "Individual patient cubicles are described as being equipped with medical equipment such as heart monitors, oxygen support and respiratory devices.",
              },
              {
                title: "Comfortable Environment",
                description:
                  "The unit aims to provide a comfortable environment through private rooms, soothing lighting and modern amenities.",
              },
              {
                title: "Dedicated Nursing Staff",
                description:
                  "The hospital describes its nursing team as providing individualised care and support, with an emphasis on patient comfort and safety.",
              },
            ],
          },
          {
            heading: "Meet Our Healthcare Team",
            introduction:
              "The HDU is described as being managed by a multidisciplinary team of healthcare professionals involved in critical and high-dependency care.",
            content: [
              {
                title: "Consultant Physicians",
                description:
                  "Consultants with expertise in areas including critical care, cardiac care, neurology and other medical disciplines.",
              },
              {
                title: "Nurses",
                description:
                  "Trained nurses who monitor patient progress, manage medications and provide support to patients and their families.",
              },
              {
                title: "Respiratory Therapists",
                description:
                  "Professionals who support the management of breathing difficulties and respiratory conditions.",
              },
              {
                title: "Support Staff",
                description:
                  "Additional professionals, including physiotherapists, dietitians and social workers, who support different aspects of patient recovery.",
              },
            ],
          },
          {
            heading: "Your Care Journey in the HDU",
            content: [
              {
                title: "Admission",
                description:
                  "On arrival, the healthcare team assesses the patient's condition and determines the appropriate monitoring and treatment required.",
              },
              {
                title: "Personalised Treatment Plan",
                description:
                  "Following the initial assessment, an individualised care plan is developed with the aim of stabilising the patient's condition and supporting recovery.",
              },
              {
                title: "Monitoring and Support",
                description:
                  "Patients receive ongoing monitoring of vital signs, including heart rate, blood pressure and oxygen levels. Treatment plans may be adjusted according to changes in the patient's condition.",
              },
              {
                title: "Discharge",
                description:
                  "Once the patient's condition has stabilised, the healthcare team discusses the next stage of care. This may involve transfer to a standard hospital ward or continued recovery at home.",
              },
            ],
          },
          {
            heading: "Why Choose Our HDU?",
            content: [
              {
                title: "Expert Care",
                description:
                  "The hospital describes a multidisciplinary team bringing together professionals in critical and high-dependency care.",
              },
              {
                title: "Advanced Technology",
                description:
                  "The unit states that it invests in modern medical technology and equipment to support patient monitoring and treatment.",
              },
              {
                title: "Compassionate Environment",
                description:
                  "Patient comfort and emotional well-being are emphasised throughout the stay, with a supportive and compassionate approach to care.",
              },
            ],
          },
        ],
      }, // HDU
      {
        name: "Dialysis",
        slug: "dialysis",
        group: "critical",
        sourceUrl: "https://dianibeachhospital.com/dialysis/",
        heroImage:
          "/images/services/dialysis/Dialysis-1-1-r50olkkxbbqzcj2wonbagcteym5oahq82bozo9y8c8.png",
        verification: "needs-verification",
        introduction:
          "Diani Beach Hospital describes its Dialysis Unit as a specialised facility providing treatment and support for patients with kidney disease. The unit is described as being equipped with dialysis technology and staffed by healthcare professionals involved in the care of patients with chronic kidney conditions. Its stated aim is to provide effective treatment in a comfortable and supportive environment.",
        sections: [
          {
            heading: "Who Needs Dialysis?",
            introduction:
              "Dialysis may be required when kidney function is severely reduced, including in patients with end-stage kidney disease or other serious forms of kidney dysfunction. The hospital identifies the following conditions as possible causes:",
            content: [
              {
                title: "Chronic Kidney Disease (CKD)",
                description:
                  "Long-term deterioration in kidney function that may eventually require dialysis.",
              },
              {
                title: "Diabetes",
                description:
                  "Diabetes can damage the kidneys over time and contribute to severe kidney dysfunction.",
              },
              {
                title: "High Blood Pressure (Hypertension)",
                description:
                  "Uncontrolled high blood pressure can damage the kidneys and contribute to kidney disease.",
              },
              {
                title: "Polycystic Kidney Disease (PKD)",
                description:
                  "An inherited condition involving the development of fluid-filled cysts in the kidneys, which can impair kidney function.",
              },
              {
                title: "Acute Kidney Injury (AKI)",
                description:
                  "A sudden decline in kidney function that may, in some cases, require temporary dialysis.",
              },
              {
                title: "Glomerulonephritis",
                description:
                  "Inflammation affecting the kidney's filtering structures, which can lead to impaired kidney function.",
              },
              {
                title: "Other Kidney-Related Conditions",
                description:
                  "Other medical conditions that significantly affect the kidneys may also result in a need for dialysis.",
              },
            ],
          },
          {
            heading: "Our Dialysis Facilities",
            introduction:
              "The Dialysis Unit is described as providing a treatment environment focused on patient safety, comfort and support.",
            content: [
              {
                title: "Modern Dialysis Equipment",
                description:
                  "The hospital states that it uses modern dialysis machines and related technology to support safe and effective treatment.",
              },
              {
                title: "Comfortable Treatment Areas",
                description:
                  "The treatment area is described as having comfortable chairs and provisions for patient privacy during dialysis sessions.",
              },
              {
                title: "Skilled Medical Staff",
                description:
                  "The unit describes a team that includes nephrologists, dialysis nurses and other support staff involved in patient care.",
              },
              {
                title: "Sterile Environment",
                description:
                  "The hospital states that it follows sterilisation procedures intended to maintain a safe treatment environment and minimise infection risks.",
              },
              {
                title: "Wi-Fi and Entertainment",
                description:
                  "Wi-Fi, television and other amenities are listed as available to make treatment sessions more comfortable.",
              },
            ],
          },
          {
            heading: "Types of Dialysis Treatment We Offer",
            content: [
              {
                title: "Haemodialysis",
                description:
                  "Blood is drawn from the body, passed through a dialysis machine where waste products and excess fluid are filtered, and then returned to the body.",
              },
              {
                title: "Treatment Duration and Frequency",
                description:
                  "The source page describes sessions typically lasting three to five hours, with patients usually requiring three sessions per week. The actual schedule depends on individual clinical needs.",
              },
              {
                title: "Hospital-Based Treatment",
                description:
                  "Haemodialysis is described as being performed in the hospital's Dialysis Unit under the supervision of its healthcare team.",
              },
            ],
          },
          {
            heading: "Our Dialysis Team",
            introduction:
              "The Dialysis Unit describes a multidisciplinary team responsible for overseeing treatment, monitoring patients and providing ongoing support.",
            content: [
              {
                title: "Nephrologists",
                description:
                  "Doctors specialising in kidney diseases who oversee treatment plans and make adjustments according to each patient's medical needs.",
              },
              {
                title: "Dialysis Nurses",
                description:
                  "Trained nurses who monitor patients during treatment, assist with catheter care and provide education about dialysis and available treatment options.",
              },
              {
                title: "Dietitians",
                description:
                  "Professionals who help patients manage their nutritional needs through dietary guidance tailored to kidney disease and dialysis.",
              },
              {
                title: "Social Workers",
                description:
                  "Support professionals who help patients and families navigate the emotional, social and practical challenges associated with kidney disease.",
              },
            ],
          },
          {
            heading: "Patient Journey in the Dialysis Unit",
            content: [
              {
                title: "Initial Consultation and Assessment",
                description:
                  "Following referral to the unit, patients undergo an assessment that includes a review of their medical history, kidney function tests and a discussion of possible treatment options.",
              },
              {
                title: "Choosing the Right Treatment",
                description:
                  "The patient's level of kidney function and overall medical condition are assessed to determine an appropriate dialysis schedule and any additional medication requirements.",
              },
              {
                title: "Ongoing Care and Monitoring",
                description:
                  "Once treatment begins, the healthcare team monitors the patient's condition and response to dialysis. Treatment plans are reviewed and adjusted when necessary.",
              },
              {
                title: "Education and Support",
                description:
                  "Patients receive guidance on kidney health, lifestyle changes, dialysis fistula care, fluid intake and dietary management.",
              },
              {
                title: "Follow-Up and Long-Term Care",
                description:
                  "The hospital describes ongoing follow-up appointments to monitor kidney health and support the long-term management of dialysis treatment.",
              },
            ],
          },
          {
            heading: "Why Choose Our Dialysis Unit?",
            content: [
              {
                title: "Experienced Team",
                description:
                  "The hospital describes a team of nephrologists, dialysis nurses and support professionals with experience in kidney care.",
              },
              {
                title: "Patient-Centred Care",
                description:
                  "The unit emphasises patient comfort, safety and emotional well-being throughout the treatment process.",
              },
              {
                title: "Advanced Technology",
                description:
                  "The hospital states that its dialysis equipment is designed to support safe, effective and efficient treatment.",
              },
              {
                title: "Convenience",
                description:
                  "The source page states that flexible operating hours are intended to make dialysis treatment more convenient for patients.",
              },
              {
                title: "Holistic Support",
                description:
                  "The source page includes holistic support as a service heading but does not provide a corresponding description.",
              },
            ],
          },
        ],
      }, // Dialysis
      {
        name: "Major & Minor Theatres",
        slug: "major-minor-theatres",
        group: "critical",
        sourceUrl: "https://dianibeachhospital.com/major-minor-theatres/",
        heroImage:
          "/images/services/theatre/Major-Theatre-3-r34l8llxh3k6drmvp1l966cupk3sa0ffygxoifkwc8.png",
        verification: "needs-verification",
        introduction:
          "Diani Beach Hospital describes its Minor and Major Theatre units as providing surgical facilities for procedures ranging from minor interventions to more complex operations. The page emphasises surgical care in a controlled environment, supported by surgeons, anaesthesiologists and nursing staff, with attention to patient safety, comfort and recovery.",
        sections: [
          {
            heading: "What is Minor Surgery?",
            introduction:
              "Minor surgery generally involves less invasive procedures, often performed under local anaesthesia and associated with shorter recovery periods. The hospital describes these procedures as commonly being performed on an outpatient basis, allowing patients to return home on the same day where appropriate.",
            content: [
              {
                title: "Skin Biopsy",
                description:
                  "Removal of a small sample of skin tissue for diagnostic examination.",
              },
              {
                title: "Cyst Removal",
                description:
                  "Removal of benign growths such as sebaceous cysts.",
              },
              {
                title: "Mole Removal",
                description:
                  "Surgical removal of moles and other skin lesions.",
              },
              {
                title: "Laceration Repair",
                description:
                  "Repair of small cuts and wounds using sutures or other appropriate techniques.",
              },
            ],
          },
          {
            heading: "What is Major Surgery?",
            introduction:
              "Major surgery involves more complex procedures that may require general anaesthesia, a longer recovery period and hospital admission for post-operative care and monitoring. The hospital lists procedures across several surgical specialties.",
            content: [
              {
                title: "Orthopaedic Surgeries",
                description:
                  "Procedures including joint replacements, fracture repairs and spine surgery.",
              },
              {
                title: "Abdominal Surgeries",
                description:
                  "Procedures including gallbladder removal, appendectomy, hernia repair and bowel resections.",
              },
              {
                title: "Cancer Surgeries",
                description:
                  "Surgical procedures such as tumour removal, mastectomy and removal of cancerous tissue.",
              },
              {
                title: "Neurological Surgeries",
                description:
                  "Brain and spinal procedures, including tumour removal and decompression operations.",
              },
              {
                title: "Endoscopic and Laparoscopic Procedures",
                description:
                  "The source page lists minimally invasive procedures such as gastroscopy and colonoscopy under this heading.",
              },
              {
                title: "Urological Surgery",
                description:
                  "The page lists procedures including transurethral resection of the prostate (TURP), management of strictures and removal of renal and ureteric stones.",
              },
              {
                title: "Spine Surgeries",
                description:
                  "The hospital describes minimally invasive endoscopic procedures for herniated intervertebral discs, vertebral stabilisation, pain management and implantable pain-relief pumps.",
              },
              {
                title: "Obstetrics and Gynaecology",
                description:
                  "Procedures listed include Caesarean sections, fibroid removal and removal of ovarian cysts and tumours.",
              },
              {
                title: "Ear, Nose and Throat (ENT)",
                description:
                  "Procedures listed include adenoidectomy, tonsillectomy and nasal septal surgery.",
              },
            ],
          },
          {
            heading: "Why Choose Our Theatre Services?",
            introduction:
              "The hospital describes its theatre services as focusing on safe surgical care, appropriate equipment and support throughout the patient's surgical journey.",
            content: [
              {
                title: "Highly Experienced Surgical Team",
                description:
                  "The source page describes a team of surgeons, anaesthesiologists and nurses involved in minor and major surgical procedures across different specialties.",
              },
              {
                title: "Modern Surgical Equipment",
                description:
                  "The hospital states that its theatres are equipped with modern surgical technology intended to support precision and patient safety.",
              },
              {
                title: "Comprehensive Pre- and Post-Surgical Care",
                description:
                  "The hospital describes support that includes pre-operative assessments and consultations, post-operative monitoring and rehabilitation.",
              },
              {
                title: "Advanced Anaesthesia Options",
                description:
                  "The page lists local, regional and general anaesthesia options, selected according to the procedure and patient's needs.",
              },
              {
                title: "Sterile and Safe Environment",
                description:
                  "The theatre units are described as following sterilisation and safety protocols intended to maintain a clean environment and minimise infection risks.",
              },
              {
                title: "Patient-Centred Care",
                description:
                  "The hospital emphasises working with patients to support their comfort and confidence before, during and after surgery.",
              },
            ],
          },
          {
            heading: "What to Expect Before, During and After Surgery",
            content: [
              {
                title: "Before Surgery",
                description:
                  "The pre-operative stage involves consultation, assessment and preparation for the planned procedure.",
              },
              {
                title: "Consultation and Assessment",
                description:
                  "Patients meet with their surgeon to discuss the planned procedure, potential risks and expected outcomes. Necessary investigations, which may include blood tests and imaging, are performed as part of the preparation.",
              },
              {
                title: "Pre-Operative Instructions",
                description:
                  "Patients receive instructions on preparation for surgery, including fasting requirements, medication guidance and arrival times.",
              },
              {
                title: "Anaesthesia Consultation",
                description:
                  "Where required, the anaesthesia team discusses the appropriate anaesthesia plan for the planned procedure.",
              },
              {
                title: "During Surgery",
                description:
                  "The surgical team prepares the patient and performs the planned procedure while monitoring their condition.",
              },
              {
                title: "Preparation",
                description:
                  "The patient is positioned in the operating theatre, and the appropriate anaesthesia is administered according to the procedure.",
              },
              {
                title: "Surgical Procedure",
                description:
                  "The surgical team carries out the operation using the techniques and equipment appropriate to the procedure.",
              },
              {
                title: "Monitoring",
                description:
                  "The patient's vital signs are monitored throughout the operation to support their safety and well-being.",
              },
              {
                title: "After Surgery",
                description:
                  "Following the procedure, patients receive recovery care, monitoring and guidance for the next stage of treatment.",
              },
              {
                title: "Recovery",
                description:
                  "Patients are taken to a recovery area where nursing staff monitor them as they recover from anaesthesia. Once stable, they may be discharged or transferred to a hospital room for further care.",
              },
              {
                title: "Pain Management",
                description:
                  "The healthcare team provides pain-management support to help patients remain comfortable during recovery.",
              },
              {
                title: "Post-Surgery Care",
                description:
                  "Patients receive instructions on caring for the surgical site, activities to avoid and follow-up appointments. Rehabilitation or physiotherapy may be recommended following major procedures.",
              },
            ],
          },
        ],
      },
      // Major & Minor Theatres
    ],
  },
  {
    key: "allied",
    number: "04",
    title: "Allied & Support Services",
    description: "...",
    services: [
      {
        name: "Dental Services",
        slug: "dental-services",
        group: "allied",
        sourceUrl: "https://dianibeachhospital.com/dental/",
        heroImage:
          "/images/services/dental/PHYSIOTHERAPY-3-r438t2nnqrcmsvrfe7hiu64qk68mlmu36kpkzlep4o.png",
        verification: "needs-verification",
        introduction:
          "Diani Beach Hospital describes its Dental Department as providing oral healthcare for patients of different ages, from routine dental check-ups to restorative and cosmetic treatments. Its stated focus is on preventive care, treatment of dental conditions and supporting patients in maintaining their oral health.",
        sections: [
          {
            heading: "Our Dental Services",
            introduction:
              "The Dental Department describes a range of dental treatments delivered using modern equipment and personalised care.",
            content: [
              {
                title: "Preventive Care",
                description:
                  "Preventive dental services focus on identifying potential problems early and maintaining good oral health.",
              },
              {
                title: "Routine Check-ups and Cleanings",
                description:
                  "Regular dental examinations and professional cleaning help identify early signs of dental problems, including cavities, gum disease and possible oral abnormalities.",
              },
              {
                title: "Dental X-Rays",
                description:
                  "Dental imaging helps identify problems that may not be visible during a routine examination and supports assessment of the teeth and surrounding structures.",
              },
              {
                title: "Fluoride Treatments",
                description:
                  "Fluoride treatments help strengthen tooth enamel and reduce the risk of tooth decay, particularly in children and patients considered at higher risk.",
              },
              {
                title: "Dental Sealants",
                description:
                  "Protective coatings applied to the surfaces of teeth, particularly the back teeth, to help prevent cavities.",
              },
              {
                title: "Restorative Dentistry",
                description:
                  "Restorative procedures aim to repair damaged teeth and replace missing teeth, helping restore oral function and appearance.",
              },
              {
                title: "Fillings",
                description:
                  "Tooth-coloured fillings are used to restore teeth affected by cavities.",
              },
              {
                title: "Crowns and Bridges",
                description:
                  "Dental crowns and bridges help restore the function and appearance of damaged or missing teeth.",
              },
              {
                title: "Root Canals",
                description:
                  "Root canal treatment is used to treat a tooth affected by infection or damage to its inner pulp, with the aim of preserving the tooth.",
              },
              {
                title: "Dentures",
                description:
                  "Full or partial dentures replace missing teeth and help restore chewing function and the appearance of the smile.",
              },
              {
                title: "Cosmetic Dentistry",
                description:
                  "Cosmetic treatments focus on improving the appearance of teeth and smiles.",
              },
              {
                title: "Teeth Whitening",
                description:
                  "Professional whitening treatments help brighten teeth and reduce staining.",
              },
              {
                title: "Veneers",
                description:
                  "Thin shells placed over the front surfaces of teeth to improve their appearance.",
              },
              {
                title: "Bonding",
                description:
                  "A tooth-coloured resin is applied to teeth to improve the appearance of chips, gaps or discolouration.",
              },
              {
                title: "Orthodontics",
                description:
                  "Orthodontic treatment focuses on correcting tooth alignment and bite-related concerns.",
              },
              {
                title: "Braces",
                description:
                  "Traditional metal or clear braces are used to straighten teeth, improve alignment and support a more balanced bite.",
              },
              {
                title: "Invisalign",
                description:
                  "Clear, removable aligners are described as an alternative to traditional braces for correcting tooth alignment.",
              },
              {
                title: "Oral Surgery",
                description:
                  "Oral surgical procedures address conditions involving the teeth and surrounding oral structures.",
              },
              {
                title: "Tooth Extractions",
                description:
                  "Removal of problematic or impacted teeth, including wisdom teeth.",
              },
              {
                title: "Dental Implants",
                description:
                  "Dental implants are used as replacements for missing teeth, providing a fixed option designed to restore appearance and function.",
              },
              {
                title: "Periodontal Care",
                description:
                  "Periodontal treatment focuses on the health of the gums and the structures supporting the teeth.",
              },
              {
                title: "Gum Disease Treatment",
                description:
                  "The department describes both non-surgical and surgical approaches to treating gum disease and helping prevent further damage to the supporting structures of the teeth.",
              },
              {
                title: "Scaling and Root Planing",
                description:
                  "Deep-cleaning procedures that remove plaque and tartar from below the gumline.",
              },
              {
                title: "Paediatric Dentistry",
                description:
                  "Dental care tailored to the needs of children, with an emphasis on prevention, treatment and positive early dental experiences.",
              },
              {
                title: "Children's Dental Care",
                description:
                  "Services for young patients include preventive treatments, fillings and orthodontic evaluations.",
              },
              {
                title: "Sedation Dentistry",
                description:
                  "The source page describes sedation as an option to help children who experience anxiety or fear during dental treatment feel more comfortable.",
              },
            ],
          },
          {
            heading: "Why Choose Our Dental Department?",
            introduction:
              "The hospital describes its dental team as focused on delivering care in a comfortable and supportive environment.",
            content: [
              {
                title: "Expert Care",
                description:
                  "The department describes a team that includes dentists, orthodontists and dental hygienists who keep up with developments in dentistry.",
              },
              {
                title: "State-of-the-Art Technology",
                description:
                  "The hospital lists digital X-rays, laser dentistry and modern sterilisation techniques among the technologies and equipment used in the department.",
              },
              {
                title: "Comprehensive Services",
                description:
                  "The department describes a range of services spanning routine check-ups, preventive care and more complex dental treatments.",
              },
              {
                title: "Personalised Treatment Plans",
                description:
                  "The team aims to develop treatment plans around each patient's dental needs, goals and budget.",
              },
              {
                title: "Comfortable and Relaxing Environment",
                description:
                  "The department emphasises patient comfort through modern amenities, pain-management options and a welcoming environment intended to help ease dental anxiety.",
              },
            ],
          },
          {
            heading: "Our Team",
            introduction:
              "The Dental Department describes a multidisciplinary team of dental professionals with different areas of expertise.",
            content: [
              {
                title: "General Dentists",
                description:
                  "Provide preventive, restorative and cosmetic dental care for patients of different ages.",
              },
              {
                title: "Orthodontists",
                description:
                  "Specialise in tooth alignment and orthodontic treatments, including braces, for children and adults.",
              },
              {
                title: "Periodontists",
                description:
                  "Focus on the treatment of gum disease and conditions affecting the structures that support the teeth.",
              },
              {
                title: "Paediatric Dentists",
                description:
                  "Specialise in dental care for children, with an emphasis on their specific oral health needs and a positive treatment experience.",
              },
              {
                title: "Dental Hygienists",
                description:
                  "Provide professional cleaning, fluoride treatments and guidance on maintaining good oral hygiene.",
              },
            ],
          },
          {
            heading: "Your First Visit",
            introduction:
              "The department outlines the following steps to help patients understand what to expect during their first dental appointment.",
            content: [
              {
                title: "Comprehensive Evaluation",
                description:
                  "The first appointment includes a dental examination and, where necessary, X-rays to assess the patient's oral health.",
              },
              {
                title: "Discuss Treatment Options",
                description:
                  "The dental team discusses any identified concerns and explains the available treatment options.",
              },
              {
                title: "Create a Treatment Plan",
                description:
                  "The patient and dental team work together to develop a treatment plan that considers the patient's dental goals and schedule.",
              },
            ],
          },
        ],
      }, // Dental Services
      {
        name: "Physiotherapy & Occupational Therapy",
        slug: "physiotherapy-occupational-therapy",
        group: "allied",
        sourceUrl:
          "https://dianibeachhospital.com/physiotherapy-occupational-therapy/",
        heroImage:
          "/images/services/physio/PHYSIOTHERAPY-3-r438t2nnqrcmsvrfe7hiu64qk68mlmu36kpkzlep4o.png",
        verification: "needs-verification",
        introduction:
          "Diani Beach Hospital describes its Physiotherapy and Occupational Therapy Department as providing rehabilitation and support for individuals recovering from injuries, managing chronic conditions or working towards greater independence. The department's stated focus is helping patients improve mobility, restore function and manage physical, cognitive and developmental challenges.",
        sections: [
          {
            heading: "What is Physiotherapy?",
            introduction:
              "Physiotherapy is a healthcare profession focused on the assessment, treatment and prevention of physical conditions that affect movement, mobility and function. Physiotherapists use different techniques to help patients manage pain, recover from injuries and improve strength, flexibility and movement.",
            content: [
              {
                title: "Musculoskeletal Pain",
                description:
                  "Treatment for back pain, neck pain, joint pain and sports-related injuries.",
              },
              {
                title: "Orthopaedic Rehabilitation",
                description:
                  "Rehabilitation following surgery, fractures and joint replacement procedures.",
              },
              {
                title: "Neurological Conditions",
                description:
                  "Rehabilitation support for conditions such as stroke, multiple sclerosis, Parkinson's disease and spinal cord injuries.",
              },
              {
                title: "Post-Surgical Recovery",
                description:
                  "Treatment focused on restoring strength, mobility and physical function following surgery or injury.",
              },
              {
                title: "Sports Injuries",
                description:
                  "Assessment and treatment of sprains, strains and other sports-related injuries, with the aim of restoring movement and physical performance.",
              },
            ],
          },
          {
            heading: "What is Occupational Therapy?",
            introduction:
              "Occupational Therapy focuses on helping individuals achieve greater independence and improve their quality of life through meaningful everyday activities. Occupational therapists work with people experiencing physical, cognitive or emotional challenges that affect activities such as dressing, cooking, working and participating in social life.",
            content: [
              {
                title: "Activities of Daily Living (ADLs)",
                description:
                  "Helping patients develop strategies to manage everyday activities such as dressing, eating and bathing.",
              },
              {
                title: "Ergonomic Assessments",
                description:
                  "Assessing home and workplace environments and recommending adjustments that may reduce discomfort and improve function.",
              },
              {
                title: "Cognitive Rehabilitation",
                description:
                  "Supporting individuals recovering from brain injuries, strokes or living with conditions such as dementia, with a focus on memory and other cognitive functions.",
              },
              {
                title: "Hand Therapy",
                description:
                  "Treatment and rehabilitation for conditions or injuries affecting the hands, including fractures, arthritis and carpal tunnel syndrome.",
              },
              {
                title: "Paediatric Therapy",
                description:
                  "Supporting children with developmental delays, sensory difficulties or motor challenges to improve their participation in school and everyday activities.",
              },
              {
                title: "Balance and Gait Training",
                description:
                  "Helping patients improve balance and walking ability, particularly following surgery, injury or neurological conditions.",
              },
            ],
          },
          {
            heading: "Our Services and Treatments",
            introduction:
              "The department describes a range of physiotherapy and occupational therapy treatments tailored to individual patient needs.",
            content: [
              {
                title: "Physiotherapy Services",
                description:
                  "Physiotherapy treatments focus on improving movement, managing pain and supporting physical rehabilitation.",
              },
              {
                title: "Manual Therapy",
                description:
                  "Hands-on techniques such as joint mobilisation, soft tissue massage and stretching to help reduce pain and improve movement.",
              },
              {
                title: "Exercise Programmes",
                description:
                  "Individualised exercise programmes designed to improve strength, flexibility and mobility according to each patient's needs.",
              },
              {
                title: "Electrotherapy",
                description:
                  "Treatment using modalities such as therapeutic ultrasound, Transcutaneous Electrical Nerve Stimulation (TENS) and heat or ice therapy to help manage pain and support rehabilitation.",
              },
              {
                title: "Postural Training",
                description:
                  "Guidance on maintaining appropriate posture to help reduce discomfort and prevent injuries.",
              },
              {
                title: "Occupational Therapy Services",
                description:
                  "Occupational therapy interventions focus on helping patients participate more independently in everyday activities.",
              },
              {
                title: "Home and Worksite Assessments",
                description:
                  "Assessment of home and workplace environments, with recommendations for changes that can improve safety and independence.",
              },
              {
                title: "Adaptive Equipment Training",
                description:
                  "Guidance on using assistive devices such as grab bars, wheelchairs and splints to make everyday activities easier.",
              },
              {
                title: "Cognitive Rehabilitation",
                description:
                  "Activities and exercises intended to support memory, problem-solving and concentration in individuals recovering from neurological injuries or illnesses.",
              },
              {
                title: "Pain Management",
                description:
                  "Guidance on relaxation techniques, splinting and other approaches to help manage pain during everyday activities.",
              },
              {
                title: "Paediatric Therapy",
                description:
                  "Support for children with physical, developmental or cognitive challenges, helping improve their participation in activities at home, school and during play.",
              },
            ],
          },
          {
            heading: "Our Team of Therapists",
            introduction:
              "The department describes its physiotherapists and occupational therapists as working together to develop individualised rehabilitation plans that support patients' recovery and independence.",
            content: [
              {
                title: "Experienced Physiotherapists",
                description:
                  "Physiotherapists with stated areas of focus including musculoskeletal, neurological, orthopaedic and sports-related conditions.",
              },
              {
                title: "Certified Occupational Therapists",
                description:
                  "Occupational therapists who support individuals experiencing physical, cognitive and developmental challenges that affect independent living.",
              },
              {
                title: "Paediatric Therapists",
                description:
                  "Therapists focused on supporting children with developmental or physical challenges.",
              },
              {
                title: "Assistive Technology Experts",
                description:
                  "Professionals who help patients identify and use assistive devices that can improve independence in everyday life.",
              },
            ],
          },
          {
            heading:
              "Why Choose Our Physiotherapy & Occupational Therapy Department?",
            content: [
              {
                title: "Personalised Care",
                description:
                  "The department describes a patient-centred approach, with treatments tailored to individual needs, goals and lifestyles.",
              },
              {
                title: "Advanced Technology",
                description:
                  "The hospital states that the department is equipped with modern therapy tools and equipment to support rehabilitation.",
              },
              {
                title: "Comprehensive Services",
                description:
                  "The department describes services spanning rehabilitation, occupational therapy and home assessments.",
              },
              {
                title: "Experienced and Compassionate Team",
                description:
                  "The team is described as being committed to helping patients regain strength, independence and confidence.",
              },
              {
                title: "Multidisciplinary Approach",
                description:
                  "Therapists work with other hospital professionals, including doctors and nurses, to coordinate patient treatment and rehabilitation.",
              },
            ],
          },
          {
            heading: "Your Treatment Journey",
            content: [
              {
                title: "Initial Consultation",
                description:
                  "The first appointment includes an assessment of the patient's condition, medical history and rehabilitation goals. Treatment options are discussed and an individualised plan is developed.",
              },
              {
                title: "Treatment Plan",
                description:
                  "Therapy sessions are scheduled according to the patient's needs and goals. Progress is monitored and the plan adjusted when necessary.",
              },
              {
                title: "Ongoing Support",
                description:
                  "Patients receive continued rehabilitation support and guidance on exercises or techniques they can practise at home to support recovery.",
              },
              {
                title: "Discharge and Follow-Up",
                description:
                  "When patients reach their rehabilitation goals or their condition improves, follow-up appointments may be arranged to monitor progress and provide ongoing management strategies.",
              },
            ],
          },
        ],
      }, // Physiotherapy / Occupational Therapy
      {
        name: "ANC & Child Welfare Clinics",
        slug: "anc-child-welfare-clinics",
        group: "allied",
        sourceUrl: "https://dianibeachhospital.com/anc-child-welfare-clinics/",
        heroImage:
          "/images/services/anc/ANC-r4394n25ud6no4ykuph90r1xpv88bjr6ftpol69ak8.png",
        verification: "needs-verification",
        introduction:
          "Diani Beach Hospital describes its Antenatal Care (ANC) and Child Welfare Clinics as providing care and support for mothers and children during pregnancy, childbirth and early childhood. The clinics focus on health education, preventive care, monitoring and early intervention to support maternal and child health.",
        sections: [
          {
            heading: "Antenatal Care (ANC)",
            introduction:
              "Antenatal care supports the health and well-being of the mother and developing baby throughout pregnancy. The hospital describes its ANC Clinic as providing regular monitoring, preventive services and guidance during this period.",
            content: [
              {
                title: "Routine Check-ups",
                description:
                  "Regular monitoring of the mother's and baby's health, including blood pressure, weight and fetal development.",
              },
              {
                title: "Ultrasound Scans",
                description:
                  "Non-invasive imaging used to monitor the baby's growth and well-being during pregnancy.",
              },
              {
                title: "Blood Tests and Screenings",
                description:
                  "Tests and screenings intended to identify conditions such as gestational diabetes, anaemia, infections and other pregnancy-related complications.",
              },
              {
                title: "Vaccinations",
                description:
                  "Vaccinations during pregnancy to help protect the mother and baby against preventable diseases.",
              },
              {
                title: "Nutritional Counselling",
                description:
                  "Individualised dietary and supplement guidance to support maternal health and a healthy pregnancy.",
              },
              {
                title: "Education and Support",
                description:
                  "Information and guidance on pregnancy, preparation for childbirth and care following delivery.",
              },
              {
                title: "High-Risk Pregnancy Management",
                description:
                  "Additional monitoring and care for pregnancies involving factors such as diabetes, hypertension or multiple pregnancies.",
              },
            ],
          },
          {
            heading: "Why Choose Our ANC Clinic?",
            content: [
              {
                title: "Experienced Obstetricians and Midwives",
                description:
                  "The hospital describes a team of obstetricians, gynaecologists and midwives providing support throughout pregnancy.",
              },
              {
                title: "Modern Facilities",
                description:
                  "The clinic states that it has medical equipment including ultrasound machines and monitoring tools to support antenatal care.",
              },
              {
                title: "Comprehensive Care",
                description:
                  "The clinic describes an approach that considers both physical health and emotional support during pregnancy.",
              },
              {
                title: "Personalised Birth Plans",
                description:
                  "The team works with expectant mothers to develop birth plans that consider their preferences and care needs.",
              },
            ],
          },
          {
            heading: "Child Welfare Clinics",
            introduction:
              "The Child Welfare Clinic focuses on the health and development of children from birth through early childhood. The hospital describes services that include routine check-ups, vaccinations and growth monitoring to support children's health during their formative years.",
            content: [
              {
                title: "Routine Check-ups",
                description:
                  "Regular health assessments to monitor a child's general well-being and development.",
              },
              {
                title: "Vaccinations",
                description:
                  "Vaccination services intended to protect children against preventable diseases.",
              },
              {
                title: "Growth Monitoring",
                description:
                  "Monitoring children's growth and development during early childhood.",
              },
            ],
          },
          {
            heading: "Our Team",
            introduction:
              "The ANC and Child Welfare Clinics describe a multidisciplinary team involved in maternal and child healthcare.",
            content: [
              {
                title: "Obstetricians and Gynaecologists",
                description:
                  "Specialists involved in pregnancy care, childbirth and women's reproductive health.",
              },
              {
                title: "Paediatricians",
                description:
                  "Doctors specialising in child health, including routine check-ups, treatment of childhood illnesses and developmental assessments.",
              },
              {
                title: "Nurses and Midwives",
                description:
                  "Healthcare professionals who support mothers and children during routine visits, pregnancy care and other clinical services.",
              },
              {
                title: "Dietitians and Counsellors",
                description:
                  "Professionals providing nutritional guidance and emotional support for mothers and children.",
              },
            ],
          },
          {
            heading: "Your Visit to the ANC & Child Welfare Clinic",
            content: [
              {
                title: "Initial Consultation",
                description:
                  "During the first visit, the healthcare team gathers relevant medical history, conducts necessary assessments and develops an individualised care plan for the mother and baby.",
              },
              {
                title: "Regular Follow-Up Visits",
                description:
                  "Antenatal and child welfare follow-up visits support ongoing monitoring and care at appropriate stages of pregnancy and childhood.",
              },
              {
                title: "Vaccination and Health Screenings",
                description:
                  "The hospital describes following recommended vaccination schedules and conducting health screenings to support children's health.",
              },
              {
                title: "Advice and Education",
                description:
                  "Patients and families receive ongoing guidance and information to help them make informed decisions about maternal and child health.",
              },
            ],
          },
        ],
      }, // ANC / Child Welfare Clinics
      {
        name: "Optical Services",
        slug: "optical-services",
        group: "allied",
        introduction:
          "At Diani Beach Hospital, we are dedicated to providing comprehensive optical services to support the health and well-being of your eyes. Whether you are seeking routine eye examinations, assessment of eye conditions or corrective eyewear, our team aims to provide personalised care. We focus on early detection, prevention and treatment to help patients maintain clear vision.",
        heroImage:
          "/images/services/optical/OPTICAL-r439rdrl72bekhxd21dauigf4h4xjx1dwdxll6je0o.png",
        sourceUrl: "https://dianibeachhospital.com/optical/",
        verification: "needs-verification",
        sections: [
          {
            heading: "Our Optical Services",
            introduction:
              "The department describes a range of optical services for patients of different ages, from routine eye examinations to more advanced eye care.",
            content: [
              {
                title: "Comprehensive Eye Exams",
                description:
                  "Routine eye examinations for children, adults and older patients to assess vision and overall eye health.",
              },
              {
                title: "Refractive Error Testing",
                description:
                  "Assessment of refractive errors, including myopia (short-sightedness), hyperopia (long-sightedness) and astigmatism.",
              },
              {
                title: "Glaucoma Screening",
                description:
                  "Screening intended to support the early detection of glaucoma using diagnostic techniques.",
              },
              {
                title: "Cataract Evaluation",
                description:
                  "Assessment of potential cataracts and other vision problems.",
              },
              {
                title: "Prescription Eyewear",
                description:
                  "Prescription glasses and contact lenses to address individual vision needs.",
              },
            ],
          },
          {
            heading: "Why Choose Our Optical Services?",
            content: [
              {
                title: "Comprehensive Eye Care",
                description:
                  "The source describes care ranging from routine eye examinations to advanced surgical procedures.",
              },
              {
                title: "Experienced Optometrists and Ophthalmologists",
                description:
                  "The hospital describes a team of professionals specialising in vision-related conditions and treatments.",
              },
              {
                title: "State-of-the-Art Equipment",
                description:
                  "The source describes the use of diagnostic tools, imaging systems and surgical technologies to support assessment and treatment.",
              },
              {
                title: "Personalised Attention",
                description:
                  "Care is tailored to individual concerns and vision requirements.",
              },
              {
                title: "Patient Education",
                description:
                  "Patients receive explanations and educational resources to help them make informed decisions about their eye health.",
              },
              {
                title: "Convenience and Accessibility",
                description:
                  "The Optical Department is located within the hospital, providing access to eye care and eyewear services.",
              },
            ],
          },
          {
            heading: "What to Expect During Your Visit",
            content: [
              {
                title: "Initial Consultation",
                description:
                  "An initial eye examination to evaluate vision and eye health. The source mentions possible tests for refractive errors, eye pressure and retinal health.",
              },
              {
                title: "Customised Treatment Plan",
                description:
                  "An optometrist or ophthalmologist develops a treatment plan based on the examination findings and identified vision concerns.",
              },
              {
                title: "Eyewear Fitting",
                description:
                  "Opticians assist patients who need glasses or contact lenses with selecting suitable frames and lenses.",
              },
              {
                title: "Follow-Up Care",
                description:
                  "Follow-up visits help assess the effectiveness of the treatment plan and determine whether adjustments are needed.",
              },
            ],
          },
        ],
      }, // Optical Services
      {
        name: "Maternity Services",
        slug: "maternity-services",
        group: "allied",
        introduction:
          "Diani Beach Hospital provides maternity care intended to support mothers and their families throughout pregnancy, childbirth and early parenthood. The source describes care from obstetricians, nurses, midwives and paediatric specialists, with an emphasis on personalised support for mothers and newborns.",
        heroImage:
          "/images/services/maternity/MATERNITY1-r43afrouibp7sai4nkuujcwxycxr97uol393tmdol4.png",
        sourceUrl: "https://dianibeachhospital.com/maternity/",
        verification: "needs-verification",
        sections: [
          {
            heading: "Prenatal Care (Before Birth)",
            introduction:
              "Prenatal care supports the health of the mother and developing baby through regular check-ups, screening and preparation for childbirth.",
            content: [
              {
                title: "Routine Prenatal Check-ups",
                description:
                  "Regular appointments with an obstetrician to monitor the health of the mother and baby.",
              },
              {
                title: "Ultrasound Imaging",
                description:
                  "Ultrasound examinations to monitor the baby's development and assess for potential concerns.",
              },
              {
                title: "Laboratory Tests",
                description:
                  "Blood tests and screenings intended to identify conditions such as gestational diabetes, anaemia and infections.",
              },
              {
                title: "Pregnancy Education",
                description:
                  "Classes and consultations to help expectant parents prepare for labour, delivery and newborn care.",
              },
              {
                title: "Nutritional Counselling",
                description:
                  "Guidance on maintaining a healthy diet throughout pregnancy.",
              },
              {
                title: "High-Risk Pregnancy Management",
                description:
                  "Specialised care for pregnancies involving complications such as gestational diabetes, high blood pressure or multiple pregnancies.",
              },
            ],
          },
          {
            heading: "Labour and Delivery Care",
            introduction:
              "The maternity service describes support throughout labour and delivery, including planned vaginal births and deliveries requiring a caesarean section.",
            content: [
              {
                title: "Personalised Birth Plans",
                description:
                  "The care team works with expectant parents to develop a birth plan that considers their preferences and medical needs.",
              },
              {
                title: "Pain Management",
                description:
                  "The source lists epidural anaesthesia, natural pain-relief methods and medication as options for managing discomfort during labour.",
              },
              {
                title: "Monitoring and Support",
                description:
                  "Fetal monitoring, pain-relief options and emotional support throughout the labour process.",
              },
              {
                title: "Caesarean Section (C-Section)",
                description:
                  "Surgical delivery for cases requiring a caesarean section.",
              },
              {
                title: "Emergency Care",
                description:
                  "The source describes a team prepared to respond to complications that may arise during labour.",
              },
            ],
          },
          {
            heading: "Postpartum Care (After Birth)",
            introduction:
              "Postpartum care focuses on the mother's recovery and the health and well-being of the newborn after delivery.",
            content: [
              {
                title: "Postpartum Check-ups",
                description:
                  "Follow-up appointments to monitor recovery, address health concerns and discuss family-planning options.",
              },
              {
                title: "Breastfeeding Support",
                description:
                  "Guidance and support to help mothers establish a breastfeeding routine. The source specifically mentions lactation consultants.",
              },
              {
                title: "Emotional Support",
                description:
                  "The source describes counselling support for postpartum emotional and mental health concerns, including postpartum depression.",
              },
              {
                title: "Newborn Care",
                description:
                  "Guidance on newborn feeding, nappy changing and basic infant care.",
              },
              {
                title: "Vaccinations and Screenings",
                description:
                  "Post-delivery vaccinations and health screenings for mothers and babies.",
              },
            ],
          },
          {
            heading: "Neonatal Intensive Care Unit (NICU)",
            introduction:
              "For newborns requiring specialised medical attention, the hospital describes a Neonatal Intensive Care Unit providing monitoring and care for premature babies and newborns with medical conditions.",
            content: [
              {
                title: "24-Hour Care",
                description:
                  "The source describes neonatal nurses and paediatricians providing critical care and monitoring for babies who need additional support.",
              },
              {
                title: "Family-Centred Care",
                description:
                  "Families are involved in the care process and receive emotional support and updates about their baby's condition.",
              },
              {
                title: "Specialised Treatment",
                description:
                  "Care for premature babies, babies with low birth weight, respiratory difficulties and other complications.",
              },
            ],
          },
          {
            heading: "Family-Centred Maternity Care",
            introduction:
              "The hospital describes an approach that encourages family involvement during childbirth and the early stages of newborn care.",
            content: [
              {
                title: "Partner Support",
                description:
                  "Partners or other chosen support people are encouraged to participate during labour and delivery.",
              },
              {
                title: "Private Birthing Suites",
                description:
                  "The source describes private birthing suites intended to provide a comfortable environment for labour and delivery with family support.",
              },
              {
                title: "Rooming-In",
                description:
                  "Mothers are encouraged to remain with their babies after delivery to support bonding and receive guidance on newborn care.",
              },
            ],
          },
          {
            heading: "Why Choose Our Maternity Services?",
            content: [
              {
                title: "Expert Medical Team",
                description:
                  "The source describes a multidisciplinary team of obstetricians, midwives, paediatricians and nurses caring for mothers and babies.",
              },
              {
                title: "Comprehensive Care",
                description:
                  "Care is described across the prenatal, labour and delivery, and postpartum stages.",
              },
              {
                title: "State-of-the-Art Facilities",
                description:
                  "The source describes labour and delivery suites, a NICU and a maternity ward equipped to support patient care.",
              },
              {
                title: "Personalised Care",
                description:
                  "Care is tailored to individual pregnancy needs and patient preferences.",
              },
              {
                title: "Supportive Environment",
                description:
                  "Physical, emotional and educational support is described throughout the maternity journey.",
              },
            ],
          },
          {
            heading: "What to Expect During Your Stay",
            content: [
              {
                title: "Prenatal Visits",
                description:
                  "Regular appointments to monitor the health of the mother and baby, discuss labour preferences, review pain-management options and provide childbirth education.",
              },
              {
                title: "Labour and Delivery",
                description:
                  "Guidance, support and medical care throughout the labour and delivery process.",
              },
              {
                title: "Postpartum Recovery",
                description:
                  "Monitoring of the mother's recovery, breastfeeding support and newborn-care education following delivery.",
              },
              {
                title: "Follow-Up Care",
                description:
                  "Follow-up appointments after returning home to assess recovery and provide additional support during the transition into parenthood.",
              },
            ],
          },
        ],
      }, // Maternity Services
    ],
  },
];

// Retain your other three service groups here as you add their records.

export const services: HospitalService[] = serviceGroups.flatMap(
  (group) => group.services,
);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
