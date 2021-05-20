<template>
  <div class="legal-center">
    <router-link to="/privacy" class="legal-center__link">
      <div class="legal-center__link-inner">
        <span class="legal-center__link-text"
          >Privacy Policy
          <img
            class="legal-center__link-image"
            src="../assets/right-arrow.svg"
            alt="Arrow"
          />
        </span>
      </div>
    </router-link>
    <router-link to="/partnership" class="legal-center__link">
      <div class="legal-center__link-inner">
        <span class="legal-center__link-text"
          >Partnership Policy
          <img
            class="legal-center__link-image"
            src="../assets/right-arrow.svg"
            alt="Arrow"
          />
        </span>
      </div>
    </router-link>
    <router-link to="/t-and-c" class="legal-center__link">
      <div class="legal-center__link-inner">
        <span class="legal-center__link-text"
          >Terms and Conditions
          <img
            class="legal-center__link-image"
            src="../assets/right-arrow.svg"
            alt="Arrow"
          />
        </span>
      </div>
    </router-link>
    <router-link to="/cookies" class="legal-center__link">
      <div class="legal-center__link-inner">
        <span class="legal-center__link-text"
          >Cookies Policy
          <img
            class="legal-center__link-image"
            src="../assets/right-arrow.svg"
            alt="Arrow"
          />
        </span>
      </div>
    </router-link>
    <router-link to="/support" class="legal-center__link">
      <div class="legal-center__link-inner">
        <span class="legal-center__link-text"
          >Support Service
          <img
            class="legal-center__link-image"
            src="../assets/right-arrow.svg"
            alt="Arrow"
          />
        </span>
      </div>
    </router-link>
    <router-link to="/true-fi-privacy" class="legal-center__link">
      <div class="legal-center__link-inner">
        <span class="legal-center__link-text"
          >Sonarworks True-Fi privacy statement
          <img
            class="legal-center__link-image"
            src="../assets/right-arrow.svg"
            alt="Arrow"
          />
        </span>
      </div>
    </router-link>
    <router-link to="/eula" class="legal-center__link">
      <div class="legal-center__link-inner">
        <span class="legal-center__link-text"
          >End-User License Agreement
          <img
            class="legal-center__link-image"
            src="../assets/right-arrow.svg"
            alt="Arrow"
          />
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meesage: "heelo",
    };
  },
};
</script>