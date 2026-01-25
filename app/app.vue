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
  background-color: #020617;
  color: #ffffff;
}

.gradient-text {
  background: linear-gradient(90deg, #F77F00 0%, #FCBF49 50%, #2A9D8F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-mango-gradient {
  background: linear-gradient(135deg, #E63946 0%, #F77F00 35%, #FCBF49 65%, #2A9D8F 100%);
}
</style>
