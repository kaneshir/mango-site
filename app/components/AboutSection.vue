<script setup lang="ts">
const { t } = useI18n()

const highlights = [
  { label: 'Zimmer Biomet', role: 'Principal Engineer', detail: 'API serving 500K+ patients' },
  { label: 'Banfield', role: 'Sr. Manager, Engineering', detail: '30 engineers, 750+ hospitals' },
  { label: 'Haivision', role: 'Development Manager', detail: 'Multi-office platform delivery' },
  { label: 'CoolSign', role: 'Director of Engineering', detail: 'Dev, QA & Support teams' },
]
</script>

<template>
  <section id="about" class="py-24 relative">
    <!-- Background accent -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mango-orange/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Content -->
        <div class="min-w-0">
          <h2 class="text-4xl md:text-5xl font-bold mb-8 text-slate-800 dark:text-white">
            {{ t('about.title') }} <span class="gradient-text">{{ t('about.titleHighlight') }}</span>
          </h2>

          <div class="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            <p>{{ t('about.p1') }}</p>
            <p>{{ t('about.p2') }}</p>
            <p>{{ t('about.p3') }}</p>
            <p class="text-mango-orange font-semibold">{{ t('about.p4') }}</p>
          </div>

          <!-- Experience highlights -->
          <div class="mt-10 grid grid-cols-2 gap-4">
            <div
              v-for="item in highlights"
              :key="item.label"
              class="p-4 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
            >
              <div class="font-semibold text-slate-800 dark:text-white">{{ item.label }}</div>
              <div class="text-sm text-mango-orange">{{ item.role }}</div>
              <div class="text-xs text-slate-500 dark:text-slate-500 mt-1">{{ item.detail }}</div>
            </div>
          </div>
        </div>

        <!-- Visual / Tech Stack -->
        <div class="relative min-w-0">
          <div class="bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h3 class="text-xl font-bold mb-6 gradient-text">{{ t('about.techStack') }}</h3>

            <div class="space-y-5">
              <div>
                <div class="text-sm text-slate-500 mb-2 font-medium">{{ t('about.frontend') }}</div>
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Flutter</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Nuxt 3</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Vue 3</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Tailwind</span>
                </div>
              </div>

              <div>
                <div class="text-sm text-slate-500 mb-2 font-medium">{{ t('about.backend') }}</div>
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">NestJS</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">.NET</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">PostgreSQL</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Firebase</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Redis</span>
                </div>
              </div>

              <div>
                <div class="text-sm text-slate-500 mb-2 font-medium">{{ t('about.blockchain') }}</div>
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Sui Move</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Solidity</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Solana</span>
                </div>
              </div>

              <div>
                <div class="text-sm text-slate-500 mb-2 font-medium">{{ t('about.aiCloud') }}</div>
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Claude</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">GenKit</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">GCP</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">Azure</span>
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">BigQuery</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating accent -->
          <div class="absolute -z-10 -top-4 -right-4 w-full h-full bg-mango-gradient rounded-2xl opacity-20 blur-sm"></div>
        </div>
      </div>
    </div>
  </section>
</template>
