<script setup lang="ts"></script>

<template>
  <section id="booking" class="relative py-10 bg-[#20433d] overflow-hidden">
    <div class="max-w-200 mx-auto px-6 text-center relative z-10">
      <div class="flex items-center justify-center gap-4 mb-6">
        <div class="h-px w-12 bg-[#c9a961]"></div>
        <span class="luxury-text text-[#c9a961] text-xs tracking-[0.3em]">
          WIZYTA
        </span>
        <div class="h-px w-12 bg-[#c9a961]"></div>
      </div>

      <h2 class="text-white mb-6 text-4xl md:text-6xl tracking-tight">
        Umów
        <span class="text-[#c9a961] italic" :style="{ fontFamily: 'serif' }"
          >wizytę</span
        >
      </h2>

      <div class="w-20 h-px bg-[#c9a961] mx-auto mb-8"></div>

      <p class="text-white/70 text-lg leading-relaxed">
        Zadzwoń do Nas i już dziś umów wizytę!
      </p>

      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
      >
        <a
          href="tel:+48123456789"
          class="inline-flex items-center justify-center border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961]/10 h-14 px-10 luxury-text text-xs tracking-[0.2em] transition-all duration-300"
        >
          +48 123 456 789
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
