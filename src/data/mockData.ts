import { Project, TeamMember, GalleryItem } from '../types';

// Let's import the actual local images we generated
export const localLogo = '/src/assets/images/kctf_logo_1781959999727.jpg';
export const localHero = '/src/assets/images/kctf_hero_1781960016369.jpg';
export const localCommunity = '/src/assets/images/kctf_community_1781960034310.jpg';

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Anaji Clean Water Borehole & Filtration Hub',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600',
    description: 'Construction and commissioning of a solar-powered borehole system paired with biological sand filter technology. This facility delivers 15,000 liters of treated, bacteria-free drinking water daily, eliminating the need to walk long miles for contaminated stream water.',
    location: 'Anaji Community, Takoradi, Western Region',
    status: 'Completed',
    impact: 'Provides clean drinking water directly to 2,500+ local residents and reduces water-borne illnesses by 85%.',
    category: 'water'
  },
  {
    id: 'p2',
    title: 'Takoradi Market Circle Sanitation Station',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600',
    description: 'Developing a modern, eco-friendly public sanitation complex. It features compost-producing flush toilets, zero-waste greywater filtering gardens, and clean hygiene hand-washing bays utilizing collected rainwater.',
    location: 'Market Circle, Takoradi',
    status: 'Ongoing',
    impact: 'Will serve over 800 traders daily. Reduces open market soil contamination and models modern bio-digestion technology.',
    category: 'water'
  },
  {
    id: 'p3',
    title: 'Sekondi Youth Skills & Vocational Laboratory',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    description: 'Setting up a resource center offering free computer literacy, eco-brick making, solar installation, and sustainable craft-weaving vocational skills. Designed to empower local youth with self-sustaining green careers.',
    location: 'Sekondi Coastal District, Ghana',
    status: 'Completed',
    impact: 'Graduated 120 certified young men and women, with 70% successfully securing employment or starting micro-enterprises.',
    category: 'community'
  },
  {
    id: 'p4',
    title: 'Eshiem Community Bio-sand Filter Distribution',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=600',
    description: 'Household-level filtration campaign distributing low-cost, durable bio-sand water filtration kits made from local materials. Includes hands-on training for mothers and schoolteachers on water preservation, sanitation protocols, and hygiene practices.',
    location: 'Eshiem Village & Surrounding Schools',
    status: 'Completed',
    impact: 'Successfully distributed and installed 500 filters in homes, providing local child-safe water storage for 3,000+ children.',
    category: 'water'
  },
  {
    id: 'p5',
    title: 'KCTF Women Agroecology Cooperative',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600',
    description: 'Establishing sustainable agroforestry plots for local female farmers. Incorporates rain-harvesting drip irrigation and organic composting, protecting land from erosion and avoiding chemical run-offs into municipal waterways.',
    location: 'Kwesimintsin Outskirts, Ghana',
    status: 'Ongoing',
    impact: 'Supports 45 local women farmers with continuous input tools and secure food crops, increasing seasonal income by 40%.',
    category: 'community'
  },
  {
    id: 'p6',
    title: 'Clean Water for Rural Schools Campaign',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600',
    description: 'Retrofitting community primary schools with elevated rain harvesting systems and specialized wash facilities. This program also establishes "Eco-Water Clubs" to teach children sanitary habits, waste separation, and water stewardship.',
    location: 'Agona Nkwanta Rural Schools',
    status: 'Planned',
    impact: 'Aims to reduce school absentee rates by 35% through localized drinking and hygiene infrastructure across 8 public schools.',
    category: 'water'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 't1',
    name: 'Samuel Korankye',
    role: 'Founder & Executive Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    bio: 'Samuel is a passionate advocate for sustainable development and clean water equity in Ghana. Graduating with studies in Applied Sciences, he founded KCTF to address critical water-sanitation holes and community growth needs directly in West Africa.'
  },
  {
    id: 't2',
    name: 'Grace Mensah',
    role: 'Lead Project Engineer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    bio: 'Grace supervises geological surveys and technical layout design for the KCTF solar-powered boreholes. She has over 6 years of experience implementing clean water systems in both urban and rural environments.'
  },
  {
    id: 't3',
    name: 'Emmanuel Osei',
    role: 'Community Engagement Coordinator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    bio: 'Emmanuel acts as the vital bridge between KCTF and the local traditional assemblies. He leads workshops, handles local stakeholder training, and facilitates community-led sanitation and agroecology committees.'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Borehole Drilling Ceremony',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
    category: 'water',
    description: 'Drilling past 80 meters to tap into a safe freshwater aquifer at the Kwesimintsin community project.'
  },
  {
    id: 'g2',
    title: 'Hygiene & WASH Class',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600',
    category: 'outreach',
    description: 'Schoolchildren practicing correct, sterile hand-washing steps using our custom rainwater hygiene stand.'
  },
  {
    id: 'g3',
    title: 'Women Planning Coop Land',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140ebd2?auto=format&fit=crop&q=80&w=600',
    category: 'community',
    description: 'Local women group mapping the placement of gravity-fed drip irrigation lines in our regenerative farm.'
  },
  {
    id: 'g4',
    title: 'Clean Water Flowing',
    image: localHero,
    category: 'water',
    description: 'Pure, crystalline water running freely from our solar-powered public taps, enjoyed by the whole community.'
  },
  {
    id: 'g5',
    title: 'Skills Laboratory Launch',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600',
    category: 'community',
    description: 'Students assembled for the first introductory lesson on eco-brick materials and sustainable enterprise.'
  },
  {
    id: 'g6',
    title: 'Community Survey Workshop',
    image: localCommunity,
    category: 'outreach',
    description: 'Samuel Korankye and the community team mapping regional borehole needs directly with rural residents.'
  },
  {
    id: 'g7',
    title: 'Bio-sand Filter Quality Check',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    category: 'water',
    description: 'Conducting turbid tests on bio-sand filtered yields to confirm adherence to safe WHO indices.'
  },
  {
    id: 'g8',
    title: 'Local Farm Harvest Celebration',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600',
    category: 'community',
    description: 'First cooperative harvest of tomatoes and cassava crops under our rain-watered agroforestry project.'
  }
];

export const sponsors = [
  { name: 'Takoradi Municipal assembly', logoLetter: 'T' },
  { name: 'Western Regional Water Board', logoLetter: 'W' },
  { name: 'TTU Environmental Lab', logoLetter: 'E' },
  { name: 'Ghana Green Alliance', logoLetter: 'G' },
  { name: 'West Africa Eco Fund', logoLetter: 'A' }
];

export const statistics = [
  { value: '18+', label: 'Clean Water Taps Built' },
  { value: '12,000+', label: 'People Served Daily' },
  { value: '180+', label: 'Youth Vocational Graduates' },
  { value: '500+', label: 'Bio-sand Filters Distributed' },
  { value: '100%', label: 'Community Owned Management' }
];

export const testimonials = [
  {
    name: 'Abena Danso',
    role: 'Market Union Leader, Takoradi Market Circle',
    text: 'Before KCTF and Samuel Korankye built the Sanitation Hub, our market group faced severe hygienic challenges. Now, we have pristine toilets, secure water, and compost resources we can use. The market environment has completely changed.'
  },
  {
    name: 'Kofi Boakye',
    role: 'Head Teacher, Anaji Primary School',
    text: 'Water-borne absenteeism was our biggest silent hurdle. Since KCTF installed the solar purification hub right near the school borders, clean water is abundant. Attendance is at an all-time record high, and the children feel safe.'
  }
];
