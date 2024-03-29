import{aa as e,a4 as l,ab as o,v as a,R as t,a8 as s,n,p as r,ac as i,ad as u,Q as d,a6 as c,ae as f,q as p,y as v,af as m,N as g,_ as b,r as y,L as _,e as h,K as q,l as C,o as k,g as $,w,B as x,h as B,a as V,C as S,d as R,t as F,D as A,c as E,F as T,k as I,ag as M,ah as L,ai as O}from"./index-9a2cee6e.js";import{u as j,a as P}from"./use-form.fe79202a.js";const H=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,U=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,z=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Q=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,D=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,N={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>H.test(e),hexaColor:e=>U.test(e),hexOrHexaColor:e=>z.test(e),rgbColor:e=>Q.test(e),rgbaColor:e=>D.test(e),rgbOrRgbaColor:e=>Q.test(e)||D.test(e),hexOrRgbColor:e=>H.test(e)||Q.test(e),hexaOrRgbaColor:e=>U.test(e)||D.test(e),anyColor:e=>z.test(e)||Q.test(e)||D.test(e)};const Z=[!0,!1,"ondemand"],K={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Z.includes(e)}};function G(u,d){const{props:c,proxy:f}=t(),p=n(!1),v=n(null),m=n(null);!function({validate:n,resetValidation:r,requiresQForm:i}){const u=a(s,!1);if(!1!==u){const{props:a,proxy:s}=t();Object.assign(s,{validate:n,resetValidation:r}),e((()=>a.disable),(e=>{!0===e?("function"==typeof r&&r(),u.unbindComponent(s)):u.bindComponent(s)})),l((()=>{!0!==a.disable&&u.bindComponent(s)})),o((()=>{!0!==a.disable&&u.unbindComponent(s)}))}else!0===i&&console.error("Parent QForm not found on useFormChild()!")}({validate:k,resetValidation:C});let g,b=0;const y=r((()=>void 0!==c.rules&&null!==c.rules&&c.rules.length>0)),_=r((()=>!0!==c.disable&&!0===y.value)),h=r((()=>!0===c.error||!0===p.value)),q=r((()=>"string"==typeof c.errorMessage&&c.errorMessage.length>0?c.errorMessage:v.value));function C(){b++,d.value=!1,m.value=null,p.value=!1,v.value=null,w.cancel()}function k(e=c.modelValue){if(!0!==_.value)return!0;const l=++b,o=!0!==d.value?()=>{m.value=!0}:()=>{},a=(e,l)=>{!0===e&&o(),p.value=e,v.value=l||null,d.value=!1},t=[];for(let s=0;s<c.rules.length;s++){const l=c.rules[s];let o;if("function"==typeof l?o=l(e,N):"string"==typeof l&&void 0!==N[l]&&(o=N[l](e)),!1===o||"string"==typeof o)return a(!0,o),!1;!0!==o&&void 0!==o&&t.push(o)}return 0===t.length?(a(!1),!0):(d.value=!0,Promise.all(t).then((e=>{if(void 0===e||!1===Array.isArray(e)||0===e.length)return l===b&&a(!1),!0;const o=e.find((e=>!1===e||"string"==typeof e));return l===b&&a(void 0!==o,o),void 0===o}),(e=>(l===b&&(console.error(e),a(!0)),!1))))}function $(e){!0===_.value&&"ondemand"!==c.lazyRules&&(!0===m.value||!0!==c.lazyRules&&!0!==e)&&w()}e((()=>c.modelValue),(()=>{$()})),e((()=>c.reactiveRules),(l=>{!0===l?void 0===g&&(g=e((()=>c.rules),(()=>{$(!0)}))):void 0!==g&&(g(),g=void 0)}),{immediate:!0}),e(u,(e=>{!0===e?null===m.value&&(m.value=!1):!1===m.value&&(m.value=!0,!0===_.value&&"ondemand"!==c.lazyRules&&!1===d.value&&w())}));const w=function(e,l=250,o){let a;function t(){const t=arguments,s=()=>{a=void 0,!0!==o&&e.apply(this,t)};clearTimeout(a),!0===o&&void 0===a&&e.apply(this,t),a=setTimeout(s,l)}return t.cancel=()=>{clearTimeout(a)},t}(k,0);return o((()=>{void 0!==g&&g(),w.cancel()})),Object.assign(f,{resetValidation:C,validate:k}),i(f,"hasError",(()=>h.value)),{isDirtyModel:m,hasRules:y,hasError:h,errorMessage:q,validate:k,resetValidation:C}}const J=/^on[A-Z]/;function W(e,l){const o={listeners:n({}),attributes:n({})};function a(){const a={},t={};for(const l in e)"class"!==l&&"style"!==l&&!1===J.test(l)&&(a[l]=e[l]);for(const e in l.props)!0===J.test(e)&&(t[e]=l.props[e]);o.attributes.value=a,o.listeners.value=t}return u(a),a(),o}function X(e){return void 0===e?`f_${m()}`:e}function Y(e){return null!=e&&(""+e).length>0}const ee={...p,...K,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:{type:[Number,String],default:140}},le=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function oe(){const{props:e,attrs:l,proxy:o,vnode:a}=t();return{isDark:v(e,o.$q),editable:r((()=>!0!==e.disable&&!0!==e.readonly)),innerLoading:n(!1),focused:n(e.autofocus),hasPopupOpen:!1,splitAttrs:W(l,a),targetUid:n(X(e.for)),rootRef:n(null),targetRef:n(null),controlRef:n(null)}}function ae(l){const{props:o,emit:a,slots:s,attrs:n,proxy:i}=t(),{$q:u}=i;let p;void 0===l.hasValue&&(l.hasValue=r((()=>Y(o.modelValue)))),void 0===l.emitValue&&(l.emitValue=e=>{a("update:modelValue",e)}),void 0===l.controlEvents&&(l.controlEvents={onFocusin:B,onFocusout:V}),Object.assign(l,{clearValue:S,onControlFocusin:B,onControlFocusout:V}),void 0===l.computedCounter&&(l.computedCounter=r((()=>{if(!1!==o.counter){const e="string"==typeof o.modelValue||"number"==typeof o.modelValue?(""+o.modelValue).length:!0===Array.isArray(o.modelValue)?o.modelValue.length:0,l=void 0!==o.maxlength?o.maxlength:o.maxValues;return e+(void 0!==l?" / "+l:"")}})));const{isDirtyModel:v,hasRules:m,hasError:g,errorMessage:b,resetValidation:y}=G(l.focused,l.innerLoading),_=void 0!==l.floatingLabel?r((()=>!0===o.stackLabel||!0===l.focused.value||!0===l.floatingLabel.value)):r((()=>!0===o.stackLabel||!0===l.focused.value||!0===l.hasValue.value)),h=r((()=>!0===o.bottomSlots||void 0!==o.hint||!0===m.value||!0===o.counter||null!==o.error)),q=r((()=>!0===o.filled?"filled":!0===o.outlined?"outlined":!0===o.borderless?"borderless":o.standout?"standout":"standard")),C=r((()=>`q-field row no-wrap items-start q-field--${q.value}`+(void 0!==l.fieldClass?` ${l.fieldClass.value}`:"")+(!0===o.rounded?" q-field--rounded":"")+(!0===o.square?" q-field--square":"")+(!0===_.value?" q-field--float":"")+(!0===$.value?" q-field--labeled":"")+(!0===o.dense?" q-field--dense":"")+(!0===o.itemAligned?" q-field--item-aligned q-item-type":"")+(!0===l.isDark.value?" q-field--dark":"")+(void 0===l.getControl?" q-field--auto-height":"")+(!0===l.focused.value?" q-field--focused":"")+(!0===g.value?" q-field--error":"")+(!0===g.value||!0===l.focused.value?" q-field--highlighted":"")+(!0!==o.hideBottomSpace&&!0===h.value?" q-field--with-bottom":"")+(!0===o.disable?" q-field--disabled":!0===o.readonly?" q-field--readonly":""))),k=r((()=>"q-field__control relative-position row no-wrap"+(void 0!==o.bgColor?` bg-${o.bgColor}`:"")+(!0===g.value?" text-negative":"string"==typeof o.standout&&o.standout.length>0&&!0===l.focused.value?` ${o.standout}`:void 0!==o.color?` text-${o.color}`:""))),$=r((()=>!0===o.labelSlot||void 0!==o.label)),w=r((()=>"q-field__label no-pointer-events absolute ellipsis"+(void 0!==o.labelColor&&!0!==g.value?` text-${o.labelColor}`:""))),x=r((()=>{const e={for:l.targetUid.value};return!0===o.disable?e["aria-disabled"]="true":!0===o.readonly&&(e["aria-readonly"]="true"),e}));function B(e){clearTimeout(p),!0===l.editable.value&&!1===l.focused.value&&(l.focused.value=!0,a("focus",e))}function V(e){clearTimeout(p),p=setTimeout((()=>{!0!==l.hasPopupOpen&&!0===l.focused.value&&(l.focused.value=!1,a("blur",e))}))}function S(e){d(e),!0!==u.platform.is.mobile?(void 0!==l.targetRef&&l.targetRef.value||l.rootRef.value,l.focused.value=!0):!0===l.rootRef.value.contains(document.activeElement)&&document.activeElement.blur(),"file"===o.type&&(l.inputRef.value.value=null),a("update:modelValue",null),a("clear",o.modelValue),c((()=>{y(),!0!==u.platform.is.mobile&&(v.value=!1)}))}e((()=>o.for),(e=>{l.targetUid.value=X(e)}));const R=!0===o.counter||void 0!==s.counter,F=void 0===l.getControl&&void 0===s.control?{...l.splitAttrs.attributes.value,"data-autofocus":!0===o.autofocus||void 0,...x.value}:x.value;return{state:l,classes:C,style:n.style,hasLabel:$,labelClass:w,labelAttrs:F,hasCounter:R,contentClass:k,appendClass:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",shouldRenderBottom:h,errorMessage:b,clearValue:S,prevent:f}}const te=b(g({name:"QInput",inheritAttrs:!1,props:{...ee,...j,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object],password:Boolean,autoFocus:Boolean,confirmType:{type:String,default:"done"},confirmHold:Boolean,adjustPosition:{type:Boolean,default:!0},autoBlur:Boolean},emits:[...le,"paste","change"],setup(l,{emit:o}){const a=n(null);let t,s=n(l.modelValue);e((()=>l.modelValue),(e=>{void 0!==l.debounce?(clearTimeout(t),t=setTimeout((()=>{s.value=e}),l.debounce)):s.value=e}));const i=P(l),u=r((()=>Y(s.value))),d=oe(),c=r((()=>"textarea"===l.type||!0===l.autogrow));let f,p;function v(e){p=()=>{o("update:modelValue",e)},void 0!==l.debounce?(clearTimeout(f),f=setTimeout(p,l.debounce)):p()}Object.assign(d,{fieldClass:r((()=>"q-"+(!0===c.value?"textarea":"input")+(!0===l.autogrow?" q-textarea--autogrow":""))),hasShadow:r((()=>"file"!==l.type&&"string"==typeof l.shadowText&&l.shadowText.length>0)),inputRef:a,hasValue:u,floatingLabel:r((()=>!0===u.value||Y(l.displayValue)))});return{...ae(d),nameProp:i,isTextarea:c,innerValue:s,onInput:function(e){e&&e.detail&&(s.value=e.detail.value,v(s.value))},onConfirm:function(e){s.value=e.detail.value,o("confirm",s.value),v(s.value)}}}}),[["render",function(e,l,o,a,t,s){const n=I,r=M,i=L,u=y(h("q-icon"),_),d=y(h("q-spinner"),q),c=y(h("q-btn"),C),f=O;return k(),$(f,{for:e.labelAttrs.for,ref:e.state.rootRef,class:S(e.classes),style:A(e.style)},{default:w((()=>[e.$slots.before?(k(),$(n,{key:0,class:"q-field__before q-field__marginal row no-wrap items-center"},{default:w((()=>[x(e.$slots,"before",{},void 0,!0)])),_:3})):B("",!0),V(n,{class:"q-field__inner relative-position col self-stretch"},{default:w((()=>[V(n,{ref:e.state.controlRef,class:S(e.contentClass),tabindex:-1,onClick:l[0]||(l[0]=l=>e.state.focused.value=!0)},{default:w((()=>[e.$slots.prepend?(k(),$(n,{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend"},{default:w((()=>[x(e.$slots,"prepend",{},void 0,!0)])),_:3})):B("",!0),V(n,{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},{default:w((()=>[void 0!==e.prefix&&null!==e.prefix?(k(),$(n,{key:0,class:"q-field__prefix no-pointer-events row items-center"},{default:w((()=>[R(F(e.prefix),1)])),_:1})):B("",!0),e.$slots.rawControl?x(e.$slots,"rawControl",{key:1},void 0,!0):B("",!0),e.isTextarea?(k(),$(r,{key:2,ref:"inputRef",class:S(["q-field__native q-placeholder",e.inputClass]),value:e.innerValue,id:e.state.targetUid.value,name:e.nameProp,tabindex:0,"data-autofocus":!0===e.autofocus||void 0,"aria-label":e.label,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly,style:A([e.inputStyle]),focus:e.state.focused.value,"auto-height":e.autogrow,"auto-focus":e.autoFocus,onInput:e.onInput,onConfirm:e.onConfirm,onFocus:e.state.controlEvents.onFocusin,onBlur:e.state.controlEvents.onFocusout},null,8,["class","value","id","name","data-autofocus","aria-label","maxlength","disabled","readonly","style","focus","auto-height","auto-focus","onInput","onConfirm","onFocus","onBlur"])):(k(),$(i,{key:3,ref:"inputRef",class:S(["q-field__native q-placeholder",e.inputClass]),type:e.type,value:e.innerValue,focus:e.state.focused.value,id:e.state.targetUid.value,name:e.nameProp,tabindex:0,"data-autofocus":!0===e.autofocus||void 0,"aria-label":e.label,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly,style:A(e.inputStyle),password:e.password||"password"==e.type,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"adjust-position":e.adjustPosition,"auto-blur":e.autoBlur,onInput:e.onInput,onConfirm:e.onConfirm,onFocus:e.state.controlEvents.onFocusin,onBlur:e.state.controlEvents.onFocusout},null,8,["type","class","value","focus","id","name","data-autofocus","aria-label","maxlength","disabled","readonly","style","password","confirm-type","confirm-hold","adjust-position","auto-blur","onInput","onConfirm","onFocus","onBlur"])),!0===e.hasLabel?(k(),$(n,{key:4,class:S(e.labelClass)},{default:w((()=>[e.$slots.label?x(e.$slots,"label",{key:0},void 0,!0):(k(),E(T,{key:1},[R(F(e.label),1)],64))])),_:3},8,["class"])):B("",!0)])),_:3}),!0!==e.hasError||e.noErrorIcon?B("",!0):(k(),$(n,{class:S(e.appendClass),key:"error"},{default:w((()=>[V(u,{name:e.$q.iconSet.field.error,color:"negative"},null,8,["name"])])),_:1},8,["class"])),!0===e.loading||!0===e.state.innerLoading?(k(),$(n,{class:S(e.appendClass),key:"inner-loading-append"},{default:w((()=>[e.$slots.loading?x(e.$slots,"loading",{key:0},void 0,!0):(k(),$(d,{key:1,color:e.color},null,8,["color"]))])),_:3},8,["class"])):!0===e.clearable&&!0===e.state.hasValue&&!0===e.state.editable?(k(),$(n,{class:S(e.appendClass),key:"inner-clearable-append"},{default:w((()=>[V(c,{class:"q-field__focusable-action",icon:e.clearIcon||e.$q.iconSet.field.clear,tabindex:0,"aria-hidden":null,role:null,onClick:e.clearValue},null,8,["icon","onClick"])])),_:1},8,["class"])):B("",!0),e.$slots.append?(k(),$(n,{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:e.prevent},{default:w((()=>[x(e.$slots,"append",{},void 0,!0)])),_:3},8,["onClick"])):B("",!0)])),_:3},8,["class"]),!0===e.shouldRenderBottom?(k(),$(n,{key:0,class:S("q-field__bottom row items-start q-field__bottom--"+(!0!==e.hideBottomSpace?"animated":"stale")),onClick:e.prevent},{default:w((()=>[V(n,{class:"q-field__messages col"},{default:w((()=>[e.hasError?(k(),E(T,{key:0},[null!==e.errorMessage?(k(),$(n,{role:"alert",key:`q--slot-error-${e.errorMessage.value}`},{default:w((()=>[R(F(e.errorMessage),1)])),_:1})):x(e.$slots,"error",{key:"q--slot-error"},void 0,!0)],64)):!0!==e.hideHint||!0===e.state.focused.value?(k(),E(T,{key:1},[e.hint?(k(),$(n,{key:`q--slot-hint-${e.hint}`},{default:w((()=>[R(F(e.hint),1)])),_:1})):x(e.$slots,"hint",{key:"q--slot-hint"},void 0,!0)],64)):B("",!0)])),_:3}),e.hasCounter?(k(),$(n,{key:0,class:"q-field__counter"},{default:w((()=>[e.$slots.counter?x(e.$slots,"default",{key:0},void 0,!0):(k(),E(T,{key:1},[R(F(e.state.computedCounter.value),1)],64))])),_:3})):B("",!0)])),_:3},8,["class","onClick"])):B("",!0)])),_:3}),e.$slots.after?(k(),$(n,{key:1,class:"q-field__after q-field__marginal row no-wrap items-center"},{default:w((()=>[x(e.$slots,"after",{},void 0,!0)])),_:3})):B("",!0)])),_:3},8,["for","class","style"])}],["__scopeId","data-v-0dace524"]]);const se=b(g({name:"QField",inheritAttrs:!1,props:ee,emits:le,setup:()=>ae(oe())}),[["render",function(e,l,o,a,t,s){const n=I,r=y(h("q-icon"),_),i=y(h("q-spinner"),q),u=y(h("q-btn"),C),d=O;return k(),$(d,{for:e.labelAttrs.for,ref:e.state.rootRef,class:S(e.classes),style:A(e.style)},{default:w((()=>[e.$slots.before?(k(),$(n,{key:0,class:"q-field__before q-field__marginal row no-wrap items-center"},{default:w((()=>[x(e.$slots,"before")])),_:3})):B("",!0),V(n,{class:"q-field__inner relative-position col self-stretch"},{default:w((()=>[V(n,{ref:e.state.controlRef,class:S(e.contentClass),tabindex:-1},{default:w((()=>[e.$slots.prepend?(k(),$(n,{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend"},{default:w((()=>[x(e.$slots,"prepend")])),_:3})):B("",!0),V(n,{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},{default:w((()=>[void 0!==e.prefix&&null!==e.prefix?(k(),$(n,{key:0,class:"q-field__prefix no-pointer-events row items-center"},{default:w((()=>[R(F(e.prefix),1)])),_:1})):B("",!0),e.$slots.rawControl?x(e.$slots,"rawControl",{key:1}):B("",!0),e.$slots.control?(k(),$(n,{key:2,ref:e.state.targetRef,class:"q-field__native row",tabindex:-1,for:e.state.targetUid.value,"data-autofocus":!0===e.autofocus||void 0},{default:w((()=>[x(e.$slots,"control",{id:e.state.targetUid.value})])),_:3},8,["for","data-autofocus"])):B("",!0),!0===e.hasLabel?(k(),$(n,{key:3,class:S(e.labelClass)},{default:w((()=>[e.$slots.label?x(e.$slots,"label",{key:0}):(k(),E(T,{key:1},[R(F(e.label),1)],64))])),_:3},8,["class"])):B("",!0)])),_:3}),!0!==e.hasError||e.noErrorIcon?B("",!0):(k(),$(n,{class:S(e.appendClass),key:"error"},{default:w((()=>[V(r,{name:e.$q.iconSet.field.error,color:"negative"},null,8,["name"])])),_:1},8,["class"])),!0===e.loading||!0===e.state.innerLoading?(k(),$(n,{class:S(e.appendClass),key:"inner-loading-append"},{default:w((()=>[e.$slots.loading?x(e.$slots,"loading",{key:0}):(k(),$(i,{key:1,color:e.color},null,8,["color"]))])),_:3},8,["class"])):!0===e.clearable&&!0===e.state.hasValue&&!0===e.state.editable?(k(),$(n,{class:S(e.appendClass),key:"inner-clearable-append"},{default:w((()=>[V(u,{class:"q-field__focusable-action",icon:e.clearIcon||e.$q.iconSet.field.clear,tabindex:0,"aria-hidden":null,role:null,onClick:e.clearValue},null,8,["icon","onClick"])])),_:1},8,["class"])):B("",!0),e.$slots.append?(k(),$(n,{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:e.prevent},{default:w((()=>[x(e.$slots,"append")])),_:3},8,["onClick"])):B("",!0)])),_:3},8,["class"]),!0===e.shouldRenderBottom?(k(),$(n,{key:0,class:S("q-field__bottom row items-start q-field__bottom--"+(!0!==e.hideBottomSpace?"animated":"stale")),onClick:e.prevent},{default:w((()=>[V(n,{class:"q-field__messages col"},{default:w((()=>[e.hasError?(k(),E(T,{key:0},[null!==e.errorMessage?(k(),$(n,{role:"alert",key:`q--slot-error-${e.errorMessage.value}`},{default:w((()=>[R(F(e.errorMessage),1)])),_:1})):x(e.$slots,"error",{key:"q--slot-error"})],64)):!0!==e.hideHint||!0===e.state.focused.value?(k(),E(T,{key:1},[e.hint?(k(),$(n,{key:`q--slot-hint-${e.hint}`},{default:w((()=>[R(F(e.hint),1)])),_:1})):x(e.$slots,"hint",{key:"q--slot-hint"})],64)):B("",!0)])),_:3}),e.hasCounter?(k(),$(n,{key:0,class:"q-field__counter"},{default:w((()=>[e.$slots.counter?x(e.$slots,"default",{key:0}):(k(),E(T,{key:1},[R(F(e.state.computedCounter.value),1)],64))])),_:3})):B("",!0)])),_:3},8,["class","onClick"])):B("",!0)])),_:3}),e.$slots.after?(k(),$(n,{key:1,class:"q-field__after q-field__marginal row no-wrap items-center"},{default:w((()=>[x(e.$slots,"after")])),_:3})):B("",!0)])),_:3},8,["for","class","style"])}]]);export{te as _,se as a};