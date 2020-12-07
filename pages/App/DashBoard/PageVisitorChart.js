
/*jshint esversion: 8 */
import { React, html } from "../../../web_modules/preact-htm/index.js";
import { LineChart } from "../../../web_modules/recharts/index.js";
import { ResponsiveContainer } from "../../../web_modules/recharts/index.js";
import { Line } from "../../../web_modules/recharts/index.js";
import { XAxis } from "../../../web_modules/recharts/index.js";
import { YAxis } from "../../../web_modules/recharts/index.js";
import { CartesianGrid } from "../../../web_modules/recharts/index.js";
import { Tooltip } from "../../../web_modules/recharts/index.js";
import { Legend } from "../../../web_modules/recharts/index.js";

const recharts_demodata1 = [{
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
}];

export const PageVisitorChart = props => {
    return html`
        <${React.Fragment}>
            <${ResponsiveContainer} key="bd8xf94g">
                <${LineChart} width=${600} height=${300} data=${recharts_demodata1} margin=${{ "top": 5, "right": 30, "left": 20, "bottom": 5 }}>
                    <${XAxis} dataKey="name">
                    </${XAxis}>
                    <${YAxis}>
                    </${YAxis}>
                    <${CartesianGrid} strokeDasharray="3 3">
                    </${CartesianGrid}>
                    <${Legend}>
                    </${Legend}>
                    <${Line} type="monotone" dataKey="pv" stoke="#ff00ff" activeDot=${{ "r": 6 }}>
                    </${Line}>
                    <${Line} type="monotone" dataKey="uv" stoke="#82ca9d" activeDot=${{ "r": 6 }}>
                    </${Line}>
                    <${Tooltip}>
                    </${Tooltip}>
                </${LineChart}>
            </${ResponsiveContainer}>
        </${React.Fragment}>
    `;
};


export default PageVisitorChart;