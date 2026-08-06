<script setup lang="ts">
const services = ref([{
  icon: '',
  title: 'Strzyżenie Męskie',
  description: 'Precyzyjne cięcie dopasowane do Twojego stylu życia i charakteru',
  price: '120',
  duration: '60 min',
  image: 'https://images.unsplash.com/photo-1687422808328-11cf750a5051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjEzMzQzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
},
  {
    icon: '',
    title: 'Stylizacja Brody',
    description: 'Artystyczne modelowanie z zastosowaniem gorących ręczników i premium kosmetyków',
    price: '80',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nJTIwYmFyYmVyfGVufDF8fHx8MTc2MTI5NzAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: '',
    title: 'Pakiet VIP',
    description: 'Kompletny rytuał pielęgnacji: strzyżenie, stylizacja brody i zabieg na twarz',
    price: '250',
    duration: '120 min',
    image: 'https://images.unsplash.com/photo-1706769015484-248bd241945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwaGFpcmN1dCUyMG1lbnxlbnwxfHx8fDE3NjEzMjIyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: '',
    title: 'Golenie Tradycyjne',
    description: 'Luksusowe golenie brzytwą z aromatyczną parą i pielęgnacją po zabiegu',
    price: '100',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1675599193741-e6f078a65fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwdG9vbHN8ZW58MXx8fHwxNzYxMzgzNzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },])
</script>

<template>
  <section id="services" class="relative py-32 md:py-40 bg-[#2a4236] overflow-hidden">
    <div
        class="absolute inset-0 opacity-5"
        :style="{backgroundImage: 'url(https://images.unsplash.com/photo-1687304527569-36ef7f86651e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBhbG0lMjBsZWF2ZXMlMjBncmVlbnxlbnwxfHx8fDE3NjEzODQ0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundSize: 'cover'}"
    ></div>

    <div class="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

      <div class="text-center mb-20 md:mb-28">
        <div class="flex items-center justify-center gap-4 mb-6">
          <div class="h-px w-12 bg-[#c9a961]"></div>
          <span class="luxury-text text-[#c9a961] text-xs tracking-[0.3em]">
              CENNIK
            </span>
          <div class="h-px w-12 bg-[#c9a961]"></div>
        </div>

        <h2 class="text-white mb-6 text-4xl md:text-6xl tracking-tight">
          Nasze <span class="text-[#c9a961] italic" :style="{ fontFamily: 'serif' }">Usługi</span>
        </h2>

        <div class="w-20 h-px bg-[#c9a961] mx-auto mb-8"></div>

        <p class="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Każda usługa to starannie przygotowane doświadczenie, realizowane przez
          mistrzów fryzjerstwa z użyciem najlepszych produktów
        </p>
      </div>


      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">


        <div
            v-for="service in services"
            :key="service.title"
            class="bg-[#3d5f4c]/30 backdrop-blur-sm border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 overflow-hidden group relative"
        >

          <div class="absolute inset-0 bg-[#c9a961]/0 group-hover:bg-[#c9a961]/5 transition-all duration-500"></div>


          <div class="relative h-80 overflow-hidden">
            <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#2a4236] via-[#2a4236]/50 to-transparent"></div>


            <div class="absolute top-6 right-6">
              <div class="relative">
                <div class="absolute inset-0 bg-[#c9a961] blur-xl opacity-30"></div>
                <div class="relative w-14 h-14 border border-[#c9a961]/50 bg-[#2a4236]/50 backdrop-blur-sm flex items-center justify-center">
                  <div class="w-6 h-6 text-[#c9a961]"></div>
                </div>
              </div>
            </div>
          </div>


          <div class="p-8 relative">
            <h3 class="text-white mb-3 text-2xl tracking-tight">{{ service.title }}</h3>
            <div class="w-12 h-px bg-[#c9a961] mb-4"></div>
            <p class="text-white/60 mb-6 leading-relaxed">{{ service.description }}</p>

            <div class="flex items-end justify-between pt-6 border-t border-[#c9a961]/20">
              <div>
                <div class="luxury-text text-xs text-white/40 mb-1 tracking-[0.2em]">OD</div>
                <div class="text-[#c9a961] text-3xl">{{ service.price }} zł</div>
              </div>
              <div class="text-right">
                <div class="luxury-text text-xs text-white/40 mb-1 tracking-[0.2em]">CZAS</div>
                <div class="text-white/60">{{ service.duration }}</div>
              </div>
            </div>
          </div>
        </div>





      </div>


      <div class="mt-20 flex items-center justify-center gap-4">
        <div class="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a961]/30"></div>
        <div class="w-1 h-1 bg-[#c9a961] rotate-45"></div>
        <div class="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a961]/30"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>