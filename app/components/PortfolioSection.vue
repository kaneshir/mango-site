<script setup lang="ts">
const projects = [
  {
    title: 'BlueSkil',
    tagline: 'Apprenticeship marketplace for skilled trades',
    description: 'Connecting verified employers with apprentices in construction and skilled trades. Full hiring lifecycle: job posting, applications, interviews, Stripe payments, engagement ratings, and referral systems.',
    tech: ['Flutter', 'NestJS', 'Nuxt', 'Firebase', 'Stripe', 'BigQuery'],
    status: 'Staging',
    link: undefined,
  },
  {
    title: 'Redy',
    tagline: 'Digital vault + EU DPP compliance platform',
    description: 'Consumer app for managing receipts, warranties, and certificates. B2B platform for EU Digital Product Passport compliance ahead of the 2027 mandate. Document capture, OCR, sharing, and compliance reporting.',
    tech: ['Flutter', 'NestJS', 'PostgreSQL', 'Nuxt', 'Firebase', 'Stripe'],
    status: 'Staging',
    link: undefined,
  },
  {
    title: 'Toknize',
    tagline: 'One API to tokenize anything, on any chain',
    description: 'Blockchain-agnostic tokenization platform. Create, manage, and transfer digital asset records with full provenance tracking across Sui, EVM, and Solana chains. Fractional ownership and multi-sig workflows.',
    tech: ['Flutter', 'NestJS', 'PostgreSQL', 'Sui Move', 'Solidity', 'Nuxt'],
    status: 'Staging',
    link: undefined,
  },
]
</script>

<template>
  <section id="portfolio" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-heading">
          Recent <span class="gradient-text">Work</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Three production-grade platforms built in 6 months using AI-powered development. Each with mobile apps, web portals, APIs, payments, and analytics.
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
          All projects architected and built using Claude as the primary development partner.
        </p>
      </div>
    </div>
  </section>
</template>
