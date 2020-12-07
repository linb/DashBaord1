
/*jshint esversion: 8 */
import { React, html } from "../../../web_modules/preact-htm/index.js";
import { useModule } from "../../../web_modules/react-hook-module/index.js";
import { Box } from "../../../web_modules/material-ui/index.js";
import { Typography } from "../../../web_modules/material-ui/index.js";
import { Link } from "../../../web_modules/material-ui/index.js";
import { Avatar } from "../../../web_modules/material-ui/index.js";
import { Table } from "../../../web_modules/material-ui/index.js";
import { TableBody } from "../../../web_modules/material-ui/index.js";
import { TableCell } from "../../../web_modules/material-ui/index.js";
import { TableHead } from "../../../web_modules/material-ui/index.js";
import { TableRow } from "../../../web_modules/material-ui/index.js";
import PluginMUI from "../../../web_modules/react-hook-module/plugin_mui.js";

export const Order = props => {
    return html`
        <${TableRow} key=${props.id}>
          <${TableCell}>${props.date}</${TableCell}>
          <${TableCell}>${props.name}</${TableCell}>
          <${TableCell}>${props.shipTo}</${TableCell}>
          <${TableCell}>${props.paymentMethod}</${TableCell}>
          <${TableCell} align="right">${props.amount}</${TableCell}>
        </${TableRow}>    
    `;
};

export const Orders = props => {
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
        "state": {
            "rows": [{
                "id": 0,
                "date": "16 Mar, 2019",
                "name": "Elvis Presley",
                "shipTo": "Tupelo, MS",
                "paymentMethod": "VISA ⠀•••• 3719",
                "amount": 312.44
            }, {
                "id": 1,
                "date": "16 Mar, 2019",
                "name": "Paul McCartney",
                "shipTo": "London, UK",
                "paymentMethod": "VISA ⠀•••• 2574",
                "amount": 866.99
            }, {
                "id": 2,
                "date": "16 Mar, 2019",
                "name": "Tom Scholz",
                "shipTo": "Boston, MA",
                "paymentMethod": "MC ⠀•••• 1253",
                "amount": 100.81
            }, {
                "id": 3,
                "date": "16 Mar, 2019",
                "name": "Michael Jackson",
                "shipTo": "Gary, IN",
                "paymentMethod": "AMEX ⠀•••• 2000",
                "amount": 654.39
            }, {
                "id": 4,
                "date": "15 Mar, 2019",
                "name": "Bruce Springsteen",
                "shipTo": "Long Branch, NJ",
                "paymentMethod": "VISA ⠀•••• 5919",
                "amount": 212.79
            }]
        }
    });

    const XOrder = module.enhanceCom(Order);

    return html`
    <${React.Fragment}>  
        <${Typography} component="h2" variant="h6" color="primary" gutterBottom>
            Recent Orders
        </${Typography}>
        <${Table} size="small">
            <${TableHead}>
              <${TableRow}>
                <${TableCell}>Date</${TableCell}>
                <${TableCell}>Name</${TableCell}>
                <${TableCell}>Ship To</${TableCell}>
                <${TableCell}>Payment Method</${TableCell}>
                <${TableCell} align="right">Sale Amount</${TableCell}>
              </${TableRow}>
            </${TableHead}>
            <${TableBody}>
                <${XOrder} x_id="order" x_iterator=${module.state.rows} />
            </${TableBody}>
        </${Table}>
        <${Box} mt=${4}>
            <${Link} color="primary" href="#" onClick=${e => e.preventDefault()}>
              See more orders
            </${Link}>
        </${Box}>
    </${React.Fragment}>    
  `;
};

export default Orders;