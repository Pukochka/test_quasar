"use strict";(self["webpackChunkquasar_app"]=self["webpackChunkquasar_app"]||[]).push([[21],{1857:(e,t,l)=>{l.d(t,{Z:()=>b});var s=l(3673),a=l(2323);const n=(0,s._)("div",{class:"text-h4"},"Покупка",-1);function i(e,t,l,i,o,d){const u=(0,s.up)("q-btn"),m=(0,s.up)("q-card-section"),c=(0,s.up)("q-input"),r=(0,s.up)("q-badge"),p=(0,s.up)("q-card-actions"),h=(0,s.up)("q-card"),g=(0,s.up)("q-dialog"),w=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(g,{persistent:"","full-height":""},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{class:"column full-height full-width",style:{width:"300px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"flex justify-between"},{default:(0,s.w5)((()=>[n,(0,s.wy)((0,s.Wm)(u,{flat:"",round:"",dense:"",icon:"close",onClick:t[0]||(t[0]=e=>i.num=1)},null,512),[[w]])])),_:1}),(0,s.Wm)(m,{class:"col q-pt-none text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(l.item.design.title)+" : "+(0,a.zw)(l.desc.design.title),1)])),_:1}),(0,s.Wm)(m,{class:"col q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:i.email,"onUpdate:modelValue":t[1]||(t[1]=e=>i.email=e),label:"Email:"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(m,{class:"col q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:i.telegram,"onUpdate:modelValue":t[2]||(t[2]=e=>i.telegram=e),label:"Telegram:"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(m,{class:"col q-pt-none flex justify-between items-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{color:"blue q-ma-sm text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Осталось : "+(0,a.zw)(l.desc.setting.count),1)])),_:1}),(0,s.Wm)(c,{type:"number",onKeydown:t[3]||(t[3]=e=>d.validate(l.desc.setting.count)),onKeyup:t[4]||(t[4]=e=>d.validate(l.desc.setting.count)),min:l.desc.setting.count-(l.desc.setting.count-1),max:l.desc.setting.count,modelValue:i.num,"onUpdate:modelValue":t[5]||(t[5]=e=>i.num=e),filled:"",style:{width:"200px",height:"50px !important"}},null,8,["min","max","modelValue"])])),_:1}),(0,s.Wm)(m,{class:"col q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:e.text,"onUpdate:modelValue":t[6]||(t[6]=t=>e.text=t),label:"Способ оплаты"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(m,{class:"col q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:i.sale,"onUpdate:modelValue":t[7]||(t[7]=e=>i.sale=e),label:"Код купона:"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(m,{class:"col q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{color:"blue q-ma-sm text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)(" К оплате: "+(0,a.zw)(d.formatMoney(parseInt(l.desc.price.amount)*i.num))+" "+(0,a.zw)(l.desc.price.currency),1)])),_:1})])),_:1}),(0,s.Wm)(p,{align:"center",class:"bg-white text-blue"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(u,{rounded:"",flat:"",label:"Перейти к оплате",onClick:t[8]||(t[8]=e=>i.num=1)},null,512),[[w]])])),_:1})])),_:1})])),_:1})}var o=l(1959);const d={data(){return{}},setup(){return{email:(0,o.iH)(""),telegram:(0,o.iH)(""),sale:(0,o.iH)(""),num:(0,o.iH)(1)}},props:{desc:{type:Object},item:{type:Object}},methods:{formatMoney(e){const t=Number.prototype.toFixed.call(parseFloat(e));return t.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")},validate(e){this.num>e&&(this.num=e)}}};var u=l(4260),m=l(5118),c=l(3054),r=l(782),p=l(6210),h=l(4891),g=l(6106),w=l(7760),f=l(8586),y=l(7518),_=l.n(y);const q=(0,u.Z)(d,[["render",i]]),b=q;_()(d,"components",{QDialog:m.Z,QCard:c.Z,QCardSection:r.Z,QBtn:p.Z,QInput:h.Z,QBadge:g.Z,QCardActions:w.Z}),_()(d,"directives",{ClosePopup:f.Z})},267:(e,t,l)=>{l.d(t,{Z:()=>r});var s=l(3673),a=l(2323);function n(e,t,l,n,i,o){const d=(0,s.up)("q-skeleton");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(d,{class:"q-ma-md",style:(0,a.j5)({height:l.height})},null,8,["style"]),(0,s.Wm)(d,{class:"q-ma-md",style:(0,a.j5)({height:l.height})},null,8,["style"]),(0,s.Wm)(d,{class:"q-ma-md",style:(0,a.j5)({height:l.height})},null,8,["style"]),(0,s.Wm)(d,{class:"q-ma-md",style:(0,a.j5)({height:l.height})},null,8,["style"])],64)}const i={data(){return{}},props:{height:{type:[String],required:!0}}};var o=l(4260),d=l(8068),u=l(7518),m=l.n(u);const c=(0,o.Z)(i,[["render",n]]),r=c;m()(i,"components",{QSkeleton:d.ZP})},8021:(e,t,l)=>{l.r(t),l.d(t,{default:()=>F});var s=l(3673),a=l(2323);const n=e=>((0,s.dD)("data-v-3f70f731"),e=e(),(0,s.Cn)(),e),i=n((()=>(0,s._)("div",{class:"text-h3 flex justify-center q-pa-md"},"Товары",-1))),o={class:"fit row wrap justify-center items-start content-start"},d={class:"mw200"},u=(0,s.Uk)("Все"),m={class:"col-8 w600"},c=n((()=>(0,s._)("thead",null,[(0,s._)("ul",{class:"main-head q-px-md q-my-sm"},[(0,s._)("li",{class:""},"Продукт"),(0,s._)("li",{class:""},"Осталось"),(0,s._)("li",{class:""},"1 штука"),(0,s._)("li",{class:""},"Покупка")])],-1))),r={colspan:"4"},p={class:"row no-wrap items-center justify-center bggr"},h={class:"text-h6"},g={class:"text-left"},w={class:"text-right"},f={class:"text-right"},y={class:"text-right"},_=(0,s.Uk)("Купить");function q(e,t,l,n,q,b){const k=(0,s.up)("q-item-section"),x=(0,s.up)("q-badge"),W=(0,s.up)("q-item"),v=(0,s.up)("skeleton"),Z=(0,s.up)("q-list"),j=(0,s.up)("q-btn"),V=(0,s.up)("q-markup-table"),z=(0,s.up)("d-pay"),Q=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.iD)(s.HY,null,[i,(0,s._)("div",o,[(0,s._)("div",d,[(0,s.Wm)(Z,{separator:"",bordered:"",padding:"",class:"rounded-borders text-primary"},{default:(0,s.w5)((()=>[(0,s.wy)(((0,s.wg)(),(0,s.j4)(W,{clickable:"",onClick:t[0]||(t[0]=e=>b.openMain())},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"text-subtitle1 text-weight-medium"},{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(x,{color:"gray q-my-sm"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(b.allItems()),1)])),_:1})])),_:1})),[[Q]]),0==q.items.length?((0,s.wg)(),(0,s.j4)(v,{key:0,height:q.h.h40},null,8,["height"])):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(q.heads,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(W,{class:"justify-center",key:e.id,clickable:"",onClick:t=>b.openFilter(e)},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"text-subtitle1 text-weight-medium"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.design.title),1)])),_:2},1024),(0,s.Wm)(x,{color:"gray q-my-sm"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.items.length),1)])),_:2},1024)])),_:2},1032,["onClick"])),[[Q]]))),128))])),_:1})]),(0,s._)("div",m,[(0,s.Wm)(V,{bordered:"",class:"q-mx-md q-mb-lg"},{default:(0,s.w5)((()=>[c,(0,s._)("tbody",null,[(0,s.Wm)(V,{bordered:"",class:"q-ml-md q-mr-md full-width"},{default:(0,s.w5)((()=>[0==q.items.length?((0,s.wg)(),(0,s.j4)(v,{key:0,height:q.h.h150},null,8,["height"])):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(q.items,(e=>((0,s.wg)(),(0,s.iD)("tbody",{key:e.id,class:"rel"},[(0,s._)("tr",null,[(0,s._)("th",r,[(0,s._)("div",p,[(0,s._)("div",h,(0,a.zw)(e.design.title),1)])])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.items,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",g,(0,a.zw)(t.design.title),1),(0,s._)("td",w,(0,a.zw)(t.setting.count),1),(0,s._)("td",f,(0,a.zw)(b.formatMoney(t.price.amount))+" "+(0,a.zw)(t.price.currency),1),(0,s._)("td",y,[(0,s.Wm)(j,{color:"white","text-color":"black",onClick:l=>{q.num=0,b.openItem(e),b.openPay(t),b.openDesc(t),b.validate(t.setting.count)}},{default:(0,s.w5)((()=>[_])),_:2},1032,["onClick"])])])))),128))])))),128))])),_:1})])])),_:1})]),(0,s.Wm)(z,{modelValue:n.pay,"onUpdate:modelValue":t[1]||(t[1]=e=>n.pay=e),desc:e.desc,item:e.item,num:0},null,8,["modelValue","desc","item"])])],64)}var b=l(1959),k=l(7),x=l(267),W=l(1857);const v={data(){return{items:[],heads:[],isHidden:!1,num:null,h:{h40:"40px",h150:"150px"}}},components:{skeleton:x.Z,"d-pay":W.Z},setup(){return{separator:(0,b.iH)("horizontal"),pay:(0,b.iH)(!1),lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!"}},mounted(){this.onreadyStateChange()},methods:{allItems(){let e=0;if(this.heads){for(let t of this.heads)e+=t.items.length,console.log(t.items.length);return e}},openPay(e){this.desc=e,this.pay=!0},validate(e){this.num>e&&(this.num=e)},openItem(e){return this.item=e,e},openDesc(e){return this.desc=e,e},openMain(){this.items=[],this.items=this.heads},openFilter(e){this.item=e,this.items=[],this.items.push(e)},formatMoney(e){const t=Number.prototype.toFixed.call(parseFloat(e));return t.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")},async onreadyStateChange(){k.axios.post("https://api.bot-t.ru/v1/shop/category/view?token=5229498662:AAH6wu0z-uButJQfzT5jAUfjzROfNUTLDGk","bot_id=30219&category_id=0").then((e=>{for(let t in e.data.data)this.heads.push(e.data.data[t]),this.items.push(e.data.data[t]),console.log(this.items)}))}}};var Z=l(4260),j=l(5901),V=l(7953),z=l(880),Q=l(6106),C=l(1001),U=l(6210),H=l(9400),D=l(7518),I=l.n(D);const M=(0,Z.Z)(v,[["render",q],["__scopeId","data-v-3f70f731"]]),F=M;I()(v,"components",{QList:j.Z,QItem:V.Z,QItemSection:z.Z,QBadge:Q.Z,QMarkupTable:C.Z,QBtn:U.Z}),I()(v,"directives",{Ripple:H.Z})}}]);