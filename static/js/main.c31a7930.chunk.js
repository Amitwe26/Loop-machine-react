(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{12:function(t,i,n){},13:function(t,i,n){"use strict";n.r(i);var e=n(0),a=n.n(e),c=n(5),o=n.n(c),u=n(2),s=n(3),r=n(6),p=n(1);function d(t){var i=t.info,n=t.isOn,a=t.updateAudio,c=t.src,o=t.endOfLoop,u=Object(e.useState)(.5),d=Object(s.a)(u,2),f=d[0],m=d[1],l=Object(r.a)(c,{loop:[!0,i.id],volume:f,duration:8,onend:function(){console.log("Sound ended!"),o()}}),b=Object(s.a)(l,2),j=b[0],O=b[1];return Object(e.useEffect)((function(){i.play&&j()}),[i]),Object(e.useEffect)((function(){n||O.stop()}),[n]),Object(p.jsxs)("div",{className:"square ".concat(i.play?"squareOn":"").concat(i.isWaiting?"wait":""),onClick:function(t){return function(t){if(t.stopPropagation(),i.isWaiting||i.play)return O.stop(),void a("stop",i,O);a("waiting",i,O)}(t)},children:[Object(p.jsx)("h2",{children:i.type}),Object(p.jsx)("input",{type:"range",min:"0",max:"10",className:"round",onChange:function(t){return function(t){t.stopPropagation();var i=+t.target.value/10;m(i)}(t)}})]})}var f={queryAudios:function(){return m}},m=[{id:1,type:"Rhythm1",name:"audio1",play:!1,isWaiting:!1},{id:2,type:"Timmer",name:"audio2",play:!1,isWaiting:!1},{id:3,type:"Electric guitar",name:"audio3",play:!1,isWaiting:!1},{id:4,type:"Guitar",name:"audio4",play:!1,isWaiting:!1},{id:5,type:"Rhythm2",name:"audio5",play:!1,isWaiting:!1},{id:6,type:"Drums",name:"audio6",play:!1,isWaiting:!1},{id:7,type:"Maze Politics",name:"audio7",play:!1,isWaiting:!1},{id:8,type:"Rhythm3",name:"audio8",play:!1,isWaiting:!1},{id:9,type:"Silent Star",name:"audio9",play:!1,isWaiting:!1}];var l=n.p+"static/media/1.5eb417fc.mp3",b=n.p+"static/media/2.37c82282.mp3",j=n.p+"static/media/bass.52c24c81.mp3",O=n.p+"static/media/electricguitar.230fcab8.mp3",g=n.p+"static/media/5.27bdc145.mp3",y=n.p+"static/media/GrooveB_120bpm_Tanggu.3e1411b4.mp3",h=n.p+"static/media/MazePolitics_120_Perc.2d08c654.mp3",v=n.p+"static/media/PAS3GROOVE1.03B.f77c6da4.mp3",W=n.p+"static/media/SilentStar_120_Em_OrganSynth.f2d668af.mp3";function x(){var t=Object(e.useState)(!1),i=Object(s.a)(t,2),n=i[0],a=i[1],c=Object(e.useState)([]),o=Object(s.a)(c,2),r=o[0],m=o[1],x=Object(e.useState)(!1),S=Object(s.a)(x,2),E=S[0],P=S[1],_=[l,b,j,O,g,y,h,v,W];function C(){P(!E)}function N(t,i){if("waiting"===t){var n=r.map((function(t){return t.id===i.id?Object(u.a)(Object(u.a)({},t),{},{isWaiting:!0}):t}));m(n)}else if("stop"===t){var e=r.map((function(t){return t.id===i.id?Object(u.a)(Object(u.a)({},t),{},{isWaiting:!1,play:!1}):t}));r.filter((function(t){return t.isWaiting})).length?(e=r.map((function(t){return(t.isWaiting||t.play)&&i.id===t.id?Object(u.a)(Object(u.a)({},t),{},{isWaiting:!1,play:!1}):t})),m(e)):(e=e.map((function(t){return t.isWaiting?Object(u.a)(Object(u.a)({},t),{},{isWaiting:!1,play:!0}):t})),m(e))}}return Object(e.useEffect)((function(){m(f.queryAudios())}),[]),Object(e.useEffect)((function(){if(n){P(!1);var t=null===r||void 0===r?void 0:r.map((function(t){return t.isWaiting&&!t.play?Object(u.a)(Object(u.a)({},t),{},{isWaiting:!1,play:!0}):t}));m(t)}}),[E,n]),Object(e.useEffect)((function(){n&&(r.every((function(t){return!1===t.play}))&&a(!1))}),[r]),Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)("h1",{children:"Loop Machine "}),Object(p.jsx)("div",{className:"btn-box",children:Object(p.jsx)("button",{onClick:function(){return function(){if(!n&&!r.some((function(t){return t.isWaiting})))return;if(a(!n),n){a(!1);var t=r.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{isWaiting:!1,play:!1})}));m(t)}}()},className:"button ".concat(n?"stop":""," ")})}),Object(p.jsx)("div",{className:"container",children:r.map((function(t,i){return Object(p.jsx)(d,{info:t,src:_[i],isOn:n,updateAudio:N,endOfLoop:C},t.id)}))})]})}function S(){return Object(p.jsx)(x,{})}n(12);var E=function(t){t&&t instanceof Function&&n.e(4).then(n.bind(null,16)).then((function(i){var n=i.getCLS,e=i.getFID,a=i.getFCP,c=i.getLCP,o=i.getTTFB;n(t),e(t),a(t),c(t),o(t)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),E()}},[[13,1,2]]]);
//# sourceMappingURL=main.c31a7930.chunk.js.map