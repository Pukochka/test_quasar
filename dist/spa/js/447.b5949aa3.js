"use strict";(self["webpackChunkquasar_app"]=self["webpackChunkquasar_app"]||[]).push([[447],{3307:(t,e,a)=>{a.d(e,{Z:()=>u});var o=a(3673);function i(t,e,a,i,s,r){const l=(0,o.up)("q-badge");return(0,o.wg)(),(0,o.iD)(o.HY,null,[1==a.item.type?((0,o.wg)(),(0,o.j4)(l,{key:0,label:"Уникальный товар",class:"sub-category q-mt-none"})):(0,o.kq)("",!0),2==a.item.type?((0,o.wg)(),(0,o.j4)(l,{key:1,label:"Не уникальный товар",class:"sub-category q-mt-none"})):(0,o.kq)("",!0),3==a.item.type?((0,o.wg)(),(0,o.j4)(l,{key:2,label:"Не уникальный файл",class:"sub-category q-mt-none"})):(0,o.kq)("",!0),4==a.item.type?((0,o.wg)(),(0,o.j4)(l,{key:3,label:"Уникальный файл",class:"sub-category q-mt-none"})):(0,o.kq)("",!0),0==a.item.type?((0,o.wg)(),(0,o.j4)(l,{key:4,label:"Подкатегория",class:"sub-category q-mt-none"})):(0,o.kq)("",!0)],64)}const s={data(){return{}},props:{item:{type:Object}}};var r=a(4260),l=a(6106),c=a(7518),n=a.n(c);const d=(0,r.Z)(s,[["render",i],["__scopeId","data-v-84e5c0d4"]]),u=d;n()(s,"components",{QBadge:l.Z})},1447:(t,e,a)=>{a.r(e),a.d(e,{default:()=>j});var o=a(3673),i=a(2323);const s={class:"mw1000 flex"},r={class:"q-pa-md justify-center col mw1000"},l={class:"text-h5 flex justify-start items-center custom-header q-mb-sm q-ml-sm q-mt-xl"},c={class:"row wrap q-pt-md"},n={class:"text-h6 flex justify-between"},d={key:0,class:"price"};function u(t,e,a,u,m,p){const f=(0,o.up)("q-btn"),g=(0,o.up)("q-separator"),y=(0,o.up)("q-icon"),_=(0,o.up)("t-desc"),v=(0,o.up)("q-banner");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",s,[(0,o.Wm)(f,{flat:"",class:"q-ma-sm",color:"primary",label:"Все",onClick:e[0]||(e[0]=t=>(m.products=[],p.getProducts(null,0,!1)))})]),(0,o._)("div",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"col",key:t.id},[(0,o._)("p",l,(0,i.zw)(t.design.title),1),(0,o.Wm)(g,{horizontal:"",class:"custom-separator"}),(0,o._)("div",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.items,((t,e)=>((0,o.wg)(),(0,o.j4)(v,{rounded:"",style:{width:"300px"},class:"q-ma-sm rounded-borders bg-grey-1 custom-border relative",key:e},{action:(0,o.w5)((()=>[0!==t.type?((0,o.wg)(),(0,o.iD)("div",d,(0,i.zw)(p.formatMoney(t.price.amount)+" "+p.formatPrice(t.price.currency)),1)):(0,o.kq)("",!0),0!==t.type?((0,o.wg)(),(0,o.j4)(f,{key:1,flat:"",color:"primary",label:"Купить"})):(0,o.kq)("",!0),0==t.type?((0,o.wg)(),(0,o.j4)(f,{key:2,flat:"",color:"primary",label:"Смотреть",onClick:e=>{m.products=[],p.getProducts(t.id,t.category_id,!0)}},null,8,["onClick"])):(0,o.kq)("",!0)])),default:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o.Uk)((0,i.zw)(t.design.title)+" ",1),0!==t.type?((0,o.wg)(),(0,o.j4)(f,{key:0,flat:"",round:"",class:(0,i.C_)(["custom-favorite",{color:u.favorite_id.includes(t.id)}]),onClick:e=>{p.addInBasket(t.id,t)},ref_for:!0,ref:"fav"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{name:"shopping_cart",size:"16px"})])),_:2},1032,["onClick","class"])):(0,o.kq)("",!0),0==t.type?((0,o.wg)(),(0,o.j4)(f,{key:1,flat:"",round:"",class:"custom-favorite"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{name:"more_horiz",size:"20px"})])),_:1})):(0,o.kq)("",!0)]),(0,o.Wm)(_,{item:t},null,8,["item"])])),_:2},1024)))),128))])])))),128))])],64)}var m=a(1959),p=a(7),f=a(3307);const g={components:{"t-desc":f.Z},data(){return{products:[],validProd:[]}},setup(){return{favorite_id:(0,m.iH)([]),favorite_item:(0,m.iH)([]),sel:(0,m.iH)([])}},mounted(){},created(){this.getProducts(null,0,!1);const t=localStorage.getItem("favorite_id"),e=localStorage.getItem("favorite_item");if(t&&(this.favorite_id=JSON.parse(t),console.log(this.favorite_id)),e){this.favorite_item=JSON.parse(e);for(let t of this.favorite_item)console.log(JSON.parse(t));console.log(this.favorite_item)}},methods:{cl(){window.localStorage.clear()},addInBasket(t,e){this.favorite_id.includes(t)?this.favorite_id=this.favorite_id.filter((e=>e!==t)):this.favorite_id.push(t),this.favorite_item.includes(JSON.stringify(e))?this.favorite_item=this.favorite_item.filter((t=>t!==JSON.stringify(e))):this.favorite_item.push(JSON.stringify(e)),localStorage.setItem("favorite_id",JSON.stringify(this.favorite_id)),localStorage.setItem("favorite_item",JSON.stringify(this.favorite_item)),console.log(localStorage.getItem("favorite_item")),console.log(this.favorite_item)},formatPrice(t){let e="";switch(t){case"RUB":e="₽";break;case"USD":e="$";break;case"EUR":e="€";break;case"UAH":e="₴";break;case"KZT":e="₸";break}return e},formatMoney(t){const e=Number.prototype.toFixed.call(parseFloat(t));return e.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")},async getProducts(t,e,a){this.products=[],p.axios.post("https://api.bot-t.ru/v1/shop/category/view?token=5229498662:AAH6wu0z-uButJQfzT5jAUfjzROfNUTLDGk",`bot_id=30219&category_id=${e}`).then((e=>{for(let t in e.data.data)this.products.push(e.data.data[t]);a&&(this.products=this.products.filter((e=>0==e.type&&e.id==t)))}))}}};var y=a(4260),_=a(6210),v=a(3831),k=a(7505),h=a(8900),w=a(7518),b=a.n(w);const q=(0,y.Z)(g,[["render",u],["__scopeId","data-v-7d3a4fe8"]]),j=q;b()(g,"components",{QBtn:_.Z,QSeparator:v.Z,QBanner:k.Z,QIcon:h.Z})}}]);