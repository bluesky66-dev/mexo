<template>
  <div v-if="isDataLoaded">
    <div class="d-flex flex-wrap flex-stack my-5">
      <h2 class="fs-2 fw-bold my-2">
        Companies
        <span class="fs-6 text-gray-400 ms-1">by Service</span>
      </h2>

      <div class="d-flex flex-wrap my-1">
        <div class="m-0 d-flex">
          <el-input
            v-model="input3"
            placeholder="Please input"
            class="input-with-select"
            v-on:keyup.enter="onEnter"
          >
            <template #prepend>
              <el-select
                v-model="select"
                placeholder="Select"
                style="width: 130px"
              >
                <el-option label="City" value="city"></el-option>
                <el-option label="State" value="state"></el-option>
                <el-option label="Postal Code" value="postalcode"></el-option>
              </el-select>
            </template>
            <template #append>
              <el-button><i class="bi bi-search"></i></el-button>
            </template>
          </el-input>
          <!-- <select
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
          <!--  <button
          type="button"
          class="btn btn-primary er fs-6 px-8 py-4"
          data-bs-toggle="modal"
          :data-bs-target="`#kt_modal_create_project`"
        >
          Create Project
        </button> -->
        </div>
      </div>
    </div>
    <div class="row g-6 g-xl-9">
      <div
        class="col-md-6 col-xl-4"
        v-for="company in results"
        :key="company.email"
      >
        <Project :company="company" />
      </div>
      <p v-if="projestfromstrore.length == 0" class="text-center text-xl">
        No marched Companies
      </p>
      <div
        class="d-flex flex-stack flex-wrap pt-10 justify-content-end"
        v-if="projestfromstrore.length != 0"
      >
        <pagination
          v-model="page"
          :records="projestfromstrore.length"
          :per-page="9"
          @paginate="myCallback"
        />
      </div>
      <CreateProjectModal></CreateProjectModal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from "vue";
import Project from "@/components/cards/companycard.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
export default defineComponent({
  name: "projects",
  components: {
    Project
  },
  data: () => {
    return {
      input3: "",
      select: "city",
      projects: "",
      status: "All",
      results: [],
      page: 1,
      pagenationOptions: {
        chunk: 5
      },
      paginationtext: "",
      records: 0,
      projestfromstrore: [],
      rows: 100,
      currentPage: 1
    };
  },

  setup() {
    const store = useStore();
    const DataLoaded = ref(false);
    onMounted(() => {
      console.log("Company Page Mounted -------------->>>>>>>");
      setCurrentPageTitle("Company  List");
      const getalldata = new Promise((resolve, reject) => {
        store.dispatch(Actions.GET_ALLCOMPANYPROFILES).then(
          Response => {
            resolve(Response);
          },
          error => {
            reject(error);
          }
        );
      });

      getalldata.then(() => {
        console.log("Promise Resolved");
        DataLoaded.value = true;
        console.log("Data Loaded  getalldata -- " + DataLoaded.value);
      });
    });

    const companylist = computed(() => {
      console.log(
        "Getting Company list from Store -- " +
          JSON.stringify(store.getters.Companyprofile)
      );
      return store.getters.Companyprofile;
    });

    const isDataLoaded = computed(() => {
      console.log("Data Loaded  computed -- " + DataLoaded.value);
      return DataLoaded.value;
    });

    return {
      companylist,
      isDataLoaded
    };
  },
  watch: {
    companylist: function() {
      setTimeout(() => {
        this.projestfromstrore = this.companylist;
        this.records = this.projestfromstrore.length;
        this.results = this.projestfromstrore.slice(0, 9);
        this.paginationtext = `Showing 1 to ${
          this.projestfromstrore.length > 9 ? 9 : this.projestfromstrore.length
        } of ${this.projestfromstrore.length} entries`;
      }, 500);
    }
  },
  created() {
    console.log("Created");
  },
  methods: {
    /*  filterProjects(event) {
      this.page = 1;
      if (event.target.value === "All") {
        this.projestfromstrore = this.companylist;
      } else {
        this.projestfromstrore = this.companylist;
        // this.projestfromstrore = this.companylist.filter(project => project.status === event.target.value)
      }
      this.results = this.projestfromstrore.slice(0, 9);
      this.records = this.projestfromstrore.length;
      console.log(this.projestfromstrore.length);
    }, */
    myCallback(value) {
      this.page = value;
      console.log("comapnies === ");
      console.log(this.projestfromstrore);
      this.results = this.projestfromstrore.slice((value - 1) * 9, value * 9);
    },
    onEnter: function() {
      const items = this.companylist;
      this.projestfromstrore = items.filter(
        item =>
          item.profile[this.select]
            .toLowerCase()
            .indexOf(this.input3.toLowerCase()) != -1
      );
      this.results = this.projestfromstrore.slice(
        (this.page - 1) * 9,
        this.page * 9
      );
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
