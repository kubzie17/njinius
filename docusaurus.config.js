module.exports = {
  url: 'https://kubzie17.github.io',
  baseUrl: '/',
  projectName: 'Njinius', // Usually your repo name
  organizationName: 'BarretoW', // Usually your GitHub org/user name..
  title: 'Welcome To Njinius',
  tagline: 'where the great and curious n minds of the',
  //customFields.: 'mnn',

  onBrokenLinks: 'throw',
  favicon: 'img/Njinius.svg',
  
 
  themeConfig: {
    navbar: {
      //title: 'Njinius',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Njinius.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/kubzie17/njinius',
          label: 'GitHub',
          position: 'right',
        },
        {to: 'about/', label: 'About', position: 'right'},
        {to: 'video/', label: 'Video', position: 'right'},
        {to: 'schedule/', label: 'Schedule', position: 'right'},
        {to: 'vidtest/', label: 'vidtest', position: 'right'},
        {to: 'tracks/', label: 'Tracks', position: 'right'},
        {to: 'testpage/', label: 'Testpage', position: 'right'},
        

      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'this is some information about Njinius club and general overveiw of the purpose of it ',
              to:'/',
            },   
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'this is n the contact n details ',
              href: '/',
              
            },
            {
              label: 'of njinius',
              href: '/',
            },
            {
              label: 'club',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {
              logo: {
                alt: 'My Site Logo',
                src: 'img/favicon.ico',
              },
              label: 'Twitter',
              
              href: 'https://twitter.com/njinius1',
              position: 'right',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
              position: 'right',
            },
            {
              label: 'youtube',
              href: 'https://www.youtube.com/channel/UCmcoHCFEYhuti8aarL3ieUg?view_as=subscriber',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/njinius/shared_invite/zt-i2ziak0i-zKOB4soh2tZ1FIqcfD8n~g',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
