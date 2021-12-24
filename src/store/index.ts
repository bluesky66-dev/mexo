import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import ProfileModule from "@/store/modules/ProfileModule";
import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";
import AllprofileModule from "@/store/modules/AllprofileModule";
import CompanyprofileModule from "@/store/modules/CompanyprofileModule";
import ProjectModule from "@/store/modules/ProjectModule";
config.rawError = true;

const store = createStore({
  modules: {
    AuthModule,
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
    ProfileModule,
    AllprofileModule,
    CompanyprofileModule,
    ProjectModule
  }
});

export default store;
