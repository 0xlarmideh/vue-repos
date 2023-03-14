<template>
  <Layout />
  <div class="grid grid-cols-[1fr,1fr] max-md:block error-page"
  data-aos="zoom-in"
  data-aos-delay="550"
  data-aos-duration="1000">
    <div class="img-container">
      <img src="../assets/404.svg" alt="404" class="img-404 " />
    </div>
    <div class="link-container">
      <Btn className="bg-slate-300 text-slate-500" text="Page not found" />
      <Heading className="text-[3.6rem] max-md:text-[8vw] py-[2rem]" title="Oh no! Error 404" />
      <Paragraph className="w-[80%] max-md:w-full text-[1.4rem]" text="Something happened along your way here. Maybe try another time" />
      <RouterLink to="/" ><Btn className="bg-black max-md:mt-[2.1rem]  mt-[.9rem]" text="Go Home" /></RouterLink>
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
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  gap: 3rem;
  align-items: center;
}
.img-404 {
  width: 100%;
}
</style>
