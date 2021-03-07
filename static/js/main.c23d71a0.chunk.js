(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{75:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(10),c=n.n(s),r=(n(75),n(13)),o=n(37),d=n(22),h=n(59),l=n(58),m=n(56),p=n.n(m),j=n(120),u=n.p+"static/media/cloudy.24f9a474.svg",b=n.p+"static/media/clear.c33ef664.svg",f=n.p+"static/media/drizzle.9988edfd.svg",x=n.p+"static/media/rainy.130d6250.svg",g=n.p+"static/media/snowy.dce3f5e7.svg",y=n.p+"static/media/thunder.19ff3c30.svg",O=n(87),v=n(122),C=n(116),w=n(117),T=n(118),k=n(119),M=n(123),I=n(124),S=n(57),z=n(113),D=n(55),W=n.n(D),A=n(7),L="b2dc6d0fb2c25c99d7b90a281b8cedd3",F=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).handleInputChanged=function(e){t.setState(Object(r.a)({},e.target.name,e.target.value))},t.setDarkMode=function(){t.setState({darkModeToggle:!t.state.darkModeToggle})},t.getWeather=function(e){var n;e.preventDefault();fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(t.state.city,"&appid=").concat(L)).then((function(t){if(t.status>=200&&t.status<=299)return t.json();throw Error(t.statusText)})).then((function(t){return n=t})).then((function(){return t.setState({maxTemp:n.main.temp_max,minTemp:n.main.temp_min,temp:n.main.temp,humidity:n.main.humidity,condition:n.weather[0].main.toLowerCase()})})).catch((function(t){return alert("Are you sure the place exists on Earth?")}))},t.state={state:"CA",city:"Los Angeles",maxTemp:"",minTemp:"",temp:"",humidity:"",condition:"",darkModeToggle:!0,message:""},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t,e=this;fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.city,"&appid=").concat(L)).then((function(t){return t.json()})).then((function(e){return t=e})).then((function(){return e.setState({maxTemp:t.main.temp_max,minTemp:t.main.temp_min,temp:t.main.temp,humidity:t.main.humidity,condition:t.weather[0].main.toLowerCase()})}))}},{key:"render",value:function(){var t,e=Object(S.a)({palette:{type:this.state.darkModeToggle?"dark":"light"}});return t="clear"===this.state.condition?b:"clouds"===this.state.condition?u:"drizzle"===this.state.condition?f:"rain"===this.state.condition?x:"snow"===this.state.condition?g:"thunderstorm"===this.state.condition?y:b,Object(A.jsx)(z.a,{theme:e,children:Object(A.jsxs)(O.a,{style:{height:"100vh"},children:[Object(A.jsx)(v.a,{children:Object(A.jsx)(C.a,{children:Object(A.jsxs)(w.a,{style:{flexGrow:"1",justifyContent:"space-between"},children:[Object(A.jsx)(T.a,{children:Object(A.jsx)(W.a,{})}),Object(A.jsx)(k.a,{children:"About Me"})]})})}),Object(A.jsxs)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:[Object(A.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(A.jsx)("h1",{children:"Weather App"}),Object(A.jsx)(M.a,{control:Object(A.jsx)(I.a,{checked:this.state.darkModeToggle,onChange:this.setDarkMode}),label:"Dark Mode"})]}),Object(A.jsxs)("div",{children:[Object(A.jsxs)("form",{children:[Object(A.jsx)(j.a,{variant:"filled",size:"small",label:"City",name:"city",onChange:this.handleInputChanged,fullWidth:!0}),Object(A.jsx)(j.a,{variant:"filled",size:"small",label:"State",name:"state",onChange:this.handleInputChanged,fullWidth:!0}),Object(A.jsx)(k.a,{variant:"contained",size:"medium",startIcon:Object(A.jsx)(p.a,{}),color:"primary",onClick:this.getWeather,fullWidth:!0,children:"Search"})]}),Object(A.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(A.jsxs)("div",{children:[Object(A.jsxs)("p",{style:{fontSize:30},children:[this.state.city,", ",this.state.state]}),Object(A.jsxs)("p",{children:[Math.round(1.8*(parseInt(this.state.maxTemp)-273))+32," / ",Math.round(1.8*(parseInt(this.state.minTemp)-273))+32]}),Object(A.jsxs)("p",{children:["Humidity: ",this.state.humidity+"%"]}),Object(A.jsxs)("p",{children:["Condition: ",this.state.condition]})]}),Object(A.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",alignContent:"flex-start",flexGrow:"1",alignItems:"center"},children:[Object(A.jsx)("p",{style:{fontSize:60},children:Math.round(1.8*(parseInt(this.state.temp)-273))+32}),Object(A.jsx)("img",{src:t,style:{height:"100px",width:"auto"}})]})]})]})]})]})})}}]),n}(i.a.Component),_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};c.a.render(Object(A.jsx)(i.a.StrictMode,{children:Object(A.jsx)(F,{})}),document.getElementById("root")),_()}},[[83,1,2]]]);
//# sourceMappingURL=main.c23d71a0.chunk.js.map