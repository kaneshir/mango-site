<script setup lang="ts">
const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <nav class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3">
          <img src="/mango-logo.png" alt="Mango Software" class="h-10 w-auto" />
          <span class="text-xl font-bold gradient-text hidden sm:block">Mango Software</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-slate-300 hover:text-mango-orange transition-colors duration-200"
          >
            {{ link.name }}
          </a>
          <a href="#contact" class="btn-primary text-sm py-2 px-6">
            Let's Talk
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 text-slate-300 hover:text-white"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Nav -->
      <div
        v-if="isMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4"
      >
        <div class="flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-slate-300 hover:text-mango-orange transition-colors duration-200"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </a>
          <a href="#contact" class="btn-primary text-center text-sm py-2 px-6" @click="isMenuOpen = false">
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
