export type ActiveTab = 'home' | 'about' | 'projects' | 'gallery' | 'volunteer' | 'donate' | 'contact';

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  location: string;
  status: 'Completed' | 'Ongoing' | 'Planned';
  impact: string;
  category: 'water' | 'community';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: 'water' | 'community' | 'outreach';
  description: string;
}

export interface VolunteerSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
  skills: string;
  availability: string;
  submittedAt: string;
}

export interface MessageSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface DonationSubmission {
  id: string;
  donorName: string;
  email: string;
  amount: number;
  tier: string;
  message?: string;
  submittedAt: string;
}
