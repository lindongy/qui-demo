import{_ as a,$ as e,o as t,c as o,a as n,w as s,F as i,r as p,b as c,d as m,e as l,f as r,g,h,t as d}from"./index-9a2cee6e.js";import{_ as u}from"./q-avatar.2b176466.js";import{_,a as f}from"./q-item.7302ee3a.js";import{_ as w}from"./q-list.3401396f.js";import{_ as y}from"./q-page.97c14639.js";import{_ as v}from"./q-drawer.9ad2b328.js";import"./use-model-toggle.0cc19758.js";const b=a({data:()=>({title:"Hello",showSide:!1,test:!1,showAni:!1,showDlg:!1,navList:{"Style & Identity":[{name:"Typography 排板",path:"/pages/identity/typography",icon:"text_fields"},{name:"Color 颜色",path:"/pages/identity/color",icon:"palette"},{name:"Assist 辅助",path:"/pages/identity/assist",icon:"format_paint"},{name:"Visiblity 可见性",path:"/pages/identity/visiblity",icon:"vrpano"},{name:"Position 定位",path:"/pages/identity/position",icon:"push_pin"}],"Flex Grid":[{name:"Grid Row 布局网格",path:"/pages/layout/grid_row",icon:"view_column"},{name:"Grid Gutter 网格间距",path:"/pages/layout/gutter",icon:"dashboard"},{name:"Layout 页面布局",path:"/pages/layout/layout",icon:"view_quilt"}],"Vue Components":[{name:"Avatar 头像",path:"/pages/components/avatar",icon:"account_box"},{name:"Icon 图标",path:"/pages/components/icon",icon:"add_reaction"},{name:"Image 图片",path:"/pages/components/img",icon:"insert_photo"},{name:"Button 按扭",path:"/pages/components/btn",icon:"edit_attributes"},{name:"Badge 徽标",path:"/pages/components/badge",icon:"local_offer"},{name:"Chip 碎片",path:"/pages/components/chip",icon:"local_offer"},{name:"Card 卡片",path:"/pages/components/card",icon:"auto_awesome_motion"},{name:"List & Item 列表",path:"/pages/components/item",icon:"reorder"},{name:"Links 连接",path:"/pages/components/link",icon:"link"},{name:"Linear Progress 进度条",path:"/pages/components/linear_progress",icon:"av_timer"},{name:"Input & Field 输入框",path:"/pages/components/input",icon:"input"},{name:"Form 表单",path:"/pages/components/form",icon:"list_alt"},{name:"Checkbox & Radio 单复选框",path:"/pages/components/checkbox",icon:"check_box"},{name:"Dialog 弹窗",path:"/pages/components/dialog",icon:"web_asset"},{name:"Date & Picker 选择器",path:"/pages/components/date_picker",icon:"view_week"},{name:"Calendar 日历",path:"/pages/components/calendar",icon:"web_asset"},{name:"Tabs 切换",path:"/pages/components/tabs",icon:"switch_left"},{name:"Swiper 滚动",path:"/pages/components/swiper",icon:"swipe"},{name:"Toggle 开关",path:"/pages/components/toggle",icon:"toggle_on"},{name:"Rating 评分",path:"/pages/components/rating",icon:"hotel_class"},{name:"Skeleton 骨架屏",path:"/pages/components/skeleton",icon:"vertical_split"}],Plugins:[{name:"UniAPP 插件封装",path:"/pages/plugins/uniapp",icon:"flag"}]},show:!1}),onLoad(){},methods:{onClick(a){this.$refs.menu.toggle(),this.show=!this.show},closeEvent(a){e("close-popup"),a.preventDefault(),a.stopPropagation()}}},[["render",function(a,e,b,k,q,x){const C=p(l("q-avatar"),u),L=p(l("q-item-section"),_),j=p(l("q-item"),f),P=p(l("q-list"),w),S=r("Lanmu"),I=p(l("q-page"),y),A=p(l("q-drawer"),v);return t(),o(i,null,[n(I,{push:q.showSide?"left":""},{default:s((()=>[(t(!0),o(i,null,c(q.navList,((a,e)=>(t(),g(S,{title:e,key:e},{default:s((()=>[n(P,{bordered:"",separator:""},{default:s((()=>[(t(!0),o(i,null,c(a,((a,e)=>(t(),g(j,{key:e,to:a.path},{default:s((()=>[a.icon?(t(),g(L,{key:0,avatar:""},{default:s((()=>[n(C,{icon:a.icon,color:"primary",class:"text-white"},null,8,["icon"])])),_:2},1024)):h("",!0),n(L,null,{default:s((()=>[m(d(a.name),1)])),_:2},1024)])),_:2},1032,["to"])))),128))])),_:2},1024)])),_:2},1032,["title"])))),128))])),_:1},8,["push"]),n(A,{modelValue:q.showSide,"onUpdate:modelValue":e[0]||(e[0]=a=>q.showSide=a)},{default:s((()=>[m("侧栏")])),_:1},8,["modelValue"])],64)}],["__scopeId","data-v-d7f989d2"]]);export{b as default};