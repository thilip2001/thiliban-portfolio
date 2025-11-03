import { atom } from 'jotai';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const contactFormAtom = atom<ContactForm>({
  name: '',
  email: '',
  message: '',
});

export const isContactSubmittingAtom = atom<boolean>(false);
