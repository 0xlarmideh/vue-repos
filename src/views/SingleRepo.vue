<template>
  <NavLayout />
  <div class="loading-spinner" v-if="loading"><span class="loader"></span></div>
  <div v-else data-aos="fade-in">
    <div class="mt-[10rem]">
      <div v-if="repository.language">
        <Paragraph :text="repository.language" className="uppercase" />
      </div>

      <SmallText
        className="text-[4rem] pt-[2.7rem] pb-[3.3rem] leading-[3.4rem] max-md:text-[3rem] max-md:leading-[2.4rem] font-regular"
        :text="repository.name"
      />
      <div
        v-if="repository.description"
        class="w-[80%] max-md:w-full mt-[2.7rem]"
      >
        <Paragraph
          :text="repository.description"
          className="text-[2.1rem] leading-[2.8rem] max-md:text-[1.5rem] max-md:leading-[2.1rem]"
        />
      </div>
      <div
        v-else
        class="text-[2.1rem] max-md:text-[1.5rem] w-[75%] max-md:w-full mt-[2.7rem]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit
        dolorem quibusdam labore, sapiente recusandae laudantium hic optio sint
        aperiam! Quia, veniam! Nisi beatae amet qui porro veniam esse at.
      </div>

      <div class="details w-[50%] max-md:w-full">
        <div
          class="detail-item grid grid-cols-[30%_70%] max-sm:grid-cols-[45%_55%]"
        >
          <Paragraph text="Creator" />
          <Paragraph :text="repository.owner.login" />
        </div>
        <div
          class="detail-item grid grid-cols-[30%_70%] max-sm:grid-cols-[45%_55%]"
        >
          <Paragraph text="Date Created" />
          <Paragraph :text="myDate" />
        </div>
      </div>
      <div class="mt-[3rem] mb-[9rem] flex gap-[1rem]">
        <button @click="redirectToRepos">
          <Btn className="bg-black" text="Back to Repos" />
        </button>
        <GithubBtn text="Github" :link="repository.html_url" />
      </div>
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
// import SRepoNav from "@/components/SRepoNav.vue";
import GithubBtn from "@/components/GithubBtn.vue";

export default {
  name: "SingleRepo",
  data() {
    return {
      repository: {},
      loading: true,
      dateCreated: "",
      myDate: "",
    };
  },
  components: {
    NavLayout,
    Paragraph,
    SmallText,
    Btn,
    Footer,
    // SRepoNav,
    GithubBtn,
  },
  async created() {
    await new Promise((resolve) => setTimeout(resolve, 1700));
    const response = await fetch(
      `https://api.github.com/repositories/${this.$route.params.id}`
    );
    const data = await response.json();
    this.repository = data;
    this.dateCreated = new Date(this.repository.created_at);
    this.myDate =
      this.dateCreated.getUTCFullYear() +
      "/" +
      (this.dateCreated.getMonth() + 1) +
      "/" +
      this.dateCreated.getUTCDate();
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
.details {
  margin-top: 4rem;
}
.detail-item {
  padding: 1.3rem 0;
  border-bottom: 1px rgb(205, 225, 245) solid;
}
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
