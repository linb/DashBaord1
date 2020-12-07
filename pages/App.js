
/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { useModule } from "../web_modules/react-hook-module/index.js";
import { useAuth } from "../web_modules/react-hook-module/plugin_auth.js";
import { If } from "../web_modules/react-hook-module/index.js";

const Module = props => {
    const [defaultState, setDefaultState] = React.useState({
    });
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
    });

    return html`
        <${React.Fragment}>
            <${If} condition=${ auth.user===false } key="105wvmxp">
                Checking status ...
            </${If}>
            <${If} condition=${ auth.user===null } key="k0r0o5yd">
            </${If}>
            <${If} condition=${ auth.user } key="a9s3df61">
            </${If}>
        </${React.Fragment}>
    `;
};

export default Module;