(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1LkA":function(e,t,a){"use strict";var s=a("MVZn"),n=a.n(s),i=a("lSNA"),o=a.n(i),r=a("cDcd"),c=a.n(r),l=a("17x9"),u=a.n(l),d=a("oBtd"),p=a("oOaF"),m=a("/MKj"),g=a("ANjH"),h=a("LNHK");class b extends r.Component{constructor(){super(...arguments),o()(this,"toggleBookmark",(e,t)=>{t.preventDefault();const a=this.props,s=a.challenge,n=a.challengeActions,i=s.slug,o=s.contest_slug,r={challenge_id:s.id,attribute1:o,attribute2:i,attribute3:e?"bookmarked":"unbookmarked",attribute4:"challengeListPage"};return d.a.track("Click","BookmarkChallenge",r),new Promise((t,a)=>{n.updateChallenge({challengeSlug:i,contestSlug:o,changes:{bookmarked:e}}).then(()=>{t()}).catch(()=>{a()})})})}render(){const e=this.props,t=e.challenge,a=e.profile,s=e.className;return t&&"master"===t.contest_slug&&a.username?c.a.createElement(p.a,{initialValue:t.bookmarked,className:s,label:e=>e?"Remove bookmark":"Add bookmark",onClick:this.toggleBookmark}):null}}o()(b,"propTypes",{challenge:u.a.object.isRequired,className:u.a.string}),o()(b,"defaultProps",{className:""});b=Object(m.c)((e,t)=>{const a=e.community.profile;return n()({},t,{profile:a})},e=>({challengeActions:Object(g.a)(h.a,e)}))(b),t.a=b},"32RN":function(e,t,a){},Lds6:function(e,t,a){"use strict";var s=a("ZaSc"),n=a("AJT6"),i=a("7fp8");const o={incrementSeenCount:function(e,t){return()=>Object(s.g)({url:Object(i.g)("seenFeedback",{apiPrefix:""+t,id:""+e}),loadingMessage:!1})},disable:function(e){return{type:n.a.FEATURE_FEEDBACK.DISABLE,data:{featureId:e}}}};t.a=o},iEEE:function(e,t,a){"use strict";var s=a("lSNA"),n=a.n(s),i=a("cDcd"),o=a.n(i),r=a("17x9"),c=a.n(r),l=a("EA6I"),u=a("/MKj"),d=a("ANjH"),p=a("TSYQ"),m=a.n(p),g=a("ZaSc"),h=a("ACly"),b=a("Lds6"),k=a("7fp8");a("32RN");class f extends o.a.Component{constructor(e){super(e),n()(this,"state",void 0),n()(this,"submitTimeout",void 0),n()(this,"toggleFeedback",e=>{this.setState({feedbackOpen:!this.state.feedbackOpen,target:e.currentTarget})}),n()(this,"onClose",()=>{this.setState({feedbackOpen:!1})}),n()(this,"onSeen",e=>Object(g.g)({url:Object(k.g)("seenFeedback",{apiPrefix:""+this.props.apiPrefix,id:""+e}),loadingMessage:!1})),n()(this,"onSubmit",e=>{this.submitTimeout=setTimeout(()=>{this.setState({feedbackOpen:!1}),this.props.featureFeedbackActions.disable(e)},3e3)}),n()(this,"renderFeatureFeedback",()=>{const e=this.props,t=e.featureId,a=e.apiPrefix,s=e.title,n=e.description,i=e.feature,r=e.popoverClassName,c=e.align,u=e.coordinate,d=e.theme,p=this.state.target;if(!i)return;const m=s||i.heading||"Love our new upgrade?",g=n||i.description||"Let us know what you feel about it.";return o.a.createElement(l.a,{className:r,target:p,align:c,open:!0,coordinate:u,onClose:this.onClose,showTip:!0},o.a.createElement(h.a,{featureId:t,title:m,desc:g,theme:d,onSeen:this.onSeen,onClose:this.onClose,onSubmit:this.onSubmit,isStandalone:!0,postUrl:Object(k.g)("updateFeedback",{apiPrefix:a,id:t})}))}),this.state={feedbackOpen:!1,target:void 0}}componentWillUnmount(){clearTimeout(this.submitTimeout)}render(){const e=this.props,t=e.children,a=e.className;return o.a.createElement(i.Fragment,null,!!this.renderFeatureFeedback()&&o.a.createElement("span",{"data-balloon":"Share your feedback with us","data-balloon-pos":"left",className:m()("feature-feedback cursor-pointer",a),onClick:this.toggleFeedback},t||o.a.createElement("i",{className:"ui-icon-thumbs-up-light"})),this.state.feedbackOpen&&this.renderFeatureFeedback())}}n()(f,"propTypes",{featureId:c.a.number.isRequired,title:c.a.string,description:c.a.string,className:c.a.string,popoverClassName:c.a.string,align:c.a.string,coordinate:c.a.object,theme:c.a.string}),t.a=Object(u.c)((e,t)=>{const a=t.featureId,s="hackerrank"===e.metadata.productNamespace?"rest":"x/api/v1";return{feature:e.featureFeedback.featureLists[a],apiPrefix:s}},e=>({featureFeedbackActions:Object(d.a)(b.a,e)}))(f)},vesa:function(e,t,a){},x2ze:function(e,t,a){"use strict";var s=a("lSNA"),n=a.n(s),i=a("cDcd"),o=a.n(i),r=a("17x9"),c=a.n(r),l=a("eOGF"),u=a("5VZm");a("vesa");class d extends o.a.PureComponent{constructor(e){super(),n()(this,"state",void 0),this.state={openVideoModal:e.autoOpen}}render(){const e=this.props,t=e.title,a=e.analyticsKey,s=e.duration,n=e.youtubeId,i=e.contestSlug,r=e.challengeSlug,c=this.state.openVideoModal;return o.a.createElement("div",{className:"video-modal-wrapper"},o.a.createElement("img",{className:"youtube-video-image",alt:"YouTube connection issue.",src:`https://img.youtube.com/vi/${n}/mqdefault.jpg`}),o.a.createElement("a",{className:"video-modal-link-overlay cursor","data-slug":n,"data-analytics":a,"data-attr1":r,"data-attr2":i,"data-attr3":n,"data-attr4":t,onClick:()=>this.setState({openVideoModal:!0})},o.a.createElement("div",{className:"challenge-video-duration"},Object(l.T)(s)),o.a.createElement("i",{className:"ui-challenge-video-icon ui-icon-play-circle"})),c&&o.a.createElement(u.a,{open:!0,onClose:()=>this.setState({openVideoModal:!1}),youtubeId:n,title:t}))}}n()(d,"propTypes",{title:c.a.string.isRequired,analyticsKey:c.a.string,duration:c.a.oneOfType([c.a.number,c.a.string]).isRequired,youtubeId:c.a.string.isRequired,contestSlug:c.a.string,challengeSlug:c.a.string,autoOpen:c.a.bool}),n()(d,"defaultProps",{analyticsKey:"ChallengeSidebarRelatedVideo",autoOpen:!1}),t.a=d}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_challenge~hackerrank_r_challenge_list~hackerrank_r_challenge_list_v2~hackerrank~12221734-04a3f477.js.map