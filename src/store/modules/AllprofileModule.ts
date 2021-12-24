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
  address1:string,
  address2: string,
  phonenumber:string,
  postalcode: string,
  city: string,
  state:string,
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
  isorganisation: string
}





export interface UserProfiles {
  errors: Array<string>;
  freelancerProfile: Array<UserProfile>;
  getthisprofile : string;
  singleuserprofile:UserProfile;
 }



@Module
export default class Getprofile extends VuexModule implements UserProfiles {
  errors = [];
  freelancerProfile  = {} as Array<UserProfile>;
  getthisprofile  = "";
  singleuserprofile = {} as UserProfile;
  /**
   * Get current user profiel object
   * @returns User
   */
  get freelancerprofile(): UserProfile[] {
    return this.freelancerProfile;
  } 
  
  get gettingSingleuserprofile(): UserProfile {
    return this.singleuserprofile;
  } 

  get getproifileidtoview(): string {
    return this.getthisprofile;
  }


  @Mutation
  [Mutations.SET_PROFILEID](emailid) {
    this.getthisprofile = emailid;
  }


  @Mutation
  [Mutations.SET_UERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_SINGLEPROFILE](Profile) {  
    this.singleuserprofile = Profile;
    this.errors = [];    
  }


 


  @Mutation
  [Mutations.SET_PROFILES](freelancerProfile) {  
    this.freelancerProfile = freelancerProfile;
    this.errors = [];    
  }

  @Action
  [Actions.GET_SINGLEUSERPROFILE](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("api/getprofiles/getsingleprofile", payload)
        .then(({ data }) => {
           console.log("Single User Profile Data ++ ---> " + JSON.stringify(data.data));     
          this.context.commit(Mutations.SET_SINGLEPROFILE, data.data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_UERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.GET_ALLFREELANCERS]() {
    return new Promise<void>((resolve, reject) => {
      ApiService.get("api/getprofiles/getallfreelancers")
        .then(({ data }) => {
           console.log("Profile Data ---> " + JSON.stringify(data.data));     
          this.context.commit(Mutations.SET_PROFILES, data.data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_UERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.GET_ALLCOMPANYPROFILES]() {
    return new Promise<void>((resolve, reject) => {
      ApiService.get("api/user/getuserdetails")
        .then(({ data }) => {
           console.log("Profile Data ---> " + JSON.stringify(data.data));     
          this.context.commit(Mutations.SET_PROFILE, data.data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_UERROR, response.data.errors);
          reject();
        });
    });
  }

  



 
}
