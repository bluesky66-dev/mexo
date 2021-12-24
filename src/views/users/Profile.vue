<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
          >
            <!-- <img :src="userprofile.image" alt="image" /> -->
            <img src="media/mexo/robot.png" alt="image" />
            <div
              class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"
            ></div>
          </div>
        </div>
        <!--end::Pic-->

        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="d-flex justify-content-between align-items-start flex-wrap mb-2"
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                >
                  {{ companyprofile.companyname }}</a
                >
                <div v-if="companyprofile.verified">
                  <a href="#">
                    <span class="svg-icon svg-icon-1 svg-icon-primary">
                      <inline-svg
                        src="media/icons/duotone/Design/Verified.svg"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg src="media/icons/duotone/General/User.svg" />
                  </span>
                  {{ companyprofile.companyname }} Established @
                  {{ companyprofile.established }}
                </a>

                <!--  <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg src="media/icons/duotone/Map/Marker1.svg" />
                  </span>
                   {{ UserProfile.address1 }}, {{ UserProfile.address2 }}
                </a> -->
                <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
                >
                  <!--   <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotone/Communication/Mail-at.svg"
                    />
                  </span> -->
                  <!-- {{ UserProfile.email }} -->
                </a>
              </div>
              <!--end::Info-->
            </div>
            <!--end::User-->

            <!--begin::Actions-->
            <div class="d-flex my-4">
              <a
                href="#"
                class="btn btn-sm btn-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_offer_a_deal"
                >Contact Us</a
              >

              <!--begin::Menu-->

              <!--end::Menu-->
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->

          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap"
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/user/userprofile/overview"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Contact Details
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6 "
              to="/user/userprofile/projects"
              active-class="active"
            >
              Projects
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6 "
              to="/user/userprofile/campaigns"
              active-class="active"
            >
              Campaigns
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6 "
              to="/user/userprofile/documents"
              active-class="active"
            >
              Documents
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6 "
              to="/user/userprofile/connections"
              active-class="active"
            >
              Connections
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6 "
              to="/user/userprofile/activity"
              active-class="active"
            >
              Activity
            </router-link>
          </li>
          <!--end::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "profile",
  components: {},
  data: () => {
    return {
      user: {},
      company: {}
    };
  },
  mounted() {
    setTimeout(() => {
      this.user = "";
    }, 750);
  },

  methods: {
    getdate() {
      console.log(
        " companyprofile.established  " + this.companyprofile.established
      );

      return this.companyprofile.established;
    }
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      //store.dispatch(Actions.GET_SINGLEUSERPROFILE)
      //setCurrentPageBreadcrumbs("Overview", ["Account"]);
      router.push({ name: "userprofile-overview" });
    });

    const UserProfile = computed(() => {
      console.log(
        "Getting user Details -- " +
          JSON.stringify(store.getters.gettingSingleuserprofile)
      );
      return store.getters.gettingSingleuserprofile;
    });

    const companyprofile = computed(() => {
      console.log(
        "Getting Compnay Details in User Profile View page-- " +
          JSON.stringify(store.getters.getSingleCompanyprofile)
      );
      return store.getters.getSingleCompanyprofile;
    });

    return {
      UserProfile,
      companyprofile
    };
  }
});
</script>
