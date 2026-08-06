<script setup lang="ts">
const stats = ref([
  {
    icon: "iconoir:medal",
    value: "15",
    label: "Lat Doświadczenia",
    suffix: "+",
  },
  {
    icon: "solar:users-group-rounded-bold",
    value: "5K",
    label: "Zadowolonych Klientów",
    suffix: "+",
  },
  { icon: "ix:clock", value: "24", label: "Rezerwacja Online", suffix: "/7" },
  {
    icon: "ix:certificate-success-filled",
    value: "4.9",
    label: "Ocena Klientów",
    suffix: "/5",
  },
]);
</script>

<template>
  <section
    id="about"
    class="relative py-10 md:py-20 bg-[#20433d] overflow-hidden"
  >
    <h1
      class="text-center py-12 md:py-20 text-white text-2xl font-bold lg:text-3xl xl:text-4xl"
    >
      Salon fryzjerski w Gdańsku
    </h1>
    <div class="absolute inset-0 opacity-10"></div>
    <div class="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <!--        <Icon name="uil:github" style="color: black" />-->
        <div class="relative order-2 lg:order-1">
          <div class="relative">
            <div class="aspect-3/4 overflow-hidden relative">
              <div class="absolute inset-0 border-2 border-[#c9a961]/30"></div>
              <img
                src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MTMxNDU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wnętrze ORIGO"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#2a4236]/50 to-transparent"
              ></div>
            </div>

            <div
              class="absolute -top-6 -left-6 w-full h-full border-2 border-[#c9a961] -z-10 hidden md:block"
            ></div>
          </div>

          <div
            class="absolute -bottom-8 -right-8 bg-[#2a4236] border-2 border-[#c9a961]/30 p-8 hidden lg:block backdrop-blur-sm"
          >
            <div class="flex items-baseline gap-2 mb-2">
              <span class="text-5xl text-[#c9a961]">15</span>
              <span class="text-2xl text-[#c9a961]">+</span>
            </div>
            <div class="luxury-text text-xs text-white/60 tracking-[0.2em]">
              Lat<br />Doświadczenia
            </div>
          </div>
        </div>
        <div class="order-1 lg:order-2">
          <div class="flex items-center gap-4 mb-8">
            <div class="h-px w-12 bg-[#c9a961]"></div>
            <span class="luxury-text text-[#c9a961] text-xs tracking-[0.3em]">
              O Nas
            </span>
          </div>

          <h2
            class="text-white mb-6 text-4xl md:text-5xl tracking-tight leading-tight"
          >
            Tworzymy
            <span class="text-[#c9a961] italic" :style="{ fontFamily: 'serif' }"
              >Piękno</span
            ><br />
            Od 2009 Roku
          </h2>

          <div class="w-20 h-px bg-[#c9a961] mb-8"></div>

          <div class="space-y-6 text-white/70 text-lg leading-relaxed mb-12">
            <p>
              W ORIGO podnieśliśmy sztukę barberingu do poziomu prawdziwej艺.
              Nasi mistrzowie łączą wieloletnią tradycję z nowoczesnymi
              technikami, tworząc doświadczenie wykraczające poza zwykłą wizytę
              u fryzjera.
            </p>

            <p>
              Każda wizyta to podróż w świat wyrafinowania — gdzie precyzja
              spotyka się z artystycznym podejściem, a Twój indywidualny styl
              jest celebrowany i dopracowany do perfekcji.
            </p>

            <p>
              Używamy wyłącznie najlepszych produktów premium, które dbają o
              Twoje włosy i brodę, zapewniając długotrwałe efekty i wyjątkowe
              doznania.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-8">
            <div v-for="stat in stats" :key="stat.value" class="relative group">
              <div class="flex items-start gap-4">
                <div class="relative">
                  <div
                    class="absolute inset-0 bg-[#c9a961] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  ></div>
                  <div
                    class="relative w-12 h-12 border border-[#c9a961]/30 group-hover:border-[#c9a961] transition-colors duration-300 flex items-center justify-center bg-[#2a4236]/50"
                  >
                    <div
                      class="w-5 h-5 text-[#c9a961] flex items-center justify-center"
                    >
                      <Icon
                        :name="stat.icon"
                        style="color: #c9a961"
                        size="2rem"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="text-white text-2xl mb-1">
                    {{ stat.value }}
                    <span class="text-[#c9a961]">{{ stat.suffix }}</span>
                  </div>
                  <div
                    class="luxury-text text-xs text-white/50 tracking-[0.15em]"
                  >
                    {{ stat.label }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
