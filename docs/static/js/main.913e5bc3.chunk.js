(this["webpackJsonpjoppycode-web"]=this["webpackJsonpjoppycode-web"]||[]).push([[0],{96:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),s=i(11),c=i.n(s),r=i(128),l=i(46),o=i(12),u=i.p+"static/media/wallpaper.fb332fd6.svg",d=i.p+"static/media/logo.a7290d0a.svg",m=i(2);var j=Object(r.a)((function(e){return{logo:{width:350,margin:"0.5em",padding:"1em"}}})),p=function(){var e=j();return Object(m.jsx)("img",{className:e.logo,src:d,alt:"Musical Experience"})},b=i(97),h=i(131),x={black:"#1A1A1A",gray:"#424242",white:"#FFFFFF",blue:"#2D3CFF",violet:"#211BAE",lila:"#AB04DB",pink:"#FF3CD4",colortext:"#808F9F",background:"#F3F6F8"};var g=Object(b.a)((function(e){return{btn:{margin:"1em",padding:"0.5em",width:"35vh",height:40,background:x.blue,borderRadius:"0.5em",color:x.white,"&:hover":{backgroundColor:"none",borderColor:x.blue,color:x.blue,boxShadow:"none"}}}})),f=function(e){var t=e.onClick,i=e.btn,n=e.value,a=void 0===n?"":n,s=e.isDisplay,c=g();return console.log(s),Object(m.jsxs)(h.a,{onClick:t,className:c.btn,value:a,variant:"outlined",style:{display:s},children:[" ",i," "]})};var O=Object(r.a)((function(e){return{start:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"},img:{width:"100%",opacity:.9,position:"absolute",zIndex:-1},container:{width:"30%",height:"30%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",zIndex:1,top:"68%"}}})),v=function(e){var t=e.history,i=O();return Object(m.jsxs)("div",{className:i.start,children:[Object(m.jsx)("img",{className:i.img,src:u,alt:"Wallpaper"}),Object(m.jsxs)("div",{className:i.container,children:[Object(m.jsx)(p,{}),Object(m.jsx)("p",{children:"Lorem ipsum dolor as sit amet no se que"}),Object(m.jsx)(f,{btn:"Continuar",value:"/welcome",onClick:function(e){var i=e.currentTarget;t.push(i.value)}})]})]})},y=i(23),C=i(142),w=i(134),N=i(139),I=i(135);var A=Object(r.a)((function(e){return{fields:{width:"100%",height:"100%",margin:"0.5em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},field:{width:"60%",margin:"0.2em",marginTop:"2em"},title:{marginTop:"2em",color:x.blue,textAlign:"center"},container:{margin:0},text:{margin:"0",padding:"1em",color:x.colortext,textAlign:"center"},action:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"2.5em"}}})),D=Object(o.e)((function(e){var t=e.handleClose,i=e.open,n=e.history,a=A();return Object(m.jsxs)(C.a,{open:i,onClose:t,"aria-labelledby":"form-dialog-title",maxWidth:"sm",children:[Object(m.jsx)("h1",{className:a.title,children:"Registrate"}),Object(m.jsxs)(w.a,{className:a.container,children:[Object(m.jsx)("p",{className:a.text,children:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra."}),Object(m.jsxs)("div",{className:a.fields,children:[Object(m.jsx)(N.a,{className:a.field,id:"name",label:"Nombre Completo",type:"string",autoComplete:"auto-name",variant:"outlined",size:"medium"}),Object(m.jsx)(N.a,{className:a.field,id:"email",label:"Correo electronico",type:"email",autoComplete:"auto-email",variant:"outlined",size:"medium"})]})]}),Object(m.jsx)(I.a,{className:a.action,children:Object(m.jsx)(f,{btn:"Siguiente",value:"/intro",onClick:function(e){var t=e.currentTarget;n.push(t.value)}})})]})}));var F=Object(r.a)((function(e){return{welcome:{width:"50%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{margin:"0",padding:"0.5em",textAlign:"center",color:x.black},text:{margin:"0",padding:"1em",textAlign:"center"}}})),k=Object(o.e)((function(e){var t=F(),i=Object(n.useState)(!1),a=Object(y.a)(i,2),s=a[0],c=a[1];return Object(m.jsxs)("div",{className:t.welcome,children:[Object(m.jsx)(p,{}),Object(m.jsx)("h1",{className:t.title,children:"Lorem ipsum dolor sit amet consectetur"}),Object(m.jsx)("p",{className:t.text,children:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra maecenas aptent lacus mus venenatis, malesuada lectus leo nibh tincidunt tristique ullamcorper phasellus tempor natoque erat. Fermentum nascetur condimentum placerat vitae nec non donec eu conubia, ligula etiam magna proin hac morbi congue penatibus, tristique venenatis quisque nisl class pretium cras euismod."}),Object(m.jsx)(f,{onClick:function(){c(!0),console.log("aqui se abre")},btn:"Continuar"}),Object(m.jsx)(D,{open:s,handleClose:function(){c(!1)},history:e.history})]})})),L=i(71),S=i(138),q=i(136),E=i(144);var T=Object(r.a)((function(e){return{timeline:{width:"100%",height:"100%",margin:"0.5em",display:"flex",justifyContent:"center",alignItems:"center"},timeText:{margin:"1em"}}})),z=function(e){var t=e.audioDuration,i=void 0===t?0:t,n=e.timeCurrent,a=void 0===n?0:n,s=e.progress,c=void 0===s?0:s,r=T();return Object(m.jsxs)("div",{className:r.timeline,children:[Object(m.jsx)("p",{className:r.timeText,children:function(){var e=0;a>=60&&(e=a/60);var t=a%60;return e+":"+(t<10?"0"+t:t)}()}),Object(m.jsx)(E.a,{value:c,"aria-labelledby":"disabled-slider"}),Object(m.jsx)("p",{className:r.timeText,children:function(){var e=0;i>=60&&(e=i/60);var t=i%60;return e+":"+(t<10?"0"+t:t)}()})]})},B=i(137);var H=Object(r.a)((function(e){return{player:{width:"35vh",height:"3em",margin:"0.5em",padding:"1em",borderRadius:"0.5em",display:"flex",justifyContent:"center",alignItems:"center",background:x.background}}})),R=function(e){var t=e.pathFile,i=e.currentAudio,s=e.setCurrentAudio,c=e.index,r=H(),l=new Audio(t),o=Object(n.useState)(),u=Object(y.a)(o,2),d=u[0],j=u[1],p=a.a.useState(0),b=Object(y.a)(p,2),h=b[0],x=b[1],g=a.a.useState(0),f=Object(y.a)(g,2),O=f[0],v=f[1],C=Object(n.useState)(c!==i),w=Object(y.a)(C,2),N=w[0],I=w[1];return Object(n.useEffect)((function(){c===i&&I(!1)}),[i]),l.addEventListener("loadedmetadata",(function(){var e=l.duration.toFixed(0);j(e)}),!1),l.addEventListener("timeupdate",(function(){var e=l.currentTime.toFixed(0);v(e),x(e/d*100)})),l.addEventListener("ended",(function(){s(i+1)})),Object(m.jsxs)("div",{className:r.player,children:[Object(m.jsx)(q.a,{onClick:function(e){l.play(),I(!0)},disabled:N,children:Object(m.jsx)(B.a,{})}),Object(m.jsx)(z,{audioDuration:d,progress:h,timeCurrent:O})]})};var J=Object(r.a)((function(e){return{music:{width:"100%",height:"100%",margin:"1em",padding:"0.5em",display:"flex",justifyContent:"center",alignItems:"center"},info:{width:"35%",height:"100%",margin:"0.5em",padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"},title:{margin:0,textAlign:"right",color:x.colortext},text:{margin:0,textAlign:"right",color:x.colortext},divider:{width:40,height:2,background:x.blue}}})),U=function(e){var t=e.pathFile,i=e.currentAudio,n=e.setCurrentAudio,a=e.index,s=J();return Object(m.jsxs)("div",{className:s.music,children:[Object(m.jsxs)("div",{className:s.info,children:[Object(m.jsx)("h3",{className:s.title,children:"Lorem ipsum dolor"}),Object(m.jsx)("p",{className:s.text,children:"Lorem ipsum dolor sit amet consectetur"})]}),Object(m.jsx)(S.a,{className:s.divider,light:!0,orientation:"horizontal",variant:"middle"}),Object(m.jsx)(R,{pathFile:t,currentAudio:i,setCurrentAudio:n,index:a})]})},G=i(69),V=(i(95),G.a.initializeApp({apiKey:"AIzaSyBwF8UwQqnjtc1YlDp_Gy0_ILnHJyimRfk",authDomain:"musical-experience-experiment.firebaseapp.com",projectId:"musical-experience-experiment",storageBucket:"musical-experience-experiment.appspot.com",messagingSenderId:"214728891100",appId:"1:214728891100:web:045bda74715c431fa1f219",measurementId:"G-CPLDDS6YBV"}).storage());var W=Object(r.a)((function(e){return{intro:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},logo:{},container:{width:"80%",display:"flex",justifyContent:"center",alignItems:"center"},info:{width:"40%",height:"100%",padding:"0.5em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"},title:{width:"80%",margin:0,padding:"0.2em",textAlign:"left",color:x.blue},text:{width:"80%",margin:0,padding:"0.5em",textAlign:"left"},test:{width:"60%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}})),Y=function(e){var t=e.history,i=Object(n.useState)([]),a=Object(y.a)(i,2),s=a[0],c=a[1],r=Object(n.useState)("none"),l=Object(y.a)(r,2),o=l[0],u=l[1],d=Object(n.useState)(1),j=Object(y.a)(d,2),b=j[0],h=j[1];Object(n.useEffect)((function(){V.ref("sonidos/introduccion").listAll().then((function(e){e.prefixes.forEach((function(e){})),e.items.forEach((function(e){e.getDownloadURL().then((function(e){c([].concat(Object(L.a)(s),[e]))}))}))})).catch((function(e){}))}),[]),Object(n.useEffect)((function(){b>=4&&u("")}),[b]);var x=W();return Object(m.jsxs)("div",{className:x.intro,children:[Object(m.jsx)(p,{className:x.logo}),Object(m.jsxs)("div",{className:x.container,children:[Object(m.jsxs)("div",{className:x.info,children:[Object(m.jsx)("h1",{className:x.title,children:"Introducci\xf3n"}),Object(m.jsx)("p",{className:x.text,children:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra maecenas aptent lacus mus venenatis."})]}),Object(m.jsxs)("div",{className:x.test,children:[Object(m.jsx)(U,{pathFile:s[0],currentAudio:b,setCurrentAudio:h,index:1}),Object(m.jsx)(U,{pathFile:s[0],currentAudio:b,setCurrentAudio:h,index:2}),Object(m.jsx)(U,{pathFile:s[0],currentAudio:b,setCurrentAudio:h,index:3}),Object(m.jsx)(f,{btn:"Siguiente",value:"/exercise",isDisplay:o,onClick:function(e){var i=e.currentTarget;t.push(i.value)}})]})]})]})};var _=Object(r.a)((function(){return{slider:{width:"30%",margin:"1em",padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},question:{textAlign:"center"},container:{width:"55%",display:"flex",justifyContent:"center",alignItems:"center"}}})),K=function(){var e=_();return Object(m.jsxs)("div",{className:e.slider,children:[Object(m.jsx)("p",{className:e.question,children:" Lorem ipsum dolor sit amet consectetur"}),Object(m.jsx)("div",{className:e.container,children:Object(m.jsx)(E.a,{defaultValue:3,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,min:1,max:5})})]})};i(143),i(145),i(141);Object(r.a)((function(e){return{likert:{width:"30%",margin:"1em",padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},question:{color:x.colortext},container:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},radio:{color:x.blue}}}));var M=Object(r.a)((function(e){return{exercise:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},logo:{margin:0,padding:0,width:"100%",height:"10%",display:"flex",justifyContent:"center",alignItems:"flex-end"},info:{margin:0,padding:0,width:"50%",height:"35%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{textAlign:"center",margin:0,padding:"0.5em",color:x.blue},text:{textAlign:"center",width:"80%",margin:0,padding:"0.5em",color:x.colortext},container:{margin:0,padding:0,width:"100%",height:"30%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},content1:{margin:0,padding:0,width:"100%",height:"35%",display:"flex",justifyContent:"center",alignItems:"flex-end"},content2:{margin:0,padding:0,width:"100%",height:"65%",display:"flex",justifyContent:"center",alignItems:"center"},btn:{margin:0,padding:0,width:"100%",height:"10%",display:"flex",justifyContent:"center",alignItems:"flex-start"}}})),P=function(e){var t=e.history,i=M();return Object(m.jsxs)("div",{className:i.exercise,children:[Object(m.jsx)("div",{className:i.logo,children:Object(m.jsx)(p,{})}),Object(m.jsxs)("div",{className:i.info,children:[Object(m.jsx)("h2",{className:i.title,children:"Lorem ipsum dolor sit amet consectetur"}),Object(m.jsx)("p",{className:i.text,children:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra maecenas aptent lacus mus venenatis."})]}),Object(m.jsxs)("div",{className:i.container,children:[Object(m.jsx)("div",{className:i.content1,children:Object(m.jsx)(R,{})}),Object(m.jsxs)("div",{className:i.content2,children:[Object(m.jsx)(R,{}),Object(m.jsx)(K,{}),Object(m.jsx)(R,{})]})]}),Object(m.jsx)("div",{className:i.btn,children:Object(m.jsx)(f,{btn:"Siguiente",value:"/final",onClick:function(e){var i=e.currentTarget;t.push(i.value)}})})]})};var Q=Object(r.a)((function(e){return{}})),X=function(){var e=Q();return Object(m.jsx)("div",{className:e.final})};var Z=Object(r.a)((function(){return{login:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},img:{width:"50%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:x.blue},logo:{width:"100%",height:"50%",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center"},container:{width:"50%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},content:{width:"100%",height:"50%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},field:{width:"50%",margin:"1em"}}})),$=function(){var e=Z();return Object(m.jsxs)("div",{className:e.login,children:[Object(m.jsx)("div",{className:e.img}),Object(m.jsxs)("div",{className:e.container,children:[Object(m.jsx)("div",{className:e.logo,children:Object(m.jsx)(p,{})}),Object(m.jsxs)("div",{className:e.content,children:[Object(m.jsx)(N.a,{className:e.field,id:"user",label:"Usuario",type:"string",autoComplete:"auto-name",variant:"outlined",size:"medium"}),Object(m.jsx)(N.a,{className:e.field,id:"password",label:"Contrase\xf1a",type:"password",autoComplete:"auto-pass",variant:"outlined",size:"medium"}),Object(m.jsx)(f,{btn:"Ingresar"})]})]})]})};var ee=Object(r.a)((function(e){return{app:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}})),te=function(){var e=ee();return Object(m.jsx)(l.a,{children:Object(m.jsxs)("div",{className:e.app,children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(m.jsx)(o.a,{path:"/welcome",component:k}),Object(m.jsx)(o.a,{path:"/intro",component:Y}),Object(m.jsx)(o.a,{path:"/exercise",component:P}),Object(m.jsx)(o.a,{path:"/final",component:X}),Object(m.jsx)(o.a,{path:"/login",component:$})]})})};c.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.913e5bc3.chunk.js.map