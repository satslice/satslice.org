<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const envelopeSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>';

const envelopeIcon = { svg: envelopeSvg };

const members = [
  {
    avatar: 'https://www.github.com/storborg.png',
    name: 'Scott Torborg',
    title: 'Engineering Lead',
    links: [
      { icon: 'github', link: 'https://github.com/storborg' },
      { icon: envelopeIcon, link: 'mailto:scott@satslice.org' },
    ]
  },
  {
    avatar: 'https://www.github.com/syedkarim.png',
    name: 'Syed Karim',
    title: 'Operations Lead',
    links: [
      { icon: 'github', link: 'https://github.com/syedkarim' },
      { icon: envelopeIcon, link: 'mailto:syed@satslice.org' },
    ]
  },
  {
    avatar: 'https://www.github.com/lifton.png',
    name: 'Joshua Lifton',
    links: [
      { icon: 'github', link: 'https://github.com/lifton' },
      { icon: envelopeIcon, link: 'mailto:info@satslice.org' },
    ]
  },
]
</script>

# Meet Our Team

<VPTeamMembers size="small" :members />
