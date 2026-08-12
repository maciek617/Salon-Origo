<script setup lang="ts">
const currentYear = new Date().getFullYear();

const links = ref([
  { name: "Strona główna", link: "/" },
  { name: "Galeria", link: "/gallery" },
  { name: "Cennik", link: "/pricing" },
  { name: "Produkty", link: "/products" },
  { name: "Kontakt", link: "/contact" },
]);
const socialLinks = ref([
  {
    icon: "ri:instagram-line",
    link: "https://www.instagram.com/origogdansk/",
  },
  {
    icon: "tabler:brand-facebook",
    link: "https://www.facebook.com/origogdansk/",
  },
]);
</script>

<template>
  <footer class="relative bg-[#20433d] border-t-2 border-[#c9a961]/20">
    <div class="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        <div class="lg:col-span-5">
          <div class="mb-6">
            <div
              class="text-white tracking-[0.3em] mb-2"
              :style="{ fontSize: '36px', letterSpacing: '0.2em' }"
            >
              ORIGO
            </div>
          </div>

          <div class="w-16 h-px bg-[#c9a961] mb-6"></div>

          <p class="text-white/60 leading-relaxed mb-8 max-w-md">
            Gdzie tradycja spotyka się z nowoczesną doskonałością. Doświadcz
            spersonalizowanej pielęgnacji w atmosferze niekompromisowego luksusu
            od 2009 roku.
          </p>

          <div class="flex gap-4">
            <a
              v-for="(socialLink, index) in socialLinks"
              :key="index"
              :href="socialLink.link"
              target="_blank"
              class="group relative"
              :aria-label="`Social link ${index + 1}`"
            >
              <div
                class="absolute inset-0 bg-[#c9a961] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              ></div>
              <div
                class="relative w-10 h-10 border-2 border-[#c9a961]/30 group-hover:border-[#c9a961] transition-colors duration-300 flex items-center justify-center bg-[#3d5f4c]/50"
              >
                <Icon
                  :name="socialLink.icon"
                  class="w-4 h-4 text-white/60 group-hover:text-[#c9a961] transition-colors duration-300"
                />
              </div>
            </a>
          </div>
        </div>

        <div class="lg:col-span-2">
          <p class="luxury-text text-white text-xs tracking-[0.2em] mb-6">
            NAWIGACJA
          </p>
          <div class="w-12 h-px bg-[#c9a961] mb-6"></div>
          <ul class="space-y-4">
            <li v-for="link in links" :key="link.name">
              <NuxtLink
                :to="`${link.link}`"
                class="text-white/60 hover:text-[#c9a961] transition-colors duration-300 inline-block relative group"
              >
                <span
                  class="absolute -left-4 opacity-0 group-hover:opacity-100 group-hover:-left-6 transition-all duration-300 text-[#c9a961]"
                >
                  →
                </span>
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <p class="luxury-text text-white text-xs tracking-[0.2em] mb-6">
            USŁUGI
          </p>
          <div class="w-12 h-px bg-[#c9a961] mb-6"></div>
          <ul class="space-y-4 text-white/60">
            <li>Strzyżenie Damskie</li>
            <li>Strzyżenie Męskie</li>
            <li>Kosmetologia</li>
            <li>Zabiegi pielęgnacyjne</li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <p class="luxury-text text-white text-xs tracking-[0.2em] mb-6">
            GODZINY
          </p>
          <div class="w-12 h-px bg-[#c9a961] mb-6"></div>
          <div class="space-y-4">
            <div>
              <div
                class="uppercase luxury-text text-xs text-white/90 mb-1 tracking-[0.15em]"
              >
                Wtorek - Piątek
              </div>
              <div class="text-white/60">10:00 - 19:00</div>
            </div>
            <div>
              <div
                class="uppercase luxury-text text-xs text-white/90 mb-1 tracking-[0.15em]"
              >
                sobota
              </div>
              <div class="text-white/60">10:00 - 16:00</div>
            </div>
            <div>
              <div
                class="uppercase luxury-text text-xs text-white/90 mb-1 tracking-[0.15em]"
              >
                niedziela | poniedziałek
              </div>
              <div class="text-white/60">Zamknięte</div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-[#c9a961]/10">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="luxury-text text-white/70 text-xs tracking-[0.15em]">
            © {{ currentYear }} ORIGO. Wszelkie prawa zastrzeżone.
          </p>
          <p class="luxury-text text-white/70 text-xs tracking-[0.15em]">
            PHU Origo Piotr Pośpiech
          </p>
          <p class="luxury-text text-white/70 text-xs tracking-[0.15em]">
            NIP: 9910186414
          </p>
        </div>
      </div>
    </div>

    <div
      class="h-1 bg-linear-to-r from-transparent via-[#c9a961] to-transparent"
    ></div>
  </footer>
</template>

<style scoped></style>
