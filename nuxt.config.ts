// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'en',
    },
  },

  runtimeConfig: {
    sendgridApiKey: process.env.SENDGRID_API_KEY,
  },

  app: {
    head: {
      title: 'Mango Software | AI-Powered Development',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Enterprise-grade software delivered at startup speed. 25+ years experience meets AI-powered development. Build production-grade platforms in months, not years.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Derek Kaneshiro' },
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'AI development, software consulting, Flutter, NestJS, Vue, Nuxt, AI strategy, enterprise software, Portland developer, AI-powered development' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Mango Software' },
        { property: 'og:title', content: 'Mango Software | AI-Powered Development' },
        { property: 'og:description', content: 'Enterprise-grade software delivered at startup speed. 25+ years experience meets AI-powered development.' },
        { property: 'og:url', content: 'https://mangosoft.co' },
        { property: 'og:image', content: 'https://mangosoft.co/og-image.png' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mango Software | AI-Powered Development' },
        { name: 'twitter:description', content: 'Enterprise-grade software delivered at startup speed. 25+ years experience meets AI-powered development.' },
        { name: 'twitter:image', content: 'https://mangosoft.co/og-image.png' },

        // Additional SEO
        { name: 'theme-color', content: '#F77F00' },
        { name: 'apple-mobile-web-app-title', content: 'Mango Software' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://mangosoft.co' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
      ],
      script: [
        // Google Analytics
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-Z8K1KDWS00',
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Z8K1KDWS00');`,
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://mangosoft.co/#organization',
                'name': 'Mango Software',
                'url': 'https://mangosoft.co',
                'logo': 'https://mangosoft.co/mango-logo.png',
                'description': 'AI-powered software development consultancy',
                'email': 'derek@mangosoft.co',
                'founder': {
                  '@type': 'Person',
                  'name': 'Derek Kaneshiro',
                },
                'address': {
                  '@type': 'PostalAddress',
                  'addressLocality': 'Portland',
                  'addressRegion': 'OR',
                  'addressCountry': 'US',
                },
              },
              {
                '@type': 'Person',
                '@id': 'https://mangosoft.co/#person',
                'name': 'Derek Kaneshiro',
                'jobTitle': 'Software Engineer & AI Development Consultant',
                'url': 'https://mangosoft.co',
                'sameAs': [
                  'https://www.linkedin.com/in/derek-kaneshiro-a116513a8/',
                ],
                'knowsAbout': [
                  'AI-Powered Development',
                  'Flutter',
                  'NestJS',
                  'Vue.js',
                  'Nuxt',
                  'Firebase',
                  'Blockchain',
                  'Enterprise Software Architecture',
                ],
              },
              {
                '@type': 'WebSite',
                '@id': 'https://mangosoft.co/#website',
                'url': 'https://mangosoft.co',
                'name': 'Mango Software',
                'publisher': { '@id': 'https://mangosoft.co/#organization' },
              },
              {
                '@type': 'Service',
                'name': 'AI Strategy & Roadmapping',
                'provider': { '@id': 'https://mangosoft.co/#organization' },
                'description': 'Assess AI readiness, identify opportunities, and create actionable roadmaps for AI transformation.',
              },
              {
                '@type': 'Service',
                'name': 'AI-Powered Development',
                'provider': { '@id': 'https://mangosoft.co/#organization' },
                'description': 'Build production-grade products using AI as the primary developer with Claude, Copilot, and custom workflows.',
              },
              {
                '@type': 'Service',
                'name': 'R&D & Prototyping',
                'provider': { '@id': 'https://mangosoft.co/#organization' },
                'description': 'Rapid prototypes and proof of concepts to validate ideas before full investment.',
              },
            ],
          }),
        },
      ],
    },
  },
})
