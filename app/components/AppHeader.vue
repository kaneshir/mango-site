<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const colorMode = useColorMode()

const navLinks = computed(() => [
  { name: t('nav.services'), href: '#services' },
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.portfolio'), href: '#portfolio' },
  { name: t('nav.contact'), href: '#contact' },
])

const isMenuOpen = ref(false)

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

function toggleLocale() {
  const newLocale = locale.value === 'en' ? 'es' : 'en'
  setLocale(newLocale)
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-mango-cream/90 border-slate-200 dark:bg-slate-950/80 dark:border-slate-800">
    <nav class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3">
          <img src="/mango-logo.png" alt="Mango Software" class="h-10 w-auto" />
          <span class="text-xl font-bold gradient-text hidden sm:block">Mango Software</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-6">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-slate-600 hover:text-mango-orange dark:text-slate-300 transition-colors duration-200"
          >
            {{ link.name }}
          </a>

          <!-- Language Toggle -->
          <button
            @click="toggleLocale"
            class="px-2 py-1 text-sm text-slate-500 hover:text-mango-orange transition-colors border border-slate-300 dark:border-slate-700 dark:text-slate-400 rounded"
            :title="locale === 'en' ? 'Cambiar a Español' : 'Switch to English'"
          >
            {{ locale === 'en' ? 'ES' : 'EN' }}
          </button>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 text-slate-500 hover:text-mango-orange dark:text-slate-400 transition-colors"
            :title="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="colorMode.value === 'dark'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <a href="#contact" class="btn-primary text-sm py-2 px-6">
            {{ t('nav.letsTalk') }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white"
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
        class="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-800 pt-4"
      >
        <div class="flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-slate-600 hover:text-mango-orange dark:text-slate-300 transition-colors duration-200"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </a>

          <div class="flex items-center gap-4 pt-2">
            <button @click="toggleLocale" class="text-sm text-slate-400">
              {{ locale === 'en' ? '🇪🇸 Español' : '🇺🇸 English' }}
            </button>
            <button @click="toggleTheme" class="text-sm text-slate-400">
              {{ colorMode.value === 'dark' ? '☀️ Light' : '🌙 Dark' }}
            </button>
          </div>

          <a href="#contact" class="btn-primary text-center text-sm py-2 px-6" @click="isMenuOpen = false">
            {{ t('nav.letsTalk') }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
