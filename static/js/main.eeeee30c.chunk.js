(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),i=n.n(l),c=(n(17),n(3)),s=n(4),o=n(6),u=n(5),d=n(7),m=n(1),p=function(e){var t=e.split("\n");return function(e){var t=e.map(function(e){return e.split("\t")}),n=t[0];return t.slice(1).map(function(e){for(var t={},a=0;a<n.length;a++)t[n[a].trim()]=e[a]||"";return t})}(t=t.map(function(e){return e.replace(/\n$/,"")}))},b=n(10),f=function(e){var t=e.text,n=e.badgeClass;return r.a.createElement("div",null,r.a.createElement("span",{className:n},t))},h=n(9);n(19);function v(e){return e.year.split(",")[0]}function g(e){var t=e.conference;return t.startsWith("j:")?t.slice(2):t}function E(e){var t=e.authors.split(","),n=v(e);if(t.length>0){var a=t[0];return(a=(a=a.split(" ")).slice(-1)[0])+n}}var j=function(e){var t=e.paper,n=e.idx;return r.a.createElement("div",{className:"card border-info mb-3",key:n},r.a.createElement("div",{className:"card-header text-muted"},"Added: ",t.date),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement("a",{href:t.link},t.title)),r.a.createElement("div",{className:"headerComponent"},function(e){var t="",n=g(e);if(e.conference.startsWith("j:")){t+="@article{"+E(e)+",<br>",t+="&nbsp;&nbsp;journal={"+n+"},<br>";var a=function(e){var t=e.year.split(","),n=t.length;return 2==n?[t[1],"-1"]:3==n?[t[1],t[2]]:["-1","-1"]}(e),l=Object(b.a)(a,2),i=l[0],c=l[1];"-1"!=i&&(t+="&nbsp;&nbsp;volume={"+i+"},<br>"),"-1"!=c&&(t+="&nbsp;&nbsp;number={"+c+"},<br>")}else t+="@inproceedings{"+E(e)+",<br>",t+="&nbsp;&nbsp;booktitle={Proceedings of "+n+"},<br>";t+='&nbsp;&nbsp;author="'+e.authors.replace(/, /g," and ")+'",<br>',t+="&nbsp;&nbsp;title={"+e.title+"},<br>",t+="&nbsp;&nbsp;year={"+v(e)+"},<br>";var s={__html:t+="}"};return r.a.createElement(h.a,{trigger:r.a.createElement("button",{class:"btn btn-info"}," BibTex export "),modal:!0},r.a.createElement("div",{dangerouslySetInnerHTML:s}))}(t),r.a.createElement(f,{text:g(t),badgeClass:"badge badge-info"}),r.a.createElement(f,{text:v(t),badgeClass:"badge badge-success"})),r.a.createElement("p",{className:"card-text"},t.note)))},y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"filterVal",value:function(){var e=this.refs.myinput.value;this.props.onFilterVal(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",ref:"myinput",className:"form-control",placeholder:"Named Entity Recognition",onKeyUp:this.filterVal.bind(this)})))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFilterTextVal=n.handleFilterTextVal.bind(Object(m.a)(Object(m.a)(n))),n.state={data:null,filt:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3TV9KzYftbwV0gtWRZpTjMz9PSGHDU25705dbazQ_jmCYasQeL1YKP3jfZFY2kZ7PMWCYAVjLVG8h/pub?gid=0&single=true&output=tsv").then(function(e){return e.text()}).then(function(e){return p(e)}).then(function(t){return e.setState({data:t,filt:t})})}},{key:"handleFilterTextVal",value:function(e){e=e.toLowerCase();var t=this.state.data.filter(function(t){return t.title.toLowerCase().match(e)||t.conference.toLowerCase().match(e)||t.note.toLowerCase().match(e)||t.year.match(e)});this.setState({filt:t})}},{key:"render",value:function(){return this.state.filt?r.a.createElement("div",null,r.a.createElement(y,{onFilterVal:this.handleFilterTextVal}),r.a.createElement("div",{className:"card-columns"},this.state.filt.map(function(e,t){return r.a.createElement(j,{paper:e,idx:t})}))):r.a.createElement("div",null," Loading... ")}}]),t}(a.Component);i.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.eeeee30c.chunk.js.map