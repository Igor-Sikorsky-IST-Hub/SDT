// to validate code you can use https://codepen.io/gaearon/pen/MjrdWg?editors=1010

const root = ReactDOM.createRoot(document.getElementById('root'));

let gr_num = "IA-0X";
let ord_num = "-2";

let first = "Test";
let last = "Testenko";
let hello = "Hello Everybody";

root.render(<h1>{ hello }, dear { first } { last } from { gr_num }. You are { ord_num }</h1>);