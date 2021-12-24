<template>
  <!--begin::Modal - Create account-->
  <div
    class="modal fade"
    id="kt_modal_create_project"
    ref="createProjectModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Title-->
          <h2>Create Project</h2>
          <!--end::Title-->

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y m-5">
          <!--begin::Stepper-->
          <div
            ref="createAccountRef"
            class="stepper stepper-links d-flex flex-column"
            id="kt_create_account_stepper"
          >
            <!--begin::Nav-->
            <div class="stepper-nav py-5">
              <!--begin::Step 1-->
              <div class="stepper-item current" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Project Detail</h3>
              </div>
              <!--end::Step 1-->

              <!--begin::Step 2-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Project Type</h3>
              </div>
              <!--end::Step 2-->

              <!--begin::Step 3-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Project Budget</h3>
              </div>
              <!--end::Step 3-->

              <!--begin::Step 4-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">File</h3>
              </div>
              <!--end::Step 4-->

              <!--begin::Step 5-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Completed</h3>
              </div>
              <!--end::Step 5-->
            </div>
            <!--end::Nav-->

            <!--begin::Form-->
            <form
              class="mx-auto mw-600px w-100 py-10"
              novalidate="novalidate"
              id="kt_create_account_form"
              @submit="handleStep"
            >
              <div class="current" data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-12">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">Project Details</h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="link-primary fw-bolder">Help Page</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->
                  <div class="fv-row mb-10">
                    <label class="form-label">Project Image</label>
                    <div class="">
                      <!--begin::Image input-->
                      <div
                        class="image-input image-input-outline"
                        data-kt-image-input="true"
                        style="background-image: url(media/avatars/blank.png)"
                      >
                        <!--begin::Preview existing avatar-->
                        <div
                          class="image-input-wrapper w-125px h-125px"
                          :style="`background-image: url(${projectImg})`"
                        ></div>
                        <img
                          :src="projectImg"
                          alt=""
                          width="100px"
                          height="100px"
                        />
                        <!--end::Preview existing avatar-->

                        <!--begin::Label-->
                        <label
                          class="
                            btn btn-icon btn-circle btn-active-color-primary
                            w-25px
                            h-25px
                            bg-white
                            shadow
                          "
                          data-kt-image-input-action="change"
                          data-bs-toggle="tooltip"
                          title="Change avatar"
                        >
                          <i class="bi bi-pencil-fill fs-7"></i>

                          <!--begin::Inputs-->
                          <input
                            type="file"
                            name="projectImage"
                            accept=".png, .jpg, .jpeg"
                            @change="handleChangeImg"
                          />
                          <input type="hidden" name="avatar_remove" />
                          <!--end::Inputs-->
                        </label>
                        <!--end::Label-->

                        <!--begin::Remove-->
                        <span
                          class="
                            btn btn-icon btn-circle btn-active-color-primary
                            w-25px
                            h-25px
                            bg-white
                            shadow
                          "
                          data-kt-image-input-action="remove"
                          data-bs-toggle="tooltip"
                          @click="removeImage()"
                          title="Remove avatar"
                        >
                          <i class="bi bi-x fs-2"></i>
                        </span>
                        <!--end::Remove-->
                      </div>
                      <!--end::Image input-->

                      <!--begin::Hint-->
                      <div class="form-text">
                        Allowed file types: png, jpg, jpeg.
                      </div>
                      <!--end::Hint-->
                    </div>
                  </div>
                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label required">Project Name</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="projectName"
                      class="form-control form-control-lg form-control-solid"
                      value=""
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="projectName"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--end::Label-->
                    <label class="form-label">Project Description</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      type="text"
                      name="projectDescription"
                      class="form-control form-control-lg form-control-solid"
                      rows="3"
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="projectDescription"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--begin::Step 1-->
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-15">
                    <!--begin::Title-->
                    <h2 class="fw-bolder d-flex align-items-center text-dark">
                      Choose Project Type
                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Billing is issued based on your selected account type"
                      ></i>
                    </h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="link-primary fw-bolder">Help Page</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="fv-row">
                    <!--begin::Row-->
                    <div class="row">
                      <!--begin::Col-->
                      <div class="col-12">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          name="projectType"
                          value="type-1"
                          checked="checked"
                          id="kt_create_project_form_project_type_1"
                          v-model="projectType"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            p-7
                            d-flex
                            align-items-center
                            mb-5
                          "
                          for="kt_create_project_form_project_type_1"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="media/icons/duotune/communication/com005.svg"
                            />
                          </span>

                          <!--begin::Info-->
                          <span class="d-block fw-bold text-start">
                            <span class="text-dark fw-bolder d-block fs-4 mb-2">
                              Project Type 1
                            </span>
                            <span class="text-gray-400 fw-bold fs-6"
                              >Project Type 1 Description</span
                            >
                          </span>
                          <!--end::Info-->
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->

                      <!--begin::Col-->
                      <div class="col-12">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          name="projectType"
                          value="type-2"
                          id="kt_create_project_form_project_type_2"
                          v-model="projectType"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            p-7
                            d-flex
                            align-items-center
                            mb-5
                          "
                          for="kt_create_project_form_project_type_2"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="media/icons/duotune/finance/fin006.svg"
                            />
                          </span>

                          <!--begin::Info-->
                          <span class="d-block fw-bold text-start">
                            <span class="text-dark fw-bolder d-block fs-4 mb-2"
                              >Project Type 2</span
                            >
                            <span class="text-gray-400 fw-bold fs-6"
                              >Project Type 2 description</span
                            >
                          </span>
                          <!--end::Info-->
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->
                      <div class="col-12">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          name="projectType"
                          value="type-3"
                          id="kt_create_project_form_project_type_3"
                          v-model="projectType"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            p-7
                            d-flex
                            align-items-center
                            mb-5
                          "
                          for="kt_create_project_form_project_type_3"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="media/icons/duotune/finance/fin006.svg"
                            />
                          </span>

                          <!--begin::Info-->
                          <span class="d-block fw-bold text-start">
                            <span class="text-dark fw-bolder d-block fs-4 mb-2"
                              >Project Type 3</span
                            >
                            <span class="text-gray-400 fw-bold fs-6"
                              >Project Type 3 description</span
                            >
                          </span>
                          <!--end::Info-->
                        </label>
                        <!--end::Option-->
                      </div>
                      <div class="col-12">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          name="projectType"
                          value="type-4"
                          id="kt_create_project_form_project_type_4"
                          v-model="projectType"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            p-7
                            d-flex
                            align-items-center
                            mb-5
                          "
                          for="kt_create_project_form_project_type_4"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="media/icons/duotune/finance/fin006.svg"
                            />
                          </span>

                          <!--begin::Info-->
                          <span class="d-block fw-bold text-start">
                            <span class="text-dark fw-bolder d-block fs-4 mb-2"
                              >Project Type 4</span
                            >
                            <span class="text-gray-400 fw-bold fs-6"
                              >Project Type 4 description</span
                            >
                          </span>
                          <!--end::Info-->
                        </label>
                        <!--end::Option-->
                      </div>
                    </div>
                    <!--end::Row-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 1-->

              <!--begin::Step 2-->
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-15">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">Budget</h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="link-primary fw-bolder">Help Page</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="mb-10 fv-row">
                    <!--begin::Label-->
                    <label class="form-label mb-3">Setup Budget</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      type="number"
                      class="form-control form-control-lg form-control-solid"
                      name="budget"
                      placeholder=""
                      value=""
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="budget"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 2-->

              <!--begin::Step 3-->
              <!--end::Step 3-->

              <!--begin::Step 4-->
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-15">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">Upload Files</h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="text-primary fw-bolder">Help Page</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <div class="fv-row mb-10 kt-dropzone">
                    <DropZone
                      :maxFiles="Number(10000000000)"
                      url="http://localhost:5000"
                      :uploadOnDrop="true"
                      :multipleUpload="true"
                      :parallelUpload="3"
                      @addedFile="onFileAdd"
                    />
                  </div>
                  <UploadFiles></UploadFiles>
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 4-->

              <!--begin::Step 5-->
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-8 pb-lg-10">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">Your Are Done!</h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please
                      <router-link to="/sign-in" class="link-primary fw-bolder"
                        >Sign In</router-link
                      >.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Body-->
                  <div class="mb-0">
                    <!--begin::Text-->
                    <div class="fs-6 text-gray-600 mb-5">
                      Writing headlines for blog posts is as much an art as it
                      is a science and probably warrants its own post, but for
                      all advise is with what works for your great & amazing
                      audience.
                    </div>
                    <!--end::Text-->

                    <!--begin::Alert-->
                    <div
                      class="
                        notice
                        d-flex
                        bg-light-warning
                        rounded
                        border-warning border border-dashed
                        p-6
                      "
                    >
                      <!--begin::Icon-->
                      <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                        <inline-svg
                          src="media/icons/duotune/general/gen044.svg"
                        />
                      </span>
                      <!--end::Icon-->
                      <!--begin::Wrapper-->
                      <div class="d-flex flex-stack flex-grow-1">
                        <!--begin::Content-->
                        <div class="fw-bold">
                          <h4 class="text-gray-800 fw-bolder">
                            We need your attention!
                          </h4>
                          <div class="fs-6 text-gray-600">
                            To start using great tools, please, please
                            <a href="#" class="fw-bolder"
                              >Create Team Platform</a
                            >
                          </div>
                        </div>
                        <!--end::Content-->
                      </div>
                      <!--end::Wrapper-->
                    </div>
                    <!--end::Alert-->
                  </div>
                  <!--end::Body-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 5-->

              <!--begin::Actions-->
              <div class="d-flex flex-stack pt-15">
                <!--begin::Wrapper-->
                <div class="me-2">
                  <button
                    type="button"
                    class="btn btn-lg btn-light-primary me-3"
                    data-kt-stepper-action="previous"
                    @click="previousStep()"
                  >
                    <span class="svg-icon svg-icon-3 me-1">
                      <inline-svg src="media/icons/duotune/arrows/arr063.svg" />
                    </span>
                    Back
                  </button>
                </div>
                <!--end::Wrapper-->

                <!--begin::Wrapper-->
                <div>
                  <button
                    type="submit"
                    class="btn btn-lg btn-primary"
                    v-if="currentStepIndex === totalSteps - 1"
                    @click="handleSubmitBtn"
                  >
                    <span class="indicator-label">
                      Submit
                      <span class="svg-icon svg-icon-3 ms-2 me-0">
                        <inline-svg src="icons/duotune/arrows/arr064.svg" />
                      </span>
                    </span>
                    <span class="indicator-progress">
                      Please wait...
                      <span
                        class="
                          spinner-border spinner-border-sm
                          align-middle
                          ms-2
                        "
                      ></span>
                    </span>
                  </button>

                  <button type="submit" class="btn btn-lg btn-primary" v-else>
                    Continue
                    <span class="svg-icon svg-icon-3 ms-1 me-0">
                      <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                    </span>
                  </button>
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Actions-->
            </form>
            <!--end::Form-->
          </div>
          <!--end::Stepper-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Create project-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import UploadFiles from "@/components/widgets/tables/UploadFiles.vue";
