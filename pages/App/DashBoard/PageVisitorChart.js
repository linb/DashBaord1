
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