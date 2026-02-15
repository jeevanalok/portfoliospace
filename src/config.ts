import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://jeevanalok.pages.dev',
  base: '/',
  title: 'Jeevan Alok',
  description: 'My own personal space in the internet',
  author: 'Jeevan Alok',
  lang: 'en',
  ogLocale: 'en_US',
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/about',
      title: 'About Me',
      displayMode: 'textToIconOnMobile',
      text: 'About Me',
      icon: 'i-simple-icons-aboutdotme',
    },
    {
      path: '/blog',
      title: 'Blog',
      displayMode: 'textToIconOnMobile',
      text: 'Blog',
      icon: 'i-ri-article-line',
    },
    {
      path: '/projects',
      title: 'Projects',
      displayMode: 'textToIconOnMobile',
      text: 'Projects',
      icon: 'i-ri-lightbulb-line',
    },
  ],
  socialLinks: [],
  navBarLayout: {
    left: [],
    right: ['internalNavs', 'socialLinks', 'searchButton', 'themeButton'],
  },
  tabbedLayoutTabs: [
    { title: 'Blog', path: '/blog' },
    { title: 'Streams', path: '/streams' },
    // { title: 'AstroBlog', path: '/feeds' },
    // { title: 'Notes', path: '/notes' },
  ],
  maxGroupColumns: 3,
  showGroupItemColorOnHover: true,
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  share: [
    true,
    {
      twitter: [true, ''],
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: true,
      email: true,
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'hover',
    },
  ],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
}
