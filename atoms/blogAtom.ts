import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string | Date;
  tags: string[];
}

// Custom storage that handles Date serialization
const storage = createJSONStorage<Blog[]>(() => localStorage);

// Store blogs in localStorage
export const blogsAtom = atomWithStorage<Blog[]>('portfolio-blogs', [], storage);

// Current blog draft state
export const currentBlogAtom = atom<Partial<Blog>>({
  title: '',
  content: '',
  tags: [],
});

// Admin authentication state - persisted in localStorage
// Using undefined check for SSR compatibility
export const isAdminAtom = atomWithStorage<boolean>(
  'thiliban-admin-auth',
  false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createJSONStorage(() => (typeof window !== 'undefined' ? localStorage : undefined as any))
);
