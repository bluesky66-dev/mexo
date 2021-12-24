<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <div
      id="kt_wrapper"
      class="wrapper d-flex flex-column flex-row-fluid"
      v-if="authenticated"
    >
      <KTHeader :title="pageTitle"></KTHeader>

      <!-- begin:: Content Head -->
      <KTToolbar
        v-if="subheaderDisplay"
        :breadcrumbs="breadcrumbs"
        :title="pageTitle"
      />
      <!-- end:: Content Head -->

      <!-- begin:: Content -->
      <div
        id="kt_content"
        class="d-flex flex-column-fluid align-items-start"
        :class="{
          'container-fluid': contentWidthFluid,
          container: !contentWidthFluid
        }"
      >
        <!-- begin:: Aside Left -->
        <KTAside
          v-if="true"
          :lightLogo="themeLightLogo"
          :darkLogo="themeDarkLogo"
        ></KTAside>
        <!-- end:: Aside Left -->
        <!-- begin:: Content Body -->
        <div class=" content flex-row-fluid">
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop></KTScrollTop>
  <!-- <KTExplore></KTExplore> -->
  <KTDrawerMessenger></KTDrawerMessenger>
  <KTUserMenu></KTUserMenu>
  <KTCreateApp></KTCreateApp>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import KTAside from "@/layout/aside/Aside.vue";
import KTHeader from "@/layout/header/Header.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTToolbar from "@/layout/toolbar/Toolbar.vue";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTUserMenu from "@/layout/header/partials/ActivityDrawer.vue";
import KTLoader from "@/components/Loader.vue";
import KTCreateApp from "@/components/modals/wizards/CreateAppModal.vue";
import KTDrawerMessenger from "@/layout/extras/DrawerMessenger.vue";
import { Actions } from "@/store/enums/StoreEnums";
import { MenuComponent, DrawerComponent } from "@/assets/ts/components/index";
import { removeModalBackdrop } from "@/core/helpers/dom";
import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  subheaderDisplay,
  themeLightLogo,
  themeDarkLogo
} from "@/core/helpers/config";

export default defineComponent({
  name: "Layout",
  components: {
    KTAside,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTCreateApp,
    KTUserMenu,
    KTDrawerMessenger,
    KTLoader,
    KTToolbar
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init();

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    const breadcrumbs = computed(() => {
      return store.getters.pageBreadcrumbPath;
    });

    const authenticated = computed(() => {
      console.log("Authenticated -- " + store.getters.isUserAuthenticated);
      return localStorage.getItem("id_token");
      // return store.getters.isUserAuthenticated;
    });

    onMounted(() => {
      //check if current user is authenticated
      // if (!store.getters.isUserAuthenticated) {
      //   router.push({ name: "sign-in" });
      // }
      if (!localStorage.getItem("id_token")) {
        router.push({ name: "sign-in" });
      }

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);

      store.dispatch(Actions.ADD_BODY_ATTRIBUTE, {
        qulifiedName: "style",
        value: "background-image: url(media/patterns/header-bg.jpg)"
      });
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);

        DrawerComponent.hideAll();

        // check if current user is authenticated
        // if (!store.getters.isUserAuthenticated) {
        //   router.push({ name: "sign-in" });
        // }
        if (!localStorage.getItem("id_token")) {
          router.push({ name: "sign-in" });
        }

        removeModalBackdrop();
      }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      pageTitle,
      breadcrumbs,
      themeLightLogo,
      themeDarkLogo,
      authenticated
    };
  }
});
</script>

<style lang="scss" scoped>
.background-3 {
  background: #92c7d6;
  background-image: -webkit-radial-gradient(
    top,
    circle cover,
    #97d0e1,
    #427388 80%
  );
  background-image: -moz-radial-gradient(
    top,
    circle cover,
    #97d0e1,
    #427388 80%
  );
  background-image: -o-radial-gradient(top, circle cover, #97d0e1, #427388 80%);
  background-image: radial-gradient(top, circle cover, #97d0e1, #427388 80%);
}
</style>
