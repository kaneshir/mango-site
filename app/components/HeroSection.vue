<script setup lang="ts">
</script>

<template>
  <section class="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-20">
    <!-- Background gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-mango-orange/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-mango-green/20 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-12 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Logo -->
        <div class="mb-6">
          <img src="/mango-logo.png" alt="Mango Software" class="h-20 md:h-24 w-auto mx-auto" />
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 text-balance">
          <span class="gradient-text">AI-Powered Development</span>
          <br />
          <span class="text-white">for the Modern Era</span>
        </h1>

        <!-- Subhead -->
        <p class="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto text-balance">
          25+ years of enterprise experience meets cutting-edge AI.
          Production-grade platforms delivered in months, not years.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" class="btn-primary">
            Let's Talk
          </a>
          <a href="#portfolio" class="btn-secondary">
            See My Work
          </a>
        </div>

        <!-- Stats -->
        <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold gradient-text">25+</div>
            <div class="text-slate-400 text-sm mt-1">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold gradient-text">500K+</div>
            <div class="text-slate-400 text-sm mt-1">Patients Served</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold gradient-text">3</div>
            <div class="text-slate-400 text-sm mt-1">Platforms in 6 Months</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold gradient-text">30+</div>
            <div class="text-slate-400 text-sm mt-1">Engineers Led</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
