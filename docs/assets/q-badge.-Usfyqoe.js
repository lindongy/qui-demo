import{_ as t,o as e,g as l,w as a,B as o,f as n,t as s,C as i,D as r,m as d}from"./index-TqW3uz4B.js";const g=["top","middle","bottom"];const u=t({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:t=>g.includes(t)}},computed:{classes(){const t=!0===this.outline&&this.color||this.textColor;return`q-badge flex inline items-center no-wrap q-badge--${!0===this.multiLine?"multi":"single"}-line`+(!0===this.outline?" q-badge--outline":void 0!==this.color?` bg-${this.color}`:"")+(void 0!==t?` text-${t}`:"")+(!0===this.floating?" q-badge--floating":"")+(!0===this.rounded?" q-badge--rounded":"")+(!0===this.transparent?" q-badge--transparent":"")},style(){return void 0!==this.align?{verticalAlign:this.align}:null}}},[["render",function(t,g,u,c,b,h){const m=d;return e(),l(m,{class:i(h.classes),style:r(h.style),"aria-label":u.label},{default:a((()=>[o(t.$slots,"default"),n(" "+s(u.label),1)])),_:3},8,["class","style","aria-label"])}]]);export{u as _};