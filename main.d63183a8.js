parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
window.addEventListener("load",function(){document.querySelector(".load_background").classList.add("hide")});var e=document.querySelector(".greeting"),t=e.textContent,n=t.split("");e.textContent="";for(var o=0;o<n.length;o++)e.innerHTML+="<span>"+n[o]+"</span>";var l=0,s=setInterval(a,80);function a(){if(e.querySelectorAll("span")[l].classList.add("fade"),++l===n.length)return i(),void r()}function i(){clearInterval(s),s=null}function r(){document.querySelector(".down_bar").classList.add("show")}var c=!1,d=/Firefox/i.test(navigator.userAgent),u=/MSIE/i.test(navigator.userAgent)||/Trident.*rv\:11\./i.test(navigator.userAgent),v=30,f=800,g=0,h=$(".sections").length,L=0*h,m=h-1,b=document.querySelector(".next_btn"),w=document.querySelector(".prev_btn"),q=document.querySelector(".github");function S(){location.href="https://github.com/adele007fall/adele007fall.github.io"}var p=function(){c=!0,g!==m&&(g++,x(),g==m&&b.classList.add("un_btn"),g!==L&&w.classList.remove("un_btn")),E(f)},y=function(){c=!0,g==m&&b.classList.remove("un_btn"),0!==g&&(--g==L&&w.classList.add("un_btn"),A()),E(f)};function C(e){delta=d?-120*e.detail:u?-e.deltaY:e.wheelDelta,1!=c&&(delta<=-v&&p(),delta>=v&&y())}function E(e){setTimeout(function(){c=!1},e)}b.addEventListener("click",function(){1!=c&&p()}),w.addEventListener("click",function(){1!=c&&y()});var k=d?"DOMMouseScroll":"wheel";function x(){$(".sections").eq(g-1).removeClass("up-scroll").addClass("down-scroll")}function A(){$(".sections").eq(g).removeClass("down-scroll").addClass("up-scroll")}window.addEventListener(k,_.throttle(C,60),!1),w.addEventListener("click",function(){A(),console.log()});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.d63183a8.js.map