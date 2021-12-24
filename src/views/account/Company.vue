<template>
  <!--begin::Basic info-->
  <div>
    <div class="card mb-5 mb-xl-10">
      <!--begin::Card header-->
      <div
        class="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_profile_details"
        aria-expanded="true"
        aria-controls="kt_account_profile_details"
      >
        <!--begin::Card title-->
        <div class="card-title m-0">
          <h3 class="fw-bolder m-0">Company Pofile</h3>
        </div>
        <!--end::Card title-->
      </div>
      <!--begin::Card header-->

      <!--begin::Content-->
      <div id="kt_account_profile_details" class="collapse show">
        <!--begin::Form-->
        <Form
          id="kt_account_profile_details_form"
          class="form"
          novalidate="novalidate"
          @submit="saveChanges1()"
          :validation-schema="profileDetailsValidator"
        >
          <!--begin::Card body-->
          <div class="card-body border-top p-9">
            <!--begin::Input group-->
            <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label fw-bold fs-6">Image </label>
              <!--end::Label-->

              <!--begin::Col-->
              <div class="col-lg-8">
                <!--begin::Image input-->
                <div
                  class="image-input image-input-outline"
                  data-kt-image-input="true"
                  style="background-image: url(media/avatars/blank.png)"
                >
                  <!--begin::Preview existing avatar-->
                  <div
                    class="image-input-wrapper w-600px h-400px"
                    :style="`background-image: url(${companyprofile.image})`"
                  ></div>
                  <!--end::Preview existing avatar-->

                  <!--begin::Label-->
                  <label
                    class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                    data-kt-image-input-action="change"
                    data-bs-toggle="tooltip"
                    title="Change avatar"
                  >
                    <i class="bi bi-pencil-fill fs-7"></i>

                    <!--begin::Inputs-->
                    <input
                      type="file"
                      name="avatar"
                      v-on:change="onFileChange"
                      accept=".png, .jpg, .jpeg"
                    />
                    <input type="hidden" name="avatar_remove" />
                    <!--end::Inputs-->
                  </label>
                  <!--end::Label-->
                  <!--begin::Cancel-->
                  <span
                    class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                    data-kt-image-input-action="cancel"
                    data-bs-toggle="tooltip"
                    title="Cancel avatar"
                  >
                    <i class="bi bi-x fs-2"></i>
                  </span>
                  <!--end::Cancel-->
                  <!--begin::Remove-->
                  <span
                    class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                    data-kt-image-input-action="remove"
                    data-bs-toggle="tooltip"
                    @click="removeImage()"
                    title="Remove avatar"
                  >
                    <input
                      type="hidden"
                      v-on:change="removeImage"
                      name="avatar_remove"
                    />
                    <i class="bi bi-x fs-2"></i>
                  </span>
                  <!--end::Remove-->
                </div>
                <!--end::Image input-->

                <!--begin::Hint-->
                <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
                <!--end::Hint-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->

            <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label required fw-bold fs-6"
                >Company Name</label
              >
              <!--end::Label-->

              <!--begin::Col-->
              <div class="col-lg-8 fv-row">
                <Field
                  type="text"
                  name="companyname"
                  class="form-control form-control-lg form-control-solid"
                  placeholder="Company Name"
                  v-model="companyprofile.companyname"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="companyname" />
                  </div>
                </div>
              </div>
              <!--end::Col-->
            </div>

            <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label required fw-bold fs-6"
                >CEO Name</label
              >
              <!--end::Label-->

              <!--begin::Col-->
              <div class="col-lg-8 fv-row">
                <Field
                  type="text"
                  name="ceo"
                  class="form-control form-control-lg form-control-solid"
                  placeholder="CEO Name"
                  v-model="companyprofile.ceo"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="ceoname" />
                  </div>
                </div>
              </div>
              <!--end::Col-->
            </div>

            <!--begin::Input group-->
            <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label required fw-bold fs-6"
                >Description</label
              >
              <!--end::Label-->

              <!--begin::Col-->
              <div class="col-lg-8 fv-row">
                <textarea
                  type="text"
                  name="Description"
                  class="form-control form-control-lg form-control-solid"
                  placeholder="what is your company doing?"
                  v-model="companyprofile.aboutus"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="Description" />
                  </div>
                </div>
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label required fw-bold fs-6"
                >Branch Name</label
              >
              <!--end::Label-->

              <!--begin::Col-->
              <div class="col-lg-8 fv-row">
                <Field
                  type="text"
                  name="branch"
                  class="form-control form-control-lg form-control-solid"
                  placeholder="Branch Name"
                  v-model="companyprofile.branch"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="branch" />
                  </div>
                </div>
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label fw-bold fs-6">
                <span class="required">Year Established</span>

                <!-- <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone number must be active"
              ></i> -->
              </label>
              <!--end::Label-->

              <!--begin::Col-->
              <div class="col-lg-8 fv-row">
                <!--  <Field
                type="tel"
                name="phone"
                class="form-control form-control-lg form-control-solid"
                placeholder="Year Established"
                v-model="companyprofile.established"
              />
 -->
                <!--begin::Datepicker-->
                <el-form-item prop="dueDate">
                  <el-date-picker
                    v-model="companyprofile.established"
                    placeholder="Select a date"
                    name="dueDate"
                  />
                </el-form-item>
                <!--end::Datepicker-->

                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="established" />
                  </div>
                </div>
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label fw-bold fs-6"
                >Turn Over</label
              >
              <!--end::Label-->

              <!--begin::Col-->
              <div class="col-lg-8 fv-row">
                <!-- <Field
                type="text"
                name="turnover"
                class="form-control form-control-lg form-control-solid"
                placeholder="Annual Turn Over"
                v-model="companyprofile.turnover"
                @input="correctNumberInput"
              /> -->
                <CurrencyInput
                  placeholder="Annual Turn Over"
                  class="form-control form-control-lg form-control-solid"
                  v-model="companyprofile.turnover"
                  :options="{ currency: 'INR' }"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="turnover" />
                  </div>
                </div>
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group ADRESS-->
            <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label fw-bold fs-6"
                >Premises Size (in ㎡)</label
              >
              <!--end::Label-->

              <!--begin::Col-->
              <div class="col-lg-8 fv-row">
                <!--begin::Row-->

                <Field
                  type="number"
                  name="premisessize"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Premises Size"
                  v-model="companyprofile.premisessize"
                />

                <!--   <CurrencyInput 
                placeholder="Premises Size"
                class="form-control form-control-lg form-control-solid"
                v-model="companyprofile.premisessize"     
                 :options="{ symbol: 'm' }"                
                />  -->

                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="premisessize" />
                  </div>
                </div>
              </div>

              <!--end::Col-->
            </div>
            <!--end::Input group ADRESS -->

            <!--begin::Input group CITY-->
            <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label fw-bold fs-6"
                >Employes Count
              </label>
              <!--end::Label-->

              <!--begin::Col-->
              <div class="col-lg-8 fv-row">
                <Field
                  type="number"
                  name="employescount"
                  class="form-control form-control-lg form-control-solid"
                  placeholder="Employes Count"
                  v-model="companyprofile.employescount"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="employescount" />
                  </div>
                </div>
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group  CITY -->

            <!--begin::Input group-->

            <!--end::Input group-->

            <!--end::Input group-->
            <GoogleMap
              api-key="AIzaSyDOFlx7_zAF2nBL2D8rdhJTREPgnGgvtKk"
              style="width: 100%; height: 500px"
              :center="{ lat: 40.689247, lng: -74.044502 }"
              :zoom="15"
            >
              <Marker
                :options="{ position: { lat: 40.689247, lng: -74.044502 } }"
              />
            </GoogleMap>
          </div>
          <!--end::Card body-->

          <!--begin::Actions-->
          <div class="card-footer d-flex justify-content-end py-6 px-9">
            <button
              type="reset"
              class="btn btn-white btn-active-light-primary me-2"
            >
              Discard
            </button>

            <button
              type="submit"
              id="kt_account_profile_details_submitt"
              ref="submitButton13"
              class="btn btn-primary"
            >
              <span class="indicator-label">
                Save Changes
              </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </div>
          <!--end::Actions-->
        </Form>
        <!--end::Form-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Basic info-->

    <!--begin::Technical Team -->
    <div class="card mb-5 mb-xl-10">
      <!--begin::Card header-->
      <div
        class="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_signin_method"
      >
        <div class="card-title m-0">
          <h3 class="fw-boldest m-0">Technical Team</h3>
        </div>
      </div>
      <!--end::Card header-->

      <!--begin::Content-->
      <div id="kt_account_signin_method" class="collapse show">
        <!--begin::Card body-->
        <!--  <div class="card-body border-top p-9">
        <div class="d-flex d-flex flex-column flex-row-fluid flex-wrap align-items-center mb-8"> -->
        <div class="card-body border-top p-9">
          <div class="d-flex flex-wrap align-items-center mb-8">
            <Form id="idteam" class="form" novalidate="novalidate">
              <div class="form-row">
                <div class="row mb-6">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="fv-row mb-0">
                      <label
                        for="emailaddress"
                        class="form-label fs-6 fw-bolder mb-3"
                        >Department</label
                      >
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="fv-row mb-0">
                      <label
                        for="emailaddress"
                        class="form-label fs-6 fw-bolder mb-3"
                        >Strength</label
                      >
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="fv-row mb-0">
                      <label
                        for="emailaddress"
                        class="form-label fs-6 fw-bolder mb-3"
                        >Strength</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="form-row"
                v-for="(skill, index) in companyprofile.technicalteam"
                :key="index"
              >
                <div class="row mb-6">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="fv-row mb-0">
                      <Field
                        type="text"
                        v-model="skill.name"
                        class="form-control form-control-lg form-control-solid fw-bold fs-6"
                        placeholder="Email Address"
                        :name="`skill[${index}][name]`"
                        value="Control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="fv-row mb-0">
                      <Field
                        v-model="skill.count"
                        type="number"
                        :name="`skill[${index}][count]`"
                        class="form-control form-control-lg form-control-solid fw-bold fs-6"
                        value="3"
                      />
                    </div>
                  </div>
                </div>
                <div class="separator border-2 my-10"></div>
              </div>
              <div class="d-flex">
                <button
                  id="btnaddteam"
                  class="btn btn-primary"
                  @click="addteam"
                >
                  Add More
                </button>
              </div>
            </Form>
          </div>
        </div>

        <!--end::Card body-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Technical Team-->

    <!--begin::Customer-->
    <div class="card mb-5 mb-xl-10">
      <!--begin::Card header-->
      <div
        class="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_signin_method"
      >
        <div class="card-title m-0">
          <h3 class="fw-boldest m-0">Customers</h3>
        </div>
      </div>
      <!--end::Card header-->

      <!--begin::Content-->
      <div id="kt_account_signin_method" class="collapse show">
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <div class="d-flex flex-wrap align-items-center mb-8">
            <Form id="idcustomer" class="form" novalidate="novalidate">
              <div class="form-row">
                <div class="row mb-6">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="fv-row mb-0">
                      <label
                        for="emailaddress"
                        class="form-label fs-6 fw-bolder mb-3"
                        >Customer</label
                      >
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="fv-row mb-0">
                      <label
                        for="emailaddress"
                        class="form-label fs-6 fw-bolder mb-3"
                        >Projects</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="form-row"
                v-for="(customer, index) in companyprofile.customers"
                :key="index"
              >
                <div class="row mb-6">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="fv-row mb-0">
                      <Field
                        type="text"
                        v-model="customer.name"
                        class="form-control form-control-lg form-control-solid fw-bold fs-6"
                        placeholder="Email Address"
                        :name="`customer[${index}][name]`"
                        value="Control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="fv-row mb-0">
                      <div>
                        <Multiselect
                          v-model="customer.projectname"
                          mode="tags"
                          placeholder="Key in Project Names"
                          :options="customer.projectname"
                          :searchable="true"
                          :createTag="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="separator border-2 my-10"></div>
              </div>
              <div class="d-flex">
                <button
                  id="btnaddcustomer"
                  ref="rbtnaddcustomer"
                  class="btn btn-primary  me-2 px-6"
                  @click="addcustomer"
                >
                  Add More
                </button>
              </div>
            </Form>
          </div>
        </div>

        <!--end::Card body-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Customer-->

    <!--begin::Expertise Application-->
    <div class="card mb-5 mb-xl-10">
      <!--begin::Card header-->
      <div
        class="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_signin_method"
      >
        <div class="card-title m-0">
          <h3 class="fw-boldest m-0">Expertise Application</h3>
        </div>
      </div>
      <!--end::Card header-->

      <!--begin::Content-->
      <!--begin::Content-->
      <div id="kt_account_signin_method" class="collapse show">
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <div class="d-flex flex-wrap align-items-center mb-8">
            <Form id="idcustomer" class="form" novalidate="novalidate">
              <div class="form-row">
                <div class="row mb-6">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="fv-row mb-0">
                      <label
                        for="emailaddress"
                        class="form-label fs-6 fw-bolder mb-3"
                        >Applications</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="form-row"
                v-for="(application,
                index) in companyprofile.expertiseapplication"
                :key="index"
              >
                <div class="row mb-6">
                  <div class="col-lg-12 mb-4 mb-lg-0">
                    <div class="col-lg-12 mb-4 mb-lg-0">
                      <div class="fv-row mb-0">
                        <Field
                          type="text"
                          v-model="application.name"
                          class="form-control form-control-lg form-control-solid fw-bold fs-6"
                          placeholder="Email Address"
                          :name="`application[${index}][name]`"
                          value="Control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="separator border-2 my-10"></div>
                </div>
              </div>
              <div class="d-flex">
                <button
                  id="btnaddapplication"
                  ref="rbtnapplication"
                  class="btn btn-primary  me-2 px-6"
                  @click="addApplication"
                >
                  Add More
                </button>
              </div>
            </Form>
          </div>
        </div>

        <!--end::Card body-->
      </div>
      <!--end::Content-->
      <!--end::Content-->
    </div>
    <!--end::Expertise Application-->

    <!--begin::Expertise Application-->
    <div class="card card-border">
      <!--begin::Card header-->
      <div
        class="card-header"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_signin_method"
      >
        <div class="card-title m-0">
          <h3 class="fw-boldest m-0">Save</h3>
        </div>
      </div>
      <!--end::Card header-->

      <!--begin::Content-->
      <!--begin::Content-->
      <div id="kt_account_signin_method" class="collapse show">
        <!--begin::Card Header-->
        <div class="card-body">
          <Form
            id="idcustomer"
            class="form"
            novalidate="novalidate"
            :validation-schema="profileDetailsValidator"
          >
            <div class="d-flex flex-row flex-column-fluid">
              <div class="d-flex flex-row-fluid flex-center">
                <div class="text-primary fw-bolder fs-2 mb-3">
                  Please ensure all the given information is correct.
                </div>
              </div>
            </div>
          </Form>
        </div>

        <!--end::Card Header-->
        <!--begin::Footer-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="reset"
            class="btn btn-white btn-active-light-primary me-2"
          >
            Discard
          </button>

          <button
            id="allsvae"
            ref="rallsave"
            class="btn btn-primary  me-2 px-6"
            @click="allsave"
          >
            <span class="indicator-label">
              Save Changes
            </span>
            <span class="indicator-progress">
              Please wait...
              <span class="spinner-border spinner-border-sm align-middle ms-2">
              </span>
            </span>
          </button>
          <div class="d-flex"></div>
        </div>
        <!--end::Footer-->
      </div>
      <!--end::Content-->
      <!--end::Content-->
    </div>
    <!--end::Expertise Application-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import Multiselect from "@vueform/multiselect";
