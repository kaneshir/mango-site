<script setup lang="ts">
const { t } = useI18n()

const projects = computed(() => [
  {
    title: 'Synthetic Test Fabric',
    tagline: t('portfolio.stf.tagline'),
    description: t('portfolio.stf.description'),
    tech: ['TypeScript', 'MCP', 'Node.js', 'MIT'],
    status: 'Open source',
    link: 'https://github.com/kaneshir/synthetic-test-fabric',
  },
  {
    title: 'Redy',
    tagline: t('portfolio.redy.tagline'),
    description: t('portfolio.redy.description'),
    tech: ['Flutter', 'NestJS', 'PostgreSQL', 'Nuxt', 'Firebase', 'Stripe'],
    status: 'Live',
    link: 'https://redy.co',
  },
  {
    title: 'BlueSkil',
    tagline: t('portfolio.blueskil.tagline'),
    description: t('portfolio.blueskil.description'),
    tech: ['Flutter', 'NestJS', 'Nuxt', 'Firebase', 'Stripe', 'BigQuery'],
    status: 'In development',
    link: undefined,
  },
  {
    title: 'Toknize',
    tagline: t('portfolio.toknize.tagline'),
    description: t('portfolio.toknize.description'),
    tech: ['Flutter', 'NestJS', 'PostgreSQL', 'Sui Move', 'Solidity', 'Nuxt'],
    status: 'In development',
    link: undefined,
  },
])
</script>

<template>
  <section id="portfolio" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
          {{ t('portfolio.title') }} <span class="gradient-text">{{ t('portfolio.titleHighlight') }}</span>
        </h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-3xl mx-auto">
          {{ t('portfolio.subtitle') }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <PortfolioCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :tagline="project.tagline"
          :description="project.description"
          :tech="project.tech"
          :status="project.status"
          :link="project.link"
        />
      </div>

      <!-- Call out -->
      <div class="mt-16 text-center">
        <p class="text-slate-500">
          {{ t('portfolio.builtWith') }}
        </p>
      </div>
    </div>
  </section>
</template>
