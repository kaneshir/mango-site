<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-mango-orange/50 transition-all duration-300 group">
    <!-- Icon -->
    <div class="w-14 h-14 rounded-xl bg-mango-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <div v-html="icon" class="w-7 h-7 text-white"></div>
    </div>

    <!-- Title -->
    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-mango-orange transition-colors duration-300">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-slate-400 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