import { StepperComponent } from "@/assets/ts/components/_StepperComponent";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useForm } from "vee-validate";
import { Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import DropZone from "dropzone-vue";
import { Actions } from "@/store/enums/StoreEnums";
import store from "@/store";
interface Step1 {
  projectName: string;
  projectDescription: string;
  projectImage: File;
}

interface Step2 {
  projectType: string;
}

interface ProjectModel {
  projectid: string;
  title: string;
  type: string;
  status: string;
  logo: string;
  description: string;
  budget: string;
  files: ProjectImg[];
}

interface Step3 {
  budget: number;
}

interface KTCreateApp extends Step1, Step2, Step3 {}

interface ProjectImg {
  name: string;
  img: string;
}

export default defineComponent({
  name: "create-project-modal",
  components: {
    Field,
    ErrorMessage,
    UploadFiles,
    DropZone
  },
  data: () => {
    return {
      projectImg: "media/svg/files/folder-document.svg",
      projectType: "type-1",
      files: [] as Array<ProjectImg>,
      projectdetails: {} as ProjectModel,
      projectimage: ""
    };
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const createAccountRef = ref<HTMLElement | null>(null);
    const createProjectModalRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);

    const formData = ref<KTCreateApp>({
      projectType: "type-1",
      projectName: "",
      projectDescription: "",
      budget: 0,
      projectImage: new File([], "")
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        createAccountRef.value as HTMLElement
      );
    });

    const createAppSchema = [
      Yup.object({
        projectName: Yup.string()
          .required()
          .label("Project name"),
        projectDescription: Yup.string()
          .required()
          .label("Project description")
      }),
      Yup.object({}),
      Yup.object({
        budget: Yup.number()
          .required()
          .label("Project budget")
      })
    ];

    // extracts the individual step schema
    const currentSchema = computed(() => {
      return createAppSchema[currentStepIndex.value];
    });

    const totalSteps = computed(() => {
      if (!_stepperObj.value) {
        return;
      }

      return _stepperObj.value.totatStepsNumber;
    });

    const { resetForm, handleSubmit } = useForm<Step1 | Step2 | Step3>({
      validationSchema: currentSchema
    });

    const previousStep = () => {
      if (!_stepperObj.value) {
        return;
      }

      currentStepIndex.value--;

      _stepperObj.value.goPrev();
    };

    const handleStep = handleSubmit(values => {
      for (const item in values) {
        // eslint-disable-next-line no-prototype-builtins
        if (values.hasOwnProperty(item)) {
          if (values[item]) {
            formData.value[item] = values[item];
          }
        }
      }

      currentStepIndex.value++;

      if (!_stepperObj.value) {
        return;
      }

      _stepperObj.value.goNext();
    });

    const hiddenModal = () => {
      hideModal(createProjectModalRef.value);
    };

    resetForm({
      values: {
        ...formData.value
      }
    });

    return {
      createAccountRef,
      totalSteps,
      previousStep,
      handleStep,
      currentStepIndex,
      formData,
      createProjectModalRef,
      hiddenModal
    };
  },
  methods: {
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
          this.files.push({
            name: file.name,
            img: (e.target && e.target.result?.toString()) || ""
          });
          resolve(reader.result);
        };
        reader.onerror = error => reject(error);
      });
    },
    getlogoBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
          this.projectimage = e.target.result;
          console.log("Project Logo Image " + this.projectimage);
          resolve(reader.result);
        };
        reader.onerror = error => reject(error);
      });
    },
    removeImage() {
      console.log("remove image");
    },
    handleChangeImg(event) {
      console.log(event.target.files);
      this.projectImg = URL.createObjectURL(event.target.files[0]);
      this.getlogoBase64(event.target.files[0]);
    },
    onFileAdd(file) {
      this.getBase64(file.file);
    },
    handleSubmitBtn() {
      Swal.fire({
        text: "All is cool! Now you submit this form",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-primary"
        }
      }).then(() => {
        const newProject = {
          ...this.formData,
          projectType: this.projectType,
          projectImgList: this.files
        };
        console.log("new project == ");
        console.log(newProject);

        this.projectdetails.projectid = this.generateUUID();
        this.projectdetails.title = newProject.projectName;
        this.projectdetails.type = this.projectType;
        this.projectdetails.status = "Pending";
        this.projectdetails.logo = this.projectimage;
        this.projectdetails.description = newProject.projectDescription;
        this.projectdetails.budget = newProject.budget.toString();
        this.projectdetails.files = this.files;
        console.log(
          "new projectdetails == " + JSON.stringify(this.projectdetails)
        );
        store.dispatch(Actions.UPDATE_PROJECT, this.projectdetails);

        /*  projectid: string,
  tiitle: string,
  type:string,
  status: string,
  logo: string,
  description: string,
  budget: string,
  files: string   */

        this.hiddenModal();
        this.$router.push("/projects");
      });
    },
    generateUUID() {
      // Public Domain/MIT
      let d = new Date().getTime(); //Timestamp
      let d2 =
        (typeof performance !== "undefined" &&
          performance.now &&
          performance.now() * 1000) ||
        0; //Time in microseconds since page-load or 0 if unsupported
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        let r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
    }
  }
});
</script>
