<script setup lang="ts">
const { t } = useI18n()

const projects = computed(() => [
  {
    title: 'BlueSkil',
    tagline: t('portfolio.blueskil.tagline'),
    description: t('portfolio.blueskil.description'),
    tech: ['Flutter', 'NestJS', 'Nuxt', 'Firebase', 'Stripe', 'BigQuery'],
    status: 'Staging',
    link: undefined,
  },
  {
    title: 'Redy',
    tagline: t('portfolio.redy.tagline'),
    description: t('portfolio.redy.description'),
    tech: ['Flutter', 'NestJS', 'PostgreSQL', 'Nuxt', 'Firebase', 'Stripe'],
    status: 'Staging',
    link: undefined,
  },
  {
    title: 'Toknize',
    tagline: t('portfolio.toknize.tagline'),
    description: t('portfolio.toknize.description'),
    tech: ['Flutter', 'NestJS', 'PostgreSQL', 'Sui Move', 'Solidity', 'Nuxt'],
    status: 'Staging',
    link: undefined,
  },
])
</script>

<template>
  <section id="portfolio" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          {{ t('portfolio.title') }} <span class="gradient-text">{{ t('portfolio.titleHighlight') }}</span>
        </h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          {{ t('portfolio.subtitle') }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-3 gap-8">
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
