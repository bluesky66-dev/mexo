<template>
  <div
    class="header-menu align-items-stretch"
    data-kt-drawer="true"
    data-kt-drawer-name="header-menu"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
    data-kt-place="true"
    data-kt-place-mode="prepend"
    data-kt-place-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
  >
    <div
      class="
        menu
        menu-lg-rounded
        menu-column
        menu-lg-row
        menu-state-bg
        menu-state-icon-primary
        menu-state-bullet-primary
        menu-arrow-gray-400
        fw-bold
        my-5 my-lg-0
        align-items-stretch
      "
      id="#kt_header_menu"
      data-kt-menu="true"
    >
      <div class="menu-item menu-lg-down-accordion me-lg-1">
        <router-link
          to="/dashboard"
          custom
          v-slot="{ href, navigate, isActive }"
        >
          <NavLink :active="isActive" :href="href" @click="navigate">
            <h1 class="menu-link">Home</h1></NavLink
          >
        </router-link>
      </div>
      <!-- v-if="userprofile.accounttype == 'ah' -->
      <div
        class="menu-item menu-lg-down-accordion me-lg-1"
        v-if="userprofile.accounttype === 'ah'"
      >
        <router-link
          to="/user/companies"
          custom
          v-slot="{ href, navigate, isActive }"
        >
          <NavLink :active="isActive" :href="href" @click="navigate">
            <h1 class="menu-link">Browser Companies</h1>
          </NavLink>
        </router-link>
      </div>
      <div class="menu-item menu-lg-down-accordion me-lg-1">
        <router-link
          :to="
            userprofile.accounttype == 'ah'
              ? '/user/Myprojects'
              : '/user/projects'
          "
          custom
          v-slot="{ href, navigate, isActive }"
        >
          <NavLink :active="isActive" :href="href" @click="navigate">
            <h1 class="menu-link">
              {{
                userprofile.accounttype == "ah"
                  ? "Myprojects"
                  : "Browse Projects"
              }}
            </h1></NavLink
          >
        </router-link>
      </div>
      <div class="menu-item menu-lg-down-accordion me-lg-1">
        <router-link
          to="/user/projects"
          custom
          v-slot="{ href, navigate, isActive }"
        >
          <NavLink :active="isActive" :href="href" @click="navigate">
            <h1 class="menu-link">Guide Insights</h1>
          </NavLink>
        </router-link>
      </div>
      <div class="menu-item menu-lg-down-accordion me-lg-1">
        <router-link
          to="/user/articles"
          custom
          v-slot="{ href, navigate, isActive }"
        >
          <NavLink :active="isActive" :href="href" @click="navigate">
            <h1 class="menu-link">News</h1>
          </NavLink>
        </router-link>
      </div>
      <!-- <div
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion me-lg-1"
      ></div> -->
      <!--end::Menu-->
    </div>
  </div>
  <!--end::Menu wrapper-->
</template>

<style lang="scss" scoped>
.header-fixed:not([data-kt-sticky-header="on"])
  .menu-item
  > a
  > .menu-link.active {
  transition: color 0.2s ease, background-color 0.2s ease;
  background-color: rgba(0, 0, 255, 0.1);
  color: rgb(12, 178, 219);
}

.header-fixed:not([data-kt-sticky-header="on"]) .menu-item > a > .menu-link {
  color: #fff;
}

.header-fixed[data-kt-sticky-header="on"] .menu-item > a > .menu-link {
  color: #5e6278;
}

.menu-sub a.menu-link {
  color: #5e6278;
}

.menu-link {
  color: #ffffff;
  cursor: pointer;
}
@media screen and (max-width: 1400px) {
  .menu-link {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 1200px) {
  .menu-link {
    font-size: 1.1rem;
  }
}
</style>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { MenuComponent } from "@/assets/ts/components";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import { headerMenuIcons } from "@/core/helpers/config";
import { useStore } from "vuex";
export default defineComponent({
  name: "KTMenu",
  components: {},
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();

    const hasActiveChildren = match => {
      return route.path.indexOf(match) !== -1;
    };

    const translate = text => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    const store = useStore();
    onMounted(() => {
      MenuComponent.reinitialization();
    });

    const userprofile = computed(() => {
      console.log(
        "Getting user Details in Main Menu -- " +
          JSON.stringify(store.getters.userprofile)
      );

      return store.getters.userprofile;
    });

    return {
      hasActiveChildren,
      headerMenuIcons,
      MainMenuConfig,
      translate,
      userprofile
    };
  }
});
</script>
