import{n as l,o as e,g as a,w as u,r as o,a as d,d as t,j as m,t as n,k as r,e as s,f as V,l as c,ai as v}from"./index-f676a6ba.js";import{_ as i}from"./q-toggle.0691205e.js";import{_ as f}from"./q-item-label.4f1d944f.js";import{_ as p,a as g}from"./q-item.8b25c847.js";import{_ as b}from"./q-list.ede209a6.js";import{_}from"./q-page.fec06fa6.js";const U={__name:"toggle",setup(U){const q=l(!0),y=l(!0),k=l(!0),x=l(!0);l(!0);const h=l(!0),w=l(!0),z=l(!1),O=l(!0),S=l(!0),j=l("Agreed"),R=l(42),L=l(!0),A=l(null),T=l("maybe");function B(){A.value=null,T.value="maybe"}const M=l(null),D=l(null),N=l(!0),Q=l(!1);function $(){M.value=null,D.value=null,N.value=!0,Q.value=!1}const C=l(["yellow","red"]),J=l(!1),Y=l(!0),F=l(!0),G=l(["line"]),K=l(["friend"]);return(l,U)=>{const P=r,E=o(s("q-toggle"),i),H=V("Lanmu"),I=o(s("q-btn"),c),W=o(s("q-item-label"),f),X=o(s("q-item-section"),p),Z=o(s("q-item"),g),ll=v,el=o(s("q-list"),b),al=o(s("q-page"),_);return e(),a(al,null,{default:u((()=>[d(H,{title:"基础应用"},{default:u((()=>[d(P,{class:"lm-title"},{default:u((()=>[t("Basic")])),_:1}),d(P,{class:"q-pa-md"},{default:u((()=>[d(E,{modelValue:y.value,"onUpdate:modelValue":U[0]||(U[0]=l=>y.value=l)},null,8,["modelValue"]),d(E,{modelValue:y.value,"onUpdate:modelValue":U[1]||(U[1]=l=>y.value=l),color:"green"},null,8,["modelValue"]),d(E,{modelValue:y.value,"onUpdate:modelValue":U[2]||(U[2]=l=>y.value=l),color:"yellow"},null,8,["modelValue"]),d(E,{modelValue:y.value,"onUpdate:modelValue":U[3]||(U[3]=l=>y.value=l),color:"red"},null,8,["modelValue"])])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("带标签")])),_:1}),d(P,{class:"q-pa-md q-gutter-sm"},{default:u((()=>[d(P,null,{default:u((()=>[d(E,{modelValue:k.value,"onUpdate:modelValue":U[4]||(U[4]=l=>k.value=l),label:"On Right"},null,8,["modelValue"]),d(E,{modelValue:k.value,"onUpdate:modelValue":U[5]||(U[5]=l=>k.value=l),color:"green",label:"On Right"},null,8,["modelValue"]),d(E,{modelValue:k.value,"onUpdate:modelValue":U[6]||(U[6]=l=>k.value=l),color:"yellow",label:"On Right"},null,8,["modelValue"]),d(E,{modelValue:k.value,"onUpdate:modelValue":U[7]||(U[7]=l=>k.value=l),color:"red",label:"On Right"},null,8,["modelValue"])])),_:1}),d(P,null,{default:u((()=>[d(E,{modelValue:x.value,"onUpdate:modelValue":U[8]||(U[8]=l=>x.value=l),label:"On Left","left-label":""},null,8,["modelValue"]),d(E,{modelValue:x.value,"onUpdate:modelValue":U[9]||(U[9]=l=>x.value=l),color:"green",label:"On Left","left-label":""},null,8,["modelValue"]),d(E,{modelValue:x.value,"onUpdate:modelValue":U[10]||(U[10]=l=>x.value=l),color:"yellow",label:"On Left","left-label":""},null,8,["modelValue"]),d(E,{modelValue:x.value,"onUpdate:modelValue":U[11]||(U[11]=l=>x.value=l),color:"red",label:"On Left","left-label":""},null,8,["modelValue"])])),_:1})])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("保持颜色")])),_:1}),d(P,{class:"q-pa-md"},{default:u((()=>[d(E,{modelValue:q.value,"onUpdate:modelValue":U[12]||(U[12]=l=>q.value=l),color:"primary","keep-color":""},null,8,["modelValue"]),d(E,{modelValue:q.value,"onUpdate:modelValue":U[13]||(U[13]=l=>q.value=l),color:"green","keep-color":""},null,8,["modelValue"]),d(E,{modelValue:q.value,"onUpdate:modelValue":U[14]||(U[14]=l=>q.value=l),color:"orange","keep-color":""},null,8,["modelValue"]),d(E,{modelValue:q.value,"onUpdate:modelValue":U[15]||(U[15]=l=>q.value=l),color:"red","keep-color":"",readonly:""},null,8,["modelValue"])])),_:1})])),_:1}),d(H,{title:"高级应用"},{default:u((()=>[d(P,{class:"lm-title"},{default:u((()=>[t("自定图标")])),_:1}),d(P,{class:"q-pa-md q-gutter-sm"},{default:u((()=>[d(P,null,{default:u((()=>[d(E,{modelValue:h.value,"onUpdate:modelValue":U[16]||(U[16]=l=>h.value=l),icon:"alarm"},null,8,["modelValue"]),d(E,{modelValue:w.value,"onUpdate:modelValue":U[17]||(U[17]=l=>w.value=l),color:"pink",icon:"mail",label:"状态图标相同"},null,8,["modelValue"])])),_:1}),d(P,null,{default:u((()=>[d(E,{modelValue:z.value,"onUpdate:modelValue":U[18]||(U[18]=l=>z.value=l),"checked-icon":"check",color:"green","unchecked-icon":"clear"},null,8,["modelValue"]),d(E,{modelValue:O.value,"onUpdate:modelValue":U[19]||(U[19]=l=>O.value=l),"checked-icon":"check",color:"red",label:"状态图标不同","unchecked-icon":"clear"},null,8,["modelValue"])])),_:1})])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("自定义模型值")])),_:1}),d(P,{class:"q-pa-md q-gutter-y-sm column"},{default:u((()=>[d(P,{class:"text-blue-grey"},{default:u((()=>[t("可以使用自定义值代替默认的true/false值。")])),_:1}),d(E,{label:`Model is ${S.value} (default behaviour)`,modelValue:S.value,"onUpdate:modelValue":U[20]||(U[20]=l=>S.value=l)},null,8,["label","modelValue"]),d(E,{label:j.value,color:"pink","false-value":"Disagreed","true-value":"Agreed",modelValue:j.value,"onUpdate:modelValue":U[21]||(U[21]=l=>j.value=l)},null,8,["label","modelValue"]),d(E,{"false-value":13,label:`Model is number ${R.value}`,"true-value":42,color:"green",modelValue:R.value,"onUpdate:modelValue":U[22]||(U[22]=l=>R.value=l)},null,8,["label","modelValue"]),d(E,{"false-value":!0,label:`Model is ${L.value} (flipped boolean)`,"true-value":!1,color:"red",modelValue:L.value,"onUpdate:modelValue":U[23]||(U[23]=l=>L.value=l)},null,8,["label","modelValue"])])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("不确定状态")])),_:1}),d(P,{class:"q-pa-md"},{default:u((()=>[d(P,{class:"q-gutter-sm"},{default:u((()=>[d(E,{"indeterminate-value":"maybe",modelValue:T.value,"onUpdate:modelValue":U[24]||(U[24]=l=>T.value=l),label:"Did you eat lunch today?"},null,8,["modelValue"])])),_:1}),d(P,{class:"q-px-sm"},{default:u((()=>[t(" The model data: "),m("strong",null,n(JSON.stringify(T.value)),1)])),_:1}),d(P,{class:"q-gutter-sm"},{default:u((()=>[d(E,{"toggle-indeterminate":"",modelValue:A.value,"onUpdate:modelValue":U[25]||(U[25]=l=>A.value=l),label:"Did you eat lunch today?"},null,8,["modelValue"])])),_:1}),d(P,{class:"q-px-sm row no-wrap items-center"},{default:u((()=>[d(P,{class:"col"},{default:u((()=>[t(" The model data: "),m("strong",null,n(JSON.stringify(A.value)),1)])),_:1}),d(I,{color:"primary",label:"Reset",onClick:B,class:"q-ml-md"})])),_:1}),d(P,{class:"text-blue-grey"},{default:u((()=>[t("在下面的示例中，只要您单击第一个QToggle，它就开始在true/false之间切换。另一方面，第二个QToggle在toggle-indeterminate的帮助下在三种状态（不确定/正确/错误）之间切换。您可以选择设置属性indeterminate-value，否则不确定值将被视为null。")])),_:1})])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("切换顺序")])),_:1}),d(P,{class:"q-pa-md"},{default:u((()=>[d(I,{class:"q-mb-md",color:"primary",label:"Reset models",onClick:$}),d(P,{class:"q-gutter-sm"},{default:u((()=>[d(E,{modelValue:M.value,"onUpdate:modelValue":U[26]||(U[26]=l=>M.value=l),label:"'tf' order",color:"teal"},null,8,["modelValue"]),d(E,{"toggle-order":"ft",modelValue:D.value,"onUpdate:modelValue":U[27]||(U[27]=l=>D.value=l),label:"'ft' order",color:"orange"},null,8,["modelValue"]),d(E,{"toggle-indeterminate":"",modelValue:N.value,"onUpdate:modelValue":U[28]||(U[28]=l=>N.value=l),label:"'tf' order + toggle-indeterminate",color:"red"},null,8,["modelValue"]),d(E,{"toggle-indeterminate":"","toggle-order":"ft",modelValue:Q.value,"onUpdate:modelValue":U[29]||(U[29]=l=>Q.value=l),label:"'ft' order + toggle-indeterminate",color:"cyan"},null,8,["modelValue"])])),_:1}),d(P,{class:"text-blue-grey"},{default:u((()=>[d(P,null,{default:u((()=>[t("默认情况下，QToggle在切换时遵循以下链：不确定 -> 选中的 -> 未选中的。但是，您可以通过toggle-order属性更改此行为。此属性确定状态的顺序，可以是tf（默认值）或ft（t表示true/checked的状态，而f表示false/unchecked的状态）。")])),_:1}),d(P,null,{default:u((()=>[t("切换顺序是:")])),_:1}),d(P,null,{default:u((()=>[t("如果toggle-indeterminate为true，则：不确定->第一状态->第二状态->不确定（并重复）")])),_:1}),d(P,null,{default:u((()=>[t("否则（无切换不确定）：不确定->第一状态->第二状态->第一状态->第二状态->。。。")])),_:1})])),_:1})])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("数组模型")])),_:1}),d(P,{class:"q-pa-md q-gutter-sm"},{default:u((()=>[d(E,{color:"blue",label:"Blue",modelValue:C.value,"onUpdate:modelValue":U[30]||(U[30]=l=>C.value=l),val:"blue"},null,8,["modelValue"]),d(E,{color:"yellow",label:"Yellow",modelValue:C.value,"onUpdate:modelValue":U[31]||(U[31]=l=>C.value=l),val:"yellow"},null,8,["modelValue"]),d(E,{color:"green",label:"Green",modelValue:C.value,"onUpdate:modelValue":U[32]||(U[32]=l=>C.value=l),val:"green"},null,8,["modelValue"]),d(E,{color:"red",label:"Red",modelValue:C.value,"onUpdate:modelValue":U[33]||(U[33]=l=>C.value=l),val:"red"},null,8,["modelValue"]),d(P,null,{default:u((()=>[t(" Model: "+n(C.value),1)])),_:1}),d(P,{class:"text-blue-grey"},{default:u((()=>[t(" 如果您有多个切换开关可以选择，可以使用数组作为所有切换开关的模型，并在每个切换开关上指定val属性。 如果勾选了切换开关，则将其val插入数组，反之亦然。 ")])),_:1})])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("暗模式")])),_:1}),d(P,{class:"q-pa-md bg-grey-10 text-white"},{default:u((()=>[d(E,{color:"blue",dark:"",modelValue:J.value,"onUpdate:modelValue":U[34]||(U[34]=l=>J.value=l)},null,8,["modelValue"]),d(E,{color:"green",dark:"",modelValue:Y.value,"onUpdate:modelValue":U[35]||(U[35]=l=>Y.value=l)},null,8,["modelValue"]),d(E,{color:"yellow",dark:"",modelValue:F.value,"onUpdate:modelValue":U[36]||(U[36]=l=>F.value=l)},null,8,["modelValue"]),d(E,{color:"red",dark:"",modelValue:N.value,"onUpdate:modelValue":U[37]||(U[37]=l=>N.value=l)},null,8,["modelValue"])])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("禁用")])),_:1}),d(P,{class:"q-pa-md"},{default:u((()=>[d(E,{modelValue:q.value,"onUpdate:modelValue":U[38]||(U[38]=l=>q.value=l),color:"primary",disable:""},null,8,["modelValue"]),d(E,{modelValue:q.value,"onUpdate:modelValue":U[39]||(U[39]=l=>q.value=l),color:"green",disable:""},null,8,["modelValue"]),d(E,{modelValue:q.value,"onUpdate:modelValue":U[40]||(U[40]=l=>q.value=l),color:"yellow",disable:""},null,8,["modelValue"]),d(E,{modelValue:q.value,"onUpdate:modelValue":U[41]||(U[41]=l=>q.value=l),color:"red",disable:""},null,8,["modelValue"])])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("结合 List 组件使用")])),_:1}),d(P,{class:"text-blue-grey bg-blue-grey-2 q-pa-sm"},{default:u((()=>[t("在结合q-list组件(或包含在其他组件内使用)时，需要在item外面套一层label")])),_:1}),d(el,null,{default:u((()=>[d(ll,null,{default:u((()=>[d(Z,{tag:"label",clickable:"",ripple:""},{default:u((()=>[d(X,{class:"col"},{default:u((()=>[d(W,null,{default:u((()=>[t("Battery too low")])),_:1})])),_:1}),d(X,{avatar:""},{default:u((()=>[d(E,{color:"blue",modelValue:K.value,"onUpdate:modelValue":U[42]||(U[42]=l=>K.value=l),val:"battery"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(ll,null,{default:u((()=>[d(Z,{tag:"label",clickable:"",ripple:""},{default:u((()=>[d(X,{class:"col"},{default:u((()=>[d(W,null,{default:u((()=>[t("Friend request")])),_:1}),d(W,{caption:""},{default:u((()=>[t("Allow notification")])),_:1})])),_:1}),d(X,{avatar:""},{default:u((()=>[d(E,{color:"green",modelValue:K.value,"onUpdate:modelValue":U[43]||(U[43]=l=>K.value=l),val:"friend"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(ll,null,{default:u((()=>[d(Z,{tag:"label",clickable:"",ripple:""},{default:u((()=>[d(X,{class:"col"},{default:u((()=>[d(W,null,{default:u((()=>[t("Picture uploaded")])),_:1}),d(W,{caption:""},{default:u((()=>[t("Allow notification when uploading images")])),_:1})])),_:1}),d(X,{avatar:""},{default:u((()=>[d(E,{color:"red",modelValue:K.value,"onUpdate:modelValue":U[44]||(U[44]=l=>K.value=l),val:"picture"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),d(P,{class:"lm-title"},{default:u((()=>[t("大小")])),_:1}),d(P,{class:"q-pa-md"},{default:u((()=>[d(P,{class:"q-gutter-sm"},{default:u((()=>[d(E,{size:"xs",modelValue:G.value,"onUpdate:modelValue":U[45]||(U[45]=l=>G.value=l),val:"xs",label:"Size 'xs'"},null,8,["modelValue"]),d(E,{size:"sm",modelValue:G.value,"onUpdate:modelValue":U[46]||(U[46]=l=>G.value=l),val:"sm",label:"Size 'sm'"},null,8,["modelValue"]),d(E,{size:"md",modelValue:G.value,"onUpdate:modelValue":U[47]||(U[47]=l=>G.value=l),val:"md",label:"Size 'md'"},null,8,["modelValue"]),d(E,{size:"lg",modelValue:G.value,"onUpdate:modelValue":U[48]||(U[48]=l=>G.value=l),val:"lg",label:"Size 'lg'"},null,8,["modelValue"]),d(E,{size:"xl",modelValue:G.value,"onUpdate:modelValue":U[49]||(U[49]=l=>G.value=l),val:"xl",label:"Size 'xl'"},null,8,["modelValue"]),d(E,{size:"100px",modelValue:G.value,"onUpdate:modelValue":U[50]||(U[50]=l=>G.value=l),val:"100px",label:"Size '100px'"},null,8,["modelValue"])])),_:1}),d(P,{class:"q-px-sm"},{default:u((()=>[t(" Your selection is: "),m("strong",null,n(G.value),1)])),_:1})])),_:1})])),_:1})])),_:1})}}};export{U as default};