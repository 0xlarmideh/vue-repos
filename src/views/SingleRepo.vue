<template>
  <Layout />
  <div class="loading-spinner" v-if="loading"><span class="loader"></span></div>
  <div v-else data-aos="fade-in">
    <div class="mt-[10rem]">
      <Paragraph :text="repository.language" className="uppercase" />
      <SmallText className="text-[4.4rem] pt-[2.7rem] pb-[3.3rem] leading-[3.5rem] max-md:text-[3.3rem] max-md:leading-[2.7rem] font-medium" :text='repository.name'/>
      <Paragraph :text="repository.description" className="text-[2.4rem] leading-[2.8rem] w-[65%] max-md:w-full max-md:text-[1.8rem] max-md:leading-[2.1rem] mt-[2.7rem]" />



      <button class="my-[3rem]" @click="redirectToRepos"><Btn  className="bg-black" text="Back to Repos" /></button>
    </div>
  </div>
</template>
<script>
import Layout from "../components/Layout.vue";
import Paragraph from "@/components/typography/Paragraph.vue";
import SmallText from "@/components/typography/SmallText.vue";
import Btn from "@/components/Button.vue";


export default {
  name: "SingleRepo",
  data() {
    return {
      repository: {},
      loading: true,
    };
  },
  components: {
    Layout,
    Paragraph,
    SmallText,
    Btn,
  },
  async created() {
    await new Promise((resolve) => setTimeout(resolve, 1700));
    const response = await fetch(
      `https://api.github.com/repositories/${this.$route.params.id}`
    );
    const data = await response.json();
    this.repository = data;
    this.loading = false;
  },
  methods: {
    redirectToRepos() {
      this.$router.push("/repositories");
    },
  },
};
</script>

<style>
.loading-spinner {
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
}
.loader {
  width: 48px;
  height: 48px;
  position: relative;
}
.loader:before,
.loader:after {
  content: "";
  display: block;
  border: 24px solid transparent;
  border-color: transparent transparent black black;
  /* border-color: transparent transparent #fff #fff; */
  position: absolute;
  left: 0;
  top: 0;
  animation: mvx 1s infinite ease-in;
}
.loader:before {
  left: -1px;
  top: 1px;
  /* border-color: #fff #fff transparent transparent; */
  border-color: black black transparent transparent;
  animation-name: mvrx;
}
@keyframes mvx {
  0%,
  25% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-50%, 50%) rotate(180deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(180deg);
  }
}
@keyframes mvrx {
  0%,
  25% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(50%, -50%) rotate(180deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(180deg);
  }
}
</style>
