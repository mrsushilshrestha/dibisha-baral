export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const education = [
  {
    year: "2022 – Present",
    title: "M.Sc. Botany",
    institution: "Tribhuvan University",
    description: "Specializing in plant taxonomy and ethnobotany with focus on Himalayan flora.",
    icon: "GraduationCap",
  },
  {
    year: "2018 – 2022",
    title: "B.Sc. Botany",
    institution: "Tribhuvan University",
    description: "Comprehensive study of plant biology, ecology, and conservation.",
    icon: "BookOpen",
  },
];

export const training = [
  {
    year: "2024",
    title: "Plant Tissue Culture Workshop",
    institution: "Nepal Academy of Science",
    description: "Hands-on training in micropropagation and in-vitro conservation techniques.",
    icon: "FlaskConical",
  },
  {
    year: "2023",
    title: "GIS & Remote Sensing for Ecology",
    institution: "ICIMOD",
    description: "Spatial analysis techniques for vegetation mapping and biodiversity assessment.",
    icon: "Map",
  },
  {
    year: "2023",
    title: "Herbarium Techniques Certificate",
    institution: "National Herbarium",
    description: "Specimen collection, preservation, and digital documentation methods.",
    icon: "Leaf",
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  progress: number;
  image: string;
  stats: { label: string; value: string }[];
  milestones: { title: string; date: string; completed: boolean }[];
  team: { name: string; role: string; avatar: string }[];
  details: string;
}

export const projects: Project[] = [
  {
    id: "himalayan-ferns",
    title: "Himalayan Fern Diversity Assessment",
    category: "Taxonomy",
    description: "Comprehensive survey documenting fern species across altitudinal gradients in the central Himalayas.",
    progress: 75,
    image: "",
    stats: [
      { label: "Species Documented", value: "142" },
      { label: "Field Sites", value: "28" },
      { label: "Elevation Range", value: "800–4200m" },
      { label: "Duration", value: "18 months" },
    ],
    milestones: [
      { title: "Field Survey Phase I", date: "Mar 2023", completed: true },
      { title: "Specimen Collection", date: "Jul 2023", completed: true },
      { title: "DNA Barcoding", date: "Dec 2023", completed: true },
      { title: "Taxonomic Analysis", date: "Jun 2024", completed: false },
      { title: "Publication", date: "Dec 2024", completed: false },
    ],
    team: [
      { name: "Dibisha Baral", role: "Lead Researcher", avatar: "" },
      { name: "Dr. R. Sharma", role: "Supervisor", avatar: "" },
      { name: "A. Thapa", role: "Field Assistant", avatar: "" },
    ],
    details:
      "This project aims to create a comprehensive inventory of pteridophyte diversity across the central Himalayan region of Nepal. Using both morphological and molecular approaches, we document species distribution patterns along altitudinal gradients, contributing to conservation planning and understanding climate change impacts on alpine flora.",
  },
];

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

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  location: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: "", title: "Fern Frond Unfurling", location: "Langtang National Park", description: "New growth of a tree fern captured during spring field survey." },
  { id: 2, src: "", title: "Himalayan Orchid", location: "Annapurna Conservation Area", description: "Rare epiphytic orchid found at 2800m elevation." },
  { id: 3, src: "", title: "Forest Floor Ecosystem", location: "Chitwan National Park", description: "Diverse moss and fungal communities on decaying wood." },
  { id: 4, src: "", title: "Rainforest Canopy", location: "Eastern Nepal", description: "Aerial view showing canopy diversity in subtropical forest." },
  { id: 5, src: "", title: "Herbarium Specimens", location: "National Herbarium, Godavari", description: "Pressed botanical specimens prepared for taxonomic study." },
  { id: 6, src: "", title: "Wetland Flora", location: "Koshi Tappu Wildlife Reserve", description: "Water lilies in their natural habitat during monsoon season." },
];
