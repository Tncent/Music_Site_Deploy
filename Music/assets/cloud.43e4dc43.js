import{P as a,r as e,z as t,j as u,M as l,N as o,U as s,Q as r,ck as n,aR as m}from"./index.8c222edc.js";import{D as i}from"./DataLists.a1af9741.js";import{P as p}from"./index.7a5ed3e2.js";import"./SmallSongData.246ff741.js";import"./Add.055214c0.js";import"./Space.03a5017b.js";import"./get-slot.65c4337d.js";import"./Select.8d76d25a.js";const d={class:"cloud"},v={__name:"cloud",setup(v){const c=a();let g=e([]),S=e(30),h=e(c.currentRoute.value.query.page?Number(c.currentRoute.value.query.page):1),j=e(0);const b=(a=30,e=0,t=!0)=>{n(a,e).then((a=>{j.value=a.count,g.value=[],a.data?a.data.forEach(((a,e)=>{g.value.push({id:a.songId,num:e+1+(h.value-1)*S.value,name:a.simpleSong.name,artist:a.simpleSong.ar,album:a.simpleSong.al,alia:a.simpleSong.alia,time:m(a.simpleSong.dt)})})):$message.error("搜索内容为空"),$mainContent&&t&&$mainContent.scrollIntoView({behavior:"smooth"})}))},f=a=>{S.value=a,b(a,(h.value-1)*S.value)},C=a=>{c.push({path:"/user/cloud",query:{page:a}})},D=(a=!1)=>{b(S.value,(h.value-1)*S.value,a)};return t((()=>c.currentRoute.value),(a=>{h.value=Number(a.query.page),"cloud"==a.name&&b(S.value,(a.query.page-1)*S.value)})),u((()=>{b(S.value,(h.value-1)*S.value)})),(a,e)=>(l(),o("div",d,[s(i,{listData:r(g),onCloudDataLoad:D},null,8,["listData"]),s(p,{totalCount:r(j),pageNumber:r(h),onPageSizeChange:f,onPageNumberChange:C},null,8,["totalCount","pageNumber"])]))}};export{v as default};
