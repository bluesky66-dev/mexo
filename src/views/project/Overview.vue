<template>
  <div class="row g-6 g-xl-9">
    <div class="col-lg-12">
      <ProjectSummary />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import ProjectSummary from "./components/projectsummary.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "project-overview",
  components: {
    ProjectSummary
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Overview", ["Project"]);
    });
  }
});
</script>
