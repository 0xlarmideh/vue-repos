<template>
  <div>
    <Layout />
    <div class="mt-[3rem]">
      <div>
        <h1 class="front-page-heading tracking-tighter">Frontend</h1>
        <h1 class="front-page-heading tracking-tighter">Developer</h1>
      </div>
    </div>
    <div class="grid grid-cols-[1fr,0.3fr] mt-[4rem]">
      <SmallText
        className="w-[70%] mb-[2rem] leading-[2.4rem]"
        text="Excited to continue to push the boundaries of what is possible and create visually stunning and functional designs."
      />
      <div class="inline-flex flex-col">
        <SmallText
          text="Let's get connected"
          className="border-slate-400 text-[1.4rem] border-b-[1px] py-[.4rem] my-[.6rem] text-slate-400"
        />
        <Link className="" title="Resume" link="" />
        <Link title="Portfolio" link="www.larmideh.me" />
        <Link title="LinkedIn" link="www.linkedin.com/in/larmideh" />
        <Link title="Github" link="github.com/0xlarmideh" />
      </div>
    </div>
    <div class="flex gap-6">
      <Btn className="bg-black"  text="Hit me up" />
      <router-link to="/repositories"><Btn className="bg-slate-700" link="/repositories" text="Check Repositories" /></router-link>
      
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
  font-size: 225px;
  font-size: 15em;
  font-weight: 500;
  line-height: 170px;

}
</style>
