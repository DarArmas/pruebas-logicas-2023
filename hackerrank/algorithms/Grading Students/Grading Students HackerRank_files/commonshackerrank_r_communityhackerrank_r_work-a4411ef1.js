(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"+bGI":function(e,t,i){"use strict";t.a={getDisplayName:function(e){return e.displayName||e.name||"Component"}}},"4XcR":function(e,t,i){"use strict";var a=i("ANjH"),r=i("2Q8W"),n=i("zVuP"),c=i("LH1X"),s=i("yX0+"),o=i("eOGF");t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hacker";return new Promise(i=>{const l=Object(r.a)(e),u=l.store,d=l.ajaxServerConf;let f=void 0;const _=u.getState();"hacker"===t?f=_.community.profile.username:"recruiter"===t&&(f=t);const S=Object(c.b)(d.cookies),p=Object(s.j)(e,t);f&&(Object(o.G)()||S.get("user_type"))?Object(a.a)(n.a,u.dispatch).fetchUnreadCount(p).then(i,i):i()})}},"9UFx":function(e,t,i){"use strict";var a=i("MVZn"),r=i.n(a),n=i("p2QC"),c=i("ZaSc"),s=i("LF8W");const o={loadConversations:function(e){return t=>Object(c.c)({url:Object(s.b)("getConversations"),jsonApi:!0,ajaxServerConf:e,success:e=>{const i=e.data;t({type:n.a.LOAD_ALL_CONVERSATIONS,data:{conversations:i}})}})},loadMessages:function(e,t){return i=>{const a={conversation:{unique_id:e}};return Object(c.c)({url:Object(s.b)("messageBase"),jsonApi:!0,ajaxServerConf:t,query:a,success:t=>{const a=t.data;i({type:n.a.LOAD_ALL_MESSAGES,data:{messages:a,conversationId:e}})}})}},postMessage:function(e,t){return i=>Object(c.f)({url:Object(s.b)("messageBase"),data:r()({},e),jsonApi:!0,success:e=>{const a=e.data;i({type:n.a.POST_COMMON_MESSAGE,data:{message:a,conversationId:t}})}})}};t.a=o},LF8W:function(e,t,i){"use strict";i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return s}));var a=i("Ckvm"),r=i("UQja");const n=Object(a.b)()+"sourcing/api/v1/",c={messageCount:n+"messages/unread_count",getConversations:n+"conversations",messageBase:n+"messages",getSkillsVerificationTests:n+"certificates",getSkillsVerificationTest:n+"certificates/::skillSlug",getSkillsVerificationTestInvite:n+"tests/generate_invite_link",getSkillsVerificationResult:n+"certificates/::skillSlug/test_results",getSkillsVerificationResultsForRecruiter:n+"test_results",getSkillsVerificationResults:n+"test_results/hacker_certificate",createSkillsVerificationResult:n+"test_results",getSkillsVerificationCertificate:n+"test_results/::certificateId",markSeenTestResults:n+"test_results/mark_seen",updateHackerNameOnCertificates:n+"test_results/update_hacker_name",getAllMockTests:n+"tests",unlockCertificateTest:n+"certificates/::skillSlug/unlock"};function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(c,e,t)}},Mwwe:function(e,t,i){"use strict";var a=i("MVZn"),r=i.n(a),n=i("rfrl"),c=i("p2QC");const s=Object(n.a)((e,t)=>{const i=t.type,a=t.data,n=void 0===a?{}:a;switch(i){case c.a.LOAD_ALL_CONVERSATIONS:{const t=n.conversations;return e.mappedConversations=t.reduce((e,t)=>r()({},e,{[t.attributes.unique_id]:t.attributes}),{}),void(e.conversationIds=t.map(e=>e.attributes.unique_id))}case c.a.LOAD_ALL_MESSAGES:{const t=n.messages,i=n.conversationId,a=t.map(e=>e.attributes);return void(e.mappedConversations[i].messages=a)}case c.a.POST_COMMON_MESSAGE:{const t=n.message,i=n.conversationId;return void e.mappedConversations[i].messages.push(t.attributes)}default:return}},{});t.a=s},gTZB:function(e,t,i){"use strict";i.d(t,"j",(function(){return o})),i.d(t,"s",(function(){return l})),i.d(t,"o",(function(){return d})),i.d(t,"n",(function(){return f})),i.d(t,"i",(function(){return _})),i.d(t,"l",(function(){return S})),i.d(t,"w",(function(){return p})),i.d(t,"z",(function(){return m})),i.d(t,"u",(function(){return v})),i.d(t,"A",(function(){return y})),i.d(t,"b",(function(){return g})),i.d(t,"g",(function(){return b})),i.d(t,"h",(function(){return O})),i.d(t,"k",(function(){return I})),i.d(t,"c",(function(){return E})),i.d(t,"d",(function(){return T})),i.d(t,"x",(function(){return C})),i.d(t,"t",(function(){return A})),i.d(t,"e",(function(){return j})),i.d(t,"q",(function(){return L})),i.d(t,"B",(function(){return h})),i.d(t,"y",(function(){return R})),i.d(t,"r",(function(){return k})),i.d(t,"a",(function(){return N})),i.d(t,"f",(function(){return D})),i.d(t,"p",(function(){return w})),i.d(t,"v",(function(){return V})),i.d(t,"m",(function(){return P}));i("rGqo");const a=["C++","Java","Python","Ruby","Javascript","HTML","CSS","AngularJS","ReactJS","NodeJS","PHP","C#","C","Go","Objective-C","Swift","Oracle","MS SQL","Scala","Django","Flask","HTML5","Ruby on Rails","iOS","Android","Machine Learning","Hadoop","Big Data","Cassandra","MongoDB","DB2","MySQL","SQL","Coffeescript","Haskell","Perl","BASH","Clojure","Scala","TypeScript","Lua","Common Lisp (SBCL)","Erlang","D","OCaml","Pascal","Groovy","F#","VB.NET","Tcl","Whitespace","Octave","R","XQuery","Racket","Cobol","XML","Rust","Fortran","ADA","Elixir","Julia"].sort(),r=(new Date).getFullYear()-1,n=[{value:"lt"+r,name:r-1+" and before"},...Array.from({length:4},(e,t)=>({name:String(r+t),value:String(r+t)})),{value:"gt"+(r+3),name:r+4+" and after"}],c=[{id:"1",title:"Show Provisionally Failed Candidates"}],s=[{id:"1",title:"Show hidden candidates"}],o=["BS","MS","B.Tech","ME","M.Tech","PhD"].map(e=>({name:e})),l=["Biomedical Engineering","Bioinformatics","Biotechnology","Business Administration","Chemical Engineering","Computer Science","Computer Information Systems","Computer Networking","Computer Science & Engineering","Data Science","Electrical Engineering","Electrical Engineering & Computer Science","Information Technology","Mathematics","Security","Software Engineering"].map(e=>({name:e})),u=[{id:"problem-solving",title:"Problem Solving"},{id:"cpp",title:"C++"},{id:"java",title:"Java"},{id:"python",title:"Python"},{id:"ruby",title:"Ruby"},{id:"sql",title:"SQL"}],d=[{key:"internship",value:"Internship"},{key:"fulltime",value:"Full-Time Employment"}],f={JOB_ROLES:"job_id",EXPERIENCE:"experience",CAREER_FAIR:"career_fair_id",GRADUATION_YEAR:"graduation_year",GRADUATION_MONTH:"graduation_month",BADGES:"badges",DEGREES:"degrees",PROGRAMS:"programs",VERIFIED_SKILLS:"certificate",SKILLS:"top_skills",COUNTRY:"country_id",STATE:"state_id",HIDDEN:"show_hidden",PROVISIONALLY_FAILED:"show_provisionally_failed",STARRED:"starred",ORDER_BY:"order_by",ORDER_DIR:"order_dir",JOB_AVAILABILITY_TYPE:"job_availability_type",SCHOOLS:"school_id"},_=[{accessKey:"id",accessTitle:"name",filterName:f.CAREER_FAIR,title:"Career Fair",queryParam:"career_fair"},{accessKey:"id",accessTitle:"title",filterName:f.JOB_ROLES,title:"Job Title",queryParam:"job_title"},{accessKey:"key",accessTitle:"value",filterName:f.JOB_AVAILABILITY_TYPE,title:"Job Availability Type",queryParam:"job_availability_type",list:d},{accessKey:"value",accessTitle:"name",filterName:f.GRADUATION_YEAR,list:n,title:"Graduation Year",queryParam:"graduation_year"},{accessKey:"value",accessTitle:"title",filterName:f.GRADUATION_MONTH,list:[{title:"January",value:"1"},{title:"February",value:"2"},{title:"March",value:"3"},{title:"April",value:"4"},{title:"May",value:"5"},{title:"June",value:"6"},{title:"July",value:"7"},{title:"August",value:"8"},{title:"September",value:"9"},{title:"October",value:"10"},{title:"November",value:"11"},{title:"December",value:"12"}],title:"Graduation Month",queryParam:"graduation_month"},{filterName:f.VERIFIED_SKILLS,title:"Verified Skills",queryParam:"certificate"},{filterName:f.SKILLS,list:a,title:"Skill Set",queryParam:"skill_set",isSearchable:!0},{accessKey:"id",accessTitle:"name",filterName:f.SCHOOLS,title:"School",queryParam:"school_id",isSearchable:!0},{accessKey:"id",accessTitle:"title",filterName:f.BADGES,list:u,title:"Badges",queryParam:"badges"},{accessKey:"name",accessTitle:"name",filterName:f.DEGREES,list:o,title:"Degree",queryParam:"degrees"},{accessKey:"name",accessTitle:"name",filterName:f.PROGRAMS,list:l,title:"Program",queryParam:"programs"},{accessKey:"code",accessTitle:"name",filterName:f.COUNTRY,title:"Country",queryParam:"country",isSearchable:!0},{accessKey:"code",accessTitle:"name",filterName:f.STATE,title:"Candidate Location (State)",queryParam:"states",isSearchable:!0},{accessKey:"id",accessTitle:"title",filterName:f.HIDDEN,title:"Miscellaneous",list:s,queryParam:"misc"},{accessKey:"id",accessTitle:"title",filterName:f.PROVISIONALLY_FAILED,title:"Provisionally Failed",list:c,queryParam:"failed"}],S=[{accessKey:"id",accessTitle:"title",filterName:f.JOB_ROLES,title:"Job Title",queryParam:"job_title"},{accessKey:"value",accessTitle:"title",filterName:f.EXPERIENCE,list:[{id:"1",value:"lt2",title:"< 2 yrs"},{id:"2",value:"f2to4",title:"2 - 4 years"},{id:"3",value:"f5to9",title:"5 - 9 yrs"},{id:"4",value:"gt9",title:"10+ yrs"}],title:"Experience",queryParam:"experience"},{accessKey:"id",accessTitle:"title",filterName:f.BADGES,list:u,title:"Badges",queryParam:"badges"},{filterName:f.VERIFIED_SKILLS,title:"Verified Skills",queryParam:"certificate"},{filterName:f.SKILLS,list:a,title:"Skill Set",queryParam:"skill_set",isSearchable:!0},{accessKey:"code",accessTitle:"name",filterName:f.COUNTRY,title:"Country",queryParam:"country",isSearchable:!0},{accessKey:"code",accessTitle:"name",filterName:f.STATE,title:"Candidate Location (State)",queryParam:"states",isSearchable:!0},{accessKey:"id",accessTitle:"title",filterName:f.HIDDEN,title:"Miscellaneous",list:s,queryParam:"misc"},{accessKey:"id",accessTitle:"title",filterName:f.PROVISIONALLY_FAILED,title:"Provisionally Failed",list:c,queryParam:"failed"}],p={unlocked_at__desc:{order_by:"unlocked_at",order_dir:"desc",title:"Newest first"},unlocked_at__asc:{order_by:"unlocked_at",order_dir:"asc",title:"Oldest first"},score__desc:{order_by:"score",order_dir:"desc",title:"Score: High to Low"},score__asc:{order_by:"score",order_dir:"asc",title:"Score: Low to High"},work_experience_years__desc:{order_by:"work_experience_years",order_dir:"desc",title:"Experience: High to Low"},work_experience_years__asc:{order_by:"work_experience_years",order_dir:"asc",title:"Experience: Low to High"}},m="US",v="reject_applicant",y={new:["contacted_applicant","init_interview","reject_applicant"],contacted:["contacted_applicant","init_interview","reject_applicant"],interviewing:["contacted_applicant","offer_job","reject_applicant"],offered:["contacted_applicant","accept_offer","decline_offer"],"offer-accepted":["contacted_applicant"],rejected:["contacted_applicant","init_interview"],archived:["contacted_applicant"]},g={contacted_applicant:"contacted",init_interview:"interviewing",offer_job:"offered",accept_offer:"offer_accepted",decline_offer:"offer_declined",reject_applicant:"rejected",hide:"hide",unhide:"unhide"},b={reject_applicant:"ui-icon-thumbs-down-2",contacted_applicant:"ui-icon-mail",init_interview:"ui-icon-interview",offer_job:"ui-icon-thumbs-up-2",accept_offer:"ui-icon-check-circle",decline_offer:"ui-icon-cross-circle"},O={reject_applicant:"ThumbsDown2Icon",contacted_applicant:"MailIcon",init_interview:"InterviewIcon",offer_job:"ThumbsUp2Icon",accept_offer:"CheckCircleIcon",decline_offer:"CrossCircleIcon"},I={reject:"Reject",reject_applicant:"Rejected",contacted_applicant:"Message",init_interview:"Interviewing",offer:"Offer",offer_job:"Offered",offered:"Offered",accept_offer:"Offer accepted","offer-accepted":"Offer accepted",decline_offer:"Offer declined",hide:"Hide",unhide:"Unhide",new:"New",contacted:"Contacted",rejected:"Rejected",interviewing:"Interviewing"},E={NEW:"new",CONTACTED:"contacted",INTERVIEWING:"interviewing",OFFERED:"offered",ACCEPTED:"accepted",REJECTED:"rejected",ARCHIVED:"archived"},T={new:{state:"applicant_accepted",constant:"NEW"},contacted:{state:"contacted",constant:"CONTACTED"},interviewing:{state:"interviewing",constant:"INTERVIEWING"},offered:{state:"offered",constant:"OFFERED"},rejected:{state:"rejected",constant:"REJECTED"},archived:{state:"archived",constant:"ARCHIVED"},"offer-accepted":{state:"offer_accepted",constant:"ACCEPTED"}};const C=function(){const e={};return Object.entries(T).forEach(t=>{e[t[1].state]=t[0]}),e.provisionally_failed="rejected",e}(),A=["Less experienced than I expected","Inexperienced in the right domain","Not willing to relocate","Doesn't have a valid work visa","Looking for an intern role","Code quality is not good enough","Hasn't responded to my interview request","Plagiarism","Already interviewing with the company","Currently lives outside US","Has not completed the degree","Other reason"],j={greenhouse:{label:"Greenhouse",value:"greenhouse"},lever:{label:"Lever",value:"lever"}},L={SUCCESS:"success",ERROR:"error"},h=[{label:"Only open to candidates with the required work authorization",value:"no"},{label:"Open to all candidates, regardless of work authorization",value:"yes"}],R=[{label:"Yes (recommended for new grad roles)",value:"attempt"},{label:"No",value:"one_click"}],k=Array.from({length:11},(e,t)=>({label:t,value:t})),N={reject_applicant:"Reject",contacted_applicant:"Message",init_interview:"Interviewing",offer_job:"Offered",accept_offer:"OfferAccepted",decline_offer:"OfferDeclined",hide:"HideCandidates",unhide:"UnhideCandidates"},D={3:80,4:85,5:95,6:99},w={attempt:"attempt",hiring_drive:"hiring_drive",one_click:"one_click"},V={INITIATED:"initiated",STARTED:"started",PROCESSING:"test_finished",FAILED:"test_failed",PASSED:"test_passed",RETAKE_AVAILABLE:"retake_available"},P=[{label:"Candidate first name",textSnippet:"{{candidate_first_name}}"},{label:"Candidate last name",textSnippet:"{{candidate_last_name}}"},{label:"Recruiter first name",textSnippet:"{{recruiter_first_name}}"},{label:"Recruiter last name",textSnippet:"{{recruiter_last_name}}"}]},j29Q:function(e,t,i){"use strict";var a=i("p2QC"),r=i("gTZB"),n=i("ZaSc"),c=i("LF8W");const s={getSkillsVerificationTests(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=>Object(n.c)({url:Object(c.b)("getSkillsVerificationTests"),ajaxServerConf:e,jsonApi:!0,success:e=>{const i=e.data,r=e.meta.record_count;t({type:a.a.SKILLS_VERIFICATION.LOAD_TESTS,data:{certificates:i,total:r}})},error:()=>{t({type:a.a.SKILLS_VERIFICATION.LOAD_TESTS,data:{certificates:[],total:0}})}})},getSkillsVerificationTest:(e,t)=>i=>Object(n.c)({url:Object(c.b)("getSkillsVerificationTest",{skillSlug:e}),ajaxServerConf:t,jsonApi:!0,success:e=>{const t=e.data;i({type:a.a.SKILLS_VERIFICATION.LOAD_TEST,data:{certificate:t.attributes}})}}),getSkillsVerificationTestInvite(e,t){const i=e.username,s=e.test_unique_id;return e=>Object(n.f)({url:Object(c.b)("getSkillsVerificationTestInvite"),data:{test_uid:s},ajaxServerConf:t,jsonApi:!0,success:t=>{const n=t.data;e({type:a.a.SKILLS_VERIFICATION.FETCH_TEST_INVITE_LINK,data:{unique_id:s,status:r.v.INITIATED,test_url:n,username:i}})}})},getSkillsVerificationResult:(e,t,i)=>r=>Object(n.c)({url:Object(c.b)("getSkillsVerificationResult",{skillSlug:e}),ajaxServerConf:i,jsonApi:!0,success:e=>{const i=e.data;r({type:a.a.SKILLS_VERIFICATION.LOAD_RESULT,data:{username:t,result:i[0]?i[0].attributes:{}}})}}),getSkillsVerificationResults(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).username;return i=>Object(n.c)({url:Object(c.b)("getSkillsVerificationResults"),ajaxServerConf:e,jsonApi:!0,query:{username:t},success:e=>{const r=e.data;i({type:a.a.SKILLS_VERIFICATION.LOAD_RESULTS,data:{username:t,results:r}})},error:()=>{i({type:a.a.SKILLS_VERIFICATION.LOAD_RESULTS,data:{results:[]}})}})},getSkillsVerificationResultsForRecruiter(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).hacker_id;return i=>Object(n.c)({url:Object(c.b)("getSkillsVerificationResultsForRecruiter"),ajaxServerConf:e,jsonApi:!0,query:{hacker_id:t},success:e=>{var t,r;const n=e.data,c=null===(t=n[0])||void 0===t||null===(r=t.attributes)||void 0===r?void 0:r.username;c&&i({type:a.a.SKILLS_VERIFICATION.LOAD_RESULTS,data:{username:c,results:n}})}})},createSkillsVerificationResult:(e,t)=>i=>Object(n.f)({url:Object(c.b)("createSkillsVerificationResult"),data:e,ajaxServerConf:t,jsonApi:!0,success:()=>{i({type:a.a.SKILLS_VERIFICATION.LOAD_RESULT,data:{result:{test_unique_id:e.test_unique_id,status:r.v.INITIATED},username:e.username}})}}),getSkillsVerificationCertificate:(e,t)=>i=>Object(n.c)({url:Object(c.b)("getSkillsVerificationCertificate",{certificateId:e}),ajaxServerConf:t,jsonApi:!0,success:t=>{const r=t.data;i({type:a.a.SKILLS_VERIFICATION.LOAD_CERTIFICATE,data:{certificateId:e,hackerCertificate:r.attributes}})}}),invalidateTestResults:e=>({type:a.a.SKILLS_VERIFICATION.INVALIDATE_TEST_RESULTS,data:{username:e}}),unlockCertificateTest(e,t,i){const r=e.skillSlug,s=e.username,o=e.test_unique_id,l=e.query;return e=>Object(n.c)({url:Object(c.b)("unlockCertificateTest",{skillSlug:r}),query:l,ajaxServerConf:t,jsonApi:!0,debuggerStore:i,success:t=>{const i=t.unlock_date;e({type:a.a.SKILLS_VERIFICATION.UNLOCK_TEST,data:{username:s,test_unique_id:o,unlock_date:i}})}})}};t.a=s},"yX0+":function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return d})),i.d(t,"i",(function(){return _})),i.d(t,"j",(function(){return S})),i.d(t,"c",(function(){return p})),i.d(t,"g",(function(){return m})),i.d(t,"h",(function(){return v})),i.d(t,"e",(function(){return y})),i.d(t,"d",(function(){return g})),i.d(t,"f",(function(){return b}));i("rGqo");var a=i("vmXh"),r=i.n(a),n=i("2Q8W"),c=i("LH1X"),s=i("eOGF"),o=i("Ckvm"),l=i("gTZB");const u="/work/sourcing",d=u+"/career-fair";function f(){return"development"===Object(s.g)()?"localhost":"."+Object(o.a)()}function _(e,t){const i=Object(n.a)(e).ajaxServerConf,a=Object(c.b)(i.cookies);Object(s.G)()||(r.a.remove("user_type",{domain:"www.hackerrank.com"}),a.get("user_type")!==t&&r.a.set("user_type",t,{domain:f()}))}function S(e,t){const i=Object(n.a)(e).ajaxServerConf;return Object(c.b)(i.cookies).get("user_type")!==t&&Object(s.G)()&&(i.cookies.user_type=t),i}function p(e,t){if(Object(s.G)())return e;const i={};return Object.entries(e).forEach(e=>{i[e[0]]=function(){return r.a.remove("user_type"),r.a.get("user_type")!==t&&r.a.set("user_type",t,{domain:f()}),e[1](...arguments)}}),i}function m(e){return"one_click"===e}function v(e){return e.startsWith(d)}function y(e){return v(e)?d:u}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i={},a=Object.values(l.n);return Object.keys(t).forEach(e=>{a.includes(e)&&(i[e]=t[e])}),v(e)&&(i.only_career_fair=!0),i}function b(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=g(t,i);return`${e}-${JSON.stringify(a)}`}},zVuP:function(e,t,i){"use strict";var a=i("p2QC"),r=i("ZaSc"),n=i("LF8W");const c={fetchUnreadCount:e=>t=>Object(r.c)({url:Object(n.b)("messageCount"),jsonApi:!0,ajaxServerConf:e,success:e=>{if(e.data){const i=e.data.attributes;t({type:a.a.LOAD_UNREAD_COUNT,data:i})}}})};t.a=c}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_community~hackerrank_r_work-a4411ef1.js.map