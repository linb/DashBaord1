/*jshint esversion: 8 */
import {utils} from "../../web_modules/react-hook-module/index.js";

const signIn = function(){
  const auth = this;
  const user = {email:"fake@email.com"};
  setTimeout(() => {
    auth.setUser(user);
    utils.setCookie("user", user);
  }, 500);
};
const signOut = function(){
  this.setUser(null);
  utils.removeCookie("user");
};
const authInit = function(){
  const auth = this;
  const user = utils.getCookie("user");
  auth.setUser(user || null);
  return function(){
    // to clear things
  };
};
export default {signIn, signOut, authInit};