<template>
  <div v-if="isDataLoaded">
    <div class="d-flex flex-wrap flex-stack my-5">
      <h2 class="fs-2 fw-bold my-2">
        Projects
        <span class="fs-6 text-gray-400 ms-1">by Status</span>
      </h2>

      <div class="d-flex flex-wrap my-1">
        <div class="m-0 d-flex">
          <!--   <select
            name="status"
            data-control="select2"
            data-hide-search="true"
            class="form-select form-select-white form-select-sm fw-bolder w-125px me-4"
            v-model="status"
            @change="filterProjects($event)"
          >
            <option value="All" selected>All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Overdue">Overdue</option>
            <option value="Completed">Completed</option>
          </select> -->
          <button
            type="button"
            class="btn btn-primary er fs-6 px-8 py-4"
            data-bs-toggle="modal"
            :data-bs-target="`#kt_modal_create_project`"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
    <div class="row g-6 g-xl-9">
      <div
        class="col-md-6 col-xl-4"
        v-for="project in results"
        :key="project.id"
      >
        <Project :project="project" />
      </div>
      <div class="d-flex flex-stack flex-wrap pt-10 justify-content-end">
        <pagination
          v-model="page"
          :records="projectlist.length"
          :per-page="9"
          @paginate="myCallback"
        />
      </div>
      <CreateProjectModal></CreateProjectModal>
    </div>
  </div>

  <div v-if="!isDataLoaded">
    <div class="loading">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import Project from "@/components/cards/ProjectCard.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import projectsdata from "@/core/data/projects";
import CreateProjectModal from "@/components/modals/wizards/CreateProjectModal.vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
export default defineComponent({
  name: "projects",
  components: {
    Project,
    CreateProjectModal
  },
  data: () => {
    return {
      projects: "",
      status: "All",
      results: [],
      page: 1,
      pagenationOptions: {
        chunk: 5
      },
      paginationtext: "",
      records: projectsdata.length,
      projestfromstrore: []
    };
  },

  setup() {
    const store = useStore();
    console.log("Project Page Mounted -------------->>>>>>>");
    onMounted(() => {
      setCurrentPageTitle("Project List");
      store.dispatch(Actions.GET_MYPROJECTS);
    });

    const projectlist = computed(() => {
      console.log(
        "Getting project list from Store -- " +
          JSON.stringify(store.getters.MyProjectFiles)
      );
      return store.getters.MyProjectFiles;
    });

    const isDataLoaded = computed(() => {
      console.log(
        "Getting isprojectsloaded Store  ++++=  " +
          JSON.stringify(store.getters.isprojectsloaded)
      );
      return store.getters.isprojectsloaded;
    });

    return {
      projectlist,
      isDataLoaded
    };
  },
  watch: {
    projectlist: function(val) {
      console.log(" isDataLoaded --- " + this.isDataLoaded);
      this.projestfromstrore = this.projectlist;
      this.records = this.projestfromstrore.length;
      this.results = this.projestfromstrore.slice(0, 9);
    }
  },
  created() {
    console.log("Created");
    /*  setTimeout(() => {      
      this.projestfromstrore = this.projectlist;
      this.records = this.projestfromstrore.length;
      this.results = this.projestfromstrore.slice(0, 9);
     // this.paginationtext = `Showing 1 to ${ this.projestfromstrore.length > 9 ? 9 : this.projestfromstrore.length } of ${ this.projestfromstrore.length } entries`
    }, 10000); */
  },

  methods: {
    filterProjects(event) {
      this.page = 1;
      if (event.target.value === "All") {
        this.projestfromstrore = this.projectlist;
      } else {
        this.projestfromstrore = this.projectlist.filter(
          project => project.status === event.target.value
        );
      }
      this.results = this.projestfromstrore.slice(0, 9);
      this.records = this.projestfromstrore.length;
      console.log(this.projestfromstrore.length);
    },
    myCallback(value) {
      this.page = value;
      this.results = this.projestfromstrore.slice((value - 1) * 9, value * 9);
    }
  }
});
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
}
.loader {
  left: 50%;
  margin-left: -4em;
  font-size: 10px;
  border: 0.8em solid rgba(218, 219, 223, 1);
  border-left: 0.8em solid rgba(58, 166, 165, 1);
  animation: spin 1.1s infinite linear;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 8em;
  height: 8em;
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -4.05em;
}

@keyframes spin {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
