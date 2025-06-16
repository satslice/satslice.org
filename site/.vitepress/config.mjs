import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Satslice",
  description: "Satslice builds and operates open source satellites for missions in the public good.",

  head: [
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    ],
  ],

  cleanUrls: true,

  sitemap: {
    hostname: 'https://www.satslice.org',
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Support', link: '/support' },
    ],

    sidebar: [
      {
        text: 'Organization',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Team', link: '/team' },
          { text: 'Support', link: '/support' },
          //{ text: 'Partners', link: '/partners' },
        ],
      },
      {
        text: 'Missions',
        items: [
          { text: 'Good Ancestor Kilakila', link: '/kilakila' },
          { text: 'Slicenet-1', link: '/slicenet-1' },
        ],
      },
      {
        text: 'Satellite Platform',
        items: [
          { text: 'Overview', link: '/platform/overview' },
          { text: 'Form Factor', link: '/platform/form-factor' },
          // FIXME write this
          // { text: 'Hardware', link: '/platform/hardware' },
          // { text: 'Software', link: '/platform/software' },
          { text: 'Buy', link: '/platform/buy' },
        ],
      },
      // FIXME write this
      //{
      //  text: 'Ground Station Network',
      //  items: [
      //    { text: 'Overview', link: '/network/overview' },
      //    { text: 'Tutorial', link: '/network/tutorial' },
      //    { text: 'Radios', link: '/network/radios' },
      //    { text: 'Software', link: '/network/software' },
      //  ],
      //},
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/satslice' },
      { icon: 'twitter', link: 'https://twitter.com/satslice' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/satslice.bsky.social' },
    ],

    editLink: {
      pattern: 'https://github.com/satslice/satslice.org/blob/main/site/:path',
    },

    // FIXME enable this when we have some more pages.
    // search: {
    //   provider: 'local',
    // },

    footer: {
      message: 'Edit this site and more <a href="https://github.com/satslice">on GitHub</a>. Accepting contributions worldwide.',
    },

    siteTitle: false,
    logo: {
      light: './satslice-logo-light.svg',
      dark: './satslice-logo-dark.svg',
      alt: 'error',
    },
  }
})
