/*jshint esversion: 8 */
export default {
    // baseUrl : "./mock_APIs/",
    baseUrl : "",
    mockFetch : (options) =>{
        const mock = (options) => {
            switch(options.url){
                case "checkToken":
                    break;
                case "signIn":
                    break;
                case "signOut":
                    break;
                case "signUp":
                    break;
            }
            return response;
        };
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mock(options));
            }, 500);
        });        
    }
};