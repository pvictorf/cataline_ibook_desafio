(window.webpackJsonp=window.webpackJsonp||[]).push([[22,4,10],{260:function(t,o,e){},266:function(t,o,e){},271:function(t,o,e){"use strict";e(260)},277:function(t,o,e){},279:function(t,o,e){"use strict";e.r(o);var n=e(1).a.extend({props:{book:{type:Object,required:!0}}}),r=(e(271),e(10)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("NuxtLink",{staticClass:"book-card",attrs:{to:"/book/"+t.book.id}},[e("img",{attrs:{src:t.book.cover,alt:"Capa do livro "+t.book.title}}),t._v(" "),e("h3",[t._v(t._s(t.book.title))]),t._v(" "),e("p",[t._v(t._s(t.book.author))])])}),[],!1,null,"e5033540",null);o.default=component.exports},282:function(t,o,e){"use strict";e(266)},285:function(t,o,e){"use strict";e.r(o);var n=e(1),r=e(186),c=n.a.extend({computed:{$books:function(){return r.books.$all}}}),l=(e(282),e(10)),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"book-list"},t._l(t.$books,(function(t){return e("BookCard",{key:t.id,attrs:{book:t}})})),1)}),[],!1,null,"580e696e",null);o.default=component.exports;installComponents(component,{BookCard:e(279).default})},299:function(t,o,e){"use strict";e(277)},305:function(t,o,e){"use strict";e.r(o);e(299);var n=e(10),component=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"releases"},[e("h2",[t._v("Lançamentos")]),t._v(" "),e("BookList")],1)}),[],!1,null,"fdbcfc4a",null);o.default=component.exports;installComponents(component,{BookList:e(285).default})}}]);