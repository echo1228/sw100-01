import{d as _,z as C,f as m,o as d,j as B,k as D,r as p,I as b,b as w,w as h,g as e,i as f,t as T,a as x,e as c,D as r,m as v,v as A,x as $,E as y}from"../modules/vue-BHmlZ7N2.js";import{v as N}from"../index-CgrV2EUf.js";import{_ as S}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BkbpPnt8.js";import{I as V}from"./default-BT9f5DmP.js";import{u as E,f as F}from"./context-Cs-KwWWf.js";import"../modules/shiki-BDjF9FP5.js";import"../modules/unplugin-icons-PH-8s2Df.js";const P=_({__name:"Transform",props:{scale:{},origin:{}},setup(k){const t=k,a=C(()=>{const i=[];return t.scale!=null&&i.push(`scale(${t.scale||1})`),{transform:i.join(" "),"transform-origin":t.origin||"top left"}});return(i,s)=>(d(),m("div",{style:D(a.value)},[B(i.$slots,"default")],4))}}),j={key:0,class:"w-30 h-30 my-10px bg-gray-400 bg-opacity-10 rounded-lg flex opacity-50"},z={class:"m-auto animate-pulse text-4xl"},I={key:0},W=_({__name:"Tweet",props:{id:{},scale:{},conversation:{},cards:{}},setup(k){const t=k,a=p(),i=p(!1),s=p(!1);async function l(o=10){var u,g;if(!((g=(u=window.twttr)==null?void 0:u.widgets)!=null&&g.createTweet)){if(o<=0)return console.error("Failed to load Twitter widget after 10 retries.");setTimeout(()=>l(o-1),1e3);return}const n=await window.twttr.widgets.createTweet(t.id.toString(),a.value,{theme:N.value?"dark":"light",conversation:t.conversation||"none",cards:t.cards});i.value=!0,n===void 0&&(s.value=!0)}return b(()=>{l()}),(o,n)=>{const u=P;return d(),w(u,{scale:o.scale||1},{default:h(()=>[e("div",{ref_key:"tweet",ref:a,class:"tweet slidev-tweet"},[!i.value||s.value?(d(),m("div",j,[e("div",z,[n[0]||(n[0]=e("div",{class:"i-carbon:logo-twitter"},null,-1)),s.value?(d(),m("span",I,'Could not load tweet with id="'+T(t.id)+'"',1)):f("v-if",!0)])])):f("v-if",!0)],512)]),_:1},8,["scale"])}}}),Y={grid:"~ cols-2 gap-4"},K={__name:"slides.md__slidev_6",setup(k){const{$clicksContext:t,$frontmatter:a}=E();return t.setup(),(i,s)=>{const l=S,o=x("Counter"),n=W;return d(),w(V,A($(y(F)(y(a),5))),{default:h(()=>[s[5]||(s[5]=e("h1",null,"Components",-1)),e("div",Y,[e("div",null,[s[1]||(s[1]=e("p",null,"You can use Vue components directly inside your slides.",-1)),s[2]||(s[2]=e("p",null,[r("We have provided a few built-in components like "),e("code",null,"<Tweet/>"),r(" and "),e("code",null,"<Youtube/>"),r(" that you can use directly. Adding your own custom components is also super easy.")],-1)),c(l,v({},{ranges:[]}),{default:h(()=>s[0]||(s[0]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Counter"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," :count"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"10"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")])])],-1)])),_:1},16),f(" ./components/Counter.vue "),c(o,{count:10,m:"t-4"}),s[3]||(s[3]=e("p",null,[r("Check out "),e("a",{href:"https://sli.dev/builtin/components.html",target:"_blank"},"the guides"),r(" for more.")],-1))]),e("div",null,[c(l,v({},{ranges:[]}),{default:h(()=>s[4]||(s[4]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Tweet"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," id"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1390115482657726468"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")])])],-1)])),_:1},16),c(n,{id:"1390115482657726468",scale:"0.65"})])])]),_:1},16)}}};export{K as default};
