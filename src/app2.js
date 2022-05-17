import $ from "jquery";
import "./app2.css";
let $tabBar = $("#app2 .tabBar");
let $tabContent = $("#app2 .tabContent");
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  const $index = $li.index();
  $tabBar
    .children()
    .eq($index)
    .addClass("selector")
    .siblings()
    .removeClass("selector");
  $tabContent
    .children()
    .eq($index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$tabBar.children().eq(0).trigger("click");
