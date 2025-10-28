// Design System Constants for Dance Eko 2025

export const COLORS = {
  primary: {
    blue: '#0047FF',
    darkBlue: '#001A66',
    lightBlue: '#3D7FFF',
  },
  accent: {
    purple: '#8B5CF6',
    pink: '#EC4899',
    orange: '#F97316',
  },
  neutral: {
    black: '#000000',
    darkGray: '#1A1A1A',
    gray: '#808080',
    lightGray: '#E5E5E5',
    white: '#FFFFFF',
  },
} as const;

export const LINKS = {
  signup: '#signup',
  watchVideo: '#watch-2024',
  waitlist: '#waitlist',
  instagram: 'https://instagram.com/danceeko',
  youtube: 'https://youtube.com/@danceeko',
  twitter: 'https://twitter.com/danceeko',
  email: 'mailto:info@danceeko.com',
} as const;

export const TICKET_TIERS = [
  { name: 'First Wave', status: 'Coming Soon' },
  { name: 'Second Wave', status: 'Coming Soon' },
  { name: 'VIP Cabana', status: 'Coming Soon' },
  { name: 'Stage Access', status: 'Coming Soon' },
] as const;

export const LINEUP_ARTISTS = [
  { name: 'Skyla Tyla', revealed: true, image: '/artists/skyla-tyla.jpg' },
  { name: 'Artist 2', revealed: false },
  { name: 'Artist 3', revealed: false },
  { name: 'Artist 4', revealed: false },
  { name: 'Artist 5', revealed: false },
  { name: 'Artist 6', revealed: false },
] as const;
