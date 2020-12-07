/*jshint esversion: 8 */
import {utils} from "../../web_modules/react-hook-module/index.js";
import {axios} from "../../web_modules/react-hook-module/plugin_request.js";

// default status - need checking: user/token is false
// nologin status: user/token is null
// login status: user/token is not null/undefiend/empty


const signIn = function(userName, password){
    const auth = this;
    axios.request({
        url: './mock_APIs/signIn.json',
        method: 'get',
        params:{
            user: userName,
            password: password
        }
    }).then(rsp=>{
        if(rsp.ok){
            auth.setUser(rsp.user);
            auth.setToken(rsp.user.token);

            utils.setCookie("user", rsp.user);
            utils.setCookie("token", rsp.user.token);
        }else{
            auth.setUser(null);
            auth.setToken(null);
            
            utils.removeCookie("user");
            utils.removeCookie("token");            
        }
    }).catch( e =>{
        console.log(e);
        
        auth.setUser(null);
        auth.setToken(null);

        utils.removeCookie("user");
        utils.removeCookie("token");            
    });
};
const signOut = function(){
    axios.request({
        url: './mock_APIs/signOut.json',
        method: 'get'
    }).then(rsp=>{
        auth.setUser(null);
        auth.setToken(null);

        utils.removeCookie("user");
        utils.removeCookie("token");
    }).catch( e =>{
        console.log(e);
    });
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
                if(rsp.token){
                    user.token = rsp.token;
                    utils.setCookie("user", user);
                    utils.setCookie("token", user.token);
                }
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
    else{
        auth.setUser(null);
        auth.setToken(null);        
    }
    return function(){
        // to clear things
    };
};
export default {signIn, signOut, authInit};