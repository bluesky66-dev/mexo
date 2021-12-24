import ApiService from "@/core/services/ApiService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface ProjectModel{
  projectid: string,
  title: string,
  type:string,
  status: string,
  logo: string,
  description: string,
  budget: string,
  files: string  
}



export interface ProjectModels{
  ProjectModel : Array<ProjectModel>,
  sProjectModel : ProjectModel,
  myProjects : Array<ProjectModel>,
}

@Module
export default class ProjectModule extends VuexModule implements ProjectModels {
  errors = [];
  ProjectModel =  {} as Array<ProjectModel>;
  Projectid = "";
  sProjectModel = {} as  ProjectModel
  myProjects = {} as Array<ProjectModel>;
  projectlistloaded =  false;
  /**
   * Get current user profiel object
   * @returns User
   */
  get isprojectsloaded(): boolean {

    return this.projectlistloaded;
  }

  get projectlist(): ProjectModel[] {
    console.log("returning project list ");
    return this.ProjectModel;
  }

  get Singleproject(): ProjectModel{

    return this.sProjectModel;
  }


  get MyProjectFiles(): ProjectModel[]{

    return this.myProjects;
  }


  get ProjectId(): string
  {
    return this.Projectid;
  }


  @Mutation
  [Mutations.SET_PROJECT_LOADED](loaded) {
    this.projectlistloaded = loaded;
  } 

  @Mutation
  [Mutations.SET_PROJECTID](Id) {
    this.Projectid = Id;
  }


  @Mutation
  [Mutations.SET_PROJERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_MYPROJECTS](userProjects) {
    this.myProjects = userProjects;
    console.log("Mutating My Project list ");
    this.errors = [];
    this.projectlistloaded = true;
  }

  @Mutation
  [Mutations.SET_PROJECT](userProjects) {
    this.sProjectModel = userProjects;
    console.log("Mutating Single Project list ");
    this.errors = [];
  }

  @Mutation
  [Mutations.SET_ALLPROJECTS](userProjects) {
    this.ProjectModel = userProjects;
    console.log("Mutating All Project list ");
    this.errors = [];
    this.projectlistloaded = true;   
  }

  @Action
  [Actions.GET_ALLPROJECTS]() {
    return new Promise<void>((resolve, reject) => {    
      this.context.commit(Mutations.SET_PROJECT_LOADED,false);
      ApiService.get("api/project/getallprojects")
        .then(({ data }) => {
          console.log("All Project Data ---> " + JSON.stringify(data.data));
          this.context.commit(Mutations.SET_ALLPROJECTS, data.data);
                  
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_PROJERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.UPDATE_PROJECT](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("api/project/updateproject",payload)
        .then(({ data }) => {
          console.log("Project Details updated  ---> " + JSON.stringify(data.data));
          //this.context.commit(Mutations.SET_PROJECT, data.data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_PROJERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.GET_PROJECT](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("api/project/getprojectfiles",payload)
        .then(({ data }) => {
          console.log("Project Files Data ---> " + JSON.stringify(data.data));
          this.context.commit(Mutations.SET_PROJECT, data.data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_PROJERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.GET_MYPROJECTS]() {
    return new Promise<void>((resolve, reject) => {
      ApiService.get("api/project/getprojects")
        .then(({ data }) => {
          console.log("My PRoject Data ---> " + JSON.stringify(data.data));
          this.context.commit(Mutations.SET_MYPROJECTS, data.data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_PROJERROR, response.data.errors);
          reject();
        });
    });
  }

  
}
