(this["webpackJsonptask-tracker-ui"]=this["webpackJsonptask-tracker-ui"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(7),i=n.n(o),a=(n(14),n(9)),s=n(5),d=n(2),l=n(0),u=function(e){var t=e.text,n=(e.color,e.onClick);return Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:n,className:"btn",children:t})})},j=function(e){var t=e.text,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{style:{borderBottom:"5px solid #fad25a"},children:t}),Object(l.jsx)(u,{className:"btn",color:c?"red":"green",text:c?"Schlie\xdfen":"Hinzuf\xfcgen",onClick:n})]})};j.defaultProps={text:"Hertz Notes"};var b=j,h=n(8),m=function(e){var t=e.note,n=e.onDelete,c=e.onToggle;return Object(l.jsxs)("div",{className:"note ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(l.jsxs)("h3",{children:[t.text," ",Object(l.jsx)(h.a,{style:{color:"black",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(l.jsx)("p",{children:t.day})]})},x=function(e){var t=e.notes,n=e.onDelete,c=e.onToggle;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(m,{note:e,onDelete:n,onToggle:c},e.id)}))})},O=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),o=r[0],i=r[1],a=Object(c.useState)(""),s=Object(d.a)(a,2),u=s[0],j=s[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),m=h[0],x=h[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:u,reminder:m}),i(""),j(""),x(!1)):alert("Bitte Notiz hinzuf\xfcgen!")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Notiz"}),Object(l.jsx)("input",{type:"text",placeholder:"Notiz hinzf\xfcgen",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Wochentag & Uhrzeit"}),Object(l.jsx)("input",{type:"text",placeholder:"Datum und Uhrzeit",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control form-control-check",children:[Object(l.jsx)("label",{children:"Reminder setzen"}),Object(l.jsx)("input",{type:"checkbox",checked:m,value:m,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{type:"submit",value:"Notiz speichern",className:"btn btn-block"})]})},f=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([{id:1,text:"Book flight tickets",day:"Dec 23rd at 2:30pm",reminder:!0},{id:2,text:"Christmas shopping",day:"Dec 20th at 4:30pm",reminder:!1},{id:3,text:"Hotel booking",day:"Dec 20th at 11:00am",reminder:!0},{id:4,text:"Go to Hertz rental station",day:"Dec 23rd at 2:30am",reminder:!0}]),i=Object(d.a)(o,2),u=i[0],j=i[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(l.jsx)(O,{onAdd:function(e){var t=Math.floor(1e3*Math.random())+1,n=Object(s.a)({id:t},e);j([].concat(Object(a.a)(u),[n]))}}),u.length>0?Object(l.jsx)(x,{notes:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder}):t})))}}):"Keine Notizen zum Anzeigen vorhanden."]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.e16bad75.chunk.js.map