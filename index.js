// to validate code you can use https://codepen.io/gaearon/pen/MjrdWg?editors=1010

const root = ReactDOM.createRoot(document.getElementById('root'));

let gr_num = "IA-01";
let ord_num = "1";

let first = "Anna";
let last = "Akimova";
let hello = "Hello World";

root.render(<h1>{ hello }, dear { first } { last } from { gr_num }. You are { ord_num }</h1>);