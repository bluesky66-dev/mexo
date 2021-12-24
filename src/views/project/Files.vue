<template>
  <div class="d-flex flex-wrap flex-stack mb-6">
    <h3 class="fw-bolder my-2">
      Project Files
      <span class="fs-6 text-gray-400 fw-bold ms-1">{{
        `+${result.length}`
      }}</span>
    </h3>
  </div>
  <div class="row">
    <div
      class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-3"
      v-for="file in result"
      :key="file.id"
    >
      <KTFile
        :fileTitle="file.name"
        :fileType="file.type"
        :link="file.img"
      ></KTFile>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import KTFile from "@/components/files/File.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import DropZone from "dropzone-vue";
import projects from "@/core/data/projects";
import { useStore } from "vuex";
interface FilePropType {
  id: number;
  title: string;
  type: string;
  link: string;
  createdAt: string;
}

interface ProjectModel {
  projectid: string;
  tiitle: string;
  type: string;
  status: string;
  logo: string;
  description: string;
  budget: string;
  files: string;
}

export default defineComponent({
  name: "project-files",
  components: {
    KTFile
  },
  data: () => {
    return {
      serchKey: "",
      files: [] as Array<FilePropType>,
      result: [] as Array<FilePropType>,
      project: {} as ProjectModel
    };
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      setCurrentPageBreadcrumbs("Files", ["Project"]);
    });

    const Project = computed(() => {
      /*  console.log(
        "Getting project list from Store -- " +
          JSON.stringify(store.getters.Singleproject)
      );
       */
      return store.getters.Singleproject;
    });

    return {
      Project
    };
  },
  mounted() {
    setTimeout(() => {
      console.log(
        "Getting project list from Store -- " +
          JSON.stringify(this.Project.files)
      );

      this.files = this.Project.files;

      this.result = this.Project.files;
    }, 750);
  },
  methods: {
    handleSearch() {
      // this.result =this.project.files.filter(file => file.title.trim().toLowerCase().includes(this.serchKey.trim().toLowerCase()))
    }
  }
});
</script>
