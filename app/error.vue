<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number;
    statusMessage?: string;
  };
}>();
</script>

<template>
  <div
    class="min-h-screen bg-[#20433d] text-white flex items-center justify-center"
  >
    <div class="text-center px-6">
      <p class="text-5xl font-bold">
        {{ error.statusCode || 404 }}
      </p>

      <h1 class="mt-6 text-3xl font-semibold">Tej strony nie znaleziono</h1>

      <p class="mt-4 text-white/70">
        Wygląda na to, że strona, której szukasz, nie istnieje.
      </p>

      <div class="mt-10 mx-auto text-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961]/10 h-14 px-10 luxury-text text-xs tracking-[0.2em] transition-all duration-300"
        >
          Strona główna
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
