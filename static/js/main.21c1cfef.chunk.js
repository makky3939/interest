(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),i=(a(16),a(3)),s=a(4),o=a(6),u=a(5),d=a(7),m=a(1),f=function(e){var t=e.split("\n");return function(e){var t=e.map(function(e){return e.split("\t")}),a=t[0];return t.slice(1).map(function(e){for(var t={},n=0;n<a.length;n++)t[a[n].trim()]=e[n]||"";return t})}(t=t.map(function(e){return e.replace(/\n$/,"")}))},p=function(e){var t=e.text,a=e.badgeClass;return r.a.createElement("div",null,r.a.createElement("span",{className:a},t))},b=a(9);function h(e){var t=e.authors.split(",");if(t.length>0){var a=t[0];return(a=(a=a.split(" ")).slice(-1)[0])+e.year}}var v=function(e){var t=e.paper,a=e.idx;return r.a.createElement("div",{className:"card border-info mb-3",key:a},r.a.createElement("div",{className:"card-header text-muted"},"Added: ",t.date),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement("a",{href:t.link},t.title)),r.a.createElement("div",{className:"headerComponent"},function(e){var t="";if(e.conference.startsWith("j:")){var a=e.conference.slice(2);t+="@article{"+h(e)+",<br>",t+="&nbsp;&nbsp;journal={"+a+"},<br>"}else h(e),t+="@inproceedings{"+h(e)+",<br>",t+="&nbsp;&nbsp;booktitle={Proceedings of "+e.conference+"},<br>";t+='&nbsp;&nbsp;author="'+e.authors.replace(/, /g," and ")+'",<br>',t+="&nbsp;&nbsp;title={"+e.title+"},<br>";var n={__html:t+="}"};return r.a.createElement(b.a,{trigger:r.a.createElement("button",{class:"btn btn-info"}," BibTex export "),modal:!0},r.a.createElement("div",{dangerouslySetInnerHTML:n}))}(t),r.a.createElement(p,{text:t.conference,badgeClass:"badge badge-info"}),r.a.createElement(p,{text:t.year,badgeClass:"badge badge-success"})),r.a.createElement("p",{className:"card-text"},t.note)))},E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"filterVal",value:function(){var e=this.refs.myinput.value;this.props.onFilterVal(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",ref:"myinput",className:"form-control",placeholder:"Named Entity Recognition",onKeyUp:this.filterVal.bind(this)})))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFilterTextVal=a.handleFilterTextVal.bind(Object(m.a)(Object(m.a)(a))),a.state={data:null,filt:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3TV9KzYftbwV0gtWRZpTjMz9PSGHDU25705dbazQ_jmCYasQeL1YKP3jfZFY2kZ7PMWCYAVjLVG8h/pub?gid=0&single=true&output=tsv").then(function(e){return e.text()}).then(function(e){return f(e)}).then(function(t){return e.setState({data:t,filt:t})})}},{key:"handleFilterTextVal",value:function(e){e=e.toLowerCase();var t=this.state.data.filter(function(t){return t.title.toLowerCase().match(e)||t.conference.toLowerCase().match(e)||t.note.toLowerCase().match(e)||t.year.match(e)});this.setState({filt:t})}},{key:"render",value:function(){return this.state.filt?r.a.createElement("div",null,r.a.createElement(E,{onFilterVal:this.handleFilterTextVal}),r.a.createElement("div",{className:"card-columns"},this.state.filt.map(function(e,t){return r.a.createElement(v,{paper:e,idx:t})}))):r.a.createElement("div",null," Loading... ")}}]),t}(n.Component);c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.21c1cfef.chunk.js.map