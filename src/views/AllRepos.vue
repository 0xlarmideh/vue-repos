<template>
  <NavLayout />
  <div class="repos-container">
    <div class="loading-spinner" v-if="loading">
      <span class="loader"></span>
    </div>
    <div class="mt-[10rem]" v-else>
      <div class="flex border-b-2 border-slate-300 gap-2">
        <SmallText text="Selected Works" className="font-regular pb-[.7rem]" />
        <Paragraph text="[5]" />
      </div>

      <ul>
        <li
          class="border-b-2 border-slate-300 py-[1.8rem]"
          v-for="repo in paginatedRepos"
          :key="repo.id"
          data-aos="fade-in"
          data-aos-delay="550"
          data-aos-duration="1500"
        >
          <router-link
            class="capitalize text-[2.7rem] max-md:text-[2rem] max-md:leading-[2rem] font-medium"
            :to="{ name: 'single-repo', params: { id: repo.id } }"
            >{{ repo.name }}</router-link
          >
          <Paragraph className="uppercase" :text="repo.language" />
        </li>
      </ul>
      <div class="flex gap-8 mt-[3rem] mb-[8rem]">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          :class="{ disabled: currentPage === 1 }"
        >
          Prev
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          :class="{ disabled: currentPage === totalPages }"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavLayout from "../components/NavLayout.vue";
import Paragraph from "@/components/typography/Paragraph.vue";
import Heading from "@/components/typography/Heading.vue";
import SmallText from "@/components/typography/SmallText.vue";

export default {
  name: "AllRepos",
  components: {
    NavLayout,
    SmallText,
    Paragraph,
    Heading,
  },
  data() {
    return {
      repositories: [],
      currentPage: 1,
      perPage: 5,
      totalPages: 0,
      loading: true,
    };
  },
  methods: {
    async fetchRepositories() {
      await new Promise((resolve) => setTimeout(resolve, 1700));
      this.loading = true;
      try {
        const response = await axios.get(
          "https://api.github.com/users/0xlarmideh/repos"
        );
        console.log(response);
        this.repositories = response.data;
        this.totalPages = Math.ceil(this.repositories.length / this.perPage);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    paginatedRepos() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.repositories.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.fetchRepositories();
  },
};
</script>

<style></style>
