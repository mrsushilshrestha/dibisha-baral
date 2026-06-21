// =============================================================================
//  SITE DATA — Content Manager
//  Edit this file to update all content on the portfolio website.
//  No coding knowledge needed — just edit the text values inside quotes "".
// =============================================================================

// ── ASSET IMPORTS ─────────────────────────────────────────────────────────────
// To use a local image, place it in: src/assets/
// Then add: import myImage from "@/assets/my-image.png";
// And use the variable name (e.g. myImage) in moodImage field below.
import blackTurmericImg from "@/assets/black-turmeric.png";

// Gallery Images
import img0 from "@/assets/img0.jpeg";
import img01 from "@/assets/img01.jpeg";
import img1 from "@/assets/img1.jpeg";
import img2 from "@/assets/img2.jpeg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpeg";
import img5 from "@/assets/img5.jpeg";
import img6 from "@/assets/img6.jpeg";
import img7 from "@/assets/img7.jpeg";
import img8 from "@/assets/img8.jpeg";
import img9 from "@/assets/img9.jpeg";
import img10 from "@/assets/img10.jpeg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

// =============================================================================
//  NAVIGATION LINKS
//  Labels shown in the top navigation bar. href = section ID on the homepage.
// =============================================================================
export const navLinks = [
  { label: "Home",      href: "#hero"      },
  { label: "About",     href: "#about"     },
  { label: "Education", href: "#education" },
  { label: "Research",  href: "#projects"  },
  { label: "Gallery",   href: "#gallery"   },
  { label: "Contact",   href: "#contact"   },
];

// =============================================================================
//  EDUCATION TIMELINE
//  Add/edit degrees. The description field is optional — comment it out if unused.
// =============================================================================
export const education = [
  {
    year: "2021 – 2026",
    title: "Btech in Biotechnology",
    institution: "Himalayan WhiteHouse International College, Putalisadak, Kathmandu",
    description: "Specializing in Cancer Cell Biology and Phytochemistry.",
    icon: "GraduationCap",
  },
  {
    year: "2019 – 2021",
    title: "+2 Bio Science",
    institution: "Nepal Mega College",
    // description: "",   // uncomment and fill if needed
    icon: "BookOpen",
  },
];

// =============================================================================
//  TRAINING & CERTIFICATES
//  Workshops, online courses, certifications. Same format as education.
// =============================================================================
export const training = [
  {
    year: "2024",
    title: "Python Programming for Bioinformatics",
    institution: "HackerRank",
    description: "Completed training in Python with applications in Bioinformatics and Data Science, including data analysis, automation, and scientific computing techniques.",
    icon: "FlaskConical",
  },
  {
    year: "2025",
    title: "Laboratory Safety and Research Training",
    institution: "Amrit Science Campus",
    description: "Hands-on training on laboratory safety protocols, proper handling of chemicals and biological materials, and fundamental research practices.",
    icon: "FlaskConical",
  },
];

// =============================================================================
//  RESEARCH AREAS (Skills Cards Section)
//  Shown as interactive cards. icon options: Search, Users, Shield, BarChart3,
//  FlaskConical, Microscope, Leaf, BookOpen, Globe, Brain, DnaOff, Beaker
// =============================================================================
export const researchAreas = [
  {
    title: "Plant Taxonomy",
    description: "Systematic classification and identification of plant species using morphological and molecular approaches.",
    icon: "Search",
  },
  {
    title: "Ethnobotany",
    description: "Documentation of traditional plant knowledge and indigenous botanical practices.",
    icon: "Users",
  },
  {
    title: "Conservation Biology",
    description: "Strategies for protecting threatened plant species and their habitats.",
    icon: "Shield",
  },
  {
    title: "Ecological Surveys",
    description: "Quantitative assessment of plant community composition and distribution patterns.",
    icon: "BarChart3",
  },
];

// =============================================================================
//  GALLERY ITEMS
//  Images shown in the Gallery section.
//  image: use a URL string OR import a local image and use the variable name.
// =============================================================================
export interface GalleryItem {
  id: number;
  image: string;
  caption?: string;
  showCaption: boolean;
}

