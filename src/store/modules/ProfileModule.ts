import ApiService from "@/core/services/ApiService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface UserProfile {
  email: string,
  image: string,
  nickname: string,
  name: string,
  surname: string,
  job: string,
  address1: string,
  address2: string,
  phonenumber: string,
  postalcode: string,
  city: string,
  state: string,
  country: string,
  website: string,
  emailsettings: string,
  companyname: string,
  language: string,
  communication: {
    email: boolean,
    sms: boolean,
    phone: boolean
  },
  isorganisation: boolean
}

export interface CompanyProfile {
  email: string,
  image: string,
  companyname: string,
  aboutus: string,
  branch: string,
  verified: boolean,
  ceo: string,

  established: string,
  turnover: string,
  premisessize: string,
  employescount: string,
  technicalteam: [{
    name: "Control",
    count: "3"
  },
    {
      name: "Design",
      count: "4"
    },
    {
      name: "Technician",
      count: "3"
    }],
  strength: string,
  customers: [{
    Name: "ABB",
    Project: "Pick and Place",
    Details: "Robot Pick and Place"
  }],
  expertiseapplication: [{
    name: "Control",
    count: "3"
  },
    {
      name: "Design",
      count: "4"
    },
    {
      name: "Technician",
      count: "3"
    }]
  ,
  services: [{
    name: "Control",
    count: "3"
  },
    {
      name: "Design",
      count: "4"
    },
    {
      name: "Technician",
      count: "3"
    }],

  map: string,

}



export interface UserProfileInfo {
  errors: Array<string>;
  userProfile: UserProfile;
  companyProfile: CompanyProfile;
}

@Module
export default class ProfileModule extends VuexModule implements UserProfileInfo {
  errors = [];
  userProfile = {} as UserProfile;
  companyProfile = {} as CompanyProfile;
  /**
   * Get current user profiel object
   * @returns User
   */
  get userprofile(): UserProfile {
    return this.userProfile;
  }

  get mycompanyprofile(): CompanyProfile {
    return this.companyProfile;
  }


  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_PROFILE](userProfile) {
    this.userProfile = userProfile;
    this.errors = [];
  }

  @Mutation
  [Mutations.SET_COMPANYPROFILE](companyprofile) {
    this.companyProfile = companyprofile;
    this.errors = [];
  }



  @Action
  [Actions.GET_PROFILE]() {
    return new Promise<void>((resolve, reject) => {
      ApiService.get("api/user/getuserdetails")
        .then(({ data }) => {
          console.log("Profile Data ---> " + JSON.stringify(data.data));
          this.context.commit(Mutations.SET_PROFILE, data.data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.UPDATE_PROFILE](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("api/user/updateprofile", payload)
        .then(({ data }) => {
          //this.context.commit(Mutations.SET_PROFILE, data);
          // this.actions.
          console.log("Profile Data ---> " + JSON.stringify(data));
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.message);
          reject();
        });
    });
  }

  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("forgot_password", payload)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          resolve();
        })
        .catch(({ response }) => {
          console.log(response.data.errors);
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  /* @Action
  [Actions.VERIFY_AUTH]() {
    // if (JwtService.getToken()) {
    ApiService.setHeader();
    return new Promise<void>((resolve, reject) => {
      ApiService.postauth("/api/auth/verifyauth")
        .then(({ data }) => {
          console.log(" Verification OK " + data);
          resolve();
        })
        .catch(({ data }) => {
          console.log(data.errors);
          this.context.commit(Mutations.SET_ERROR, data);
          this.context.commit(Mutations.PURGE_AUTH);
          reject();
        });
    });
  } */

  @Action
  [Actions.UPDATE_USER](payload) {
    ApiService.setHeader();
    return new Promise<void>((resolve, reject) => {
      ApiService.post("update_user", payload)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_USER, data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.GET_COMPNAYPROFILE](payload) {
    return new Promise<void>((resolve, reject) => {
      console.log("GET_COMPNAYPROFILE Details -- ");
      ApiService.get("/api/user/getcompanyprofile", payload)
        .then(({ data }) => {
          console.log("Single User Profile Data ---> " + JSON.stringify(data.data));
          this.context.commit(Mutations.SET_COMPANYPROFILE, data.data);
          resolve();
        })
        .catch(({ response }) => {
          console.log("Response Data ---> " + JSON.stringify(response));
          const team = [{
            name: "Control",
            count: "3"
          },
          {
            name: "Design",
            count: "4"
          },
          {
            name: "Techniciannn",
            count: "3"
          }]
          const customers =[{
            name: "Customer A",
            projectname: ["Pik and Place","Machine Tending"]   
          }]
          const expertiseapplication =  [{
            name: "Application Example",
            projectname: ["Industail Autoamtion","Building Automation", "Software Services"]   
          }]
          const tdata = { technicalteam: team , customers: customers , expertiseapplication: expertiseapplication};
         
          this.context.commit(Mutations.SET_COMPANYPROFILE, tdata);
          this.context.commit(Mutations.SET_UERROR, response.message);
          reject();
        });
    });
  }

  @Action
  [Actions.UPDATE_COMPANYPROFILE](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("/api/user/updatecompanyprofile", payload)
        .then(({ data }) => {
          //this.context.commit(Mutations.SET_PROFILE, data);
          // this.actions.
          console.log("Profile Data ---> " + JSON.stringify(data));
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_CERROR, response.data.message);
          reject();
        });
    });
  }

  @Action
  [Actions.ADD_INTIAL_ITEM_COMPANY](payload) {
    return new Promise<void>((resolve, reject) => {
      this.context.commit(Mutations.SET_COMPANYPROFILE, payload);
      console.log("INTIAL ITEMS ---> " + JSON.stringify(payload));
    }).then(() => {
      console.log("INTIAL ITEMS ---> " + JSON.stringify(payload));
    })
      .catch(({ response }) => {
        console.log("INTIAL ITEMS ERROR---> " + JSON.stringify(payload));

      });
  }
}
