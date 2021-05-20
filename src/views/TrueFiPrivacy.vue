<template>
  <div class="legal-page legal-page__truefi-privacy">
    <div class="legal-page__loading" v-if="loading">
      <img
        src="../assets/soundid-symbol-black.svg"
        alt="SoundID logo"
        class="legal-page__loading-image"
      />
      <div class="legal-page__loading-text">LOADING...</div>
    </div>
    <h1 class="legal-page__title">
      {{ fetched.title }}
    </h1>
    <div class="legal-page__body"></div>
  </div>
</template>

<script>
import axios from "axios";

const baseURL = "https://www.sonarworks.com/api/legal/truefi-privacy";

export default {
  data() {
    return {
      fetched: {},
      loading: true
    };
  },
  async created() {
    this.loading = true
    const res = await axios
      .get(baseURL)
      .then((res) => {
        this.fetched = res.data;
        this.parseIntoHTML(res.data.content)
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() =>{
          this.loading = false
      })
  },
  methods: {
    parseIntoHTML(str) {
      let bodyWrap = document.querySelector(".legal-page__body");
      bodyWrap.innerHTML = str.trim();
    },
  },
};
</script>