export const galleryItems: GalleryItem[] = [
  { id: 1, image: img0, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 2, image: img01, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 3, image: img1, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 4, image: img2, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 5, image: img3, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 6, image: img4, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 7, image: img5, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 8, image: img6, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 9, image: img7, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 10, image: img8, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 11, image: img9, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 12, image: img10, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 13, image: gallery2, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 12, image: gallery1, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 14, image: gallery3, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  { id: 15, image: gallery4, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  // { id: 16, image: gallery5, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
  // { id: 17, image: gallery6, caption: "Final Year Project: Black Turmeric (Curcuma caesia) Research and Documentation", showCaption: true },
];

// =============================================================================
//  RESEARCH PROJECTS  ★ MAIN SECTION TO MANAGE ★
//
//  HOW IT WORKS:
//  • Each object { } in this array = one project card + one auto-generated page
//  • URL for each project: /project/<id>   (id must be unique, no spaces)
//  • Adding a new project here AUTOMATICALLY creates its full detail page —
//    no other files need to be changed.
//
//  ┌─ PROGRESS GUIDE ─────────────────────────────────────────────────────┐
//  │  progress: (a number 0 to 100 — no % symbol needed)                  │
//  │    0  = Not started / planning stage                                  │
//  │   25  = Early field or lab work begun                                 │
//  │   50  = Mid-experiments / data collection                             │
//  │   75  = Data analysis / writing up                                    │
//  │  100  = Completed / published                                         │
//  └───────────────────────────────────────────────────────────────────────┘
//
//  ┌─ MILESTONE GUIDE ─────────────────────────────────────────────────────┐
//  │  completed: true   → filled green dot on the timeline (done ✓)        │
//  │  completed: false  → empty dot (not started yet ○)                    │
//  └───────────────────────────────────────────────────────────────────────┘
//
//  ┌─ MOOD IMAGE GUIDE ────────────────────────────────────────────────────┐
//  │  1. Place your .png/.jpg file in src/assets/                          │
//  │  2. Import it at the top of this file:                                │
//  │       import myImg from "@/assets/my-image.png";                      │
//  │  3. Set  moodImage: myImg                                             │
//  │  4. Set  showMoodImage: true   (false to hide it)                     │
//  └───────────────────────────────────────────────────────────────────────┘
// =============================================================================

export interface Project {
  id: string;              // Unique page slug — no spaces, use hyphens. e.g. "my-project"
  title: string;           // Full research title displayed at top of page
  category: string;        // Topic area. e.g. "Ethnopharmacology", "Plant Taxonomy"
  description: string;     // One sentence preview shown on the project card
  progress: number;        // 0–100 completion percentage (see guide above)
  image: string;           // Card thumbnail image. Leave "" if not used.
  link?: string;           // Optional: external URL (paper, report, Google Scholar, etc.)
  abstract: string;        // Full abstract shown in the middle of the detail page
  supervisor: {
    name: string;          // Supervisor full name with title. e.g. "Dr. Jane Smith"
    detail?: string;       // Optional: short bio, department line
    institution: string;   // College/University full name
  };
  coSupervisor?: {         // OPTIONAL block — remove entirely if no co-supervisor
    name: string;
    detail?: string;
    institution?: string;
  };
  team: {
    name: string;          // Team member full name
    role: string;          // Enrollment number or role title
    avatar: string;        // Leave "" for auto-initial, or import a photo variable
  }[];
  stats: {
    label: string;         // Short descriptor. e.g. "Team Members", "Duration"
    value: string;         // The displayed value. e.g. "5", "18 months", "DPPH"
  }[];
  milestones: {
    title: string;         // Short milestone name (2–4 words works best)
    date: string;          // e.g. "2024", "Mar 2025", "2024–2025"
    completed: boolean;    // true = done ✓, false = pending ○
  }[];
  moodImage?: string;      // Import image at top, use the variable name here
  showMoodImage?: boolean; // true = shown on right of detail page, false = hidden
}

// ─────────────────────────────────────────────────────────────────────────────
//  YOUR PROJECTS  — edit existing ones below, or add more using the template
// ─────────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  PROJECT 1 — Black Turmeric                                             ║
  // ║  Page URL: /project/black-turmeric                                      ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  {
    id: "black-turmeric",

    title: "Phytochemical Extraction and Evaluation of Pharmacological Properties of Black Turmeric (Curcuma caesia Roxb)",

    category: "Ethnopharmacology & Biotechnology",

    description: "A proposed study to extract, characterize, and evaluate the antioxidant, antibacterial, and antidiabetic activities of Curcuma caesia Roxb from Nepalese populations using in vitro, in vivo, and molecular approaches.",

    // ★ UPDATE PROGRESS HERE (0–100):
    progress: 40,

    image: "",

    // link: "https://your-paper-link.com",  // ← uncomment and add your link here

    abstract: "Curcuma caesia Roxb, commonly known as black turmeric, is a medicinally important plant traditionally used in Nepal for the treatment of diabetes, infections, and oxidative stress–related disorders. Despite its ethnopharmacological significance, systematic scientific validation of its bioactive potential and molecular identity within Nepalese populations remains limited. This proposed study aims to extract and characterize phytochemical constituents of C. caesia and to evaluate its antioxidant, antibacterial, and antidiabetic activities using both in vitro and in vivo approaches, alongside molecular characterization. Rhizomes of C. caesia will be collected from different regions of Nepal and authenticated botanically. Molecular characterization will be performed using DNA barcoding markers to confirm species identity and assess genetic variation among Nepalese populations. Phytochemical extraction will be carried out using solvents (methanol only). Qualitative phytochemical screening will be performed to detect major secondary metabolites, while quantitative estimation of total phenolic content (TPC) & total flavonoid content (TFC) will be conducted using standard spectrophotometric methods. Antioxidant activity will be assessed using the DPPH (2,2-diphenyl-1-picrylhydrazyl) assay. Antibacterial activity will be evaluated against selected Gram-positive and Gram-negative bacterial strains through agar diffusion and minimum inhibitory concentration assays. Antidiabetic potential will be investigated in vitro via α-amylase and α-glucosidase inhibition assays and in vivo using streptozotocin or alloxan-induced diabetic animal models, assessing parameters such as body weight, temperature, and glucose levels. The outcomes of this study are expected to provide scientific evidence supporting the traditional uses of C. caesia, contribute to drug discovery research, and generate baseline molecular data to support conservation and sustainable utilization of this valuable medicinal plant in Nepal.",

    supervisor: {
      name: "Dr. Shambhu Prasad Dhital",
      detail: "Department of Biotechnology, Himalaya WhiteHouse International College.",
      institution: "Himalaya WhiteHouse International College, Affiliated to Purbanchal University",
    },

    coSupervisor: {
      name: "Ismita Lohani",
      detail: "Co-Supervisor, Department of Biotechnology.",
      institution: "Himalaya WhiteHouse International College",
    },

    stats: [
      { label: "Team Members",  value: "5"              },
      { label: "Assay Methods", value: "DPPH, MIC"      },
      { label: "Degree",        value: "B.Tech Biotech"  },
      { label: "University",    value: "Purbanchal"      },
    ],

    // ★ UPDATE MILESTONES HERE — set completed: true when a stage is done
    milestones: [
      { title: "Proposal Submitted",     date: "2024",       completed: true  },
      { title: "Sample Collection",      date: "2024–2025",  completed: true  },
      { title: "DNA Barcoding",          date: "2025",       completed: true },
      { title: "Phytochemical Analysis", date: "2025",       completed: false },
      { title: "In Vivo Study",          date: "2025–2026",  completed: false },
      
      
    ],

    team: [
      { name: "Aakriti Koirala",        role: "034-3-2-03846-2021", avatar: "" },
      { name: "Dibisha Baral",          role: "034-3-2-03856-2021", avatar: "" },
      { name: "Grishma Timalsina",      role: "034-3-2-03859-2021", avatar: "" },
      { name: "Nirjala Maharjan",       role: "034-3-2-03862-2021", avatar: "" },
      { name: "Renuka Devi Bhattarai",  role: "034-3-2-03868-2021", avatar: "" },
    ],

    moodImage: blackTurmericImg,  // ← imported at top of this file
    showMoodImage: true,          // ← set to false to hide the image
  },

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  ADD A NEW PROJECT — copy this template, uncomment it, fill it in       ║
  // ║  Each new project auto-creates its page at /project/<id>                ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  //
  // {
  //   id: "my-new-project",         // ← unique slug, no spaces, use hyphens
  //   title: "Full Project Title",
  //   category: "Your Category",
  //   description: "One sentence summary for the card preview.",
  //   progress: 0,                  // ← 0 to 100
  //   image: "",
  //   // link: "https://...",        // ← optional external link
  //   abstract: "Full abstract paragraph...",
  //   supervisor: {
  //     name: "Dr. Supervisor Name",
  //     detail: "Department, College.",
  //     institution: "College Name, Affiliated to University",
  //   },
  //   // coSupervisor: {             // ← remove block if no co-supervisor
  //   //   name: "Co-Supervisor Name",
  //   //   detail: "Role/Department.",
  //   //   institution: "Institution",
  //   // },
  //   stats: [
  //     { label: "Label", value: "Value" },
  //   ],
  //   milestones: [
  //     { title: "Milestone 1", date: "2025",      completed: false },
  //     { title: "Milestone 2", date: "2025–2026", completed: false },
  //   ],
  //   team: [
  //     { name: "Member Name", role: "Roll Number or Role", avatar: "" },
  //   ],
  //   moodImage: "",          // ← import image at top and use variable here
  //   showMoodImage: false,   // ← true to show, false to hide
  // },

];
