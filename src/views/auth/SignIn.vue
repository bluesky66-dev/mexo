<template>
  <div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
    style="background-image: url('media/illustrations/progress-hd.png')"
  >
    <!--begin::Content-->
    <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <!--begin::Logo-->
      <a href="#" class="mb-12">
        <!-- <img alt="Logo" src="media/logos/logo-2-dark.svg" class="h-45px" /> -->
        <h1 class="text-dark mb-3">
          Mexo
        </h1>
      </a>
      <!--end::Logo-->

      <!--begin::Wrapper-->
      <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <Form
          class="form w-100"
          id="kt_login_signin_form"
          @submit="onSubmitLogin"
          :validation-schema="login"
        >
          <!--begin::Heading-->
          <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">
              Sign In to Mexo
            </h1>
            <!--end::Title-->

            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">
              New Here?

              <router-link to="/sign-up" class="link-primary fw-bolder">
                Create an Account
              </router-link>
            </div>
            <!--end::Link-->
          </div>
          <!--begin::Heading-->

          <div class="mb-10 bg-light-info p-8 rounded" v-if="Isverifysend">
            <div class="text-info">
              <h2 class="text-info-heading text-center">Verify Your Email</h2>
              <h4 Class="fs-5 fw-bold mb-5">
                We have sent an email with a confirmation link to
                <strong>
                  <span class="badge-light-success me-1"
                    >{{ Verifyemail }}
                  </span>
                </strong>
                . In order to complete the sign-up process, please click the
                confirmation link.
              </h4>
              <h5 Class="fs-5 fw-bold mb-5">
                If you do not receive a confirmation email, please check your
                spam folder. Also, please verify that you entered a valid email
                address in our sign-up form.
              </h5>

              <h5 Class="fs-5 fw-bold mb-5">
                If you need assistance, please contact us.
              </h5>
            </div>
          </div>

          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="form-label fs-6 fw-bolder text-dark">Email</label>
            <!--end::Label-->

            <!--begin::Input-->
            <Field
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="email"
              autocomplete="off"
            />
            <!--end::Input-->
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="email" />
              </div>
            </div>
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack mb-2">
              <!--begin::Label-->
              <label class="form-label fw-bolder text-dark fs-6 mb-0"
                >Password</label
              >
              <!--end::Label-->

              <!--begin::Link-->
              <router-link
                to="/forgot-reset"
                class="link-primary fs-6 fw-bolder"
              >
                Forgot Password ?
              </router-link>
              <!--end::Link-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Input-->
            <Field
              class="form-control form-control-lg form-control-solid"
              type="password"
              name="password"
              autocomplete="off"
            />
            <!--end::Input-->
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
            </div>
          </div>
          <!--end::Input group-->

          <!--begin::Actions-->
          <div class="text-center">
            <!--begin::Submit button-->
            <button
              type="submit"
              ref="submitButton"
              id="kt_sign_in_submit"
              class="btn btn-lg btn-primary w-100 mb-5"
            >
              <span class="indicator-label">
                Continue
              </span>

              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Submit button-->

            <!--begin::Separator
            <div class="text-center text-muted text-uppercase fw-bolder mb-5">
              or
            </div>
           end::Separator-->

            <!--begin::Google link
            <a
              href="#"
              class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
            >
              <img
                alt="Logo"
                src="media/svg/brand-logos/google-icon.svg"
                class="h-20px me-3"
              />
              Continue with Google
            </a>
            end::Google link-->

            <!--begin::Google link
            <a
              href="#"
              class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
            >
              <img
                alt="Logo"
                src="media/svg/brand-logos/facebook-4.svg"
                class="h-20px me-3"
              />
              Continue with Facebook
            </a>
           end::Google link-->

            <!--begin::Google link
            <a href="#" class="btn btn-flex flex-center btn-light btn-lg w-100">
              <img
                alt="Logo"
                src="media/svg/brand-logos/apple-black.svg"
                class="h-20px me-3"
              />
              Continue with Apple
            </a>
            end::Google link-->
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
import { defineComponent, ref, onMounted, computed } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    Form,
    ErrorMessage
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string()
        .email()
        .required()
        .label("Email"),
      password: Yup.string()
        .min(4)
        .required()
        .label("Password")
    });

    const Isverifysend = computed(() => {
      console.log(
        "Verification Send Computed -- " + store.getters.Isverifysend
      );
      return store.getters.Isverifysend;
    });

    const Verifyemail = computed(() => {
      console.log(
        "Verification Send to this email -- " + store.getters.Verifyemail
      );
      return store.getters.Verifyemail;
    });

    //Form submit function
    const onSubmitLogin = values => {
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);

      if (submitButton.value) {
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }
      store.dispatch(Actions.ADD_BODY_ATTRIBUTE, {
        qulifiedName: "style",
        value: "background-image: url(media/patterns/header-bg.jpg)"
      });
      // Dummy delay
      setTimeout(() => {
        // Send login request
        store
          .dispatch(Actions.LOGIN, values)
          .then(() => {
            Swal.fire({
              text: "All is cool! Now you submit this form",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary"
              }
            }).then(function() {
              // Go to page after successfully login
              router.push({ name: "dashboard" });
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

        //Deactivate indicator
        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
    };

    onMounted(() => {
      store.dispatch(Actions.REMOVE_BODY_ATTRIBUTE, {
        qulifiedName: "style"
      });
    });

    return {
      onSubmitLogin,
      login,
      submitButton,
      Isverifysend,
      Verifyemail
    };
  }
});
</script>
