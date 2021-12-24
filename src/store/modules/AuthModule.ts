import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  accessToken: string;
}

export interface Verifications {
  verificationSend : boolean;
  email : string;
}

export interface UserAuthInfo {
  errors: Array<string>;
  user: User;
  isAuthenticated: boolean;
  verifications : Verifications;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  errors = [];
  user = {} as User;
  isAuthenticated = false;
  verifications = {email: "", verificationSend:false} as Verifications;
  
  /**
   * This is to Show Verification Email Send and verify 
   * Get current user object
   * @returns Verification state 
   */
    get verfifystate(): Verifications {
      return this.verifications;
    }
  
  /**
   * This is to Show Verification Email Send and verify 
   * Get register email send state
   * @returns Verification state 
   */
   get Isverifysend(): boolean {
    return this.verifications.verificationSend;
  }

   /**
   * This is to Show Verification Email Send and verify 
   * Get registered user email
   * @returns Verification state 
   */
    get Verifyemail(): string {
      return this.verifications.email;
    }

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): User {
    return this.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get user token
   * @returns string
   */
  get gettoken(): string {
    return this.user.accessToken;
  }

  /**
   * Get authentification errors
   * @returns array
   */
  get getErrors(): Array<string> {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_VERIFY](verify) {
    this.verifications = verify;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_AUTH](user) {
    this.isAuthenticated = true;
    this.user = user;
    this.errors = [];
    JwtService.saveToken(user.data.accessToken);
  }

  @Mutation
  [Mutations.SET_USER](user) {
    this.user = user;
  }

  @Mutation
  [Mutations.SET_PASSWORD](password) {
    this.user.password = password;
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.user = {} as User;
    this.errors = [];
    JwtService.destroyToken();
  }

  @Action
  [Actions.VERIFY](payload) {
    this.context.commit(Mutations.SET_VERIFY, payload);
  }


  @Action
  [Actions.LOGIN](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("/api/auth/login", credentials)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          resolve();
        })
        .catch(({ response }) => {
          console.log(response);
          try
          {
          this.context.commit(Mutations.SET_ERROR, response.data.message);
          }
          catch
          {
            this.context.commit(Mutations.SET_ERROR, "Login error");
          }

          try
          {
          this.context.commit(Mutations.SET_ERROR, response.error);
          }
          catch
          {
            this.context.commit(Mutations.SET_ERROR, "Login error");
          }
          reject();
        });
    });
  }

  @Action
  [Actions.LOGOUT]() {
    this.context.commit(Mutations.PURGE_AUTH);
  }

  @Action
  [Actions.REGISTER](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("api/auth/signup", credentials)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          //console.log("SET AUTH DATA ---> " + JSON.stringify(credentials.email));      
          const verifydetails = JSON.parse(`{"email": ${JSON.stringify(credentials.email)}
         ,"verificationSend": "true"}`);       
         // console.log("Verification send ---> " + JSON.stringify(verifydetails));
          this.context.commit(Mutations.SET_VERIFY, verifydetails);
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
      ApiService.post("api/auth/forgot-password", payload)
        .then(({ data }) => {
          //this.context.commit(Mutations.SET_AUTH, data);
          console.log("credentials Data " + data);
          resolve();
        })
        .catch(({ response }) => {
          console.log(response.data.errors);
          this.context.commit(Mutations.SET_ERROR, response.data.message);
          reject();
        });
    });
  }

  @Action
  [Actions.RESET_PASSWORD](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("api/auth/reset-password", payload)
        .then(({ data }) => {
          //this.context.commit(Mutations.SET_AUTH, data);
          console.log("credentials Data " + data);
          resolve();
        })
        .catch(({ response }) => {
          console.log(response.data.errors);
          this.context.commit(Mutations.SET_ERROR, response.data.message);
          reject();
        });
    });
  }

  @Action
  [Actions.VERIFY_AUTH]() {
    // if (JwtService.getToken()) {
    ApiService.setHeader();
    return new Promise<void>((resolve, reject) => {
      ApiService.postauth("/api/auth/verifyauth")
        .then(({ data }) => {
          console.log(" Verification OK " + JSON.stringify(data));
          resolve();
        })
        .catch(({ message }) => {          
          this.context.commit(Mutations.SET_ERROR, message);
          this.context.commit(Mutations.PURGE_AUTH);
          console.log(message.errors);
          console.log(" Verification NOT OK " + message);
          reject();
        });
    });
  }

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


 
}
