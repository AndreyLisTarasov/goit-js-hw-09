!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");n.disabled=!0,e.addEventListener("click",(function(){a(!1,!0),o=setInterval(c,1e3)})),n.addEventListener("click",(function(){a(!0,!1),clearInterval(o)}));var o=null;function a(t,o){n.disabled=t,e.disabled=o}function c(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.e7f3837f.js.map
