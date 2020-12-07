/*jshint esversion: 8 */
export default {
    // baseUrl : "./mock_APIs/",
    baseUrl : "",
    mockFetch : (options) =>{
        let data;
        const mock = (options) => {
            switch(options.url){
                case "checkToken":
                    data = { token : "fake_token" };
                    break;
                case "signUp":
                    data = {
                                name:"User",
                                token:"fake_token"
                            };
                    break;
                case "signIn":
                    data = {
                                name:"User",
                                token:"fake_token"
                            };
                    break;
                case "signOut":
                    data = {  };
                    break;
            }
            return {
                ok: 1,
                data: data
            };
        };
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mock(options));
            }, 500);
        });        
    }
};