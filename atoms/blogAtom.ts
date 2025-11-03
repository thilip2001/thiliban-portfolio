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
