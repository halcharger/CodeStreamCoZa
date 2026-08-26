import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CONTACT_EMAIL = 'info@codestream.co.za'

export function mailtoHref(subject = 'Project enquiry') {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
