// to validate code you can use https://codepen.io/gaearon/pen/MjrdWg?editors=1010

const root = ReactDOM.createRoot(document.getElementById('root'));

let gr_num = "IA-01";
let ord_num = "3";

let first = "Timur";
let last = "Aiupov";
let hello = "Hello World";

root.render(<h1>{ hello }, dear { first } { last } from { gr_num }. You are { ord_num }</h1>);