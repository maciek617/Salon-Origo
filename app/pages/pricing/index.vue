<script setup lang="ts">
import { services, hairLength } from "~/data/services";

useSeoMeta({
  title: "Cennik usług fryzjerskich w Gdańsku",

  description:
    "Sprawdź aktualny cennik usług fryzjerskich w Gdańsku. Ceny strzyżenia, koloryzacji, balayage, ombre, modelowania i pielęgnacji włosów.",

  ogTitle: "Cennik usług fryzjerskich",

  ogDescription:
    "Sprawdź ceny strzyżenia, koloryzacji i pozostałych usług fryzjerskich.",
});

const searchTerm = ref("");
const filteredServices = ref(services);

watch(searchTerm, (newTerm) => {
  filteredServices.value = services.filter((x) =>
    x.name.toLowerCase().includes(newTerm.toLowerCase()),
  );
});
</script>

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
              cennik
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
            Cennik usług w Origo
          </h1>

          <div class="w-20 h-px bg-[#c9a961] mx-auto mb-8"></div>

          <p class="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Transparentne ceny za najwyższą jakość usług fryzjerskich i
            kosmetycznych
          </p>
        </div>
      </div>
    </section>

    <section class="mt-10">
      <div class="max-w-300 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="text-center">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="h-px w-12 bg-[#c9a961]"></div>
            <span
              class="luxury-text text-[#c9a961] text-xs tracking-[0.3em] uppercase"
            >
              Długość włosów
            </span>
            <div class="h-px w-12 bg-[#c9a961]"></div>
          </div>
        </div>

        <div class="text-white">
          <p class="text-lg text-center">
            Wyróżniamy 4 długości włosów, od których zależna jest cena
          </p>
          <div class="flex flex-wrap items-center justify-center gap-10 mt-4">
            <div
              v-for="(desc, index) in hairLength"
              class="bg-[#3d5f4c]/40 flex-1 flex items-center justify-center rounded shadow-xl text-center text-lg h-32 min-w-32 p-2 lg:min-w-40"
            >
              <p class="text-sm md:text-md lg:text-lg">{{ desc }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mb-16 mt-10">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="h-px w-12 bg-[#c9a961]"></div>
            <span
              class="luxury-text text-[#c9a961] text-xs tracking-[0.3em] uppercase"
            >
              usługi
            </span>
            <div class="h-px w-12 bg-[#c9a961]"></div>
          </div>
        </div>

        <!-- Wyszukiwarka  -->
        <div class="relative w-full max-w-md">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="🔍 Wyszukaj usługę..."
            class="w-full rounded-full border border-white/20 bg-white/70 px-5 py-3 backdrop-blur-md shadow-lg transition duration-300 placeholder:text-gray-500 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-200"
          />
        </div>

        <div class="mt-5">
          <div
            v-for="(service, index) in filteredServices"
            :key="index"
            class="gap-4 flex items-center flex-col justify-between p-6 bg-[#3d5f4c]/30 border border-[#c9a961]/20 md:flex-row hover:border-[#c9a961]/50 hover:bg-[#3d5f4c]/40 transition-all duration-300 group"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-2 h-2 max-w-2 min-w-2 bg-[#c9a961] rotate-45 group-hover:scale-150 transition-transform duration-300"
              ></div>
              <div>
                <div class="text-white mb-1">
                  <p class="font-bold text-lg">{{ service.name }}</p>
                </div>
                <div class="text-white/40 text-sm max-w-2xl">
                  <p>{{ service.desc }}</p>
                </div>
              </div>
            </div>
            <div class="text-[#c9a961] text-xl">{{ service.price }} zł</div>
          </div>

          <div v-if="!filteredServices.length" class="mt-10">
            <p class="text-center text-white font-bold xl:text-2xl">
              Przykro nam, nie oferujemy takiej usługi. Zadzwoń do nas, a na
              pewno Ci pomożemy!
            </p>
          </div>
        </div>

        <div class="mt-12 text-center pb-10">
          <div class="w-20 h-px bg-[#c9a961] mx-auto mb-6"></div>
          <p class="text-white/50 text-sm">
            * Wszystkie ceny są orientacyjne i mogą ulec zmianie w zależności od
            indywidualnych potrzeb klienta
          </p>
          <div class="text-white/70 font-bold text-lg mt-5">
            <p class="uppercase">
              cena usług w dni / godziny wolne od pracy +100% ceny podstawowej
            </p>
            <p class="uppercase">podane ceny w walucie PLN</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="max-w-200 mt-10 mx-auto px-6 text-center relative z-10 mb-8 lg:mt-20"
      >
        <div class="mb-8">
          <h2 class="text-white mb-4 text-3xl md:text-4xl tracking-tight">
            Gotowy na profesjonalną pielęgnację?
          </h2>
          <div class="w-20 h-px bg-[#c9a961] mx-auto mb-6"></div>
          <p class="text-white/70 mb-8 text-lg leading-relaxed">
            Umów wizytę już dziś i doświadcz najwyższej jakości usług
            barberskich w atmosferze luksusu i spokoju
          </p>
        </div>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+48123456789"
            class="inline-flex items-center justify-center border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961]/10 h-14 px-10 luxury-text text-xs tracking-[0.2em] transition-all duration-300"
          >
            +48 606 852 121
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
