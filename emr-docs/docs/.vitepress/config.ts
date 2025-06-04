export default {
  title: 'My Docs',
  description: 'Documentation powered by VitePress',
  base: '/emr-docs/', // <- important for GitHub Project Pages
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            // add more pages here
          ]
        }
      ]
    }
  }
}

