<template>
  <div>
    <Layout />
    <div class="mt-[3rem] max-md:mt-[10rem]">
      <div>
        <h1 class="front-page-heading tracking-tighter">Frontend</h1>
        <h1 class="front-page-heading tracking-tighter">Developer</h1>
      </div>
    </div>
    <div class="grid grid-cols-[1fr,0.3fr] mt-[4rem] max-md:block">
      <SmallText
        className="w-[70%] max-md:w-full max-md:text-[1.4rem] mb-[2rem] leading-[2.4rem]"
        text="Excited to continue pushing boundaries of what is possible and creating visually stunning and functional designs."
      />
      <div class="socials">
        <SmallText
          text="Let's get connected"
          className="border-slate-400 text-[1.4rem] border-b-[1px] py-[.4rem] my-[.6rem] text-slate-400"
        />
        <Link className="" title="Resume" link="" /><br>
        <Link title="Portfolio" link="www.larmideh.me" /><br>
        <Link title="LinkedIn" link="www.linkedin.com/in/larmideh" /><br>
        <Link title="Github" link="github.com/0xlarmideh" /><br>
      </div>
    </div>
    <div class="max:md-block">
      <Btn className="bg-black mr-[.6rem]" text="Hit me up" />
      <router-link to="/repositories"
        ><Btn
          className="bg-slate-700"
          link="/repositories"
          text="Repositories"
      /></router-link>
    </div>
  </div>
</template>

<script>
import Layout from "../components/Layout.vue";
import Paragraph from "@/components/typography/Paragraph.vue";
import SmallText from "@/components/typography/SmallText.vue";
import Btn from "@/components/Button.vue";
// import SmallTextVue
import Link from "../components/Links.vue";

export default {
  name: "HomePage",
  components: {
    Layout,
    Paragraph,
    Link,
    SmallText,
    Btn,
  },
};
</script>

<style>
.front-page-heading {
  /* font-size: 200px; */
  font-size: 15vw;
  /* font-size: 15em; */
  font-weight: 500;
  line-height: 170px;
}

@media (max-width: 801px) {
  .front-page-heading {
    font-size: 16vw;
    line-height: 13vw;
  }
  .socials {
    display: none;
  }
}
</style>
