<template>
  <Layout />
  <div class="loading-spinner" v-if="loading"><span class="loader"></span></div>
  <div v-else>
    <div>
      <p class="desc">{{ repository.description }}</p>
      <p class="rep"><strong>Language:</strong> {{ repository.language }}</p>

      <button @click="redirectToHome"><Btn  className="bg-black" text="Back Home" /></button>
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
      `https://api.github.com/repositories/${this.$route.params.id}`
    );
    const data = await response.json();
    this.repository = data;
    this.loading = false;
  },
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
  mounted() {
    document.body.style.backgroundColor = "lightblue";
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
  border-color: transparent transparent #fff #fff;
  position: absolute;
  left: 0;
  top: 0;
  animation: mvx 1s infinite ease-in;
}
.loader:before {
  left: -1px;
  top: 1px;
  border-color: #fff #fff transparent transparent;
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
