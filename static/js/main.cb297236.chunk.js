(this.webpackJsonpkadai2=this.webpackJsonpkadai2||[]).push([[0],{15:function(t,e,n){t.exports=n(26)},20:function(t,e,n){},21:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=(n(20),n(8)),s=n(5),l=n(9),u=n(10),m=n(13),h=(n(21),n(39)),d=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={dog:"https://random.dog/woof.json",normal:"/?random",gray:"/?frayscale",items:""},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"URL_dog",value:function(){this.setState({cat_url:this.state.dog})}},{key:"componentDidMount",value:function(){var t=this;return fetch(this.state.dog).then((function(t){return t.json()})).then((function(e){t.setState({items:""+e.url})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("p",null,this.state.items),o.a.createElement("img",{src:this.state.items,"max-width":300,height:300,"max-height":300,"margin-bottom":1})),o.a.createElement("div",null,o.a.createElement(h.a,{onClick:function(){return window.location.reload()},variant:"contained",color:"primary"},"reload")))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.cb297236.chunk.js.map