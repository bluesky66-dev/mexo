import ApiService from "@/core/services/ApiService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface CompanyProfile {
  email: string,
  image: string,
  companyname: string,
  aboutus: string,
  branch: string,
  verified:boolean,
  ceo: string,  
  established: string,
  turnover:string,
  premisessize: string,
  employescount:string,
  technicalteam:[{
    name: "Control",
    count:"3"  
  },
  {
    name: "Design",
    count:"4"   
  },
  {
    name: "Technician",
    count:"3"   
  }],
  strength: string,
  customers:[{
    name: "Customer A",
    projectname: ["Pik and Place","Machine Tending"]   
  }],
  expertiseapplication : [{
    name: "Application Example",
    projectname: ["Industail Autoamtion","Building Automation", "Software Services"]   
  }]
  ,
  services: [{
    email: boolean,
    sms: boolean,
    phone: boolean
  },
  {
    email: boolean,
    sms: boolean,
    phone: boolean}], 

  map: string,

} 


export interface Technicalteam{  
  title:string;
  count:string;
}



export interface CompanyProfileInfo {
  errors: Array<string>;
  CompanyProfile: Array<CompanyProfile>;
  getthisprofile : string;
  singleCompanyprofile:CompanyProfile;
  technicalteam: Array<Technicalteam>;
 }



@Module
export default class Getprofile extends VuexModule implements CompanyProfileInfo {
  errors = [];
  CompanyProfile  = {} as Array<CompanyProfile>;
  getthisprofile  = "";
  singleCompanyprofile = {} as CompanyProfile;
  technicalteam = {} as Array<Technicalteam>;
  allcompanyporfilesloaded = false
  /**
   * Get current user profiel object
   * @returns User
   */
  get Companyprofile(): CompanyProfile[] {
    return this.CompanyProfile;
  } 

  get getSingleCompanyprofile(): CompanyProfile {
    return this.singleCompanyprofile;
  } 
  
  get companyprofilesloaded() : boolean
  {
    return this.allcompanyporfilesloaded;
  }

  get gettechnicalteam(): Technicalteam[] {
    return this.technicalteam;
  }


  @Mutation
  [Mutations.SET_COMPANY_LOADED](loaded) {
    this.allcompanyporfilesloaded = loaded;
  }

  @Mutation
  [Mutations.SET_TECHNICALTEAM](team) {
    this.technicalteam = team;
  }

  @Mutation
  [Mutations.SET_COMPNAYPROFILEID](emailid) {
    this.getthisprofile = emailid;
  }


  @Mutation
  [Mutations.SET_CERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_COMPANYSINGLEPROFILE](sProfile) {  
    this.singleCompanyprofile = sProfile;
    this.errors = [];    
  }


  @Mutation
  [Mutations.SET_COMPANYPROFILES](CompanyProfile) {  
    this.CompanyProfile = CompanyProfile;
    this.errors = [];  
    this.allcompanyporfilesloaded = true  
  }

  @Action
  [Actions.GET_SINGLECOMPANYPROFILE](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("api/getprofiles/getsinglecompanyprofile", payload)
        .then(({ data }) => {
           console.log("Single Compnay Profile Data ++ ---> " + JSON.stringify(data.data));     
          this.context.commit(Mutations.SET_COMPANYSINGLEPROFILE, data.data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_CERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.GET_ALLCOMPANYPROFILES]() {
    return new Promise<void>((resolve, reject) => {
      this.context.commit(Mutations.SET_COMPANY_LOADED, false);
      ApiService.get("api/getprofiles/getallcompanyprofiles")
        .then(({ data }) => {
           console.log("Profile Data ---> " + JSON.stringify(data.data));     
          this.context.commit(Mutations.SET_COMPANYPROFILES, data.data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_CERROR, response.data.errors);
          reject();
        });
    });
  }

  

 



 
}

