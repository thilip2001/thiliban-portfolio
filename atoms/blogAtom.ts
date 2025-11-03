import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  tags: string[];
}

// Store blogs in localStorage
export const blogsAtom = atomWithStorage<Blog[]>('portfolio-blogs', []);

// Current blog draft state
export const currentBlogAtom = atom<Partial<Blog>>({
  title: '',
  content: '',
  tags: [],
});
