<template>
  <div
    class="
      d-flex
      flex-column flex-column-fluid
      bgi-position-y-bottom
      position-x-center
      bgi-no-repeat bgi-size-contain bgi-attachment-fixed
    "
    style="background-image: url('media/illustrations/progress-hd.png')"
  >
    <!--begin::Content-->
    <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <!--begin::Logo-->
      <a href="#" class="mb-12">
        <!--  <img alt="Logo" src="media/logos/logo-2.svg" class="h-45px"/> -->
        <h1 class="text-dark mb-3">Mexo</h1>
      </a>
      <!--end::Logo-->

      <!--begin::Wrapper-->
      <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <Form
          class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
          novalidate="novalidate"
          @submit="onSubmitRegister"
          id="kt_login_signup_form"
          :validation-schema="registration"
        >
          <!--begin::Heading-->
          <div class="mb-10 text-center">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">Create an Account</h1>
            <!--end::Title-->

            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">
              Already have an account?

              <router-link to="/sign-in" class="link-primary fw-bolder">
                Sign in here
              </router-link>
            </div>
            <!--end::Link-->
          </div>
          <!--begin::Input group-->
          <div class="fv-row">
            <!--begin::Row-->
            <div class="row">
              <!--begin::Col-->
              <div class="col-lg-6">
                <!--begin::Option-->
                <Field
                  type="radio"
                  class="btn-check"
                  name="accounttype"
                  value="si"
                  id="kt_create_account_form_account_type_personal"
                />
                <label
                  class="
                    btn btn-outline btn-outline-dashed btn-outline-default
                    p-7
                    d-flex
                    align-items-center
                    mb-10
                  "
                  for="kt_create_account_form_account_type_personal"
                >
                  <span class="svg-icon svg-icon-3x me-5">
                    <inline-svg src="media/icons/duotone/Interface/User.svg" />
                  </span>

                  <!--begin::Info-->
                  <span class="d-block fw-bold text-start">
                    <span class="text-dark fw-bolder d-block fs-4 mb-2">
                      System Integrators
                    </span>
                    <span class="text-gray-400 fw-bold fs-6"
                      >Those who provide Automation Soltutions</span
                    >
                  </span>
                  <!--end::Info-->
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="col-lg-6">
                <!--begin::Option-->
                <Field
                  type="radio"
                  class="btn-check"
                  name="accounttype"
                  value="ah"
                  id="kt_create_account_form_account_type_corporate"
                />
                <label
                  class="
                    btn btn-outline btn-outline-dashed btn-outline-default
                    p-7
                    d-flex
                    align-items-center
                  "
                  for="kt_create_account_form_account_type_corporate"
                >
                  <span class="svg-icon svg-icon-3x me-5">
                    <inline-svg
                      src="media/icons/duotone/Interface/Briefcase.svg"
                    />
                  </span>

                  <!--begin::Info-->
                  <span class="d-block fw-bold text-start">
                    <span class="text-dark fw-bolder d-block fs-4 mb-2"
                      >Automation Contractors</span
                    >
                    <span class="text-gray-400 fw-bold fs-6"
                      >I am looking for suitable System Integrators</span
                    >
                  </span>
                  <!--end::Info-->
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="accountType" />
                </div>
              </div>
            </div>
            <!--end::Row-->
          </div>
          <!--end::Input group-->

          <!--end::Heading-->

          <!--begin::Action-->
          <!--  <button
            type="button"
            class="btn btn-light-primary fw-bolder w-100 mb-10"
          >
            <img
              alt="Logo"
              src="media/svg/brand-logos/google-icon.svg"
              class="h-20px me-3"
            />
            Sign in with Google
          </button> -->
          <!--end::Action-->

          <!--begin::Separator-->
          <!-- <div class="d-flex align-items-center mb-10">
            <div class="border-bottom border-gray-300 mw-50 w-100"></div>
            <span class="fw-bold text-gray-400 fs-7 mx-2">OR</span>
            <div class="border- bottom border-gray-300 mw-50 w-100"></div>
          </div> -->
          <!--end::Separator-->

          <!--begin::Input group -->

          <!--end::Input group-->

          <!--begin::Input group-->

          <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="selection" />
                </div>

              </div>
          <div class="fv-row mb-7">
            <label class="form-label fw-bolder text-dark fs-6">Email</label>
            <Field
              class="form-control form-control-lg form-control-solid"
              type="email"
              placeholder=""
              name="email"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="email" />
              </div>
            </div>
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="mb-10 fv-row" data-kt-password-meter="true">
            <!--begin::Wrapper-->
            <div class="mb-1">
              <!--begin::Label-->
              <label class="form-label fw-bolder text-dark fs-6">
                Password
              </label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative mb-3">
                <Field
                  class="form-control form-control-lg form-control-solid"
                  type="password"
                  placeholder=""
                  name="password"
                  autocomplete="off"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <div
                  class="d-flex align-items-center mb-3"
                  data-kt-password-meter-control="highlight"
                >
                  <div
                    class="
                      flex-grow-1
                      bg-secondary bg-active-success
                      rounded
                      h-5px
                      me-2
                    "
                  ></div>
                  <div
                    class="
                      flex-grow-1
                      bg-secondary bg-active-success
                      rounded
                      h-5px
                      me-2
                    "
                  ></div>
                  <div
                    class="
                      flex-grow-1
                      bg-secondary bg-active-success
                      rounded
                      h-5px
                      me-2
                    "
                  ></div>
                  <div
                    class="
                      flex-grow-1
                      bg-secondary bg-active-success
                      rounded
                      h-5px
                    "
                  ></div>
                </div>
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Input group--->

          <!--begin::Input group-->
          <div class="fv-row mb-5">
            <label class="form-label fw-bolder text-dark fs-6"
              >Confirm Password</label
            >
            <Field
              class="form-control form-control-lg form-control-solid"
              type="password"
              placeholder=""
              name="cpassword"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="cpassword" />
              </div>
            </div>
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <label class="form-check form-check-custom form-check-solid">
              <Field
                class="form-check-input"
                type="checkbox"
                name="toc"

                id="tocs"
                value="1"
              />            

              <span class="form-check-label fw-bold text-gray-700 fs-6">
                I Agree &
                <a href="#" class="ms-1 link-primary">Terms and conditions</a>.
              </span>

               
            </label>
             <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="agree" />
                </div>
              </div>

          </div>
          <!--end::Input group-->

          <!--begin::Actions-->
          <div class="text-center">
            <button
              id="kt_sign_up_submit"
              ref="submitButton"
              type="submit"
              class="btn btn-lg btn-primary"
            >
              <span class="indicator-label"> Submit </span>
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
      <!--end::Wrapper-->
    </div>
    <!--end::Content-->

    <!--begin::Footer-->
    <div class="d-flex flex-center flex-column-auto p-10">
      <!--begin::Links-->
      <div class="d-flex align-items-center fw-bold fs-6">
        <a href="#" class="text-muted text-hover-primary px-2">About</a>

        <a href="#" class="text-muted text-hover-primary px-2">Contact</a>

        <a href="#" class="text-muted text-hover-primary px-2">Contact Us</a>
      </div>
      <!--end::Links-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  name: "sign-up",
  components: {
    Field,
    Form,
    ErrorMessage
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLElement | null>(null);

    let registration = Yup.object().shape({
      email: Yup.string()
        .min(4)
        .required()
        .email()
        .label("Email"),
      password: Yup.string()
        .min(8)
        .required()
        /*  .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ) */
        .label("Pssword"),
      cpassword: Yup.string()
        .min(8)
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match")

        .label("Password Confirmation"),
      toc: Yup.boolean(),

    });
    

    // extended validation
    
    registration = registration.test("myCustomCheckboxTest", "", (obj) => {
        // only testing the checkboxes here
        if (obj.toc) {          
          return true; // everything is fine
        }      
        return new Yup.ValidationError(
          "Please Agree & Terms and conditions",
          null,
          "agree"
        );        
      });


    let selection =   Yup.object().shape({
    accounttype: Yup.string().oneOf(["ah","si"]).required()
});

 selection = selection.test("myCustomCheckboxTest", "", (obj) => {
        // only testing the checkboxes here
        if (obj.ah | obj.si) {    
           console.log("values----");      
          return true; // everything is fine
        }    
        else
        {
           console.log("values------------");    
        }  
        return new Yup.ValidationError(
          "Please Agree & Terms and conditionsaaa.",
          null,
          "selection"
        );        
      });

    const validateOptions = { abortEarly: false };
    const validateMsgGood = "Please Agree & Terms and conditions."; // for testing purpose


    const onSubmitRegister = (values) => {
      console.log("Register");
     

      console.log("values----" + JSON.stringify(values));
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);

      if (submitButton.value) {
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Activate indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // Dummy delay
      setTimeout(() => {
        // Send login request
        store
          .dispatch(Actions.REGISTER, values)
          .then(() => {
            Swal.fire({
              text: "Please Verify Your Email",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary"
              }
            }).then(function() {
              // Go to page after successfully login
              router.push({ name: "sign-in" });
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

        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
    };

    return {
      registration,
      onSubmitRegister,
      submitButton
    };
  }
});
</script>
