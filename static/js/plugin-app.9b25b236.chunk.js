(self.webpackChunkline_listing_app=self.webpackChunkline_listing_app||[]).push([[2143],{9874:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ke});var n=a(3135),i=a(8594),l=a(4479),r=a(6329),o=a(3338),s=a(1006),d=a.n(s),u=a(3665),c=a.n(u),p=a(2085),m=a(1475),g=a(9551),f=a(2703),v=a(8107),h=a(9308),y=a(760),S=a(7538),_=a(1054),E=a(101),z=a(969),w=a(5215),C=a(1250),b=a(9647),V=a(1276),x=a(1949),D=a(2305),T=a(6206),N=a.n(T);const k="NORMAL",I={displayDensity:{defaultValue:"NORMAL",requestable:!1,savable:!0},fontSize:{defaultValue:k,requestable:!1,savable:!0},digitGroupSeparator:{defaultValue:"SPACE",requestable:!1,savable:!0},showHierarchy:{defaultValue:!1,requestable:!1,savable:!0},skipRounding:{defaultValue:!1,requestable:!0,savable:!0}},W=e=>Object.entries(I).filter((e=>e[1].requestable)).reduce(((t,a)=>{let[n,i]=a;return void 0!==e[n]&&e[n]!==i.defaultValue&&(t[n]=e[n]),t}),{});var M=a(5633),P=a(9941),R=a.n(P),L=a(5133);new Set([L.P6,L.qI,L.xi,L.PH,L.M6]),new Set([L.zC]);const A="programStatus",O="eventStatus",Z="createdBy",q="lastUpdatedBy",F="eventDate",U="enrollmentDate",H="incidentDate",K="scheduledDate",$="lastUpdated",j=new Set([F,U,H,K,$]);var Q=a(4805),B=a(1517),G=a(2644);const X="COMPLETED",J="EVENT",Y="ENROLLMENT",ee={[Q.rx]:"ouname",[A]:"programstatus",[O]:"eventstatus",[Z]:"createdbydisplayname",[q]:"lastupdatedbydisplayname",[F]:"eventdate",[U]:"enrollmentdate",[H]:"incidentdate",[K]:"scheduleddate",[$]:"lastupdated"},te=e=>{let{showHierarchy:t}=e;const a=Object.assign({},ee);return t&&(a[Q.rx]="ounamehierarchy"),a},ae={[J]:F,[Y]:U},ne=(e,t)=>{let{outputType:a,type:n}=t;return e.filter((e=>!["longitude","latitude"].includes(e.dimension))).map((e=>e.dimensionType===L.cl?{...e,dimensionType:L.P6}:e.dimension===Q.vi&&n===G.UU?{...e,dimension:ae[a],dimensionType:L.KV}:e))},ie=(G.UU,G.Zp,e=>{let{value:t,header:a={},visualization:n={}}=e;return[ee.eventStatus,ee.programStatus].includes(a.name)?{ACTIVE:v.Z.t("Active"),CANCELLED:v.Z.t("Cancelled"),[X]:v.Z.t("Completed"),SCHEDULE:v.Z.t("Scheduled")}[t]||t:[m.$d,m.Wt].includes(a.valueType)?t&&R()(t).format(a.name===ee.lastUpdated||a.valueType===m.Wt?"yyyy-MM-DD hh:mm":"yyyy-MM-DD"):(null==a?void 0:a.valueType)===m.H?t&&R()(t).format("yyyy-MM-DD"):(0,M.Q)(t,a.valueType||m.kl,a.optionSet?{}:{digitGroupSeparator:n.digitGroupSeparator,skipRounding:!1})}),le=function(){let{stageOffset:e,column:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!t)return"";if(Number.isInteger(e)){let a;return 0===e?a=v.Z.t("most recent"):1===e?a=v.Z.t("oldest"):e>1?a=v.Z.t("oldest {{repeatEventIndex}}",{repeatEventIndex:"+"+(e-1)}):e<0&&(a=v.Z.t("most recent {{repeatEventIndex}}",{repeatEventIndex:e})),`${t} (${a})`}return t};var re=a(625);const oe=e=>(0,re.X)(e).some((e=>{let{dimensionType:t,dimension:a,items:n}=e;return(t===L.KV||j.has(a))&&Array.isArray(n)&&n.length>0})),se={legendKeyContainer:"Visualization_legendKeyContainer__4CFI-",legendKeyWrapper:"Visualization_legendKeyWrapper__nVQL9",legendKey:"Visualization_legendKey__JVpFE",legendKeyScrollbox:"Visualization_legendKeyScrollbox__xeUwY",legendKeyToggle:"Visualization_legendKeyToggle__KkZxi",pluginContainer:"Visualization_pluginContainer__oXPo4",fetchContainer:"Visualization_fetchContainer__80fuv",fetching:"Visualization_fetching__7HD9F",fetchIndicator:"Visualization_fetchIndicator__I2E9y",rotation:"Visualization_rotation__x63rs",visualizationContainer:"Visualization_visualizationContainer__05bND",noTimeDimensionWarning:"Visualization_noTimeDimensionWarning__FQgNa",stickyFooter:"Visualization_stickyFooter__Dd34A",footerCell:"Visualization_footerCell__Fncu5",stickyNavigation:"Visualization_stickyNavigation__0J6KV",dataTable:"Visualization_dataTable__5lDA5",headerCell:"Visualization_headerCell__4qkrt",dimensionModalHandler:"Visualization_dimensionModalHandler__yWmOU",fontSizeLarge:"Visualization_fontSizeLarge__z2BH2",fontSizeNormal:"Visualization_fontSizeNormal__jf7Sh",fontSizeSmall:"Visualization_fontSizeSmall__FfsnC",sizeComfortable:"Visualization_sizeComfortable__Su+7Q",sizeNormal:"Visualization_sizeNormal__gHiph",sizeCompact:"Visualization_sizeCompact__8D9I5",cell:"Visualization_cell__6WA8H",emptyCell:"Visualization_emptyCell__5ufEQ",nowrap:"Visualization_nowrap__L4Sfl",undefinedCell:"Visualization_undefinedCell__LHsvF",error:"Visualization_error__18KVZ"};var de=a(4579);const ue="NV",ce=()=>({1:v.Z.t("Yes"),0:v.Z.t("No"),[ue]:v.Z.t("Not answered")}),pe={[Y]:"enrollments",[J]:"events"},me=[Z,q],ge=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return"ND"===(null===(e=(t[a]||{})[n])||void 0===e?void 0:e.valueStatus)},fe=e=>{let{rowValue:t,header:a,metaDataItems:n,isUndefined:i}=e;switch(a.valueType){case m.zU:case m.mb:return i?"":ce()[t||ue];default:var l,r;return t?a.optionSet?(null===(r=((e,t,a)=>{const n=null==a?void 0:a[e];var i;if(n)return a[null===(i=n.options.find((e=>e.code===t)))||void 0===i?void 0:i.uid]})(a.optionSet,t,n))||void 0===r?void 0:r.name)||t:(null===(l=n[t])||void 0===l?void 0:l.name)||t:t}},ve=e=>{const t=W(e),a=e=>{const a=[];return e.forEach((e=>{const n=e.dimension;var i,l;(e=>j.has(e))(n)||n===O||n===A?null!==(i=e.items)&&void 0!==i&&i.length&&(t[n]=null===(l=e.items)||void 0===l?void 0:l.map((e=>e.id))):me.includes(n)||a.push(e)})),a},n=a(e[B.Aq]),i=a(e[B.dQ]),l=a(e[B.lT]),r=te(e),o=[...e[B.Aq],...e[B.dQ]].map((e=>{var t;let{dimension:a,programStage:n,repetition:i}=e;const l=null!=n&&n.id?`${n.id}.${a}`:r[a]||a;return null!=i&&null!==(t=i.indexes)&&void 0!==t&&t.length?i.indexes.map((e=>l.replace(/\./,`[${e}].`))):l}));return{adaptedVisualization:{[B.Aq]:n,[B.dQ]:i,[B.lT]:l},headers:o,parameters:t}},he=async e=>{let{analyticsEngine:t,visualization:a,pageSize:n,page:i,relativePeriodDate:l,sortField:r,sortDirection:o,displayProperty:s}=e;const{adaptedVisualization:d,headers:u,parameters:c}=ve(a);let p=(new t.request).fromVisualization(d).withParameters({headers:u,totalPages:!1,...a.outputType!==J?{rowContext:!0}:{},...c}).withProgram(a.program.id).withDisplayProperty(s.toUpperCase()).withOutputType(a.outputType).withPageSize(n).withPage(i).withIncludeMetadataDetails();var m;a.outputType!==Y&&(p=p.withStage(null===(m=a.programStage)||void 0===m?void 0:m.id));if(l&&oe(a)&&(p=p.withRelativePeriodDate(l)),r)switch(o){case"asc":p=p.withAsc(r);break;case"desc":p=p.withDesc(r)}const g=(f=a.outputType,pe[f]);var f;return await t[g].getQuery(p)},ye={resource:"legendSets",params:e=>{let{ids:t}=e;return{fields:"id,displayName~rename(name),legends[id,displayName~rename(name),startValue,endValue,color]",filter:`id:in:[${t.join(",")}]`}}},Se=async e=>{let{legendSetIds:t,dataEngine:a}=e;if(!t.length)return[];const n=await(async e=>{let{dataEngine:t,ids:a}=e;return(await t.query({legendSets:ye},{variables:{ids:a}})).legendSets.legendSets})({dataEngine:a,ids:t});return n},_e=e=>{let{visualization:t,filters:a,isVisualizationLoading:i,displayProperty:l,onResponsesReceived:r,pageSize:o,page:s,sortField:d,sortDirection:u}=e;const c=(0,n.bQ)(),[g]=(0,p.useState)((()=>de.Z.getAnalytics(c))),v=(0,p.useRef)(!1),[h,y]=(0,p.useState)(!0),[S,_]=(0,p.useState)(!0),[E,z]=(0,p.useState)(void 0),[w,C]=(0,p.useState)(null),b=null==a?void 0:a.relativePeriodDate,V=(0,p.useCallback)((async()=>{try{var e,a,n,i;const p=await he({analyticsEngine:g,page:s,pageSize:o,relativePeriodDate:b,sortDirection:u,sortField:d,visualization:t,displayProperty:l}),h=(e=>e.headers.map(((t,a)=>{const n={...t,index:a},{dimensionId:i,programStageId:l}=(e=>{const[t,a]=e.split(".").reverse(),[n,i]=(a||"").split("[");return{dimensionId:t,programStageId:n,repetitionIndex:(null==i?void 0:i.length)&&i.substring(0,i.indexOf("]"))}})(t.name);return l&&e.headers.filter((e=>e.name.includes(i))).length>1&&(n.column+=` - ${e.metaData.items[l].name}`),n})))(p),S=((e,t)=>{const a=[];for(let n=0,i=e.rows.length;n<i;n++){const i=e.rows[n],l=[];for(let a=0,r=t.length;a<r;a++){const r=t[a],o=i[r.index];l.push(fe({rowValue:o,header:r,metaDataItems:e.metaData.items,isUndefined:ge(e.rowContext,n,a)}))}a.push(l)}return a})(p,h),E=(e=>e.rowContext)(p),w=p.metaData.pager,V=[],x=h.reduce(((e,t)=>{var a;return{...e,[t.name]:null===(a=p.metaData.items[t.name])||void 0===a?void 0:a.legendSet}}),{});(null===(e=t.legend)||void 0===e?void 0:e.strategy)===f.zv&&null!==(a=t.legend)&&void 0!==a&&null!==(n=a.set)&&void 0!==n&&n.id?V.push(t.legend.set.id):(null===(i=t.legend)||void 0===i?void 0:i.strategy)===f.EE&&Object.values(x).filter((e=>e)).forEach((e=>V.push(e)));const D=await Se({legendSetIds:V,dataEngine:c});D.length&&h.filter((e=>{return t=e.valueType,[m.FV,m.SA,m.y3,m.$r,m.VX,m.M7,m.iq].includes(t);var t})).forEach((e=>{switch(t.legend.strategy){case f.zv:e.legendSet=D[0];break;case f.EE:e.legendSet=D.find((t=>t.id===x[e.name]))}})),v.current&&z(void 0),v.current&&C({headers:h,rows:S,pager:w,rowContext:E}),r(p)}catch(e){v.current&&z(e)}finally{v.current&&y(!1),v.current&&_(!1)}}),[g,s,o,b,u,d,t]);return(0,p.useEffect)((()=>(v.current=!0,()=>{v.current=!1})),[]),(0,p.useEffect)((()=>{_(!0),V()}),[t,s,o,d,u,b]),(0,p.useEffect)((()=>{i&&(_(!1),y(!1),z(void 0),C(null))}),[i]),{loading:h,fetching:S,error:E,data:w,isGlobalLoading:i}};function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Ee.apply(this,arguments)}const ze=(e,t)=>{if(e){var a,n;return`calc(100vh - ${285+(null!==(a=null==t||null===(n=t.current)||void 0===n?void 0:n.clientHeight)&&void 0!==a?a:0)}px)`}return"100%"},we=e=>{let{offline:t,...a}=e;return t?p.createElement(h.u,{content:v.Z.t("Not available offline")},p.createElement(y.t,a)):p.createElement(y.t,a)};we.propTypes={offline:c().bool};const Ce=e=>{let{filters:t,visualization:a,isVisualizationLoading:i,displayProperty:l,onResponsesReceived:r,onColumnHeaderClick:o,onError:s,forDashboard:d}=e;const u=(0,p.useRef)(null),c=(0,p.useRef)(null),y=(0,p.useRef)(null),T=(0,p.useRef)(null),k=(0,p.useRef)(null),I=(0,p.useRef)(null),M=(0,p.useRef)(null),[P,R]=(0,p.useState)([]),[L,A]=(0,p.useState)(!1),[Z,q]=(0,p.useState)({containerMaxWidth:0,paginationMaxWidth:0,noticeBoxMaxWidth:0}),[{sortField:F,sortDirection:U,pageSize:H,page:K},$]=(0,p.useReducer)(((e,t)=>({...e,...t})),{sortField:null,sortDirection:"asc",page:1,pageSize:100}),j=(0,p.useMemo)((()=>a&&(e=>{const t=ne(e[B.Aq],e),a=ne(e[B.dQ],e),n=ne(e[B.lT],e);e.completedOnly&&e.outputType===J&&n.push({dimension:O,items:[{id:X}]});const i={...e};return delete i.completedOnly,{...i,[B.Aq]:t,[B.dQ]:a,[B.lT]:n}})(a)),[a]),Q=!(null==t||!t.relativePeriodDate),G=(0,p.useMemo)((()=>oe(j)),[j]),Y=Q&&!G,ee=(0,p.useRef)(j),ae=(0,p.useCallback)((()=>{var e;if(null==u||!u.current||0===u.current.clientWidth)return;const t=u.current.clientWidth,a=u.current.querySelector(".tablescrollbox"),n=a.offsetWidth-a.clientWidth,i=t-n-((null===(e=M.current)||void 0===e?void 0:e.offsetWidth)>0?M.current.offsetWidth+4:0);q({containerMaxWidth:i,paginationMaxWidth:i-n,noticeBoxMaxWidth:a.offsetWidth})}),[]),re=(0,p.useMemo)((()=>new window.ResizeObserver(ae)),[ae]),de=(0,p.useCallback)((e=>{if(null!==e)return u.current=e,re.observe(e),re.disconnect}),[re]),ue=(0,p.useCallback)((e=>{if(null!==e)return re.observe(e),re.disconnect}),[re]),ce=(0,p.useCallback)((e=>$({page:e})),[]),{isDisconnected:pe}=(0,n.Uw)(),{headers:me}=ve(j);me&&F&&(me.includes(F)||$({sortField:null,sortDirection:"asc"}));const{fetching:fe,error:he,data:ye}=_e({filters:t,visualization:j,isVisualizationLoading:i,displayProperty:l,onResponsesReceived:r,pageSize:H,page:j!==ee.current?1:K,sortField:F,sortDirection:U}),Se=(0,p.useMemo)((()=>{if(!(fe&&null!=T&&T.current&&null!=k&&k.current&&null!=I&&I.current))return"calc(50% - 12px)";const e=T.current.clientHeight,t=k.current.offsetHeight,a=e-t-I.current.offsetHeight;return`${Math.round(t+a/2-12)}px`}),[fe]);if((0,p.useEffect)((()=>{ee.current=j,ce(1)}),[j,ce]),(0,p.useEffect)((()=>{if(ye&&j){var e;const t=ye.headers.filter((e=>e.legendSet)).map((e=>e.legendSet)),a=t.filter(((e,a)=>{var n;return t.findIndex((t=>t.id===e.id))===a&&(null===(n=e.legends)||void 0===n?void 0:n.length)}));a.length?R(a):R([]),A(null===(e=j.legend)||void 0===e?void 0:e.showKey)}else R([]),A(!1)}),[ye,j]),(0,p.useEffect)((()=>{he&&s&&s(he)}),[he,s]),!ye||he)return null;const Ce=(e=>{switch(e){case"COMFORTABLE":return se.sizeComfortable;case"COMPACT":return se.sizeCompact;default:return se.sizeNormal}})(j.displayDensity),be=(e=>{switch(e){case"LARGE":return se.fontSizeLarge;case"SMALL":return se.fontSizeSmall;default:return se.fontSizeNormal}})(j.fontSize),Ve=String(Math.max(ye.headers.length,1)),xe=e=>{let{name:t,direction:a}=e;return $({sortField:t,sortDirection:a,page:1})},De=te(W(j)),Te=e=>{const t=le(e),a=Number.isInteger(e.stageOffset)?e.name.replace(/\[-?\d+\]/,""):e.name;return p.createElement("span",{className:N()(se.headerCell,se.dimensionModalHandler),onClick:o?()=>o((e=>Object.keys(De).find((t=>De[t]===e)))(a)||a):void 0},t)},Ne=e=>{var t,a;let{columnIndex:n,value:i,isUndefined:l,props:r}=e;return p.createElement(E.W,Ee({},r,{key:n,className:N()(se.cell,be,Ce,{[se.emptyCell]:!i,[se.nowrap]:(o=ye.headers[n],[m.FV,m.$r,m.VX,m.M7,m.iq,m.y3,m.SA,m.zf,m.$d,m.Wt,m.so].includes(o.valueType)&&!o.optionSet),[se.undefinedCell]:l},"bordered"),backgroundColor:(null===(t=j.legend)||void 0===t?void 0:t.style)===f.UJ?(0,f.i3)(ye.headers[n].legendSet,i):void 0,dataTest:"table-cell"}),p.createElement("div",{style:(null===(a=j.legend)||void 0===a?void 0:a.style)===f.Xr?{color:(0,f.i3)(ye.headers[n].legendSet,i)}:{}},((e,t)=>(null==t?void 0:t.valueType)===m.Xw?p.createElement("a",{href:e,target:"_blank",rel:"noreferrer"},e):ie({value:e,header:t,visualization:j}))(i,ye.headers[n])));var o};return p.createElement("div",{className:se.pluginContainer,ref:de},p.createElement("div",{"data-test":"line-list-fetch-container",className:N()(se.fetchContainer,{[se.fetching]:fe}),ref:T},p.createElement("div",{className:se.fetchIndicator,style:{top:Se}}),p.createElement("div",{className:se.visualizationContainer,ref:ue,style:{maxWidth:Z.containerMaxWidth}},Y&&p.createElement("div",{className:se.noTimeDimensionWarning,ref:c,style:{maxWidth:Z.noticeBoxMaxWidth}},p.createElement(z.f,{warning:!0},v.Z.t("This line list may show data that was not available when the interpretation was written."))),p.createElement(w.w,{scrollHeight:ze(Q,c),scrollWidth:"100%",width:"auto",className:N()(se.dataTable,"push-analytics-linelist-table"),dataTest:"line-list-table",ref:y},p.createElement(C.s,{ref:k},p.createElement(b.U,null,ye.headers.map(((e,t)=>e?p.createElement(V.p,{fixed:!0,top:"0",key:e.name,name:e.name,onSortIconClick:xe,sortDirection:pe?void 0:e.name===F?U:"default",sortIconTitle:v.Z.t("Sort by {{column}}",{column:le(e)}),className:N()(se.headerCell,be,Ce,"bordered"),dataTest:"table-header"},Te(e)):p.createElement(V.p,{fixed:!0,top:"0",key:`undefined_${t}`,className:N()(se.headerCell,be,Ce),dataTest:"table-header"}))))),p.createElement(x.R,{dataTest:"table-body"},ye.rows.map(((e,t)=>p.createElement(b.U,{key:t,dataTest:"table-row"},e.map(((e,a)=>ge(ye.rowContext,t,a)?p.createElement(h.u,{content:v.Z.t("No event")},(t=>Ne({columnIndex:a,value:e,isUndefined:!0,props:t}))):Ne({columnIndex:a,value:e}))))))),p.createElement(D.j,{className:se.stickyFooter,ref:I},p.createElement(b.U,null,p.createElement(E.W,{colSpan:Ve,staticStyle:!0,className:se.footerCell},p.createElement("div",{className:N()(se.stickyNavigation,Ce),style:{maxWidth:Z.paginationMaxWidth}},p.createElement(we,{offline:pe,disabled:pe||fe,page:ye.pager.page,pageSize:ye.pager.pageSize||100,isLastPage:ye.pager.isLastPage,onPageChange:ce,onPageSizeChange:e=>$({pageSize:e,page:1}),pageSizeSelectText:v.Z.t("Rows per page"),pageLength:ye.rows.length,pageSummaryText:e=>{let{firstItem:t,lastItem:a,page:n}=e;return v.Z.t("Page {{page}}, row {{firstItem}}-{{lastItem}}",{firstItem:t,lastItem:a,page:n})}})))))))),Boolean(P.length)&&(d?p.createElement("div",{className:se.legendKeyContainer,ref:M},p.createElement("div",{className:se.legendKeyToggle},p.createElement(S.z,{small:!0,secondary:!0,onClick:()=>{A(!L),window.requestAnimationFrame(ae)},icon:p.createElement(_.Z,null),toggled:L})),L&&p.createElement("div",{className:se.legendKeyWrapper,"data-test":"visualization-legend-key"},p.createElement("div",{className:se.wrapper},p.createElement(g.Z,{legendSets:P})))):L&&p.createElement("div",{className:se.legendKeyScrollbox,"data-test":"visualization-legend-key",ref:M},p.createElement(g.Z,{legendSets:P}))))};Ce.defaultProps={displayProperty:"name",isVisualizationLoading:!1,onResponsesReceived:Function.prototype},Ce.propTypes={displayProperty:c().string.isRequired,isVisualizationLoading:c().bool.isRequired,visualization:c().object.isRequired,onResponsesReceived:c().func.isRequired,filters:c().object,forDashboard:c().bool,onColumnHeaderClick:c().func,onError:c().func};const be="READY",Ve="INSTALLING";function xe(e){let{installingWorker:t,onStateChange:a}=e;t.onstatechange=()=>{"activated"===t.state&&a(be)}}const De=()=>p.createElement(i.m,null,p.createElement(l.M,null,p.createElement(r.V,null))),Te=e=>{let{id:t,children:a,cacheNow:i,isParentCached:l}=e;const{startRecording:r,isCached:o,remove:s}=(0,n.Of)(t);return(0,p.useEffect)((()=>{i&&r({onError:console.error})}),[i]),(0,p.useEffect)((()=>{const e=d().on("removeCachedData",{window:window.parent},(()=>s()));return()=>e.cancel()}),[s]),(0,p.useEffect)((()=>{!l&&o&&s()}),[l]),p.createElement(n.MW,{id:t,loadingMask:De},a)};Te.propTypes={cacheNow:c().bool,children:c().node,id:c().string,isParentCached:c().bool};const Ne=e=>{d().send(window.parent,"installationStatus",{installationStatus:e})},ke=()=>{const[e,t]=(0,p.useState)(),a=e=>t(e.data);return(0,p.useEffect)((()=>{d().send(window.parent,"getProps").then(a).catch((e=>console.error(e))),async function(e){let{onStateChange:t}=e;if(!navigator.serviceWorker)return null;const a=await navigator.serviceWorker.getRegistration();return a?a.active?be:a.installing?(xe({installingWorker:a.installing,onStateChange:t}),Ve):(a.onupdatefound=()=>{t(Ve);const e=a.installing;e&&xe({installingWorker:e,onStateChange:t})},null):null}({onStateChange:Ne}).then(Ne);const e=d().on("newProps",{window:window.parent},a);return()=>e.cancel()}),[]),e?p.createElement("div",{style:{display:"flex",height:"100%",overflow:"hidden"}},p.createElement(Te,{id:e.cacheId,cacheNow:e.recordOnNextLoad,isParentCached:e.isParentCached},p.createElement(Ce,e)),p.createElement(o.k,{colors:!0,spacers:!0,elevations:!0})):null}},2480:()=>{}}]);