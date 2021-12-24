<template>
  <div v-if="isDataLoaded">
    <div class="d-flex flex-wrap flex-stack my-5">
      <h2 class="fs-2 fw-bold my-2">
        Articles
        <span class="fs-6 text-gray-400 ms-1">by Service</span>
      </h2>
      <addArticle />
    </div>
    <div class="flex flex-row row g-6 g-xl-9">
      <div class="col-md-8 col-xl-8">
        <div v-for="company in topics" :key="company.id">
          <Project :company="company" />
        </div>
      </div>
      <div class="col-md-4 col-xl-4">
        <div class="miItem">
          <div class="tool-introduction">
            <div class="tool-text">
              <h2>Tools to get you started with robot automation</h2>
              <p></p>
              <p>
                Let's help you discover your robot business potential by using
                our free online tools below
              </p>
            </div>
          </div>
          <div v-for="company in news" :key="company.id">
            <Project1 :company="company" />
          </div>
        </div>
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

      <!-- <div class="featured-head">
        Featured Articles
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from "vue";
import Project from "@/components/cards/articlecard.vue";
import Project1 from "@/components/cards/articlecard1.vue";
import addArticle from "@/components/cards/addArticle.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import articles from "./data.json";
import tools from "./tool.json";
export default defineComponent({
  name: "projects",
  components: {
    Project,
    Project1,
    addArticle
  },
  data: () => {
    return {
      topics: articles,
      news: tools,
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
      setCurrentPageTitle("Article  List");
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
.tool-introduction {
  border-radius: 10px 10px 0 0;
  background-color: #0d698e;
  padding: 50px;
}
.tool-introduction .tool-text h2 {
  color: white;
  font-size: 1.5em;
  margin-bottom: 20px;
  text-align: center;
}
.miItem {
  padding: 10px;
  margin: 5px;
  background-color: white;
  border-radius: 10px;
}
.tool-introduction .tool-text p {
  color: #bdbdbd;
  text-align: center;
  font-size: 1em;
}
.featured-head {
  background: url(/media/images/mi-head.png) no-repeat;
  background-size: contain;
  background-size: 100% 100%;
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 5px 5px 10px;
  margin-bottom: 10px;
  height: 60px;
  margin-left: 5px;
  margin-right: 10px;
  margin-top: 5px;
  color: white;
  margin-bottom: 0;
  font-size: 1.9em;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
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
