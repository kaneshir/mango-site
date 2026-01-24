<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

async function handleSubmit() {
  isSubmitting.value = true
  error.value = ''

  try {
    const response = await fetch('https://formspree.io/f/mrepvpnq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })

    if (response.ok) {
      isSubmitted.value = true
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      throw new Error('Failed to send message')
    }
  } catch (e) {
    error.value = 'Something went wrong. Please email me directly at derek@mangosoft.co'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-24 relative">
    <!-- Background accent -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-mango-green/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-3xl mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="section-heading">
          Let's <span class="gradient-text">Talk</span>
        </h2>
        <p class="text-slate-400 text-lg">
          Have a project in mind? Let's discuss how AI-powered development can accelerate your vision.
        </p>
      </div>

      <!-- Success Message -->
      <div v-if="isSubmitted" class="card text-center">
        <div class="w-16 h-16 bg-mango-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-mango-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p class="text-slate-400">I'll get back to you soon.</p>
      </div>

      <!-- Contact Form -->
      <form v-else class="card" @submit.prevent="handleSubmit">
        <div class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-mango-orange transition-colors duration-200"
              placeholder="Your name"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-mango-orange transition-colors duration-200"
              placeholder="you@example.com"
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-mango-orange transition-colors duration-200 resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <!-- Error -->
          <div v-if="error" class="text-red-400 text-sm">
            {{ error }}
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting">Sending...</span>
            <span v-else>Send Message</span>
          </button>
        </div>

        <!-- Direct email fallback -->
        <p class="text-center text-slate-500 text-sm mt-6">
          Or email me directly at
          <a href="mailto:derek@mangosoft.co" class="text-mango-orange hover:underline">derek@mangosoft.co</a>
        </p>
      </form>
    </div>
  </section>
</template>
