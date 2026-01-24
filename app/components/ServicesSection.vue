<script setup lang="ts">
const services = [
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>`,
    title: 'AI Strategy & Roadmapping',
    description: 'Assess your AI readiness, identify high-impact opportunities, and create actionable roadmaps for AI transformation. Navigate the shift from traditional development to AI-first workflows.',
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    title: 'AI-Powered Development',
    description: 'Build production-grade products using AI as the primary developer. Claude, Copilot, and custom workflows enable faster delivery, lower costs, and enterprise-quality architecture.',
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
    title: 'R&D & Prototyping',
    description: 'Rapid prototypes and proof of concepts to validate ideas before full investment. From blockchain to healthcare, test complex technical concepts with minimal risk.',
  },
]
</script>

<template>
  <section id="services" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-heading">
          What I <span class="gradient-text">Offer</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Enterprise-grade solutions with startup velocity. Leverage 25+ years of experience combined with AI-powered development workflows.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
  </section>
</template>
