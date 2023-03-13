<template>
  <Layout />
  <div class="error-page">
    <div class="img-container">
      <img src="../assets/404.svg" alt="404" class="img-404" />
    </div>
    <div class="link-container">
      <Btn className="bg-slate-500" text="Page not found" />
      <Heading className="text-[3.6rem] py-[2rem]" title="Oh no! Error 404" />
      <Paragraph className="w-[80%] text-[1.4rem]" text="Something happened along your way here. Maybe try another time" />
      <RouterLink to="/" ><Btn className="bg-black  mt-[.9rem]" text="Go Home" /></RouterLink>
    </div>
  </div>
</template>
<script>
import Layout from "../components/Layout.vue";
import Heading from "@/components/typography/Heading.vue";
import Btn from "@/components/Button.vue";
import Paragraph from "@/components/typography/Paragraph.vue";


export default {
  name: "NotFound",

  components: {
    Layout, Heading, Paragraph, Btn
  },
};
</script>
<style>
.error-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
.img-404 {
  width: 100%;
}
</style>
