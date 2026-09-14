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
      title: 'Derek Kaneshiro — Principal Software Engineer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Principal software engineer. Ten years owning a HIPAA-regulated platform serving 500,000+ patients, and the open-source AI evaluation framework Synthetic Test Fabric.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Derek Kaneshiro' },
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'principal software engineer, C#, .NET, AI agents, LLM evaluation, MCP, HIPAA, TypeScript, Hillsboro Oregon, Portland developer' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Mango Software' },
        { property: 'og:title', content: 'Derek Kaneshiro — Principal Software Engineer' },
        { property: 'og:description', content: 'Principal software engineer. Ten years owning a HIPAA-regulated platform serving 500,000+ patients, and the open-source AI evaluation framework Synthetic Test Fabric.' },
        { property: 'og:url', content: 'https://mangosoft.co' },
        { property: 'og:image', content: 'https://mangosoft.co/og-image.png' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Derek Kaneshiro — Principal Software Engineer' },
        { name: 'twitter:description', content: 'Principal software engineer. Ten years owning a HIPAA-regulated platform serving 500,000+ patients, and the open-source AI evaluation framework Synthetic Test Fabric.' },
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
                '@type': 'Person',
                '@id': 'https://mangosoft.co/#person',
                'name': 'Derek Kaneshiro',
                'jobTitle': 'Principal Software Engineer',
                'url': 'https://mangosoft.co',
                'email': 'kaneshir97006@gmail.com',
                'address': {
                  '@type': 'PostalAddress',
                  'addressLocality': 'Hillsboro',
                  'addressRegion': 'OR',
                  'addressCountry': 'US',
                },
                'sameAs': [
                  'https://www.linkedin.com/in/dkanes/',
                  'https://github.com/kaneshir',
                ],
                'knowsAbout': [
                  'C#',
                  '.NET',
                  'AI Agents',
                  'LLM Evaluation',
                  'Model Context Protocol',
                  'HIPAA',
                  'TypeScript',
                  'Distributed Systems',
                  'Software Architecture',
                ],
              },
              {
                '@type': 'WebSite',
                '@id': 'https://mangosoft.co/#website',
                'url': 'https://mangosoft.co',
                'name': 'Derek Kaneshiro',
                'publisher': { '@id': 'https://mangosoft.co/#person' },
              },
            ],
          }),
        },
      ],
    },
  },
})
