<template>
  <div class="min-h-screen antialiased transition-colors duration-300">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: #F7F6F3;
  color: #1e293b;
  transition: background-color 0.3s, color 0.3s;
}

html.dark body {
  background-color: #020617;
  color: #ffffff;
}

.bg-mango-gradient {
  background: linear-gradient(135deg, #E63946 0%, #F77F00 35%, #FCBF49 65%, #2A9D8F 100%);
}

/* Gradient text — duplicated here as Vite processes this directly,
   bypassing any @nuxtjs/tailwindcss PostCSS quirks. The key fix for
   Windows Chrome is removing overflow:hidden from the ancestor section. */
.gradient-text {
  background-image: linear-gradient(90deg, #F77F00 0%, #FCBF49 50%, #2A9D8F 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
</style>
