(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),u=n.n(c),o=n(3),l=n(2),i=function(e){var t=e.contact,n=e.deleteContact;return r.a.createElement("p",null,t.name," ",t.number,r.a.createElement("button",{onClick:n},"Delete"))},d=function(e){var t=e.contacts,n=e.filterBy,a=e.deleteContactId;return t.filter((function(e){return function(e,t){return e.name.toLowerCase().includes(t.toLowerCase())}(e,n)})).map((function(e){return r.a.createElement(i,{key:e.id,contact:e,deleteContact:function(){return a(e.id)}})}))},f=function(e){var t=e.text,n=e.value,a=e.onChange;return r.a.createElement("div",null,t," ",r.a.createElement("input",{value:n,onChange:a}))},m=function(e){var t=e.name,n=e.number,a=e.handleNameChange,c=e.handleNumberChange,u=e.handleSubmit;return r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement(f,{text:"name:",value:t,onChange:a}),r.a.createElement(f,{text:"number:",value:n,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:u},"add")))},s=function(e){var t=e.filterBy,n=e.handleFilterChange;return r.a.createElement("div",null,r.a.createElement(f,{text:"filter shown with",value:t,onChange:n}))},h=n(4),b=n.n(h),v="/api/persons",E=function(){return b.a.get(v).then((function(e){return e.data}))},g=function(e){return b.a.post(v,e).then((function(e){return e.data}))},p=function(e){return b.a.delete("".concat(v,"/").concat(e)).then((function(e){return e.data}))},C=function(e){return b.a.put("".concat(v,"/").concat(e.id),e).then((function(e){return e.data}))},j=function(e){var t=e.message,n=e.notificationStyle,a=Object(o.a)({},n,{color:"green"});return null==t?null:r.a.createElement("div",{style:a},t)},y=function(e){var t=e.message,n=e.notificationStyle,a=Object(o.a)({},n,{color:"red"});return null==t?null:r.a.createElement("div",{style:a},t)},O=function(e){var t=e.text;return r.a.createElement("h2",null,t)},S=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),f=i[0],h=i[1],b=Object(a.useState)(""),v=Object(l.a)(b,2),S=v[0],w=v[1],k=Object(a.useState)(""),x=Object(l.a)(k,2),B=x[0],N=x[1],D=Object(a.useState)(null),I=Object(l.a)(D,2),A=I[0],F=I[1],J=Object(a.useState)(null),L=Object(l.a)(J,2),T=L[0],z=L[1];Object(a.useEffect)((function(){E().then((function(e){c(e)}))}),[]);var P={background:"thistle",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",null,r.a.createElement(O,{text:"Phonebook"}),r.a.createElement(y,{message:T,notificationStyle:P}),r.a.createElement(j,{message:A,notificationStyle:P}),r.a.createElement(s,{filterBy:B,handleFilterChange:function(e){return N(e.target.value)}}),r.a.createElement(O,{text:"Add new"}),r.a.createElement(m,{name:f,number:S,handleNameChange:function(e){return h(e.target.value)},handleNumberChange:function(e){return w(e.target.value)},handleSubmit:function(e){var t=function(e){F("".concat(e," ").concat(f)),setTimeout((function(){return F(null)}),3e3),h(""),w("")};if(e.preventDefault(),n.map((function(e){return e.name})).includes(f)){if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))){var a=n.find((function(e){return e.name===f})),r=Object(o.a)({},a,{number:S});C(r).then((function(e){c(n.map((function(t){return t.id!==a.id?t:e}))),t("Updated")}))}}else g({name:f,number:S}).then((function(e){c(n.concat(e)),t("Added")}))}}),r.a.createElement(O,{text:"Numbers"}),r.a.createElement(d,{contacts:n,filterBy:B,deleteContactId:function(e){var t=function(t){z("".concat(t," has already been deleted")),setTimeout((function(){return z(null)}),3e3),c(n.filter((function(t){return t.id!==e})))},a=n.find((function(t){return t.id===e})).name;void 0===a&&t("Contact"),!1!==window.confirm("Delete ".concat(a,"?"))&&p(e).then((function(){F("Deleted ".concat(a)),c(n.filter((function(t){return t.id!==e})))})).catch((function(){return t(a)}))}}))};u.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.873f8c09.chunk.js.map