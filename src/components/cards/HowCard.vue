<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div :class="`${classname} card how-card`">
      <div class="image-section">
        <img v-if="image" :src="image" alt="" />
      </div>
      <div class="content">
        <h2 class="text-center">{{ title }}</h2>
        <p class="text-center">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "how-card",
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
.image-section {
  margin-bottom: 3rem;
  text-align: center;
}
.image-section img {
  max-width: 100%;
  height: auto;
}
.how-card {
  background: transparent;
  margin-bottom: 100px;
  position: relative;
}
.how-card::after {
  content: "";
  position: absolute;
  top: 42px;
  right: -23px;
  background-image: url("~@/assets/media/icon-how-angle.svg");
  background-size: auto;
  width: 16px;
  height: 29px;
}
.content h2 {
  font-size: 26px;
  font-weight: 300 !important;
  margin-bottom: 13px;
}
.content p {
  font-size: 1rem;
  color: #9ea3a5;
  margin-bottom: 0;
  line-height: 1.6;
}
.last::after {
  background-image: unset !important;
}
@media screen and (max-width: 991px) {
  .how-card::after {
    content: unset;
  }
}
</style>
