﻿// to validate code you can use https://codepen.io/gaearon/pen/MjrdWg?editors=1010

const root = ReactDOM.createRoot(document.getElementById('root'));

let gr_num = "IA-01";
let ord_num = "23";

let first = "Volodymyr";
let last = "Pidvyshennyi";
let hello = "Glory to Ukraine";

root.render(<h1>{ hello }, dear { first } { last } from { gr_num }. You are { ord_num }</h1>);