<script setup lang="ts"></script>

<template>
  <section
    id="home"
    class="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden mx-6 pt-6 mb-6 rounded-2xl px-6 sm:px-8 lg:px-12"
  >
    <div
      class="min-h-screen h-full rounded-2xl w-full absolute flex items-center justify-center inset opacity-20 bg-[url('https://images.unsplash.com/photo-1687304527569-36ef7f86651e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBhbG0lMjBsZWF2ZXMlMjBncmVlbnxlbnwxfHx8fDE3NjEzODQ0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center"
    >
      <div
        class="w-full h-screen bg-white/90 backdrop-blur-xs border border-white/30 rounded-2xl shadow-xl flex items-center justify-center text-white text-2xl"
      ></div>
    </div>

    <div
      class="text-white flex flex-wrap w-full justify-center z-10 itesm-center lg:flex-col lg:justify-center"
    >
      <div
        class="max-w-2xl w-full relative mx-auto flex items-center justify-center"
      >
        <NuxtImg
          src="/logo-removebg-preview.png"
          alt="logo Origo"
          quality="80"
          format="webp"
          class="relative z-10 w-full max-w-xl"
        />
        <div
          class="h-40 w-40 rounded-full z-40 absolute blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent shadow-[0_0_100px_50px_rgba(255,210,114,0.6)]"
        ></div>
      </div>
      <div>
        <div
          class="max-w-5xl w-full mx-auto text-3xl font-black text-center lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          <p>Piękno jest w każdym z Nas...</p>
        </div>

        <div
          class="text-center font-thin mt-6 lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          <p>...Trzeba je tylko umiejętnie wydobyć...</p>
        </div>

        <div class="mt-10 mx-auto text-center">
          <NuxtLink
            to="/pricing"
            class="inline-flex items-center justify-center border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961]/10 h-14 px-10 luxury-text uppercase text-xs tracking-[0.2em] transition-all duration-300"
          >
            cennik
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
