<template>
  <div>
    <NavLayout />
    <div class="mt-[3rem] max-md:mt-[10rem]" data-aos="fade-in">
      <h1 class="front-page-heading tracking-tighter">Frontend</h1>
      <h1 class="front-page-heading tracking-tighter">Developer</h1>
    </div>
    <div class="grid grid-cols-[1fr,0.3fr] mt-[4rem] max-md:grid-cols-[1fr]">
      <div
        data-aos="zoom-in-left"
        data-aos-delay="350"
        data-aos-duration="1000"
      >
        <SmallText
          className="w-[85%]  max-md:text-[1.4rem] mb-[2rem] leading-[2.4rem]"
          text="Excited to continue pushing boundaries of what is possible and creating visually stunning and functional designs."
        />
      </div>
      <div
        class="socials"
        data-aos="zoom-in-right"
        data-aos-delay="350"
        data-aos-duration="1000"
      >
        <SmallText
          text="Let's get connected"
          className="border-slate-400 text-[1.4rem] border-b-[1px] py-[.4rem] my-[.6rem] text-slate-400"
        />
        <Link className="" title="Resume" link="" /><br />
        <Link title="Portfolio" link="www.larmideh.me" /><br />
        <Link title="LinkedIn" link="www.linkedin.com/in/larmideh" /><br />
        <Link title="Github" link="github.com/0xlarmideh" /><br />
      </div>
    </div>
    <div
      class="max:md-block mb-[3.6rem] flex gap-[.27rem]"
      data-aos="fade-in"
      data-aos-delay="350"
      data-aos-duration="1500"
    >
    <a href="mailto:busarioyewole@email.com"><Btn className="bg-black mr-[.6rem]" text="Hit me up" /></a>  
    
      <router-link to="/repositories"
        ><Btn className="bg-slate-700" link="/repositories" text="Repositories"
      /></router-link>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavLayout from "../components/NavLayout.vue";
import Paragraph from "@/components/typography/Paragraph.vue";
import SmallText from "@/components/typography/SmallText.vue";
import Btn from "@/components/Button.vue";
import Footer from "@/components/Footer.vue";
// import SmallTextVue
import Link from "../components/Links.vue";

export default {
  name: "HomePage",
  components: {
    NavLayout,
    Paragraph,
    Link,
    SmallText,
    Btn,
    Footer
  },
};
</script>

<style>
.front-page-heading {
  /* font-size: 200px; */
  font-size: 13vw;
  /* font-size: 15em; */
  font-weight: 500;
  line-height: 9vw;
}

@media (max-width: 987px) {
  .front-page-heading {
    font-size: 16vw;
    line-height: 13vw;
  }
  .socials {
    display: none;
  }
}
</style>
