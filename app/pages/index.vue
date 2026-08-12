<template>
  <div class="bg-[#20433d] min-h-screen">
    <HomeNav />
    <HomeHero />
    <HomeAbout />
    <LazyHomeVolunteer />
    <LazyHomeBooking />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Salon fryzjerski w Gdańsku",

  description:
    "Profesjonalny salon fryzjerski w Gdańsku. Strzyżenie damskie i męskie, koloryzacja, balayage, ombre oraz pielęgnacja włosów. Umów wizytę.",

  ogTitle: "Origo – salon fryzjerski w Gdańsku",

  ogDescription:
    "Strzyżenie, koloryzacja, balayage, ombre i profesjonalna pielęgnacja włosów w Gdańsku.",

  ogType: "website",

  ogImage: "/og-image.png",
});

useSchemaOrg([
  {
    "@type": "HairSalon",

    "@id": "https://salonorigo.pl/#salon",

    name: "Origo",

    url: "https://salonorigo.pl/",

    telephone: "+48 606 852 121",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Aleja Rzeczypospolitej 4/147",
      postalCode: "80-369",
      addressLocality: "Gdańsk",
      addressCountry: "PL",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 54.4020312,
      longitude: 18.5908371,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
  },
]);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
