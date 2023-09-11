(()=>{"use strict";var e={130:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(885),o=n(3693),i=n(9385),a=n(6792),c=n(1054),l=n(9555),s=n(5004),f=n(9588),d=n(2629),u=a.default.create({container:{flex:1},accordHeader:{padding:12,flex:1,flexDirection:"row",fontSize:20},accordTitle:{fontSize:20}}),p=function(e){var t=e.title,n=e.players,r=e.direction_icon,o=e.icon,a=e.direction_icon_color,l=e.icon_color;if(n&&n.length)return(0,d.jsxs)(i.default,{style:u.accordHeader,children:[(0,d.jsx)(f.default,{name:r,size:20,color:a}),(0,d.jsx)(f.default,{name:o,size:20,color:l}),(0,d.jsxs)(c.default,{style:u.accordTitle,children:[t,": ",n.join(", ")]})]})};const h=function(e){var t=e.item;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{title:"Offense",players:t.Offense,icon:"hair-cross",icon_color:"orange"}),(0,d.jsx)(p,{title:"Defense",players:t.Defense,icon:"shield",icon_color:"orange"}),(0,d.jsx)(c.default,{fontSize:24,children:"Changes: "}),(0,d.jsx)(p,{title:"Move Forward",players:t.MoveForward,direction_icon:"swap",icon:"hair-cross",icon_color:"orange",direction_icon_color:"black"}),(0,d.jsx)(p,{title:"Move Defense",players:t.MoveDefense,direction_icon:"swap",icon:"shield",icon_color:"orange",direction_icon_color:"black"}),(0,d.jsx)(p,{title:"Stay",players:t.Stay,direction_icon:"squared-minus",direction_icon_color:"black"}),(0,d.jsx)(p,{title:"Off",players:t.Off,direction_icon:"triangle-down",direction_icon_color:"red"}),(0,d.jsx)(p,{title:"On Forward",players:t.OnForward,direction_icon:"triangle-up",icon:"hair-cross",icon_color:"orange",direction_icon_color:"green"}),(0,d.jsx)(p,{title:"On Defense",players:t.OnDefense,direction_icon:"triangle-up",icon:"shield",icon_color:"orange",direction_icon_color:"green"})]})};var b=n(3068),g=["Brayden","Brody","Cameron","Emerson","Jackson","Jett","Otto","Owen","Ronan"];const y=function(e){var t=e.players,n=e.setPlayers,o=(0,s.useState)(!1),i=(0,r.default)(o,2),a=i[0],c=i[1],l=g.map((function(e){return Object.assign({label:e,value:e})})),f=(0,s.useState)(l),u=(0,r.default)(f,2),p=u[0],h=u[1];return(0,d.jsx)(b.default,{multiple:!0,min:0,max:9,open:a,value:t,items:p,setOpen:c,setValue:n,setItems:h})};var v=n(8070),j=n(6296),x=a.default.create({container:{flex:1},accordContainer:{paddingBottom:4},accordHeader:{padding:12,backgroundColor:"#999",color:"#eee",flex:1,flexDirection:"row",justifyContent:"space-between"},accordTitle:{fontSize:20},accordBody:{padding:12},textSmall:{fontSize:16},seperator:{height:12},timerContainer:{justifyContent:"center",alignItems:"center"}});var O={9:[["i","b","e","a"],["b","f","a","h"],["g","c","f","d"],["f","i","c","e"],["d","a","h","b"],["d","g","i","f"],["e","h","i","c"],["c","a","g","b"],["h","e","d","g"]],8:[["h","e","b","a"],["c","f","g","a"],["d","c","h","e"],["f","a","b","c"],["h","g","f","e"],["d","a","f","h"],["g","b","d","c"],["b","e","d","g"]],7:[["b","f","a","e"],["g","b","a","f"],["e","d","f","c"],["c","a","g","b"],["c","e","d","b"],["a","f","d","g"],["g","d","c","e"]],6:[["d","e","b","c"],["a","b","f","c"],["e","f","b","a"],["b","c","e","d"],["a","f","d","e"],["d","c","a","f"],["d","e","b","c"],["a","b","f","c"],["e","f","b","a"],["b","c","e","d"],["a","f","d","e"],["d","c","a","f"]],5:[["a","d","b","e"],["a","c","b","d"],["d","e","a","c"],["b","e","c","a"],["b","c","e","d"],["a","d","b","e"],["a","c","b","d"],["d","e","a","c"],["b","e","c","a"],["b","c","e","d"]]},m=["a","b","c","d","e","f","g","h","i"];var _=function(){return(0,d.jsx)(i.default,{style:{flex:1}})},w=function(e){return e.sections[e.index-1].content};const S=function(){var e=(0,s.useState)(g),t=(0,r.default)(e,2),n=t[0],a=t[1],f=(0,s.useState)(),u=(0,r.default)(f,2),p=u[0],b=u[1],S=(0,s.useState)([]),k=(0,r.default)(S,2),P=k[0],C=k[1],M=(0,s.useState)(0),D=(0,r.default)(M,2),T=D[0],F=D[1],z=(0,s.useState)([{key:"pick",title:"Pick Players"}]),B=(0,r.default)(z,2),E=B[0],I=B[1];(0,s.useEffect)((function(){if(n&&!(n.length<5)){var e=function(e){for(var t,n=e.length;n>0;){t=Math.floor(Math.random()*n),n--;var r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}return e}(n),t=Object.fromEntries(m.map((function(t,n){return[t,e[n]]}))),r=function(e,t){e=e.map((function(e){return e.map((function(e){return t[e]}))}));var n,r=[],o=[],i=1,a=[];for(n of e){var c,l=n.reduce((function(e,t,n){var r=Math.floor(n/2);return e[r]||(e[r]=[]),e[r].push(t),e}),[]),s=l[0],f=l[1],d=[],u=[],p=[],h=[],b=[],g=[];for(c of s)r.includes(c)?p.push(c):o.includes(c)?d.push(c):b.push(c);for(c of f)r.includes(c)?u.push(c):o.includes(c)?p.push(c):g.push(c);for(c of r)s.includes(c)||f.includes(c)||h.push(c);for(c of o)s.includes(c)||f.includes(c)||h.push(c);a.push({Offense:s,Defense:f,MoveForward:d,MoveDefense:u,Stay:p,Off:h,OnForward:b,OnDefense:g,id:i}),r=s,o=f,i++}return a}(O[n.length],t),o=r.map((function(e){return Object.assign({title:"Period "+e.id,content:(0,d.jsx)(h,{item:e})})}));b(3e3/r.length),C(o),I(r.map((function(e){return Object.assign({key:e.id,title:e.id})})))}}),[n]);var H=(0,s.useState)(!1),R=(0,r.default)(H,2),A=R[0],J=R[1],V=(0,s.useState)(0),q=(0,r.default)(V,2),L=q[0],N=q[1],G=(0,l.default)();return(0,d.jsxs)(i.default,{style:x.container,children:[(0,d.jsx)(y,{players:n,setPlayers:a}),(0,d.jsx)(v.TabView,{navigationState:{index:T,routes:E},renderScene:function(e){var t=e.route;return"pick"===t.key?(0,d.jsx)(_,{}):(0,d.jsx)(w,{sections:P,index:t.key})},onIndexChange:F,initialLayout:{width:G.width}}),(0,d.jsxs)(i.default,{style:x.timerContainer,children:[(0,d.jsx)(j.CountdownCircleTimer,{isPlaying:A,duration:p,colors:["#004777","#F7B801","#A30000","#A30000"],colorsTime:[p,3*p/4,p/2,0],onComplete:function(){return{shouldRepeat:!1}},updateInterval:1,children:function(e){var t=e.remainingTime,n=e.color;return(0,d.jsxs)(c.default,{style:{color:n,fontSize:40},children:[Math.floor(t/60),":",t%60]})}},L),(0,d.jsx)(o.default,{title:"Start/Stop",onPress:function(){return J((function(e){return!e}))}}),(0,d.jsx)(o.default,{title:"Reset",onPress:function(){return N((function(e){return e+1}))}})]})]})};function k(){return(0,d.jsx)(S,{})}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,o,i]=e[f],c=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/soccer-scheduler/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,c,l]=r,s=0;if(a.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var f=l(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[210],(()=>n(5530)));r=n.O(r)})();
//# sourceMappingURL=main.5fca7f4d.js.map