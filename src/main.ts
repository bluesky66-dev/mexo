import { createApp } from "vue";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "@/router/clean";
import store from "./store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";
import Pagination from 'v-pagination-3';

//imports for app initialization
//import MockAdapter from "@/core/mock/MockService";
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import ckeditor from "@ckeditor/ckeditor5-vue";

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import "bootstrap";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(ckeditor);

ApiService.init(app);
//MockAdapter.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);
app.component("pagination", Pagination);
app.mount("#app");
