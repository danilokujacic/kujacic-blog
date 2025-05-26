import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'kujacic-blog',
  description:
    'Hi. My name is Danilo Kujacic. I am software engineer with 5 years of experience and ready to share some cool stuff along my coding journey with you lads.',
  href: 'https://github.com/danilokujacic',
  author: 'kujacic',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/danilokujacic',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/vepar67',
    label: 'Twitter',
  },
  {
    href: 'mailto:danilo.kujacic01@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
}
