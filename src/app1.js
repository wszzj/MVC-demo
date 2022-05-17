import $ from "jquery";
import "./app1.css";
let $num = $(".num");
let $add1 = $(".add1");
let $sub1 = $(".sub1");
let $mul2 = $(".mul2");
let $div2 = $(".div2");
let n = localStorage.getItem("n");
$num.text(n || 100);

$add1.on("click", () => {
  let n = parseInt($num.text());
  n += 1;
  localStorage.setItem("n", n);
  $num.text(n);
});
$sub1.on("click", () => {
  let n = parseInt($num.text());
  n -= 1;
  localStorage.setItem("n", n);
  $num.text(n);
});
$mul2.on("click", () => {
  let n = parseInt($num.text());
  n *= 2;
  localStorage.setItem("n", n);
  $num.text(n);
});
$div2.on("click", () => {
  let n = parseInt($num.text());
  n /= 2;
  localStorage.setItem("n", n);
  $num.text(n);
});
