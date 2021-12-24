<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card example-card">
      <div class="image-section">
        <img v-if="image" :src="image" alt="" />
      </div>
      <div class="content">
        <h2 class="text-center">{{ title }}</h2>
        <p class="text-center">{{ text }}</p>
      </div>
      <div class="link-section">
        <a href="/" class="d-flex align-items-center">
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right ml-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "examle-card",
  components: {},
  props: {
    image: String,
    title: String,
    text: String,
    classname: String
  }
});
</script>

<style scoped>
.example-card {
  height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
}
.image-section {
  height: 25%;
}
.image-section img {
  margin: 30px auto 0;
}
.content {
  padding: 20px;
}
.content h2 {
  font-size: 26px;
  font-weight: 300 !important;
  margin: 10px auto 0;
}
.content p {
  height: 130px;
  margin: 20px auto 0;
  color: #9ea3a5;
  line-height: 25px;
}
.link-section {
  /* padding-bottom: 25px; */
  position: absolute;
  bottom: 25px;
}
.link-section a {
  color: #8c7427;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
}
.ml-2 {
  margin-left: 0.5rem;
}
@media screen and (max-width: 1199px) {
  .example-card {
    height: 490px;
  }
  .image-section img {
    height: 50px;
  }
}
@media screen and (max-width: 991px) {
  .example-card {
    height: 420px;
  }
  .content h2 {
    font-size: 22px;
  }
}
@media screen and (max-width: 700px) {
  .example-card {
    height: 360px;
  }
  .content {
    padding-bottom: 0;
  }
  .content p {
    height: 160px;
  }
}
</style>
