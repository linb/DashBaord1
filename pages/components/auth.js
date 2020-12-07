/*jshint esversion: 8 */
import {utils} from "../../web_modules/react-hook-module/index.js";
import {axios} from "../../web_modules/react-hook-module/plugin_request.js";

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
    if(user & user.token){
        axios.request({
            url: './mock_APIs/checkToken.json',
            method: 'get',
            params:{
                token: user.token
            }
        }).then(rsp=>{
            if(rsp.ok){
                auth.setUser(user);
                auth.setToken(user && user.token);
            }else{
                auth.setUser(null);
                auth.setToken(null);                
            }
        }).catch( e =>{
            auth.setUser(null);
            auth.setToken(null);            
        });
    }
    return function(){
        // to clear things
    };
};
export default {signIn, signOut, authInit};