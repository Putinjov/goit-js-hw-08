!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=NaN,i="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),g=Object.prototype.toString,p=Math.max,m=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var o,i,u,f,a,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function O(){var e=y();if(b(e))return T(e);a=setTimeout(O,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function T(e){return a=void 0,v&&o?g(e):(o=i=void 0,f)}function w(){var e=y(),n=b(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return function(e){return l=e,a=setTimeout(O,t),s?g(e):f}(c);if(d)return a=setTimeout(O,t),g(c)}return void 0===a&&(a=setTimeout(O,t)),f}return t=j(t)||0,h(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},w.flush=function(){return void 0===a?f:T(y())},w}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==i}(e))return o;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=a.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):f.test(e)?o:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return h(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};const O="feedback-form-state",T=document.querySelector(".feedback-form");T.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(w))}),500)),T.addEventListener("submit",(function(e){if(e.preventDefault(),console.log(w),""===S.value||""===x.value)return alert("Будь ласка, заповніть всі обов'язкові поля.");localStorage.removeItem(O),e.currentTarget.reset(),w={}}));let w={};const{email:S,message:x}=T.elements;!function(){try{const e=localStorage.getItem(O);e&&(w=JSON.parse(e),Object.entries(w).forEach((([e,t])=>{T[e].value=t})))}catch(e){console.error(e)}}()}();
//# sourceMappingURL=03-feedback.caf21991.js.map
