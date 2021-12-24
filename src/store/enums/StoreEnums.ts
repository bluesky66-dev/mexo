enum Actions {
  // action types
  ADD_BODY_CLASSNAME = "addBodyClassName",
  REMOVE_BODY_CLASSNAME = "removeBodyClassName",
  ADD_BODY_ATTRIBUTE = "addBodyAttribute",
  REMOVE_BODY_ATTRIBUTE = "removeBodyAttribute",
  ADD_CLASSNAME = "addClassName",
  VERIFY_AUTH = "verifyAuth",
  LOGIN = "login",
  LOGOUT = "logout",
  REGISTER = "register",
  UPDATE_USER = "updateUser",
  FORGOT_PASSWORD = "forgotPassword",
  RESET_PASSWORD = "resetPassword",
  SET_BREADCRUMB_ACTION = "setBreadcrumbAction",
  VERIFY = "Verify",
  GET_PROFILE = "getProfile",
  UPDATE_PROFILE = "updateProfile", 
  GET_ALLFREELANCERS = "getfreelancerprofiles",
  GET_ALLCOMPANYPROFILES = "getallcompanyprofiles",
  GET_SINGLEUSERPROFILE = "getsingleuserprofile",
  GET_SINGLECOMPANYPROFILE = "getsinglecompnayprofile",
  UPDATE_COMPANYPROFILE = "updatecompanyprofile",
  GET_COMPNAYPROFILE = "getcompnayprofile",
  ADD_INTIAL_ITEM_COMPANY = "addinitialitemcompany",
  GET_ALLPROJECTS = "getallprojects",
  GET_PROJECT = "getproject",
  GET_MYPROJECTS = "getmyprojects",
  UPDATE_PROJECT ="updateproject"
}

enum Mutations {
  // mutation types
  SET_CLASSNAME_BY_POSITION = "appendBreadcrumb",
  PURGE_AUTH = "logOut",
  SET_AUTH = "setAuth",
  SET_USER = "setUser",
  SET_PASSWORD = "setPassword",
  RESET_PASSWORD = "resetPassword",
  SET_ERROR = "setError",
  SET_BREADCRUMB_MUTATION = "setBreadcrumbMutation",
  SET_LAYOUT_CONFIG = "setLayoutConfig",
  RESET_LAYOUT_CONFIG = "resetLayoutConfig",
  OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig",
  OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig",
  //User Profile
  SET_PROFILE = "setProfile" ,
  SET_VERIFY = "setVerify" , 
  //Profiles
  SET_UERROR = "userprofileerror",
  SET_PROFILES = "setprofiles",
  SET_SINGLEPROFILE = "setsingleprofiles",
  SET_PROFILEID ="setprofileid",
  SET_COMPANYPROFILE = "setprofile",
  

  //CopanyProfiles
  SET_CERROR = "compnayprofileerror",
  SET_COMPANYPROFILES = "setcompnayprofiles",
  SET_COMPANYSINGLEPROFILE = "setsinglecompanyprofiles",
  SET_COMPNAYPROFILEID ="setprofileid",
  SET_TECHNICALTEAM = "settechnicalteam",
  ADD_INTIAL_ITEM_COMPANY = "addinitialitemcompany",
  SET_COMPANY_LOADED ="setcompaniesloaded",

  //Projects
  SET_PROJERROR = "setprojecterror",
  SET_ALLPROJECTS = "set_allprojects",
  SET_PROJECTID = "setprojectid",
  SET_PROJECT= "setproject",
  SET_MYPROJECTS= "setprojects",
  SET_PROJECT_LOADED ="setprojectsloaded"
}

export { Actions, Mutations };
