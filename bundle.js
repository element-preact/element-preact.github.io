!function(){"use strict";var e=function(){},t={},s=[],n=[];function o(o,r){var i,a,l,c,p=n;for(c=arguments.length;c-- >2;)s.push(arguments[c]);for(r&&null!=r.children&&(s.length||s.push(r.children),delete r.children);s.length;)if((a=s.pop())&&void 0!==a.pop)for(c=a.length;c--;)s.push(a[c]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof o)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&i?p[p.length-1]+=a:p===n?p=[a]:p.push(a),i=l;var h=new e;return h.nodeName=o,h.children=p,h.attributes=null==r?void 0:r,h.key=null==r?void 0:r.key,void 0!==t.vnode&&t.vnode(h),h}function r(e,t){for(var s in t)e[s]=t[s];return e}function i(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,l=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,c=[];function p(e){!e._dirty&&(e._dirty=!0)&&1==c.push(e)&&(t.debounceRendering||a)(h)}function h(){for(var e;e=c.pop();)e._dirty&&P(e)}function d(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function u(e){var t=r({},e.attributes);t.children=e.children;var s=e.nodeName.defaultProps;if(void 0!==s)for(var n in s)void 0===t[n]&&(t[n]=s[n]);return t}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,s,n,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)i(s,null),i(n,e);else if("class"!==t||o)if("style"===t){if(n&&"string"!=typeof n&&"string"!=typeof s||(e.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof s)for(var r in s)r in n||(e.style[r]="");for(var r in n)e.style[r]="number"==typeof n[r]&&!1===l.test(r)?n[r]+"px":n[r]}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),n?s||e.addEventListener(t,b,a):e.removeEventListener(t,b,a),(e._listeners||(e._listeners={}))[t]=n}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==n?"":n}catch(e){}null!=n&&!1!==n||"spellcheck"==t||e.removeAttribute(t)}else{var c=o&&t!==(t=t.replace(/^xlink:?/,""));null==n||!1===n?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof n&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):e.setAttribute(t,n))}else e.className=n||""}function b(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var v=[],g=0,y=!1,_=!1;function k(){for(var e;e=v.shift();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function x(e,t,s,n,o,r){g++||(y=null!=o&&void 0!==o.ownerSVGElement,_=null!=e&&!("__preactattr_"in e));var i=C(e,t,s,n,r);return o&&i.parentNode!==o&&o.appendChild(i),--g||(_=!1,r||k()),i}function C(e,t,s,n,o){var r=e,i=y;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(r=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(r,e),N(e,!0))),r.__preactattr_=!0,r;var a,l,c=t.nodeName;if("function"==typeof c)return function(e,t,s,n){var o=e&&e._component,r=o,i=e,a=o&&e._componentConstructor===t.nodeName,l=a,c=u(t);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;o&&l&&(!n||o._component)?(M(o,c,3,s,n),e=o.base):(r&&!a&&($(r),e=i=null),o=B(t.nodeName,c,s),e&&!o.nextBase&&(o.nextBase=e,i=null),M(o,c,1,s,n),e=o.base,i&&e!==i&&(i._component=null,N(i,!1)));return e}(e,t,s,n);if(y="svg"===c||"foreignObject"!==c&&y,c=String(c),(!e||!d(e,c))&&(a=c,(l=y?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,r=l,e)){for(;e.firstChild;)r.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(r,e),N(e,!0)}var p=r.firstChild,h=r.__preactattr_,b=t.children;if(null==h){h=r.__preactattr_={};for(var v=r.attributes,g=v.length;g--;)h[v[g].name]=v[g].value}return!_&&b&&1===b.length&&"string"==typeof b[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=b[0]&&(p.nodeValue=b[0]):(b&&b.length||null!=p)&&function(e,t,s,n,o){var r,i,a,l,c,p=e.childNodes,h=[],u={},f=0,b=0,v=p.length,g=0,y=t?t.length:0;if(0!==v)for(var _=0;_<v;_++){var k=p[_],x=k.__preactattr_,S=y&&x?k._component?k._component.__key:x.key:null;null!=S?(f++,u[S]=k):(x||(void 0!==k.splitText?!o||k.nodeValue.trim():o))&&(h[g++]=k)}if(0!==y)for(var _=0;_<y;_++){l=t[_],c=null;var S=l.key;if(null!=S)f&&void 0!==u[S]&&(c=u[S],u[S]=void 0,f--);else if(b<g)for(r=b;r<g;r++)if(void 0!==h[r]&&(w=i=h[r],L=o,"string"==typeof(B=l)||"number"==typeof B?void 0!==w.splitText:"string"==typeof B.nodeName?!w._componentConstructor&&d(w,B.nodeName):L||w._componentConstructor===B.nodeName)){c=i,h[r]=void 0,r===g-1&&g--,r===b&&b++;break}c=C(c,l,s,n),a=p[_],c&&c!==e&&c!==a&&(null==a?e.appendChild(c):c===a.nextSibling?m(a):e.insertBefore(c,a))}var w,B,L;if(f)for(var _ in u)void 0!==u[_]&&N(u[_],!1);for(;b<=g;)void 0!==(c=h[g--])&&N(c,!1)}(r,b,s,n,_||null!=h.dangerouslySetInnerHTML),function(e,t,s){var n;for(n in s)t&&null!=t[n]||null==s[n]||f(e,n,s[n],s[n]=void 0,y);for(n in t)"children"===n||"innerHTML"===n||n in s&&t[n]===("value"===n||"checked"===n?e[n]:s[n])||f(e,n,s[n],s[n]=t[n],y)}(r,t.attributes,h),y=i,r}function N(e,t){var s=e._component;s?$(s):(null!=e.__preactattr_&&i(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||m(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;N(e,!0),e=t}}var w=[];function B(e,t,s){var n,o=w.length;for(e.prototype&&e.prototype.render?(n=new e(t,s),O.call(n,t,s)):((n=new O(t,s)).constructor=e,n.render=L);o--;)if(w[o].constructor===e)return n.nextBase=w[o].nextBase,w.splice(o,1),n;return n}function L(e,t,s){return this.constructor(e,s)}function M(e,s,n,o,r){e._disable||(e._disable=!0,e.__ref=s.ref,e.__key=s.key,delete s.ref,delete s.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(s,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=s,e._disable=!1,0!==n&&(1!==n&&!1===t.syncComponentUpdates&&e.base?p(e):P(e,1,r)),i(e.__ref,e))}function P(e,s,n,o){if(!e._disable){var i,a,l,c=e.props,p=e.state,h=e.context,d=e.prevProps||c,m=e.prevState||p,f=e.prevContext||h,b=e.base,y=e.nextBase,_=b||y,C=e._component,S=!1,w=f;if(e.constructor.getDerivedStateFromProps&&(p=r(r({},p),e.constructor.getDerivedStateFromProps(c,p)),e.state=p),b&&(e.props=d,e.state=m,e.context=f,2!==s&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,p,h)?S=!0:e.componentWillUpdate&&e.componentWillUpdate(c,p,h),e.props=c,e.state=p,e.context=h),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!S){i=e.render(c,p,h),e.getChildContext&&(h=r(r({},h),e.getChildContext())),b&&e.getSnapshotBeforeUpdate&&(w=e.getSnapshotBeforeUpdate(d,m));var L,O,T=i&&i.nodeName;if("function"==typeof T){var U=u(i);(a=C)&&a.constructor===T&&U.key==a.__key?M(a,U,1,h,!1):(L=a,e._component=a=B(T,U,h),a.nextBase=a.nextBase||y,a._parentComponent=e,M(a,U,0,h,!1),P(a,1,n,!0)),O=a.base}else l=_,(L=C)&&(l=e._component=null),(_||1===s)&&(l&&(l._component=null),O=x(l,i,h,n||!b,_&&_.parentNode,!0));if(_&&O!==_&&a!==C){var j=_.parentNode;j&&O!==j&&(j.replaceChild(O,_),L||(_._component=null,N(_,!1)))}if(L&&$(L),e.base=O,O&&!o){for(var D=e,R=e;R=R._parentComponent;)(D=R).base=O;O._component=D,O._componentConstructor=D.constructor}}for(!b||n?v.push(e):S||(e.componentDidUpdate&&e.componentDidUpdate(d,m,w),t.afterUpdate&&t.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);g||o||k()}}function $(e){t.beforeUnmount&&t.beforeUnmount(e);var s=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?$(n):s&&(null!=s.__preactattr_&&i(s.__preactattr_.ref,null),e.nextBase=s,m(s),w.push(e),S(s)),i(e.__ref,null)}function O(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function T(e,t,s){return x(s,e,{},!1,t,!1)}r(O.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=r(r({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),p(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),P(this,2)},render:function(){}});const{dispatch:U,connect:j,getState:D}=(e=>(t={})=>{let s=t,n=[];return{connect:(e,t)=>s=>(class extends O{execProps(){const{props:s}=this,n=e(s);let o={};return t&&(o=t(Object.assign({},s,n))),Object.assign({},s,n,o)}constructor(e){super(e);let t=this;t.execProps=t.execProps.bind(t),t.tempProps=t.execProps(),t.tempUpdate=function(){let e=t.execProps();((e,t)=>{let s=Object.keys(e),n=Object.keys(t);return s.length===n.length&&(s.length+n.length===0||s.every(s=>e[s]===t[s]))})(t.tempProps,e)||(t.tempProps=e,t.forceUpdate&&t.forceUpdate())},n.push(t.tempUpdate)}componentWillUnmount(){n.splice(n.indexOf(this.tempUpdate),1)}render(){return o(s,Object.assign({},this.tempProps,this.props))}}),getState:()=>s,dispatch:(t,o)=>{let r=t(s);e&&e.map(e=>e(s,r,o)),r!==s&&(s=r,n.map(e=>e()))}}})()({hash:location.hash&&location.hash.replace(/^#\/?/,"")||"layout",document_map:new Map});addEventListener("hashchange",()=>U(e=>({...e,hash:location.hash&&location.hash.replace(/^#\/?/,"")||"layout"})));const R=[{title:"Basic",list:[{title:"Layout 布局",key:"layout"},{title:"Color 色彩",key:"color"},{title:"Typography 字体",key:"typography"},{title:"Icon 图标",key:"icon"},{title:"Button 按钮",key:"button"}]},{title:"Form",list:[{title:"Radio 单选框",key:"radio"},{title:"Checkbox 多选框",key:"checkbox"}]}];var E=j(()=>{const{hash:e="layout"}=D();return{activeKey:e}})(class extends O{render(){const{activeKey:e="layout"}=this.props;return o("nav",{className:"side-nav"},o("ul",null,o("li",{className:"nav-item"},o("a",null,"基础组件"),R.map(t=>o("div",{className:"nav-group"},o("div",{className:"nav-group__title"},t.title),o("ul",{className:"pure-menu-list"},t.list&&t.list.map(t=>o("li",{className:"nav-item"},o("a",{href:`#/${t.key}`,className:e===t.key?"active":""},t.title)))))))))}}),z={}.hasOwnProperty;function F(...e){for(var t=[],s=0;s<e.length;s++){var n=e[s];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var r=F.apply(null,n);r&&t.push(r)}else if("object"===o)for(var i in n)z.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}class W extends O{constructor(){super(...arguments),this.classNames=F.bind(this)}className(...e){return F(e.concat(this.props.className))}style(e){return Object.assign({},e,this.props.style)}}var I=Object.freeze({Row:class extends W{getChildContext(){return{gutter:this.props.gutter}}getStyle(){return this.context.gutter?{paddingLeft:this.context.gutter/2,paddingRight:this.context.gutter/2}:{paddingLeft:0,paddingRight:0}}render(){const{justify:e="start",align:t="top",tag:s="div",type:n,children:r}=this.props;return o(s,{className:this.className("el-row",`is-justify-${e}`,`is-align-${t}`,{"el-row--flex":"flex"===n}),style:this.style(this.getStyle())},r)}},Col:class extends W{getStyle(){return this.context.gutter?{paddingLeft:this.context.gutter/2,paddingRight:this.context.gutter/2}:{paddingLeft:0,paddingRight:0}}render(){const{tag:e="div",span:t=24,children:s}=this.props;let n=[];return["span","offset","pull","push"].forEach(e=>{this.props[e]>=0&&n.push("span"!==e?`el-col-span-${t}`:`el-col-${this.props[e]}`)}),["xs","sm","md","lg"].forEach(e=>{if("object"==typeof this.props[e]){let t=this.props[e];Object.keys(t).forEach(s=>{n.push("span"!==s?`el-col-${e}-${s}-${t[s]}`:`el-col-${e}-${t[s]}`)})}else this.props[e]>=0&&n.push(`el-col-${e}-${Number(this.props[e])}`)}),o(e,{className:this.className("el-col",n),style:this.style(this.getStyle())},s)}}});var A=Object.assign(class extends W{constructor(){super(...arguments),this.onClick=(e=>{this.props.loading||this.props.onClick&&this.props.onClick(e)})}render(e){const{type:t="default",size:s,disabled:n,loading:r,plain:i,nativeType:a="button",icon:l}=this.props;return o("button",{style:this.style(),className:this.className("el-button",`el-button--${t}`,s&&`el-button--${s}`,{"is-disabled":n,"is-loading":r,"is-plain":i}),disabled:n,type:a,onClick:this.onClick},r&&o("i",{className:"el-icon-loading"}),l&&!r&&o("i",{className:`el-icon-${l}`}),e.children&&!!e.children.length&&o("span",null,e.children))}},{Group:class extends W{render(){return o("div",{style:this.style(),className:this.className("el-button-group")},this.props.children)}}});class H extends W{constructor(e){super(e),this.state={checked:this.getChecked(e)}}componentWillReceiveProps(e){const t=this.getChecked(e);this.state.checked!=t&&this.setState({checked:t})}onChange(e){const t=e.target.checked;t&&this.props.onChange&&this.props.onChange(this.props.value),this.setState({checked:t})}onFocus(){this.setState({focus:!0})}onBlur(){this.setState({focus:!1})}getChecked(e){return e.model==e.value||Boolean(e.checked)}render(){const{checked:e,focus:t}=this.state,{disabled:s,value:n,children:r,name:i}=this.props;return o("label",{style:this.style(),className:this.className("el-radio")},o("span",{className:this.classNames({"el-radio__input":!0,"is-checked":e,"is-disabled":s,"is-focus":t})},o("span",{className:"el-radio__inner"}),o("input",{type:"radio",className:"el-radio__original",checked:e,disabled:s,name:i,value:n,onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this)})),o("span",{className:"el-radio__label"},r||n))}}H.elementType="Radio";class V extends H{constructor(){super(...arguments),this.size=(()=>this.parent().props.size),this.isDisabled=(()=>this.props.disabled||this.parent().props.disabled),this.activeStyle=(()=>({backgroundColor:this.parent().props.fill||"",borderColor:this.parent().props.fill||"",color:this.parent().props.textColor||""}))}parent(){return this.context}render(){const{children:e,value:t,name:s}=this.props;return o("label",{style:this.style(),className:this.className("el-radio-button",this.props.size&&`el-radio-button--${this.size()}`,{"is-active":this.state.checked})},o("input",{type:"radio",className:"el-radio-button__orig-radio",checked:this.state.checked,disabled:this.isDisabled(),name:s,value:t,onChange:this.onChange.bind(this)}),o("span",{className:"el-radio-button__inner",style:this.state.checked?this.activeStyle():{}},e&&e.length||t))}}V.elementType="RadioButton";var G=Object.assign(H,{Button:V,Group:class extends W{constructor(e){super(e),this.state={value:e.value}}getChildContext(){const{props:e}=this;return{props:e}}onChange(e){this.setState({value:e}),this.props.onChange&&this.props.onChange(e)}render(e){return o("div",{style:this.style(),className:this.className("el-radio-group")},e.children.map(e=>o(e.nodeName,Object.assign({},e.attributes,{onChange:this.onChange.bind(this),model:this.state.value,size:this.props.size,children:e.children}))))}}});class K extends W{constructor(e){super(e),this.state={checked:e.checked,focus:e.focus,label:this.getLabel(e)}}componentWillReceiveProps(e){this.setState({checked:e.checked,focus:e.focus,label:this.getLabel(e)})}onFocus(){this.setState({focus:!0})}onBlur(){this.setState({focus:!1})}onChange(e){if(e.target instanceof HTMLInputElement){const{label:t}=this.state,{trueLabel:s,falseLabel:n}=this.props,o=e.target.checked,r=this.context.ElCheckboxGroup;if(r){const e=r.state.options.length+(o?1:-1);if(void 0!==r.props.min&&e<r.props.min)return;if(void 0!==r.props.max&&e>r.props.max)return}let i=t;(this.props.trueLabel||this.props.falseLabel)&&(i=o?s:n),this.setState({checked:o,label:i},()=>{this.props.onChange&&this.props.onChange(o)})}}getLabel(e){return e.trueLabel||e.falseLabel?e.checked?e.trueLabel:e.falseLabel:e.label}render(){return o("label",{style:this.style(),className:this.className("el-checkbox")},o("span",{className:this.classNames("el-checkbox__input",{"is-disabled":this.props.disabled,"is-checked":this.state.checked,"is-indeterminate":this.props.indeterminate,"is-focus":this.state.focus})},o("span",{className:"el-checkbox__inner"}),o("input",{className:"el-checkbox__original",type:"checkbox",checked:this.state.checked,disabled:this.props.disabled,onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this)})),o("span",{className:"el-checkbox__label"},this.state.label||this.props.children))}}K.elementType="Checkbox";class q extends K{render(){const e=this.context.ElCheckboxGroup;return o("label",{style:this.style(),className:this.className("el-checkbox-button",e.props.size?"el-checkbox-button--"+e.props.size:"",{"is-disabled":this.props.disabled,"is-checked":this.state.checked,"is-focus":this.state.focus})},o("input",{className:"el-checkbox-button__original",type:"checkbox",checked:this.state.checked,disabled:this.props.disabled,onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this)}),o("span",{className:"el-checkbox-button__inner",style:this.state.checked?{boxShadow:"-1px 0 0 0 "+e.props.fill,backgroundColor:e.props.fill||"",borderColor:e.props.fill||"",color:e.props.textColor||""}:{}},this.state.label||this.props.children))}}q.elementType="CheckboxButton";var J=Object.assign(K,{Group:class extends W{constructor(e){super(e),this.state={options:this.props.value||[]}}componentWillReceiveProps(e){e.value!==this.props.value&&this.setState({options:e.value})}getChildContext(){return{ElCheckboxGroup:this}}onChange(e,t){const s=this.state.options.indexOf(e);t?-1===s&&this.state.options.push(e):this.state.options.splice(s,1),this.forceUpdate(),this.props.onChange&&this.props.onChange(this.state.options)}render(e){const{options:t}=this.state;return o("div",{style:this.style(),className:this.className("el-checkbox-group")},e.children.map((e,s)=>{const n=Object.assign({},e.attributes);return o(e.nodeName,Object.assign({},n,{key:s,checked:n.checked||t.indexOf(n.value)>=0||t.indexOf(n.label)>=0,onChange:this.onChange.bind(this,n.value?n.value:0===n.value?0:n.label),children:e.children}))}))}},Button:q}),Q=Object.freeze({Layout:I,Button:A,Icon:class extends W{render(){return o("i",{style:this.style(),className:this.className(`el-icon-${this.props.name}`)})}},Radio:G,Checkbox:J});class X extends O{componentDidMount(){const{onChange:e,value:t}=this.props;this.cm=CodeMirror(this.editor,{mode:"jsx",keyMap:"sublime"}),this.cm.setValue(t),this.cm.on("changes",t=>{e&&(clearTimeout(this.timeout),this.timeout=setTimeout(()=>{e(t.getValue())},300))})}render(){return o("div",{className:"editor",ref:e=>this.editor=e})}}class Y extends O{constructor(e){super(e),this.blockControl=(()=>{this.setState({showBlock:!this.state.showBlock})}),this.renderSource=(()=>{const e={createElement:o,vnode:null},t=["context","React","Component"],s=[this,e,O];for(const e in Q)t.push(e),s.push(Q[e]);const n=Babel.transform(`\n        class Demo extends Component {\n            ${this.state.code}\n        }\n        React.vnode = <Demo {...context.props} />\n        `,{presets:["react"]}).code;return t.push(n),new Function(...t).apply(null,s),e.vnode}),this.refContainer=(e=>{this.container=e}),this.playerId=`${Math.floor(1e9*Math.random()).toString(36)}`,this.document=this.props.code.match(/([^]*)\n?(```[^]+```)/),this.description=marked(this.document[1]),this.source=this.document[2].match(/```(.*)\n?([^]+)```/),this.state={showBlock:!1,code:this.source[2]}}componentDidMount(){this.renderSource()}render(){const{name:e}=this.props,{code:t}=this.state;return o("div",{className:`demo-block demo-box demo-${e}`},o("div",{className:"source"},this.renderSource()),this.state.showBlock&&o("div",{className:"meta"},this.description&&o("div",{className:"description",dangerouslySetInnerHTML:{__html:this.description}}),o(X,{value:t,onChange:e=>this.setState({code:e})})),o("div",{className:"demo-block-control",onClick:this.blockControl},this.state.showBlock?o("span",null,o("i",{className:"el-icon-caret-top"})," 隐藏"):o("span",null,o("i",{className:"el-icon-caret-bottom"})," 显示")))}}!async function e(){const{document_map:t}=D(),s=Array.from(t.keys()).filter(e=>!t.get(e));for(let e=0;e<s.length;e++){const n=await fetch(`/docs/${s[e]}.md`).then(e=>e.text());t.set(s[e],n)}U(e=>({...e,document_map:new Map(t)})),setTimeout(e,1e3)}();var Z=j(()=>{const{document_map:e,hash:t="layout"}=D(),s=e.get(t);return s||e.set(t,null),{name:t,document:s}})(class extends O{constructor(e){super(e),this.components=new Map,this.renderer=new marked.Renderer,this.renderer.table=((e,t)=>`<table class="grid"><thead>${e}</thead><tbody>${t}</tbody></table>`)}componentDidMount(){this.renderDOM()}componentDidUpdate(){this.renderDOM()}renderDOM(){for(const[e,t]of this.components){const s=document.getElementById(e);s instanceof HTMLElement&&T(t,s)}}render(){const{components:e}=this,{document:t,name:s}=this.props;return t?(e.clear(),o("div",{className:"content"},o("div",{dangerouslySetInnerHTML:{__html:marked(t.replace(/:::\s?demo\s?([^]+?):::/g,(t,n,r)=>{const i=r.toString(36);return e.set(i,o(Y,{name:s,code:n},n)),`<div id=${i}></div>`}),{renderer:this.renderer})}}))):o("div",{className:"content"},o("span",null))}});const ee=document.getElementById("app");T(o("div",{className:"main container"},o(E,null),o(Z,null)),ee)}();
//# sourceMappingURL=bundle.js.map