<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4"
          >
            <img
              class="mw-50px mw-lg-75px"
              :src="project.logo"
              alt="image"
              @error="loaddefaultimage"
            />
          </div>
        </div>
        <!--end::Pic-->

        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="
              d-flex
              justify-content-between
              align-items-start
              flex-wrap
              mb-2
            "
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Status-->
              <div class="d-flex align-items-center mb-1">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3"
                  >{{ project.title }}</a
                >
                <span
                  :class="getStatusDataBadgeColor(project.status)"
                  class="badge badge-light-success me-auto"
                  >{{ project.status }}</span
                >
              </div>
              <!--end::Status-->
              <!--begin::Description-->
              <div class="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400">
                {{ project.description }}
              </div>
              <!--end::Description-->
            </div>
            <!--end::User-->

            <!--begin::Actions-->
            <div class="d-flex my-4">
              <a
                class="btn btn-sm btn-primary me-3"
                @click="dialogVisible = true"
                >Contact</a
              >
              <el-dialog
                v-model="dialogVisible"
                title="Contact"
                width="500px"
                :before-close="handleClose"
              >
                <el-form label-width="120px">
                  <el-form-item label="Subject">
                    <el-input v-model="title"></el-input>
                  </el-form-item>
                  <el-form-item label="Message">
                    <el-input
                      type="textarea"
                      rows="4"
                      v-model="content"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button
                      type="primary"
                      @click="
                        submit();
                        dialogVisible = false;
                      "
                      >Submit</el-button
                    >
                  </span>
                </template>
              </el-dialog>

              <!--begin::Menu-->
              <!--    <div class="me-0">
                <button
                  class="
                    btn btn-sm btn-icon btn-bg-light btn-active-color-primary
                  "
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <i class="bi bi-three-dots fs-3"></i>
                </button>
                <Dropdown3></Dropdown3>
              </div> -->
              <!--end::Menu-->
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->

          <!--begin::Wrapper-->
          <div class="d-flex flex-wrap justify-content-start">
            <!--begin::Stats-->
            <div class="d-flex flex-wrap">
              <!--begin::Stat-->
              <div
                class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
              >
                <!--begin::Number-->
                <div class="d-flex align-items-center">
                  <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
                  <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        opacity="0.5"
                        x="13"
                        y="6"
                        width="13"
                        height="2"
                        rx="1"
                        transform="rotate(90 13 6)"
                        fill="black"
                      />
                      <path
                        d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <!--end::Svg Icon-->
                  <div
                    class="fs-4 fw-bolder"
                    data-kt-countup="true"
                    data-kt-countup-value="15000"
                    data-kt-countup-prefix="$"
                  >
                    {{ project.budget }}
                  </div>
                </div>
                <!--end::Number-->
                <!--begin::Label-->
                <div class="fw-bold fs-6 text-gray-400">Estimated Budget</div>
                <!--end::Label-->
              </div>
              <!--end::Stat-->
            </div>

            <template v-if="users">
              <!--begin::Users-->
              <div class="symbol-group symbol-hover">
                <template>
                  <div v-for="(user, index) in project.users" :key="index">
                    <!--begin::User-->
                    <div
                      class="symbol symbol-35px symbol-circle"
                      data-bs-toggle="tooltip"
                      :title="user.title"
                    >
                      <img v-if="user.src" alt="Pic" :src="user.src" />
                      <span
                        v-else
                        class="symbol-label fw-bolder"
                        :class="`bg-${user.state} text-inverse-${user.state}`"
                      >
                        {{ user.initials }}
                      </span>
                    </div>
                    <!--begin::User-->
                  </div>
                </template>
              </div>
              <!--end::Users-->
            </template>
            <!--end::Stats-->
          </div>
          <!--end::Wrapper-->

          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="
            nav nav-stretch nav-line-tabs nav-line-tabs-2x
            border-transparent
            fs-5
            fw-bolder
            flex-nowrap
          "
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              v-bind:to="`overview`"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Overview
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              to="files"
              active-class="active"
            >
              Files
            </router-link>
          </li>
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <!-- <router-view></router-view> -->
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { ElMessageBox } from "element-plus";
import { useStore } from "vuex";
//import projects from "@/core/data/projects";

export default defineComponent({
  name: "project",
  components: {},
  mounted() {
    setTimeout(() => {
      this.project = this.Project;
    }, 750);
  },
  data: () => {
    return {
      project: {},
      title: "",
      content: "",
      users: [
        { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
        { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
        { name: "Susan Redwood", initials: "S", state: "primary" }
      ]
    };
  },
  setup() {
    const store = useStore();
    const dialogVisible = ref(false);

    const handleClose = done => {
      ElMessageBox.confirm("Are you sure to close this dialog?")
        .then(() => {
          done();
        })
        .catch(() => {
          // catch error
        });
    };
    const Project = computed(() => {
      console.log(
        "Getting project list from Store -- " +
          JSON.stringify(store.getters.Singleproject)
      );

      return store.getters.Singleproject;
    });

    const User = computed(() => {
      console.log(
        "Getting User list from Store -- " +
          JSON.stringify(store.getters.userprofile)
      );

      return store.getters.userprofile;
    });

    const Company = computed(() => {
      console.log(
        "Getting User list from Store -- " +
          JSON.stringify(store.getters.getSingleCompanyprofile)
      );

      return store.getters.getSingleCompanyprofile;
    });

    return {
      User,
      Company,
      Project,
      dialogVisible,
      handleClose
    };
  },

  methods: {
    getStatusDataBadgeColor(status) {
      if (status === "Completed") {
        return "badge-light-success";
      } else if (status === "Overdue") {
        return "badge-light-danger";
      } else if (status === "In Progress") {
        return "badge-light-primary";
      } else if (status === "Pending") {
        return "badge-light";
      } else {
        return "badge-light-primary";
      }
    },

    submit() {
      const data = {
        Name: this.User.name,
        Email: this.User.email,
        Subject: this.title,
        Message: this.content,
        SenderCompanyname: this.User.companyname,
        Toaddress: this.Company.email
      };
      console.log("data", data);
    }
  },
  loaddefaultimage(e) {
    e.error = "";
    e.target.src = "media/illustrations/unitedpalms-1/9-dark.png";
    return true;
  }
});
</script>
