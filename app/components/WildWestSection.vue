<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="py-24 relative">
    <!-- Subtle accent line at top -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-mango-orange/40"></div>

    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-12 text-slate-800 dark:text-white">
          {{ t('wildWest.title') }} <span class="gradient-text">{{ t('wildWest.titleHighlight') }}</span>
        </h2>

        <div class="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-left">
          <p>{{ t('wildWest.p1') }}</p>
          <p>{{ t('wildWest.p2') }}</p>
          <p class="text-xl md:text-2xl font-semibold text-slate-800 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-700">
            {{ t('wildWest.p3') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
