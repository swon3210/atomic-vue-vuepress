module.exports = {
  title: "아토믹 컴포넌트",
  description: "빠른 적용을 위한 문서",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
      }
    ]
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {text: 'HOME', link: '/'},
      {text: '가이드', link: '/guide/'},
      {text: '그리드', link: '/grids/'},
      {text: '컴포넌트', link: '/components/'},
      {text: '클래스', link: '/classes/'},
      {text: 'API', link: '/api/'},
    ],
    sidebar: {
      '/guide/': [
        '',
        'frontend'
      ],
      '/grids/': [
        '',
        'BasicGrid',
        'DesktopGrid'
      ],
      '/components/': [
        '',
        'InputBarWithFilter',
        'ColoredPageHeader',
        'ContentHeader',
        'Indicator',
        'MessageAndButton',
        'SidebarList',
        'TextBlocks',
        'ThumnailBlocks',
      ],
      '/classes/': [
        ''
      ],
      '/api/': [
        ''
      ]
    }
    
  }
}