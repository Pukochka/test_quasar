"use strict";(self["webpackChunkquasar_app"]=self["webpackChunkquasar_app"]||[]).push([[571],{5585:(e,t,l)=>{l.d(t,{Z:()=>U});var a=l(3673),s=l(2323),i=l(8880);const n={class:"flex justify-between"},d=(0,a._)("div",{class:"text-h4"},"Покупка",-1),o={class:"col q-pt-none text-h6"},c={class:"col q-pt-none"},u={class:"col q-pt-none"},m={class:"col q-pt-none flex justify-between items-center"},r=["min","max"],p={class:"col q-pt-none"},w={class:"col q-pt-none"},h={class:"col q-pt-none"};function g(e,t,l,g,f,y){const b=(0,a.up)("q-btn"),_=(0,a.up)("q-input"),q=(0,a.up)("q-badge"),v=(0,a.up)("q-card-actions"),x=(0,a.up)("q-card"),k=(0,a.up)("q-dialog"),Z=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(k,{persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"column q-pa-md",style:{heigth:"600px"}},{default:(0,a.w5)((()=>[(0,a._)("div",n,[d,(0,a.wy)((0,a.Wm)(b,{flat:"",round:"",dense:"",icon:"close",onClick:t[0]||(t[0]=e=>g.num=1)},null,512),[[Z]])]),(0,a._)("div",o,(0,s.zw)(l.item.design.title)+" : "+(0,s.zw)(l.desc.design.title),1),(0,a._)("div",c,[(0,a.Wm)(_,{modelValue:g.email,"onUpdate:modelValue":t[1]||(t[1]=e=>g.email=e),label:"Email:"},null,8,["modelValue"])]),(0,a._)("div",u,[(0,a.Wm)(_,{modelValue:g.telegram,"onUpdate:modelValue":t[2]||(t[2]=e=>g.telegram=e),label:"Telegram:"},null,8,["modelValue"])]),(0,a._)("div",m,[(0,a.Wm)(q,{color:"blue q-ma-sm text-h6"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Осталось : "+(0,s.zw)(l.desc.setting.count),1)])),_:1}),(0,a.wy)((0,a._)("input",{type:"number",onKeydown:t[3]||(t[3]=e=>y.validate(l.desc.setting.count)),onKeyup:t[4]||(t[4]=e=>y.validate(l.desc.setting.count)),min:l.desc.setting.count-(l.desc.setting.count-1),max:l.desc.setting.count,"onUpdate:modelValue":t[5]||(t[5]=e=>g.num=e),filled:"",style:{width:"200px",height:"30px !important"}},null,40,r),[[i.nr,g.num]])]),(0,a._)("div",p,[(0,a.Wm)(_,{modelValue:e.text,"onUpdate:modelValue":t[6]||(t[6]=t=>e.text=t),label:"Способ оплаты"},null,8,["modelValue"])]),(0,a._)("div",w,[(0,a.Wm)(_,{modelValue:g.sale,"onUpdate:modelValue":t[7]||(t[7]=e=>g.sale=e),label:"Код купона:"},null,8,["modelValue"])]),(0,a._)("div",h,[(0,a.Wm)(q,{color:"blue q-ma-sm text-h6"},{default:(0,a.w5)((()=>[(0,a.Uk)(" К оплате: "+(0,s.zw)(y.formatMoney(parseInt(l.desc.price.amount)*g.num))+" "+(0,s.zw)(l.desc.price.currency),1)])),_:1})]),(0,a.Wm)(v,{align:"center",class:"bg-white text-blue"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(b,{rounded:"",flat:"",label:"Перейти к оплате",onClick:t[8]||(t[8]=e=>g.num=1)},null,512),[[Z]])])),_:1})])),_:1})])),_:1})}var f=l(1959);const y={data(){return{}},setup(){return{email:(0,f.iH)(""),telegram:(0,f.iH)(""),sale:(0,f.iH)(""),num:(0,f.iH)(1)}},props:{desc:{type:Object},item:{type:Object}},methods:{formatMoney(e){const t=Number.prototype.toFixed.call(parseFloat(e));return t.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")},validate(e){this.num>e&&(this.num=e)}}};var b=l(4260),_=l(5118),q=l(3054),v=l(6210),x=l(8225),k=l(6106),Z=l(7760),W=l(8586),Q=l(7518),C=l.n(Q);const V=(0,b.Z)(y,[["render",g]]),U=V;C()(y,"components",{QDialog:_.Z,QCard:q.Z,QBtn:v.Z,QInput:x.Z,QBadge:k.Z,QCardActions:Z.Z}),C()(y,"directives",{ClosePopup:W.Z})},5571:(e,t,l)=>{l.r(t),l.d(t,{default:()=>N});var a=l(3673),s=l(2323);const i=e=>((0,a.dD)("data-v-2cf14974"),e=e(),(0,a.Cn)(),e),n={class:"justify-center"},d={class:"q-ma-md flex wrap justify-center"},o=(0,a.Uk)(" Все "),c={class:"text-h5 text-weight-bold q-pt-lg q-pb-sm"},u={class:"flex wrap"},m=i((()=>(0,a._)("div",{class:"bgc"},null,-1))),r={class:"mw200 text-h6 q-pa-sm q-pl-md word"},p={class:"flex justify-between q-pb-sm items-center"},w={class:"text-subtitle2 q-pa-sm"},h=(0,a.Uk)(" Подробнее "),g=(0,a.Uk)(" Купить");function f(e,t,l,i,f,y){const b=(0,a.up)("q-item-section"),_=(0,a.up)("q-item"),q=(0,a.up)("q-badge"),v=(0,a.up)("q-separator"),x=(0,a.up)("q-list"),k=(0,a.up)("q-btn"),Z=(0,a.up)("q-card"),W=(0,a.up)("d-more"),Q=(0,a.up)("d-pay"),C=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",d,[(0,a.Wm)(x,{bordered:"",class:"flex wrap text-primary mw700 rounded-borders"},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(_,{class:"borrad",clickable:"",onClick:t[0]||(t[0]=e=>y.openMain())},{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(y.allItems()),1)])),_:1}),(0,a.Wm)(b,{class:"text-subtitle1 text-weight-medium"},{default:(0,a.w5)((()=>[o])),_:1})])),_:1})),[[C]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.heads,(e=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(_,{key:e.id,clickable:"",onClick:t=>y.openFilter(e),class:"borrad"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{class:"text-subtitle1 text-weight-medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.design.title),1)])),_:2},1024),(0,a.Wm)(q,{color:"white",class:"text-blue q-pa-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.items.length),1)])),_:2},1024),(0,a.Wm)(v,{vertical:"",dark:""})])),_:2},1032,["onClick"])),[[C]]))),128))])),_:1})]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.items,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"mw1000",key:t.id},[(0,a._)("div",c,(0,s.zw)(t.design.title),1),(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.items,(l=>((0,a.wg)(),(0,a.j4)(Z,{class:"q-ma-sm",style:{width:"300px"},key:l.id},{default:(0,a.w5)((()=>[m,(0,a._)("div",r,(0,s.zw)(l.design.title),1),(0,a._)("div",p,[(0,a._)("div",w,(0,s.zw)(y.formatMoney(l.price.amount))+" "+(0,s.zw)(l.price.currency),1),(0,a.Wm)(k,{onClick:e=>{y.openDialog(l,t),this.more=!0},color:"primary q-pa-sm",flat:"",class:"text-subtitle2"},{default:(0,a.w5)((()=>[h])),_:2},1032,["onClick"]),(0,a.Wm)(k,{flat:"",color:"primary q-pa-sm",onClick:a=>{e.num=0,y.openDialog(l,t),this.pay=!0}},{default:(0,a.w5)((()=>[g])),_:2},1032,["onClick"])])])),_:2},1024)))),128))])])))),128)),(0,a.Wm)(W,{desc:e.desc,modelValue:i.more,"onUpdate:modelValue":t[1]||(t[1]=e=>i.more=e)},null,8,["desc","modelValue"]),(0,a.Wm)(Q,{modelValue:i.pay,"onUpdate:modelValue":t[2]||(t[2]=e=>i.pay=e),desc:e.desc,item:e.item,num:0},null,8,["modelValue","desc","item"])])}var y=l(1959),b=l(7);const _={class:"text-h6"};function q(e,t,l,i,n,d){const o=(0,a.up)("q-space"),c=(0,a.up)("q-btn"),u=(0,a.up)("q-card-section"),m=(0,a.up)("q-card"),r=(0,a.up)("q-dialog"),p=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"row items-center q-pb-none"},{default:(0,a.w5)((()=>[(0,a._)("div",_,(0,s.zw)(l.desc.design.title),1),(0,a.Wm)(o),(0,a.wy)((0,a.Wm)(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[p]])])),_:1}),(0,a.Wm)(u,{style:{width:"300px","min-height":"100px"},class:"text-subtitle1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(l.desc.design.rules),1)])),_:1})])),_:1})])),_:1})}const v={data(){return{}},props:{desc:{type:Object}}};var x=l(4260),k=l(5118),Z=l(3054),W=l(782),Q=l(7077),C=l(6210),V=l(8586),U=l(7518),z=l.n(U);const j=(0,x.Z)(v,[["render",q]]),H=j;z()(v,"components",{QDialog:k.Z,QCard:Z.Z,QCardSection:W.Z,QSpace:Q.Z,QBtn:C.Z}),z()(v,"directives",{ClosePopup:V.Z});var D=l(5585);const I={components:{"d-more":H,"d-pay":D.Z},data(){return{items:[],heads:[]}},setup(){return{more:(0,y.iH)(!1),isHidden:(0,y.iH)(!1),pay:(0,y.iH)(!1),email:(0,y.iH)(""),telegram:(0,y.iH)(""),sale:(0,y.iH)("")}},created(){this.onreadyStateChange()},methods:{openDialog(e,t,l){this.item=t,this.desc=e,this.dia=l,this.dia=!0},openMain(){this.items=[],this.items=this.heads},openFilter(e){this.item=e,this.items=[],this.items.push(e)},formatMoney(e){const t=Number.prototype.toFixed.call(parseFloat(e));return t.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")},allItems(){let e=0;if(this.heads){for(let t of this.heads)e+=t.items.length;return e}},async onreadyStateChange(){b.axios.post("https://api.bot-t.ru/v1/shop/category/view?token=5229498662:AAH6wu0z-uButJQfzT5jAUfjzROfNUTLDGk","bot_id=30219&category_id=0").then((e=>{for(let t in e.data.data)this.heads.push(e.data.data[t]),this.items.push(e.data.data[t])}))}}};var B=l(5901),F=l(7953),M=l(880),S=l(6106),K=l(3831),A=l(9400);const O=(0,x.Z)(I,[["render",f],["__scopeId","data-v-2cf14974"]]),N=O;z()(I,"components",{QList:B.Z,QItem:F.Z,QItemSection:M.Z,QBadge:S.Z,QSeparator:K.Z,QCard:Z.Z,QBtn:C.Z}),z()(I,"directives",{Ripple:A.Z})}}]);