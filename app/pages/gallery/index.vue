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
              Galeria
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
            Galeria fryzur | koloryzacji
          </h1>

          <div class="w-20 h-px bg-[#c9a961] mx-auto mb-8"></div>

          <p class="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Starannie wybrana kolekcja pokazująca nasze zaangażowanie w
            doskonałość oraz wyrafinowane środowisko, w którym praktykujemy
            nasze rzemiosło
          </p>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="image in images"
        :key="image.url"
        :class="`relative group  overflow-hidden`"
      >
        <div class="relative aspect-square overflow-hidden">
          <div
            class="absolute inset-0 border-2 border-[#c9a961]/20 group-hover:border-[#c9a961]/60 transition-all duration-500 z-10"
          ></div>

          <NuxtImg
            :quality="image.quality"
            :format="image.format"
            :src="image.url"
            :alt="image.alt"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Galeria fryzur | koloryzacji | Origo",

  description:
    "Starannie wybrana kolekcja pokazująca nasze zaangażowanie w doskonałość oraz wyrafinowane środowisko, w którym praktykujemy nasze rzemiosło",

  ogTitle: "Galeria fryzur | Origo",

  ogDescription:
    "Zobacz efekty naszych strzyżeń, koloryzacji, balayage i stylizacji włosów.",

  ogImage: "/og/galeria.jpg",

  ogType: "website",
});
const images = ref([
  {
    url: "/1.webp",
    format: "webp",
    quality: 80,
    alt: "Osoba o prostych, blond włosach sięgających ramion siedzi na fotelu fryzjerskim w czarnej pelerynie; na głowie widoczna jest klamra fryzjerska.",
  },
  {
    url: "/2.webp",
    format: "webp",
    quality: 80,
    alt: "Kobieta o prostych, jasnoblond włosach siedzi na fotelu fryzjerskim w czarnej pelerynie; w rozmytym tle widać półki i wyposażenie salonu.",
  },
  {
    url: "/3.webp",
    format: "webp",
    quality: 80,
    alt: "Kobieta o prostych, jasnoblond włosach siedzi na fotelu fryzjerskim w czarnej pelerynie; w rozmytym tle widać półki i wyposażenie salonu.",
  },
  {
    url: "/4.webp",
    format: "webp",
    quality: 80,
    alt: "Osoba o prostych włosach w kolorze platynowego blondu siedzi na czarnym fotelu fryzjerskim, odwrócona tyłem do kamery, a przed nią znajduje się lustro odbijające jej twarz.",
  },
  {
    url: "/5.webp",
    format: "webp",
    quality: 80,
    alt: "Osoba z gładką, srebrzystoszarą fryzurą typu bob sięgającą do brody, ubrana w czarną pelerynę fryzjerską z logo Joico, widoczna z profilu w salonie fryzjerskim.",
  },
  {
    url: "/6.webp",
    format: "webp",
    quality: 80,
    alt: "Widziana od tyłu osoba z gładką, srebrzystą fryzurą typu bob sięgającą do brody, ubrana w szarą bluzę z kapturem, w salonie fryzjerskim z półkami pełnymi produktów do włosów.",
  },
]);
</script>

<style></style>
