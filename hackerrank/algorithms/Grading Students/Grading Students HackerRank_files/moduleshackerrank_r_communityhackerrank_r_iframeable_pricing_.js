(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/SOd":function(t,e,o){"use strict";var n=o("+/D7");const i=Object(n.a)({NATIVE_AD:{LOAD_NATIVE_ADS:"LOAD_NATIVE_ADS",DISMISS_NATIVE_ADS:"DISMISS_NATIVE_ADS"}});e.a=i},"0e0P":function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o("pVnL"),i=o.n(n),r=o("lSNA"),s=o.n(r),a=o("cDcd"),p=o.n(a),l=o("eOGF");function c(t){class e extends p.a.Component{constructor(){super(...arguments),s()(this,"state",{isAppMounted:!!Object(l.A)()})}componentDidMount(){this.setAppMounted()}setAppMounted(){this.state.isAppMounted||this.setState({isAppMounted:!0})}render(){const e=this.props,o=this.state.isAppMounted;return p.a.createElement(t,i()({},e,{isAppMounted:o}))}}return e}},"3N0A":function(t,e,o){"use strict";var n=o("lSNA"),i=o.n(n),r=o("cDcd"),s=o("faye"),a=o.n(s),p=o("0e0P"),l=o("TXrv");class c extends r.Component{constructor(t){super(t),i()(this,"node",void 0);const e=t.isAppMounted,o=t.target;this.node=null,this.state={targetIsAvailable:e&&!!Object(l.b)(o)}}componentDidMount(){this.checkTargetAvailability()}componentDidUpdate(){this.checkTargetAvailability()}componentWillUnmount(){const t=this.node;t&&t.parentNode.removeChild(t)}checkTargetAvailability(){const t=this.props.target;!this.state.targetIsAvailable&&Object(l.b)(t)&&this.setState({targetIsAvailable:!0})}renderPortal(){const t=this.props,e=t.target,o=t.createContainer,n=t.children,i=Object(l.b)(e);let r=i;return o&&(r=this.node,r||(r=document.createElement("div"),r.setAttribute("class","portal-wrapper"),i.appendChild(r),this.node=r)),r?a.a.createPortal(n,r):0}render(){return this.state.targetIsAvailable?this.renderPortal():null}}i()(c,"defaultProps",{target:"body",createContainer:!0}),e.a=Object(p.a)(c)},"61np":function(t,e,o){"use strict";var n=o("pVnL"),i=o.n(n),r=o("QILm"),s=o.n(r),a=o("lSNA"),p=o.n(a),l=o("cDcd"),c=o.n(l),d=o("TSYQ"),h=o.n(d),u=o("37OS"),m=o.n(u),f=o("EA6I"),v=o("FLdU"),g=o("/n7Q");o("GSOj");const T=["className","onTooltipOpen","onTooltipClose","delay","disabled","id","aliveTime","variant","content"],b=Object(v.a)(),A="dark",w="light";class E extends l.Component{constructor(){var t;super(),t=this,p()(this,"popoverTimeout",void 0),p()(this,"delayTimeout",void 0),p()(this,"clearTimeouts",()=>{this.popoverTimeout&&clearTimeout(this.popoverTimeout),this.delayTimeout&&clearTimeout(this.delayTimeout)}),p()(this,"onKeydown",t=>{"Escape"===t.key&&(t.preventDefault(),t.stopPropagation(),this.closePopover(t,!0))}),p()(this,"onAnyPopupOpen",t=>{this.state.target&&t!==this.state.target&&(this.clearTimeouts(),this.setState({popoverOpen:!1,target:void 0}))}),p()(this,"setPopoverOpen",t=>{const e=this.props.onTooltipOpen;this.setState(t,()=>{b.emit("onUITooltipOpen",this.state.target),e()})}),p()(this,"openPopover",(t,e)=>{const o=this.props,n=o.disabled,i=o.delay,r=this.state.popoverOpen;if(this.clearTimeouts(),r||n)return;const s={popoverOpen:!0};e&&(s.target=t.currentTarget),this.delayTimeout=setTimeout(()=>this.setPopoverOpen(s),i)}),p()(this,"closePopover",(function(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=t.props,i=n.onTooltipClose,r=n.aliveTime;t.clearTimeouts();const s=o?0:r;t.popoverTimeout=setTimeout(()=>{t.setState({popoverOpen:!1,target:void 0},()=>i())},s)})),p()(this,"bindTriggerEvents",t=>{const e=c.a.Children.only(t),o=t=>{const o="focus"===t.type;this.openPopover(t,!0),o?e.props.onFocus&&e.props.onFocus(t):e.props.onMouseEnter&&e.props.onMouseEnter(t)},n=t=>{const o="blur"===t.type;this.closePopover(t),o?e.props.onBlur&&e.props.onBlur(t):e.props.onMouseLeave&&e.props.onMouseLeave(t)};return c.a.cloneElement(e,{onFocus:o,onMouseEnter:o,onMouseLeave:n,onBlur:n})}),this.state={popoverOpen:!1},this.onMouseEnter=this.openPopover.bind(this,!1),this.wrapperRef=Object(l.createRef)()}componentDidMount(){const t=this.props.id;b.on("onUITooltipOpen",this.onAnyPopupOpen),document.addEventListener("keydown",this.onKeydown),this.wrapperRef.current.firstChild.setAttribute("aria-describedby",t)}componentDidUpdate(t){t.children!==this.props.children&&this.wrapperRef.current.firstChild.setAttribute("aria-describedby",this.props.id)}componentWillUnmount(){b.off("onUITooltipOpen",this.onAnyPopupOpen),document.removeEventListener("keydown",this.onKeydown),this.clearTimeouts()}getTooltipContent(){const t=this.props.content;return"function"==typeof t?t():t}renderPopover(){const t=this.props,e=this.state,o=t.className,n=(t.onTooltipOpen,t.onTooltipClose,t.delay,t.disabled),r=t.id,a=(t.aliveTime,t.variant),p=(t.content,s()(t,T)),l=e.target;if(!n)return c.a.createElement(f.a,i()({},p,{id:r,role:"tooltip",className:h()("ui-tooltip",o,{light:a===w}),open:!0,onMouseEnter:this.onMouseEnter,onMouseLeave:this.closePopover,target:l}),this.getTooltipContent())}render(){const t=this.state.popoverOpen,e=this.props.children,o=this.bindTriggerEvents(e);return c.a.createElement(l.Fragment,null,c.a.createElement("div",{className:"ui-tooltip-wrapper",ref:this.wrapperRef},o),t&&this.renderPopover())}}p()(E,"defaultProps",{aliveTime:300,onTooltipOpen:m.a,onTooltipClose:m.a,disabled:!1,variant:A,delay:0}),e.a=Object(g.d)("tooltip")(E)},EA6I:function(t,e,o){"use strict";var n=o("pVnL"),i=o.n(n),r=o("QILm"),s=o.n(r),a=o("lSNA"),p=o.n(a),l=o("cDcd"),c=o.n(l),d=o("TSYQ"),h=o.n(d),u=o("dvg7"),m=o.n(u),f=o("37OS"),v=o.n(f),g=o("TXrv"),T=o("3N0A");o("dcnl");const b=["target","coordinate","align","showTip","open","className","onClose","popoverSpace"],A=25,w=parseInt(10,10)+parseInt(A,10)/2;class E extends l.Component{constructor(){super(...arguments),p()(this,"popoverElement",void 0),p()(this,"popoverWrap",void 0),p()(this,"popoverTip",void 0),p()(this,"getNewAlignment",(t,e,o)=>{const n=["top","top-right","top-left","right","left","bottom","bottom-right","bottom-left"];let i=0,r=t,s=n.indexOf(t);0!==s&&(t.indexOf("-right")>0||t.indexOf("-left")>0)?s-=1:s+=1;do{if(i++,i===n.length)break;s%=n.length,r=n[s]}while(!this.checkPopoverOverflow(n[s++],e,o));return r}),p()(this,"checkPopoverOverflow",(t,e,o)=>{const n=this.getPopoverDimension(),i=n.popoverWrapHeight,r=n.popoverWrapWidth,s=this.getPopupCoordinates(t),a=s.left,p=s.top;return a+r>e||p+i>o||p<0||a<0}),p()(this,"getPopupCoordinates",t=>{const e=this.getPopoverDimension(),o=e.popoverWrapHeight,n=e.popoverWrapWidth,i=this.getTargetOffsets(),r=i.offsetTop,s=i.offsetLeft,a=i.offsetWidth,p=i.offsetHeight,l=this.props,c=l.popoverSpace,d=l.showTip&&a<2*w?w-a/2:0;let h,u;switch(t){case"top":h=s+a/2-n/2,u=r-o-c;break;case"top-right":h=s+a-n+d,u=r-o-c;break;case"top-left":h=s-d,u=r-o-c;break;case"right":h=s+a+c,u=r+p/2-o/2;break;case"bottom":h=s+a/2-n/2,u=r+p+c;break;case"bottom-right":h=s+a-n+d,u=r+p+c;break;case"bottom-left":h=s-d,u=r+p+c;break;case"left":h=s-n-c,u=r+p/2-o/2;break;default:h=0,u=0}return{left:h,top:u}}),p()(this,"positionPopover",()=>{const t=this.popoverWrap,e=this.popoverTip,o=this.props,n=o.open,i=o.target,r=o.align,s=o.coordinate,a=o.showTip;if(!n)return;const p=this.getContainmentDimension(),l=p.containmentWidth,c=p.containmentHeight;let d,h,u;s?Object(g.e)(t,s):i&&(u=this.checkPopoverOverflow(r,l,c),u?(d=this.getNewAlignment(r,l,c),h=this.getPopupCoordinates(d),a&&(e.classList.remove("align-tip-"+r),e.classList.add("align-tip-"+d)),t.classList.remove("align-popover-"+r),t.classList.add("align-popover-"+d)):h=this.getPopupCoordinates(r),Object(g.e)(t,{left:h.left+"px",top:h.top+"px"}))})}componentDidMount(){this.positionPopover(),window.addEventListener("resize",this.positionPopover)}shouldComponentUpdate(t){const e=this.props;return t.open!==e.open||t.children!==e.children}componentDidUpdate(){this.positionPopover()}componentWillUnmount(){window.removeEventListener("resize",this.positionPopover)}getPopoverDimension(){const t=this.popoverWrap,e=t.offsetWidth;return{popoverWrapHeight:t.offsetHeight,popoverWrapWidth:e}}getContainmentDimension(){return{containmentWidth:window.innerWidth,containmentHeight:document.documentElement.scrollHeight}}getTargetOffsets(){const t=this.props.target,e=Object(g.a)(t),o=e.top,n=e.left,i=t.getBoundingClientRect();return{offsetTop:o,offsetLeft:n,offsetWidth:i.width,offsetHeight:i.height}}render(){const t=this.props,e=t.target,o=t.coordinate,n=t.align,r=t.showTip,a=t.open,p=t.className,l=t.onClose,d=(t.popoverSpace,s()(t,b));return a&&(e||o)?c.a.createElement(T.a,null,c.a.createElement(m.a,{onClickOutside:l},c.a.createElement("div",{className:h()("custom-popover",p),ref:t=>{this.popoverElement=t}},c.a.createElement("div",i()({ref:t=>{this.popoverWrap=t},className:h()("popover-wrap","align-popover-"+n,{"has-tip":r})},d),c.a.createElement("div",{className:"content"},this.props.children),r&&c.a.createElement("div",{ref:t=>{this.popoverTip=t},className:h()("tip","align-tip-"+n)}))))):null}}p()(E,"defaultProps",{align:"top",showTip:!0,open:!1,popoverSpace:15,onClose:v.a}),e.a=E},GSOj:function(t,e,o){},TXrv:function(t,e,o){"use strict";function n(t){return"string"==typeof t?document.querySelector(t):t}function i(t,e,o){const n="string"==typeof e?{[e]:o}:e;Object.assign(t.style,n)}function r(t){const e=document,o=e.body,n=e.documentElement,i=o.scrollTop||n.scrollTop,r=o.scrollLeft||n.scrollLeft,s=t.getBoundingClientRect();return{top:s.top+i,left:s.left+r}}function s(t){return t===window?window.scrollY:t.scrollTop}function a(t){return t.offsetWidth>0&&t.offsetHeight>0}o.d(e,"b",(function(){return n})),o.d(e,"e",(function(){return i})),o.d(e,"a",(function(){return r})),o.d(e,"c",(function(){return s})),o.d(e,"d",(function(){return a}))},V6Zm:function(t,e,o){"use strict";o("/KAi"),o("Oyvg");const n={name:function(t){return t&&t.length>1},email:function(t){return t&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},password:function(t){return t&&t.length>=6},numeric:function(t){return t&&/(^$)|(^\d+$)/.test(t)},url:function(t){const e=new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!{0}'()*+,;=.]+$/,"i");return t&&e.test(t)},githubRepo:function(t){return t&&/github\.com\/([a-zA-Z-]+)(\/)+([a-zA-Z-]+)/.test(t)},required:function(t){if(Array.isArray(t))return!!t.length;switch(typeof t){case"string":return!!t.trim();case"number":return Number.isFinite(t);default:return!!t}},phoneNumber:function(t){return t&&t.length<=11&&/^[0-9]+$/.test(t)},requiredOption:function(t){return t&&"N/A"!==t.value}};e.a=n},dcnl:function(t,e,o){},p0DI:function(t,e,o){"use strict";var n=o("lSNA"),i=o.n(n),r=o("cDcd"),s=o.n(r);class a extends s.a.Component{constructor(){super(),i()(this,"state",void 0),this.state={}}showChild(){this.setState({showChild:!0})}componentDidMount(){this.showChild()}render(){return this.state.showChild?this.props.children:null}}e.a=a},xNbf:function(t,e,o){"use strict";o("rGqo");var n=o("pVnL"),i=o.n(n),r=o("QILm"),s=o.n(r),a=o("lSNA"),p=o.n(a),l=o("cDcd"),c=o.n(l),d=o("p0DI");const h=["diameter","color"];class u extends l.PureComponent{constructor(t){super(t),p()(this,"loaderId",void 0),p()(this,"animationDuration",void 0),p()(this,"totalParts",void 0);const e=t.id;this.loaderId="hr-loader-"+(e||Math.ceil(1e7*Math.random())),this.animationDuration=1,this.totalParts=9}renderAnimationTag(t){const e=this.props,o=e.color,n=e.loadingColor,i=this.animationDuration,r=this.loaderId,s=this.totalParts,a=i/3,p=`${r}-${t}`,l=i/s*(s-t);return c.a.createElement("animate",{attributeName:"fill",from:n,to:o,id:p,dur:a+"s",begin:`${l}s;${p}.end+${.6666*i}s`})}renderSvg(){const t=this.props,e=t.diameter,o=t.color,n=s()(t,h);return["loadingColor","loadOnClientSide","id"].forEach(t=>{delete n[t]}),c.a.createElement("svg",i()({version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:e+"px",height:e+"px",viewBox:"0 0 1100 1100"},n),c.a.createElement("g",null,c.a.createElement("path",{d:"M382.662,164.463c-10.904,0-114.259,98.957-106.185,107.011c8.012,8.033,202.659,8.033,210.629,0 C495.151,263.42,393.593,164.463,382.662,164.463z",fill:o}),c.a.createElement("path",{d:"M724.819,929.33c-11.007,0-114.606-99.256-106.562-107.328c8.042-8.072,203.238-8.072,211.297,0 C837.683,830.074,735.786,929.33,724.819,929.33z",fill:o}),c.a.createElement("line",{fill:"none",stroke:o,strokeWidth:"140",strokeMiterlimit:"8",x1:"431.362",y1:"548.118",x2:"696.214",y2:"548.467"}),c.a.createElement("line",{fill:"none",stroke:o,strokeWidth:"140",strokeMiterlimit:"8",x1:"723.914",y1:"332.673",x2:"723.914",y2:"842.504"}),c.a.createElement("line",{fill:"none",stroke:o,strokeWidth:"140",strokeMiterlimit:"8",x1:"381.794",y1:"239.607",x2:"381.794",y2:"761.195"})),c.a.createElement("path",{d:"M1013.021,546.036c0.001,0.287,0.001,0.573,0.001,0.861c-0.002,45.46-6.576,89.267-18.808,130.652 c-12.233,41.379-30.134,80.332-52.821,115.977l67.489,42.957c26.628-41.836,47.67-87.611,62.05-136.254 c14.381-48.639,22.092-100.145,22.09-153.332c0-0.336,0-0.672-0.001-1.008L1013.021,546.036z",fill:o},this.renderAnimationTag(1)),c.a.createElement("path",{d:"M904.944,250.653c27.515,32.649,50.56,69.167,68.201,108.6c17.642,39.436,29.885,81.781,35.81,126.175l79.297-10.58 c-6.953-52.12-21.353-101.935-42.082-148.265c-20.729-46.334-47.781-89.19-80.051-127.483L904.944,250.653z",fill:o},this.renderAnimationTag(2)),c.a.createElement("path",{d:"M632.321,93.7c43.962,7.635,85.753,21.502,124.488,40.676c38.731,19.173,74.4,43.658,106.037,72.503l53.9-59.116 c-37.103-33.828-78.947-62.559-124.446-85.083c-45.495-22.523-94.65-38.834-146.292-47.801L632.321,93.7z",fill:o},this.renderAnimationTag(3)),c.a.createElement("path",{d:"M322.559,148.697c33.884-19.656,70.484-35.1,109.11-45.635c38.628-10.533,79.281-16.164,121.353-16.166 c6.342,0,12.65,0.128,18.926,0.382l3.229-79.935c-7.351-0.297-14.736-0.447-22.155-0.447c-49.221-0.001-97.003,6.601-142.403,18.985 c-45.402,12.382-88.423,30.539-128.204,53.617L322.559,148.697z",fill:o},this.renderAnimationTag(4)),c.a.createElement("path",{d:"M120.489,389.924c30.023-82.728,83.202-154.506,151.696-207.38l-48.888-63.325C142.968,181.24,80.603,265.367,45.29,362.627 L120.489,389.924z",fill:o},this.renderAnimationTag(5)),c.a.createElement("path",{d:"M120.751,704.592c-17.934-49.16-27.726-102.199-27.729-157.695c0-33.914,3.661-66.905,10.596-98.658l-78.157-17.073 c-8.151,37.312-12.44,76.054-12.439,115.731c-0.004,64.933,11.492,127.349,32.577,185.119L120.751,704.592z",fill:o},this.renderAnimationTag(6)),c.a.createElement("path",{d:"M323.241,945.492c-75.442-43.586-137.431-108.066-177.952-185.41l-70.86,37.131 c47.609,90.838,120.217,166.359,208.787,217.545L323.241,945.492z",fill:o},this.renderAnimationTag(7)),c.a.createElement("path",{d:"M633.137,999.951c-25.995,4.563-52.754,6.945-80.115,6.945c-62.193-0.006-121.31-12.299-175.322-34.578l-30.513,73.951 c63.456,26.189,133.062,40.633,205.835,40.627c32.01,0,63.412-2.791,93.945-8.15L633.137,999.951z",fill:o},this.renderAnimationTag(8)),c.a.createElement("path",{d:"M905.481,842.504c-27.755,33.055-60.081,62.156-95.98,86.316c-35.9,24.16-75.367,43.377-117.443,56.701l24.151,76.268 c98.934-31.334,185.438-90.313,250.539-167.844L905.481,842.504L905.481,842.504z",fill:o},this.renderAnimationTag(9)))}render(){const t=this.props.loadOnClientSide;let e=this.renderSvg();return t&&(e=c.a.createElement(d.a,null,e)),e}}p()(u,"defaultProps",{diameter:64,color:"#eeeeee",loadingColor:"#666666",loadOnClientSide:!0}),e.a=u}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/modules~hackerrank_r_community~hackerrank_r_iframeable_pricing_container~hackerrank_r_work~hackerran~55e4f2f6-7e1fe846.js.map