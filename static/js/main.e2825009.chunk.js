(this["webpackJsonpcomplex-offsets"]=this["webpackJsonpcomplex-offsets"]||[]).push([[0],{140:function(e,t,n){"use strict";(function(e){var a=n(63),r=n(0),c=(n(157),n(271)),i=n(27),o=n(44),s=n(276),u=n(272),d=n(62),j=n(273),l=n(274),b=n(45),f=n(275),h=n(60),x=n.n(h),O=n(35),g=n.n(O),m=n(141),p=n.n(m),v=n(61),y=n(7);t.a=function(){var t=Object(r.useState)(x.a.fromMasterSeed(e.from("1")).privateExtendedKey),n=Object(a.a)(t,2),h=n[0],O=n[1],m=Object(r.useState)(10),S=Object(a.a)(m,2),C=S[0],B=S[1],I=Object(r.useState)(1),w=Object(a.a)(I,2),E=w[0],F=w[1],L=p.a.times(C,(function(t){var n=t+1,a=x.a.fromExtendedKey(h).deriveChild(n),r=Object(v.a)(a),c=Object(v.b)(C,E),i=e.from(r,"hex")[0]-c,o=i+2*c,s=e.from([i]).toString("hex"),u=e.from([o]).toString("hex");return{id:t+1,nodeId:Object(v.a)(a),offset:c,exchangeByteStart:s,exchangeByteEnd:u}}));return Object(y.jsx)(c.a,{fluid:!0,children:Object(y.jsxs)(i.a,{children:[Object(y.jsxs)(o.a,{children:[Object(y.jsx)(i.a.Label,{children:"Complex Private Key"}),Object(y.jsx)(i.a.Control,{value:h,onChange:function(e){return O(e.target.value)}}),Object(y.jsx)(s.a,{onClick:function(){return O(x.a.fromMasterSeed(g.a.randomBytes(16)).privateExtendedKey)},children:"Generate a new key"})]}),Object(y.jsxs)(u.a,{children:[Object(y.jsx)(d.a,{children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)(i.a.Label,{children:"Total Renters"}),Object(y.jsx)(i.a.Control,{value:C,type:"number",onChange:function(e){return B(parseInt(e.target.value,10))}})]})}),Object(y.jsx)(d.a,{children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)(i.a.Label,{children:"Overlap"}),Object(y.jsx)(i.a.Control,{value:E,type:"number",onChange:function(e){return F(parseInt(e.target.value,10))}})]})})]}),Object(y.jsx)(j.a,{children:L.map((function(t){return Object(y.jsxs)(l.a,{children:[Object(y.jsx)(b.a,{width:10,children:t.id}),Object(y.jsx)(b.a,{width:10,children:t.nodeId}),Object(y.jsx)(b.a,{width:10,children:t.exchangeByteStart}),Object(y.jsx)(b.a,{width:10,children:t.exchangeByteEnd}),Object(y.jsx)(b.a,{children:Object(y.jsx)(f.a,{marks:!0,min:0,max:256,valueLabelDisplay:"auto","aria-labelledby":"range-slider",value:[parseInt(e.from(t.exchangeByteStart).toString(),16),parseInt(e.from(t.exchangeByteEnd).toString(),16)],step:1})})]})}))})]})})}}).call(this,n(10).Buffer)},154:function(e,t,n){},157:function(e,t,n){},162:function(e,t){},164:function(e,t){},174:function(e,t){},176:function(e,t){},203:function(e,t){},204:function(e,t){},209:function(e,t){},211:function(e,t){},218:function(e,t){},237:function(e,t){},270:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(54),i=n.n(c),o=(n(154),n(140)),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},u=(n(269),n(7));i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(o.a,{})}),document.getElementById("root")),s()},61:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n(35),r=n.n(a),c=n(42),i=n.n(c);function o(t){var n=e.from(t.publicKey),a=r.a.createHash("sha256").update(n).digest();return r.a.createHash("ripemd160").update(a).digest("hex").toString()}function s(e,t){Number.isFinite(t)||(t=1);var n,a,r,c=(n=256,a=e,r=.999,i()(Number.isSafeInteger(n)&&n>0,"t is expected to be integer greater than zero"),i()(Number.isSafeInteger(a)&&a>0,"y is expected to be integer greater than zero"),i()(Number.isFinite(r)&&r>0&&r<1,"p is expected to be number > 0 and < 1"),(Math.pow((r-1)/-1,1/a)-1)*-n);return Math.ceil(c*t/2)}}).call(this,n(10).Buffer)}},[[270,1,2]]]);
//# sourceMappingURL=main.e2825009.chunk.js.map