import CurrencyInput from "../../components/CurrencyInput.vue";

interface ProfileDetails {
  avatar: string;
  name: string;
  surname: string;
  company: string;
  contactPhone: string;
  companySite: string;
  country: string;
  language: string;
  timezone: string;
  communications: {
    email: boolean;
    phone: boolean;
  };
  allowMarketing: boolean;
}

export default defineComponent({
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    Form,
    Multiselect,
    CurrencyInput
  },
  setup() {
    const profileDetails = ref<ProfileDetails>({
      avatar: "media/avatars/150-2.jpg",
      name: "Max",
      surname: "Smith",
      company: "Keenthemes",
      contactPhone: "044 3276 454 935",
      companySite: "keenthemes.com",
      country: "MY",
      language: "msa",
      timezone: "Kuala Lumpur",
      communications: {
        email: false,
        phone: false
      },
      allowMarketing: false
    });

    const store = useStore();

    onMounted(() => {
      store.dispatch(Actions.GET_COMPNAYPROFILE);
      //setCurrentPageBreadcrumbs("Overview", ["Account"]);
    });

    const email = computed(() => {
      console.log(
        "Email Address in Company -- " +
          JSON.stringify(store.getters.userprofile)
      );
      return store.getters.userprofile;
    });

    const companyprofile = computed(() => {
      console.log(
        "Getting company Details -- " +
          JSON.stringify(store.getters.mycompanyprofile)
      );
      console.log(
        "Email Address in Company -- " +
          JSON.stringify(store.getters.userprofile.email)
      );

      return store.getters.mycompanyprofile;
    });
    const rallsave = ref<HTMLElement | null>(null);
    const submitButton1 = ref<HTMLElement | null>(null);
    const submitButton2 = ref<HTMLElement | null>(null);
    const submitButton3 = ref<HTMLElement | null>(null);
    const submitButton4 = ref<HTMLElement | null>(null);
    const submitButton5 = ref<HTMLElement | null>(null);
    const updateEmailButton = ref<HTMLElement | null>(null);
    const updatePasswordButton = ref<HTMLElement | null>(null);

    const emailFormDisplay = ref(false);
    const passwordFormDisplay = ref(false);

    const profileDetailsValidator = Yup.object().shape({});

    const saveChanges1 = () => {
      console.log("saveChanges1 ..... ");
      if (rallsave.value) {
        console.log("saveChanges1 ..... ");
        // Activate indicator
        rallsave.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          // submitButton2.value?.removeAttribute("data-kt-indicator");
          store
            .dispatch(
              Actions.UPDATE_COMPANYPROFILE,
              store.getters.mycompanyprofile
            )
            .then(() => {
              Swal.fire({
                text: "All is cool!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary"
                }
              }).then(function() {
                // Go to page after successfully login
                //router.push({ name: "dashboard" });
              });
            })
            .catch(() => {
              Swal.fire({
                text: store.getters.getErrors,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Try again!",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-danger"
                }
              });
            });

          rallsave.value?.removeAttribute("data-kt-indicator");
        }, 3000);
      }
    };

    const removeImage = () => {
      profileDetails.value.avatar = "media/avatars/blank.png";
    };

    /* const imagechange = (e) => {
    
      //profileDetails.value.avatar = "media/avatars/blank.png";
    }; */

    onMounted(() => {
      setCurrentPageBreadcrumbs("Settings", ["Account"]);
    });

    return {
      rallsave,
      submitButton1,
      submitButton2,
      submitButton3,
      submitButton4,
      submitButton5,
      saveChanges1,
      profileDetails,
      emailFormDisplay,
      passwordFormDisplay,
      profileDetailsValidator,
      updateEmailButton,
      updatePasswordButton,
      removeImage,
      ShowAccountDeactivation: false,
      companyprofile,
      checkedcom: [],
      comemail: true,
      comphone: true,
      modalId: "KTNewTargetModal",
      email
    };
  },

  data() {
    return {
      value: null,
      options: ["Batman", "Robin", "Joker"]
    };
  },
  methods: {
    onFileChange(e: any) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file: any) {
      const reader = new FileReader();
      //const vm = this;
      reader.onload = (e: any) => {
        //vm.image = e.target.result;
        console.log("Image from file --- " + JSON.stringify(e.target.result));
        this.companyprofile.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    blankAvatar() {
      this.profileDetails.avatar = "media/avatars/blank.png";
    },
    removeImages: function(e: any) {
      //this.image = '';
      console.log("Removing image ..... ");
      this.blankAvatar();
    },
    correctNumberInput: function(event) {
      const name = event.target.name;
      const value = String(this[name]).replace(/[^0-9]/g, "");
      if (value) {
        this[name] = parseInt(value, 10);
      } else {
        this[name] = "";
      }
    },
    testclick() {
      console.log(
        "tehcnical Skill -- " +
          JSON.stringify(this.companyprofile.technicalteam)
      );
    },
    allsave(e) {
      console.log("Saving Changes");
      this.saveChanges1();
    },

    addteam(e) {
      console.log(
        "tehcnical Skill -- " +
          JSON.stringify(this.companyprofile.technicalteam)
      );

      this.companyprofile.technicalteam.push({ name: "New Team", count: "4" });
      e.preventDefault();
    },

    addcustomer(e) {
      console.log(
        "customers  -- " + JSON.stringify(this.companyprofile.customers)
      );
      const proj = '[" Pik and Place","Machine Tending"]';
      const obj = JSON.parse(proj);
      this.companyprofile.customers.push({
        name: "Customer A",
        projectname: obj
      });
      e.preventDefault();
    },

    addApplication(e) {
      console.log(
        "customers  -- " +
          JSON.stringify(this.companyprofile.expertiseapplication)
      );
      this.companyprofile.expertiseapplication.push({
        name: "Application Example"
      });
      e.preventDefault();
    }
  },
  mounted() {
    //this.Addinitialteam();
  }
});
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
