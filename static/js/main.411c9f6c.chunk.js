(this["webpackJsonpcomplex-offsets"]=this["webpackJsonpcomplex-offsets"]||[]).push([[0],{140:function(e,t,n){"use strict";(function(e){var a=n(63),r=n(0),c=(n(156),n(270)),i=n(27),o=n(44),s=n(275),u=n(271),d=n(62),j=n(272),l=n(273),b=n(45),f=n(274),h=n(60),x=n.n(h),O=n(35),g=n.n(O),p=n(141),m=n.n(p),v=n(61),y=n(7);t.a=function(){var t=Object(r.useState)(x.a.fromMasterSeed(e.from("1")).privateExtendedKey),n=Object(a.a)(t,2),h=n[0],O=n[1],p=Object(r.useState)(10),S=Object(a.a)(p,2),C=S[0],B=S[1],I=Object(r.useState)(1),w=Object(a.a)(I,2),E=w[0],k=w[1],F=m.a.times(C,(function(t){var n=t+1,a=x.a.fromExtendedKey(h).deriveChild(n),r=Object(v.a)(a),c=Object(v.b)(C,E),i=e.from(r,"hex")[0]-c,o=i+2*c,s=e.from([i]).toString("hex"),u=e.from([o]).toString("hex");return{id:t+1,nodeId:Object(v.a)(a),offset:c,exchangeByteStart:s,exchangeByteEnd:u}}));return Object(y.jsx)(c.a,{fluid:!0,children:Object(y.jsxs)(i.a,{children:[Object(y.jsxs)(o.a,{children:[Object(y.jsx)(i.a.Label,{children:"Complex Private Key"}),Object(y.jsx)(i.a.Control,{value:h,onChange:function(e){return O(e.target.value)}}),Object(y.jsx)(s.a,{onClick:function(){return O(x.a.fromMasterSeed(g.a.randomBytes(16)).privateExtendedKey)},children:"Generate a new key"})]}),Object(y.jsxs)(u.a,{children:[Object(y.jsx)(d.a,{children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)(i.a.Label,{children:"Total Renters"}),Object(y.jsx)(i.a.Control,{value:C,type:"number",onChange:function(e){return B(parseInt(e.target.value,10))}})]})}),Object(y.jsx)(d.a,{children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)(i.a.Label,{children:"Overlap"}),Object(y.jsx)(i.a.Control,{value:E,type:"number",onChange:function(e){return k(parseInt(e.target.value,10))}})]})})]}),Object(y.jsx)(j.a,{children:F.map((function(t){var n=parseInt(e.from(t.exchangeByteStart).toString(),16),a=parseInt(e.from(t.exchangeByteEnd).toString(),16);return Object(y.jsxs)(l.a,{style:{backgroundColor:n>a?"#faa":"transparent"},children:[Object(y.jsx)(b.a,{width:10,children:t.id}),Object(y.jsx)(b.a,{width:10,children:t.nodeId}),Object(y.jsx)(b.a,{width:10,children:t.exchangeByteStart}),Object(y.jsx)(b.a,{width:10,children:t.exchangeByteEnd}),Object(y.jsx)(b.a,{children:Object(y.jsx)(f.a,{track:n>a?"inverted":void 0,min:0,max:256,valueLabelDisplay:"auto","aria-labelledby":"range-slider",value:[n,a],step:1})})]})}))})]})})}}).call(this,n(10).Buffer)},156:function(e,t,n){},161:function(e,t){},163:function(e,t){},173:function(e,t){},175:function(e,t){},202:function(e,t){},203:function(e,t){},208:function(e,t){},210:function(e,t){},217:function(e,t){},236:function(e,t){},269:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(54),i=n.n(c),o=n(140),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},u=(n(268),n(7));i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(o.a,{})}),document.getElementById("root")),s()},61:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n(35),r=n.n(a),c=n(42),i=n.n(c);function o(t){var n=e.from(t.publicKey),a=r.a.createHash("sha256").update(n).digest();return r.a.createHash("ripemd160").update(a).digest("hex").toString()}function s(e,t){Number.isFinite(t)||(t=1);var n,a,r,c=(n=256,a=e,r=.999,i()(Number.isSafeInteger(n)&&n>0,"t is expected to be integer greater than zero"),i()(Number.isSafeInteger(a)&&a>0,"y is expected to be integer greater than zero"),i()(Number.isFinite(r)&&r>0&&r<1,"p is expected to be number > 0 and < 1"),(Math.pow((r-1)/-1,1/a)-1)*-n);return Math.ceil(c*t/2)}}).call(this,n(10).Buffer)}},[[269,1,2]]]);
//# sourceMappingURL=main.411c9f6c.chunk.js.map