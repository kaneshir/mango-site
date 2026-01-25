<script setup lang="ts">
defineProps<{
  title: string
  tagline: string
  description: string
  tech: string[]
  status: string
  link?: string
}>()
</script>

<template>
  <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-mango-orange/50 transition-all duration-300 group h-full flex flex-col">
    <!-- Header -->
    <div class="flex items-start justify-between mb-4">
      <h3 class="text-2xl font-bold text-white group-hover:text-mango-orange transition-colors duration-300">
        {{ title }}
      </h3>
      <span class="px-3 py-1 bg-mango-green/20 text-mango-green text-xs font-medium rounded-full">
        {{ status }}
      </span>
    </div>

    <!-- Tagline -->
    <p class="text-mango-orange font-medium mb-3">
      {{ tagline }}
    </p>

    <!-- Description -->
    <p class="text-slate-400 leading-relaxed mb-6 flex-grow">
      {{ description }}
    </p>

    <!-- Tech Stack -->
    <div class="flex flex-wrap gap-2 mb-6">
      <span
        v-for="t in tech"
        :key="t"
        class="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300"
      >
        {{ t }}
      </span>
    </div>

    <!-- Link -->
    <a
      v-if="link"
      :href="link"
      target="_blank"
      class="inline-flex items-center gap-2 text-mango-orange hover:text-mango-yellow transition-colors duration-200"
    >
      View Project
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </a>
  </div>
</template>
