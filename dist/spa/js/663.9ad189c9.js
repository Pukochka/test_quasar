"use strict";(self["webpackChunkquasar_app"]=self["webpackChunkquasar_app"]||[]).push([[663],{5663:(e,l,t)=>{t.r(l),t.d(l,{default:()=>Z});var n=t(3673),a=t(2323);const s={class:"flex justify-between"},o=(0,n._)("div",{class:"text-h5 custom-header"},"Покупка",-1),u={class:"col q-pt-none text-h6"},d={class:"col q-pt-none"},c={class:"col q-pt-none"},m={class:"col q-pt-none flex justify-between items-center"},i={class:"col q-pt-none"},p={class:"col q-pt-none"},r={class:"col q-pt-none"};function w(e,l,t,w,g,q){const b=(0,n.up)("q-btn"),h=(0,n.up)("q-separator"),f=(0,n.up)("q-input"),V=(0,n.up)("q-badge"),_=(0,n.up)("q-card-actions"),v=(0,n.up)("q-card"),x=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(v,{class:"column q-pa-md",style:{heigth:"600px"}},{default:(0,n.w5)((()=>[(0,n._)("div",s,[o,(0,n.wy)((0,n.Wm)(b,{flat:"",round:"",dense:"",icon:"close",onClick:l[0]||(l[0]=l=>e.num=1)},null,512),[[x]])]),(0,n.Wm)(h,{horizontal:"",class:"custom-separator"}),(0,n._)("div",u,(0,a.zw)(e.item.design.title)+" : "+(0,a.zw)(e.desc.design.title),1),(0,n._)("div",d,[(0,n.Wm)(f,{dense:"",modelValue:e.email,"onUpdate:modelValue":l[1]||(l[1]=l=>e.email=l),label:"Email:"},null,8,["modelValue"])]),(0,n._)("div",c,[(0,n.Wm)(f,{dense:"",modelValue:e.telegram,"onUpdate:modelValue":l[2]||(l[2]=l=>e.telegram=l),label:"Telegram:"},null,8,["modelValue"])]),(0,n._)("div",m,[(0,n.Wm)(V,{color:"blue q-ma-sm text-h6"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Осталось : "+(0,a.zw)(e.desc.setting.count),1)])),_:1}),(0,n.Wm)(f,{type:"number",onKeydown:l[3]||(l[3]=l=>e.validate(e.desc.setting.count)),onKeyup:l[4]||(l[4]=l=>e.validate(e.desc.setting.count)),min:e.desc.setting.count-(e.desc.setting.count-1),max:e.desc.setting.count,modelValue:e.num,"onUpdate:modelValue":l[5]||(l[5]=l=>e.num=l),dense:"",style:{width:"200px",height:"30px !important"}},null,8,["min","max","modelValue"])]),(0,n._)("div",i,[(0,n.Wm)(f,{dense:"",modelValue:e.text,"onUpdate:modelValue":l[6]||(l[6]=l=>e.text=l),label:"Способ оплаты"},null,8,["modelValue"])]),(0,n._)("div",p,[(0,n.Wm)(f,{dense:"",modelValue:e.sale,"onUpdate:modelValue":l[7]||(l[7]=l=>e.sale=l),label:"Код купона:"},null,8,["modelValue"])]),(0,n._)("div",r,[(0,n.Wm)(V,{color:"blue q-ma-sm text-h6"},{default:(0,n.w5)((()=>[(0,n.Uk)(" К оплате: "+(0,a.zw)(e.formatMoney(parseInt(e.desc.price.amount)*e.num))+" "+(0,a.zw)(e.desc.price.currency),1)])),_:1})]),(0,n.Wm)(_,{align:"center",class:"bg-white text-blue"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(b,{rounded:"",flat:"",label:"Перейти к оплате",onClick:l[8]||(l[8]=l=>e.num=1)},null,512),[[x]])])),_:1})])),_:1})}const g={setup(){return{}},methods:{}};var q=t(4260),b=t(3054),h=t(6210),f=t(3831),V=t(8225),_=t(6106),v=t(7760),x=t(8586),y=t(7518),W=t.n(y);const k=(0,q.Z)(g,[["render",w]]),Z=k;W()(g,"components",{QCard:b.Z,QBtn:h.Z,QSeparator:f.Z,QInput:V.Z,QBadge:_.Z,QCardActions:v.Z}),W()(g,"directives",{ClosePopup:x.Z})}}]);