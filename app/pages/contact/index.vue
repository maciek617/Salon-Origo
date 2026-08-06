<script setup lang="ts">
useSeoMeta({
  title: "Kontakt – salon fryzjerski Gdańsk | Origo",

  description:
    "Skontaktuj się z naszym salonem fryzjerskim w Gdańsku. Sprawdź adres, godziny otwarcia, numer telefonu i umów wizytę.",
});
const contactInfo = [
  {
    icon: "material-symbols:location-on-outline-rounded",
    title: "Adres",
    details: ["Aleja Rzeczypospolitej 4/147", "80-369 Gdańsk", "Centrum"],
    link: "https://maps.app.goo.gl/eqdm2ssAZ7dQfx2Z7",
  },
  {
    icon: "material-symbols:call",
    title: "Telefon",
    details: ["+48 606 852 121"],
    link: "tel:+48606852121",
  },

  {
    icon: "material-symbols:nest-clock-farsight-analog-outline",
    title: "Godziny Otwarcia",
    details: [
      "Poniedziałek: Zamknięte",
      "Wt - Pt: 10:00 - 19:00",
      "Sobota: 10:00 - 16:00",
      "Niedziela: Zamknięte",
    ],
    link: null,
  },
];

const socialMedia = [
  {
    icon: "ri:instagram-line",
    name: "Instagram",
    handle: "@origogdansk",
    link: "https://www.instagram.com/origogdansk",
  },
  {
    icon: "tabler:brand-facebook",
    name: "Facebook",
    handle: "ORIGO GDAŃSK HAIR DESIGN & ORGANIC CARE",
    link: "https://www.facebook.com/origogdansk/",
  },
];
</script>

<template>
  <div class="min-h-screen">
    <section
      class="pt-20 relative bg-linear-to-br from-[#20433d] via-[#4a6b57] to-[#2a4236] lg:pt-32"
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
              kontakt
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
            skontaktuj się
          </h1>

          <div class="w-20 h-px bg-[#c9a961] mx-auto mb-8"></div>

          <p class="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami telefonicznie!
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-[#20433d] relative overflow-hidden">
      <div class="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="flex flex-wrap gap-8">
          <div
            v-for="(info, index) in contactInfo"
            :key="index"
            class="bg-[#3d5f4c]/30 backdrop-blur-sm border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 p-8 text-center group flex-1"
          >
            <div class="mb-6 flex justify-center min-w-32 w-full">
              <div class="relative">
                <div
                  class="absolute inset-0 bg-[#c9a961] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                ></div>
                <div
                  class="relative w-16 h-16 border border-[#c9a961]/50 bg-[#2a4236]/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                >
                  <Icon :name="info.icon" class="w-7 h-7 text-[#c9a961]" />
                </div>
              </div>
            </div>

            <p class="text-white mb-4 text-xl tracking-tight">
              {{ info.title }}
            </p>
            <div class="w-12 h-px bg-[#c9a961] mx-auto mb-4"></div>

            <div class="space-y-2">
              <p
                v-for="(detail, idx) in info.details"
                :key="idx"
                class="text-white/70 text-sm leading-relaxed"
              >
                {{ detail }}
              </p>
            </div>

            <NuxtLink
              v-if="info.link"
              :to="info.link"
              class="inline-block mt-6 text-[#c9a961] hover:text-[#d4b976] transition-colors duration-300 luxury-text text-xs tracking-[0.2em]"
            >
              {{
                info.title === "Adres"
                  ? "POKAŻ NA MAPIE →"
                  : info.title === "Telefon"
                    ? "ZADZWOŃ →"
                    : info.title === "Email"
                      ? "NAPISZ →"
                      : ""
              }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section
      class="pt-20 bg-linear-to-t from-[#20433d] to-[#18322d] relative overflow-hidden"
    >
      <div>
        <div
          class="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#c9a961]/30 hidden lg:block"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#c9a961]/30 hidden lg:block"
        ></div>

        <div class="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div class="text-center mb-12">
            <div class="flex items-center justify-center gap-4 mb-6">
              <div class="h-px w-12 bg-[#c9a961]"></div>
              <span
                class="luxury-text text-[#c9a961] text-xs tracking-[0.3em] uppercase"
              >
                lokalizacja
              </span>
              <div class="h-px w-12 bg-[#c9a961]"></div>
            </div>
            <h2 class="text-white text-4xl md:text-5xl tracking-tight mb-4">
              Jak do
              <span
                class="text-[#c9a961] italic"
                :style="{ fontFamily: 'serif' }"
                >Nas</span
              >
              Trafić
            </h2>
          </div>
        </div>
      </div>

      <iframe
        class="mx-auto w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d148651.94356017772!2d18.3752825!3d54.3978501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd756b6862d7a3%3A0x706142a1408a5494!2sORIGO%20GDA%C5%83SK%20HAIR%20DESIGN%20%26%20ORGANIC%20CARE!5e0!3m2!1sen!2spl!4v1784379889554!5m2!1sen!2spl"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        height="450"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </section>

    <section class="py-20 bg-[#20433d] relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-5"
        :style="{
          backgroundImage: `url(https:
    //images.unsplash.com/photo-1687304527569-36ef7f86651e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBhbG0lMjBsZWF2ZXMlMjBncmVlbnxlbnwxfHx8fDE3NjEzODQ0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          backgroundSize: 'cover',
        }"
      ></div>

      <div class="max-w-300 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="h-px w-12 bg-[#c9a961]"></div>
            <span
              class="luxury-text text-[#c9a961] text-xs tracking-[0.3em] uppercase"
            >
              social media
            </span>
            <div class="h-px w-12 bg-[#c9a961]"></div>
          </div>
          <h2 class="text-white text-4xl md:text-5xl tracking-tight">
            Znajdź
            <span class="text-[#c9a961] italic" :style="{ fontFamily: 'serif' }"
              >Nas</span
            >
          </h2>
        </div>

        <div class="flex items-center justify-center gap-5 flex-wrap">
          <a
            v-for="(social, index) in socialMedia"
            :key="index"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-[#3d5f4c]/30 min-w-40 w-full backdrop-blur-sm border border-[#c9a961]/20 cursor-pointer hover:border-[#c9a961]/60 hover:bg-[#3d5f4c]/50 transition-all duration-500 p-8 text-center group"
          >
            <div class="mb-6 flex justify-center">
              <div class="relative">
                <div
                  class="absolute inset-0 bg-[#c9a961] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                ></div>
                <div
                  class="relative w-16 h-16 border border-[#c9a961]/50 bg-[#2a4236]/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                >
                  <Icon :name="social.icon" class="w-7 h-7 text-[#c9a961]" />
                </div>
              </div>
            </div>

            <h3 class="text-white mb-2 text-xl tracking-tight">
              {{ social.name }}
            </h3>
            <div class="w-12 h-px bg-[#c9a961] mx-auto mb-3"></div>
            <p class="text-white/70 text-sm">{{ social.handle }}</p>

            <div
              class="mt-6 luxury-text text-xs text-[#c9a961] tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase"
            >
              odwiedź →
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
