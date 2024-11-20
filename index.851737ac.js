!function(){function e(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};var t={};function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,n,t){n&&r(e.prototype,n);t&&r(e,t);return e};var o=function(){"use strict";function r(){e(n)(this,r),this.page=1}return e(t)(r,[{key:"fetchMovies",value:function(){var e="".concat("https://api.themoviedb.org/3","/movie/popular?api_key=").concat("a44bb9523e0650c67fadd4918a95b1b0","&language=en-US&page=").concat(this.page);return fetch(e).then((function(e){if(!e.ok)throw new Error("Failed to fetch movies");return e.json()})).then((function(e){return e.results}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"decrementPage",value:function(){this.page>1&&(this.page-=1)}}]),r}(),a=document.querySelector(".movie-list"),c=document.querySelector(".prev__button"),i=document.querySelector(".next__button"),u=new o;function l(){u.fetchMovies().then((function(e){return function(e){var n=e.map((function(e){return'\n       <li class="movie-item">\n          <img src="https://image.tmdb.org/t/p/w500'.concat(e.poster_path,'" alt="').concat(e.title,'" >\n          <h2>').concat(e.title,"</h2>\n          <p>Original language: ").concat(e.original_language,"</p>\n          <p>Release date: ").concat(e.release_date,"</p>\n          <p>Origin country: ").concat(e.origin_country,"</p>\n          <p>Rating: ").concat(e.vote_average,"</p>\n        </li>\n    ")})).join("");a.insertAdjacentHTML("beforeend",n)}(e.slice(0,8))})).catch((function(e){return console.error("Error:",e)}))}function f(){a.innerHTML=""}function s(){c.disabled=u.page<=1}l(),c.addEventListener("click",(function(){u.decrementPage(),f(),l(),s()})),i.addEventListener("click",(function(){u.incrementPage(),f(),l(),s()}))}();
//# sourceMappingURL=index.851737ac.js.map