<script setup lang="ts">
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
          <h2 class="text-4xl md:text-5xl font-bold mb-8">
            Building the <span class="gradient-text">Future</span>
          </h2>

          <div class="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I'm Derek Kaneshiro—a software engineer with 25+ years of experience who's gone all-in on AI-powered development. Not as a buzzword, but as a fundamental shift in how great software gets built.
            </p>

            <p>
              My background spans healthcare systems serving half a million patients, veterinary platforms powering 750+ hospitals, and digital signage networks across the nation. I've managed teams of 30 engineers and architected systems that are still running a decade later.
            </p>

            <p>
              Now I'm proving what's possible when deep experience meets AI-first development. In the last 6 months, I've shipped three production-grade platforms—each with mobile apps, web portals, APIs, payments, and analytics. That's not hype. That's the new reality.
            </p>

            <p class="text-mango-orange font-semibold">
              I help companies who want that same velocity without sacrificing quality.
            </p>
          </div>

          <!-- Experience highlights -->
          <div class="mt-10 grid grid-cols-2 gap-4">
            <div
              v-for="item in highlights"
              :key="item.label"
              class="p-4 rounded-xl bg-slate-900/50 border border-slate-800"
            >
              <div class="font-semibold text-white">{{ item.label }}</div>
              <div class="text-sm text-mango-orange">{{ item.role }}</div>
              <div class="text-xs text-slate-500 mt-1">{{ item.detail }}</div>
            </div>
          </div>
        </div>

        <!-- Visual / Tech Stack -->
        <div class="relative min-w-0">
          <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 class="text-xl font-bold mb-6 gradient-text">Tech Stack</h3>

            <div class="space-y-5">
              <div>
                <div class="text-sm text-slate-500 mb-2 font-medium">Frontend</div>
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Flutter</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Nuxt 3</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Vue 3</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Tailwind</span>
                </div>
              </div>

              <div>
                <div class="text-sm text-slate-500 mb-2 font-medium">Backend</div>
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">NestJS</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">.NET</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">PostgreSQL</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Firebase</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Redis</span>
                </div>
              </div>

              <div>
                <div class="text-sm text-slate-500 mb-2 font-medium">Blockchain</div>
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Sui Move</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Solidity</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Solana</span>
                </div>
              </div>

              <div>
                <div class="text-sm text-slate-500 mb-2 font-medium">AI & Cloud</div>
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Claude</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">GenKit</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">GCP</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">Azure</span>
                  <span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-200">BigQuery</span>
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
