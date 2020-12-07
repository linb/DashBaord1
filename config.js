/*jshint esversion: 8 */
export default {
    baseUrl : "",
    mockFetch : (options) =>{
        let data;
        const mock = (options) => {
            switch(options.url){
                case "checkToken":
                    data = { token : "fake_token" };
                    break;
                case "signUp":
                    data = { user:{ame:"User",token:"fake_token"}};
                    break;
                case "signIn":
                    data = { user:{ame:"User",token:"fake_token"}};
                    break;
                case "signOut":
                    data = {  };
                    break;
                case "pageVisitorData":
                    data = {
                        lines : [{
                            name: 'Page A', uv: 4000, pv: 2400, amt: 2400
                        }, {
                            name: 'Page B', uv: 3000, pv: 1398, amt: 2210
                        }, {
                            name: 'Page C', uv: 2000, pv: 9800, amt: 2290
                        }, {
                            name: 'Page D', uv: 2780, pv: 3908, amt: 2000
                        }, {
                            name: 'Page E', uv: 1890, pv: 4800, amt: 2181
                        }, {
                            name: 'Page F', uv: 2390, pv: 3800, amt: 2500
                        }, {
                            name: 'Page G', uv: 3490, pv: 4300, amt: 2100
                        }]
                    }
            }
            return Object.assign({ok : 1}, data);
        };

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mock(options));
            }, 300);
        });        
    }
};