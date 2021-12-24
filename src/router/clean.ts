import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue")
      },
      {
        path: "/user/Myprojects",
        name: "Myprojects",
        component: () => import("@/views/Myprojects.vue")
      },
      {
        path: "/user/projects",
        name: "projects",
        component: () => import("@/views/projects.vue")
      },
      {
        path: "/user/companies",
        name: "companies",
        component: () => import("@/views/companies.vue")
      },
      {
        path: "/user/articles",
        name: "articles",
        component: () => import("@/views/articles.vue")
      },
      //
      {
        path: "project/overview",
        name: "project-view",
        component: () => import("@/components/page-layouts/Project.vue"),
        children: [
          {
            path: "overview",
            name: "project-overview",
            component: () => import("@/views/project/Overview.vue")
          },
          {
            path: "files",
            name: "project-files",
            component: () => import("@/views/project/Files.vue")
          }
        ]
      },
      {
        path: "/user/account",
        name: "profile",
        component: () => import("@/views/account/Account.vue"),
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/account/Overview.vue")
          },
          {
            path: "settings",
            name: "account-settings",
            component: () => import("@/views/account/Settings.vue")
          },
          {
            path: "company",
            name: "account-company",
            component: () => import("@/views/account/Company.vue")
          }
        ]
      },
      {
        path: "user/userprofile",
        name: "userprofile",
        component: () => import("@/views/users/Profile.vue"),
        children: [
          {
            path: "overview",
            name: "userprofile-overview",
            component: () => import("@/views/users/profile/Overview.vue")
          },
          {
            path: "projects",
            name: "userprofile-projects",
            component: () => import("@/views/users/profile/Projects.vue")
          },
          {
            path: "campaigns",
            name: "userprofile-campaigns",
            component: () => import("@/views/users/profile/Campaigns.vue")
          },
          {
            path: "documents",
            name: "userprofile-documents",
            component: () => import("@/views/users/profile/Documents.vue")
          },
          {
            path: "connections",
            name: "userprofile-connections",
            component: () => import("@/views/users/profile/Connections.vue")
          },
          {
            path: "activity",
            name: "profile-activity",
            component: () => import("@/views/users/profile/Activity.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/views/auth/SignIn.vue")
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/views/auth/SignUp.vue")
  },
  {
    path: "/forgot-reset",
    name: "forgot-reset",
    component: () => import("@/views/auth/ForgotPassword.vue")
  },
  {
    path: "/password-reset",
    name: "password-reset",
    component: () => import("@/views/auth/ResetPassword.vue")
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/error/Error404.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  store.dispatch(Actions.VERIFY_AUTH);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
