<script setup lang="ts">
const leftNavLinks = [
  { name: "Strona Główna", href: "/" },
  { name: "O Nas", href: "/#about" },
];

const rightNavLinks = [
  { name: "Galeria", href: "/gallery" },
  { name: "Produkty", href: "/products" },
  { name: "Cennik", href: "/pricing" },
  { name: "Kontakt", href: "/contact" },
];

const isOpen = ref(false);
const scrolled = ref(false);
const allNavLinks = [...leftNavLinks, ...rightNavLinks];

const handleScroll = () => {
  const scrollY = window.scrollY;
  scrolled.value = scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <div>
    <nav
      :class="`w-full hidden lg:block fixed  z-50 transition-all duration-500 shadow  ${
        scrolled ? 'top-0 bg-[#20433d]' : 'top-3 '
      }`"
    >
      <div class="relative w-full flex justify-center items-center">
        <div class="relative w-auto px-8 py-4 flex items-center gap-12">
          <div class="flex items-center gap-8">
            <NuxtLink
              v-for="link in leftNavLinks"
              :key="link.href"
              :to="link.href"
              class="luxury-text text-white hover:text-[#c9a961] transition-all duration-300 tracking-[0.25em] uppercase"
            >
              {{ link.name }}
            </NuxtLink>
          </div>

          <div class="relative flex items-center justify-center px-6">
            <div
              class="absolute inset-0 bg-[#20433d] overflow-hidden -top-4"
              :style="{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 25% 100%)' }"
            ></div>

            <div class="relative z-10 px-10">
              <Icon
                name="heroicons:scissors-16-solid"
                size="1.5rem"
                class="text-white"
              />
            </div>
          </div>

          <div class="flex items-center gap-8">
            <NuxtLink
              v-for="link in rightNavLinks"
              :key="link.href"
              :to="link.href"
              class="luxury-text text-white hover:text-[#c9a961] transition-all duration-300 tracking-[0.25em] uppercase"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <nav
      class="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#20433d]/98 backdrop-blur-md shadow-xl"
    >
      <div class="flex items-center justify-between px-6 h-16">
        <div class="text-white tracking-[0.2em] text-xl">ORIGO</div>

        <button
          @click="isOpen = !isOpen"
          class="text-white p-2 hover:text-[#c9a961] transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <Icon v-if="isOpen" name="gravity-ui:xmark" size="1.5rem" />

          <Icon v-if="!isOpen" name="meteor-icons:bars-sort" size="1.5rem" />
        </button>
      </div>
    </nav>

    <div
      :class="`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`"
      @click="isOpen = !isOpen"
    ></div>

    <div
      :class="`lg:hidden fixed top-0 right-0 bottom-0 w-75 bg-[#20433d] border-l-2 border-[#c9a961] z-50
        transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`"
    >
      <div class="flex flex-col h-full px-6">
        <div
          class="flex items-center justify-between h-16 border-b border-[#c9a961]/20"
        >
          <div class="text-white tracking-[0.2em] text-xl">ORIGO</div>
          <button
            @click="isOpen = !isOpen"
            class="text-white p-2 hover:text-[#c9a961] transition-colors duration-300"
            aria-label="Close menu"
          >
            X
          </button>
        </div>

        <div class="flex flex-col gap-8 mt-12">
          <NuxtLink
            v-for="(link, index) in allNavLinks"
            :key="link.href"
            :to="link.href"
            @click="isOpen = false"
            :class="`group relative transition-all duration-300 ${
              isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`"
            :style="{
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
            }"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-8 h-px bg-[#c9a961] transition-all duration-300 group-hover:w-12"
              ></div>
              <span
                class="luxury-text text-sm text-white group-hover:text-[#c9a961] transition-colors duration-300 tracking-[0.25em]"
              >
                {{ link.name }}
              </span>
            </div>
          </NuxtLink>
        </div>

        <div class="mt-auto mb-8 flex items-center justify-center">
          <div class="relative">
            <div
              class="absolute inset-0 bg-[#c9a961] blur-2xl opacity-20"
            ></div>
            <Icon
              name="heroicons:scissors-16-solid"
              size="1.5rem"
              class="text-white"
            />
          </div>
        </div>

        <div
          class="text-center pb-6 space-y-2 border-t border-[#c9a961]/20 pt-6"
        >
          <div class="text-[#c9a961] text-xs tracking-[0.2em]">KONTAKT</div>
          <a class="text-white/70 text-sm" href="tel:+48606852121"
            >+48 606 852 121</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
