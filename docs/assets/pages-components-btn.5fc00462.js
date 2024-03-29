import{_ as o,o as l,g as e,w as r,r as a,a as t,j as n,d as s,l as c,e as i,k as d,f as u,K as p}from"./index-9a2cee6e.js";import{_ as g}from"./q-avatar.2b176466.js";import{_ as m}from"./q-btn-group.08bc1a36.js";import{_ as b}from"./q-page.97c14639.js";const y=o({data:()=>({progress:[{loading:!1,percentage:0},{loading:!1,percentage:0},{loading:!1,percentage:0},{loading:!1,percentage:0}]}),methods:{startComputing(o){this.progress[o].loading=!0,this.progress[o].times=setInterval((()=>{this.progress[o].percentage+=Math.floor(8*Math.random()+10),this.progress[o].percentage>=100&&(clearInterval(this.progress[o].times),this.progress[o].loading=!1,this.progress[o].percentage=0)}),700)},onClick(o){console.log("点击了！")},onRippel(o){this.$refs.ripple.ripple(o)}}},[["render",function(o,y,f,h,_,v){const q=a(i("q-btn"),c),k=d,x=u("Lanmu"),w=a(i("q-avatar"),g),C=a(i("q-spinner"),p),R=a(i("q-btn-group"),m),F=a(i("q-page"),b);return l(),e(F,null,{default:r((()=>[t(x,{title:"With Icon"},{default:r((()=>[t(k,{class:"q-gutter-sm"},{default:r((()=>[t(q,{color:"primary",icon:"mail",label:"On Left",ripple:"yellow"}),t(q,{color:"secondary","icon-right":"mail",label:"On Right"}),t(q,{color:"red",icon:"mail","icon-right":"send",label:"On Left and Right"}),n("br"),t(q,{icon:"phone",label:"Stacked",stack:"",glossy:"",color:"purple"})])),_:1})])),_:1}),t(x,{title:"Shap"},{default:r((()=>[t(k,{class:"q-gutter-sm"},{default:r((()=>[t(q,{color:"primary",icon:"shopping_cart"}),t(q,{color:"secondary",icon:"navigation"}),t(q,{round:"",color:"amber",glossy:"","text-color":"black",icon:"layers_clear"}),t(q,{round:"",color:"brown-5",icon:"directions"}),t(q,{round:"",color:"deep-orange",icon:"edit_location"}),t(q,{square:"",color:"purple",glossy:"",icon:"local_grocery_store"}),t(q,{square:"",color:"black",icon:"my_location"}),t(q,{round:""},{default:r((()=>[t(w,{size:"42px"},{default:r((()=>[n("img",{src:"https://cdn.quasar.dev/img/avatar2.jpg"})])),_:1})])),_:1})])),_:1})])),_:1}),t(x,{title:"Design"},{default:r((()=>[n("div",{class:"q-pa-md q-gutter-sm"},[t(q,{flat:"",color:"primary",label:"Flat"}),t(q,{flat:"",rounded:"",color:"primary",label:"Flat Rounded"}),t(q,{flat:"",round:"",color:"primary",icon:"card_giftcard"}),n("br"),t(q,{outline:"",color:"primary",label:"Outline"}),t(q,{outline:"",rounded:"",color:"primary",label:"Outline Rounded"}),t(q,{outline:"",round:"",color:"primary",icon:"card_giftcard"}),n("br"),t(q,{push:"",color:"primary",label:"Push"}),t(q,{push:"",color:"primary",round:"",icon:"card_giftcard"}),t(q,{push:"",color:"white","text-color":"primary",label:"Push"}),t(q,{push:"",color:"white","text-color":"primary",round:"",icon:"card_giftcard"}),n("br"),t(q,{unelevated:"",color:"primary",label:"Unelevated"}),t(q,{unelevated:"",rounded:"",color:"primary",label:"Unelevated Rounded"}),t(q,{unelevated:"",round:"",color:"primary",icon:"card_giftcard"}),n("br"),t(q,{"no-caps":"",color:"primary",label:"No caps"}),n("br"),t(q,{class:"uni glossy",color:"teal",label:"Glossy"}),t(q,{class:"uni glossy",rounded:"",color:"deep-orange",label:"Glossy Rounded"}),t(q,{class:"uni glossy",round:"",color:"primary",icon:"card_giftcard"}),t(q,{class:"uni glossy",round:"",color:"secondary",icon:"local_florist"}),t(q,{class:"uni glossy",round:"",color:"deep-orange",icon:"local_activity"})])])),_:1}),t(x,{title:"加载与进度"},{default:r((()=>[n("div",{class:"q-pa-md q-gutter-sm"},[t(k,null,{default:r((()=>[t(q,{loading:_.progress[0].loading,percentage:_.progress[0].percentage,color:"primary",onClick:y[0]||(y[0]=o=>v.startComputing(0)),style:{width:"150px"}},{loading:r((()=>[t(C,{class:"on-left"}),s(" Computing... ")])),default:r((()=>[s(" Compute PI ")])),_:1},8,["loading","percentage"]),s(" 自定义loading插槽 ")])),_:1}),t(k,null,{default:r((()=>[t(q,{round:"",loading:_.progress[1].loading,color:"secondary",onClick:y[1]||(y[1]=o=>v.startComputing(1)),icon:"cloud_upload"},null,8,["loading"]),s(" 普通加载效果 ")])),_:1}),t(k,null,{default:r((()=>[t(q,{unelevated:"",loading:_.progress[2].loading,percentage:_.progress[2].percentage,color:"orange","text-color":"grey-9",onClick:y[2]||(y[2]=o=>v.startComputing(2)),icon:"cloud_upload",style:{width:"100px"}},null,8,["loading","percentage"]),s(" 普通进度条 ")])),_:1}),t(k,null,{default:r((()=>[t(q,{unelevated:"",loading:_.progress[3].loading,percentage:_.progress[3].percentage,"dark-percentage":"",color:"orange","text-color":"grey-9",onClick:y[3]||(y[3]=o=>v.startComputing(3)),icon:"cloud_upload",style:{width:"100px"}},null,8,["loading","percentage"]),s(" 暗模式进度条 ")])),_:1})])])),_:1}),t(x,{title:"Button Group"},{default:r((()=>[t(k,{class:"q-gutter-md"},{default:r((()=>[t(R,{class:"uni",push:""},{default:r((()=>[t(q,{push:"",label:"First",icon:"timeline"}),t(q,{push:"",label:"Second",icon:"visibility"}),t(q,{push:"",label:"Third",icon:"update"})])),_:1}),t(R,{class:"uni",push:""},{default:r((()=>[t(q,{color:"yellow",glossy:"","text-color":"black",push:"",label:"First",icon:"verified_user"}),t(q,{color:"amber",glossy:"","text-color":"black",push:"",label:"Second"}),t(q,{color:"orange",glossy:"","text-color":"black",push:"",label:"Third"})])),_:1}),t(R,{class:"uni",outline:""},{default:r((()=>[t(q,{outline:"",color:"brown",label:"First"}),t(q,{outline:"",color:"brown",label:"Second","icon-right":"watch_later"}),t(q,{outline:"",color:"brown",label:"Third"})])),_:1}),t(R,{class:"uni"},{default:r((()=>[t(q,{color:"secondary",glossy:"",label:"First"}),t(q,{color:"secondary",glossy:"",label:"Second"}),t(q,{color:"secondary",glossy:"",label:"Third"}),t(q,{color:"secondary",glossy:"",label:"Fourth"})])),_:1}),t(R,{class:"uni"},{default:r((()=>[t(q,{color:"accent",icon:"timeline"}),t(q,{color:"accent",icon:"visibility"}),t(q,{color:"accent",icon:"update"})])),_:1}),t(R,{class:"uni",rounded:""},{default:r((()=>[t(q,{color:"amber",rounded:"",glossy:"",icon:"timeline"}),t(q,{color:"amber",rounded:"",glossy:"",icon:"visibility"}),t(q,{color:"amber",rounded:"",glossy:"","icon-right":"update",label:"Update"})])),_:1})])),_:1})])),_:1}),t(x,{title:"Link"},{default:r((()=>[t(k,{class:"q-gutter-sm"},{default:r((()=>[t(q,{color:"primary",label:"内部连接",to:"/pages/components/card"}),t(q,{color:"primary",label:"URL连接",href:"http://dictbag.com"}),t(q,{color:"primary",label:"小程序连接",mp:"wxa91ff29be8dbb11c://pages/components/btn?id=12"})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-541929f4"]]);export{y as default};