<template>
  <div class="min-h-screen">
    <section
      class="pt-20 relative bg-linear-to-br from-[#3d5f4c] via-[#4a6b57] to-[#2a4236] lg:pt-32"
    >
      <div
        class="absolute inset-0 opacity-10 rounded w-full"
        :style="{
          backgroundImage: `url(https://images.unsplash.com/photo-1687304527569-36ef7f86651e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBhbG0lMjBsZWF2ZXMlMjBncmVlbnxlbnwxfHx8fDE3NjEzODQ0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      ></div>

      <div
        class="rounded max-w-350 mx-auto px-6 p-6 sm:px-8 lg:px-12 relative z-10"
      >
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div
              class="h-px w-16 bg-linear-to-r from-transparent to-[#c9a961]"
            ></div>
            <span
              class="uppercase luxury-text text-[#c9a961] text-xs tracking-[0.3em]"
            >
              Produkty
            </span>
            <div
              class="h-px w-16 bg-linear-to-r from-transparent to-[#c9a961]"
            ></div>
          </div>

          <h1
            class="text-white mb-6 tracking-tight uppercase"
            :style="{
              fontSize: 'clamp(40px, 8vw, 80px)',
              fontWeight: '300',
              letterSpacing: '0.1em',
              textShadow: '0 0 60px rgba(201, 169, 97, 0.3)',
            }"
          >
            Produkty, których używamy
          </h1>

          <div class="w-20 h-px bg-[#c9a961] mx-auto mb-8"></div>

          <p class="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Współpracujemy wyłącznie z renomowanymi markami znanymi z najwyższej
            jakości produktów
          </p>
        </div>
      </div>
    </section>

    <div class="container mx-auto mt-10">
      <div class="w-fit flex gap-5 flex-wrap justify-center">
        <div class="bg-white">
          <NuxtImg src="/Joico-Logo.png" quality="80" height="200"></NuxtImg>
        </div>

        <div class="bg-white">
          <NuxtImg src="/Joico-Logo.png" quality="80" height="200"></NuxtImg>
        </div>
        <div class="bg-white">
          <NuxtImg src="/Joico-Logo.png" quality="80" height="200"></NuxtImg>
        </div>
        <div class="bg-white">
          <NuxtImg src="/Joico-Logo.png" quality="80" height="200"></NuxtImg>
        </div>
        <div class="bg-white">
          <NuxtImg src="/Joico-Logo.png" quality="80" height="200"></NuxtImg>
        </div>
        <div class="bg-white">
          <NuxtImg src="/Joico-Logo.png" quality="80" height="200"></NuxtImg>
        </div>
        <div class="bg-white">
          <NuxtImg src="/Joico-Logo.png" quality="80" height="200"></NuxtImg>
        </div>
        <div class="bg-white">
          <NuxtImg src="/Joico-Logo.png" quality="80" height="200"></NuxtImg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Profesjonalne produkty do włosów | Origo",

  description:
    "Poznaj profesjonalne produkty do włosów, których używamy w naszym salonie fryzjerskim. Sprawdzone kosmetyki do pielęgnacji, stylizacji i koloryzacji włosów.",

  ogTitle: "Profesjonalne produkty do włosów | Origo",

  ogDescription:
    "Sprawdź kosmetyki i produkty do włosów, których używamy podczas pielęgnacji, stylizacji i koloryzacji w naszym salonie.",

  ogType: "website",
});
</script>

<style></style>
