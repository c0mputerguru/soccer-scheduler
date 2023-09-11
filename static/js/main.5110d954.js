(()=>{"use strict";var e={130:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(885),o=n(6591),i=n(9294),a=n(5326),c=n(3693),s=n(9385),l=n(6792),d=n(1054),f=n(9555),u=n(5004),p=n(9588),h=n(2629),g=l.default.create({container:{flex:1},accordHeader:{padding:12,flex:1,flexDirection:"row",fontSize:20},accordTitle:{fontSize:20}}),b=function(e){var t=e.title,n=e.players,r=e.direction_icon,o=e.icon,i=e.direction_icon_color,a=e.icon_color;if(n&&n.length)return(0,h.jsxs)(s.default,{style:g.accordHeader,children:[(0,h.jsx)(p.default,{name:r,size:20,color:i}),(0,h.jsx)(p.default,{name:o,size:20,color:a}),(0,h.jsxs)(d.default,{style:g.accordTitle,children:[t,": ",n.join(", ")]})]})};const y=function(e){var t=e.item;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b,{title:"Offense",players:t.Offense,icon:"hair-cross",icon_color:"orange"}),(0,h.jsx)(b,{title:"Defense",players:t.Defense,icon:"shield",icon_color:"orange"}),(0,h.jsx)(d.default,{fontSize:24,children:"Changes: "}),(0,h.jsx)(b,{title:"Move Forward",players:t.MoveForward,direction_icon:"swap",icon:"hair-cross",icon_color:"orange",direction_icon_color:"black"}),(0,h.jsx)(b,{title:"Move Defense",players:t.MoveDefense,direction_icon:"swap",icon:"shield",icon_color:"orange",direction_icon_color:"black"}),(0,h.jsx)(b,{title:"Stay",players:t.Stay,direction_icon:"squared-minus",direction_icon_color:"black"}),(0,h.jsx)(b,{title:"Off",players:t.Off,direction_icon:"triangle-down",direction_icon_color:"red"}),(0,h.jsx)(b,{title:"On Forward",players:t.OnForward,direction_icon:"triangle-up",icon:"hair-cross",icon_color:"orange",direction_icon_color:"green"}),(0,h.jsx)(b,{title:"On Defense",players:t.OnDefense,direction_icon:"triangle-up",icon:"shield",icon_color:"orange",direction_icon_color:"green"})]})};var x=n(3068),j=["Brayden","Brody","Cameron","Emerson","Jackson","Jett","Otto","Owen","Ronan"];const v=function(e){var t=e.players,n=e.setPlayers,o=(0,u.useState)(!1),i=(0,r.default)(o,2),a=i[0],c=i[1],s=j.map((function(e){return Object.assign({label:e,value:e})})),l=(0,u.useState)(s),d=(0,r.default)(l,2),f=d[0],p=d[1];return(0,h.jsx)(x.default,{multiple:!0,min:0,max:9,open:a,value:t,items:f,setOpen:c,setValue:n,setItems:p})};var m=n(8070),O=n(6296),w=l.default.create({container:{flex:1},accordContainer:{paddingBottom:4},accordHeader:{padding:12,backgroundColor:"#999",color:"#eee",flex:1,flexDirection:"row",justifyContent:"space-between"},accordTitle:{fontSize:20},accordBody:{padding:12},textSmall:{fontSize:16},seperator:{height:12},timerContainer:{justifyContent:"center",alignItems:"center"},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:"white",borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},modalText:{marginBottom:15,textAlign:"center",fontSize:20},input:{height:40,margin:12,borderWidth:1,padding:10}}),_={9:[["i","b","e","a"],["b","f","a","h"],["g","c","f","d"],["f","i","c","e"],["d","a","h","b"],["d","g","i","f"],["e","h","i","c"],["c","a","g","b"],["h","e","d","g"]],8:[["h","e","b","a"],["c","f","g","a"],["d","c","h","e"],["f","a","b","c"],["h","g","f","e"],["d","a","f","h"],["g","b","d","c"],["b","e","d","g"]],7:[["b","f","a","e"],["g","b","a","f"],["e","d","f","c"],["c","a","g","b"],["c","e","d","b"],["a","f","d","g"],["g","d","c","e"]],6:[["d","e","b","c"],["a","b","f","c"],["e","f","b","a"],["b","c","e","d"],["a","f","d","e"],["d","c","a","f"],["d","e","b","c"],["a","b","f","c"],["e","f","b","a"],["b","c","e","d"],["a","f","d","e"],["d","c","a","f"]],5:[["a","d","b","e"],["a","c","b","d"],["d","e","a","c"],["b","e","c","a"],["b","c","e","d"],["a","d","b","e"],["a","c","b","d"],["d","e","a","c"],["b","e","c","a"],["b","c","e","d"]]},S=["a","b","c","d","e","f","g","h","i"];var k=function(){return(0,h.jsx)(s.default,{style:{flex:1}})},C=function(e){return e.sections[e.index-1].content};const T=function(){var e=(0,u.useState)(j),t=(0,r.default)(e,2),n=t[0],l=t[1],p=(0,u.useState)(),g=(0,r.default)(p,2),b=g[0],x=g[1],T=(0,u.useState)([]),P=(0,r.default)(T,2),M=P[0],D=P[1],F=(0,u.useState)(0),z=(0,r.default)(F,2),I=z[0],B=z[1],E=(0,u.useState)([{key:"pick",title:"Pick Players"}]),R=(0,r.default)(E,2),V=R[0],N=R[1];(0,u.useEffect)((function(){if(n&&!(n.length<5)){var e=n;e.sort();var t=Object.fromEntries(S.map((function(t,n){return[t,e[n]]}))),r=function(e,t){e=e.map((function(e){return e.map((function(e){return t[e]}))}));var n,r=[],o=[],i=1,a=[];for(n of e){var c,s=n.reduce((function(e,t,n){var r=Math.floor(n/2);return e[r]||(e[r]=[]),e[r].push(t),e}),[]),l=s[0],d=s[1],f=[],u=[],p=[],h=[],g=[],b=[];for(c of l)r.includes(c)?p.push(c):o.includes(c)?f.push(c):g.push(c);for(c of d)r.includes(c)?u.push(c):o.includes(c)?p.push(c):b.push(c);for(c of r)l.includes(c)||d.includes(c)||h.push(c);for(c of o)l.includes(c)||d.includes(c)||h.push(c);a.push({Offense:l,Defense:d,MoveForward:f,MoveDefense:u,Stay:p,Off:h,OnForward:g,OnDefense:b,id:i}),r=l,o=d,i++}return a}(_[n.length],t),o=r.map((function(e){return Object.assign({title:"Period "+e.id,content:(0,h.jsx)(y,{item:e})})}));x(3e3/r.length),te(3e3/r.length),D(o),N(r.map((function(e){return Object.assign({key:e.id,title:e.id})})))}}),[n]);var A=(0,u.useState)(!1),H=(0,r.default)(A,2),q=H[0],J=H[1],L=(0,u.useState)(0),W=(0,r.default)(L,2),G=W[0],K=W[1],Q=(0,u.useState)(!1),U=(0,r.default)(Q,2),X=U[0],Y=U[1],Z=(0,u.useState)(""),$=(0,r.default)(Z,2),ee=$[0],te=$[1];var ne=(0,f.default)();return(0,h.jsxs)(s.default,{style:w.container,children:[(0,h.jsx)(v,{players:n,setPlayers:l}),(0,h.jsx)(m.TabView,{navigationState:{index:I,routes:V},renderScene:function(e){var t=e.route;return"pick"===t.key?(0,h.jsx)(k,{}):(0,h.jsx)(C,{sections:M,index:t.key})},onIndexChange:B,initialLayout:{width:ne.width}}),(0,h.jsxs)(s.default,{style:w.timerContainer,children:[(0,h.jsx)(i.default,{animationType:"slide",transparent:!0,visible:X,onRequestClose:function(){Y(!X)},children:(0,h.jsx)(s.default,{style:w.centeredView,children:(0,h.jsxs)(s.default,{style:w.modalView,children:[(0,h.jsx)(d.default,{style:w.modalText,children:"Enter Timer In Seconds:"}),(0,h.jsx)(o.default,{style:w.input,onChangeText:te,value:ee,keyboardType:"numeric"}),(0,h.jsx)(c.default,{title:"Submit",onPress:function(){Y(!X),"string"==typeof ee&&(isNaN(ee)||isNaN(parseFloat(ee))||x(parseInt(ee)))}})]})})}),(0,h.jsx)(a.default,{onLongPress:function(){return Y(!X)},children:(0,h.jsx)(O.CountdownCircleTimer,{isPlaying:q,duration:b,colors:["#004777","#F7B801","#A30000","#A30000"],colorsTime:[b,3*b/4,b/2,0],onComplete:function(){return{shouldRepeat:!1}},updateInterval:1,children:function(e){var t=e.remainingTime,n=e.color;return(0,h.jsxs)(d.default,{style:{color:n,fontSize:40},children:[Math.floor(t/60),":",("0"+t%60).slice(-2)]})}},G)}),(0,h.jsx)(c.default,{title:"Start/Stop",onPress:function(){return J((function(e){return!e}))}}),(0,h.jsx)(c.default,{title:"Reset",onPress:function(){return K((function(e){return e+1}))}})]})]})};function P(){return(0,h.jsx)(T,{})}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,o,i]=e[d],c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/soccer-scheduler/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,c,s]=r,l=0;if(a.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var d=s(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[210],(()=>n(5530)));r=n.O(r)})();
//# sourceMappingURL=main.5110d954.js.map