(this["webpackJsonpcomplex-offsets"]=this["webpackJsonpcomplex-offsets"]||[]).push([[0],{180:function(e,t,n){"use strict";(function(e){var r=n(90),a=n(0),c=(n(197),n(334)),i=n(45),o=n(68),s=n(339),u=n(335),j=n(89),d=n(336),b=n(337),h=n(69),l=n(338),f=n(117),x=n.n(f),g=n(39),O=n.n(g),p=n(6),m=n.n(p),v=n(88),y=n(10);t.a=function(){var t=Object(a.useState)("xprv9vwDE57wpUcMyycuTsZZMY3Lm6hRrFg6tsYgmELTorcg7yTuafpGE9NqhESdR3PqcHGj7tG2QJjoukgsG6Sy3njq25LxjnRjNkJd3RBz5zu"),n=Object(r.a)(t,2),f=n[0],g=n[1],p=Object(a.useState)(10),S=Object(r.a)(p,2),B=S[0],C=S[1],w=Object(a.useState)(1),E=Object(r.a)(w,2),I=E[0],L=E[1],k=m.a.times(B,(function(t){var n=t+1,r=x.a.fromExtendedKey(f).deriveChild(n),a=Object(v.a)(r),c=Object(v.b)(B,I),i=e.from(a,"hex")[0]-c,o=i+2*c,s=e.from([i]).toString("hex"),u=e.from([o]).toString("hex");return{id:t+1,nodeId:Object(v.a)(r),offset:c,exchangeByteStart:s,exchangeByteEnd:u}}));return Object(y.jsx)(c.a,{fluid:!0,children:Object(y.jsxs)(i.a,{children:[Object(y.jsxs)(o.a,{children:[Object(y.jsx)(i.a.Label,{children:"Complex Private Key"}),Object(y.jsx)(i.a.Control,{value:f,onChange:function(e){return g(e.target.value)}}),Object(y.jsx)(s.a,{onClick:function(){return g(x.a.fromMasterSeed(O.a.randomBytes(16)).privateExtendedKey)},children:"Generate a new key"})]}),Object(y.jsxs)(u.a,{children:[Object(y.jsx)(j.a,{children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)(i.a.Label,{children:"Total Renters"}),Object(y.jsx)(i.a.Control,{value:B,type:"number",onChange:function(e){return C(parseInt(e.target.value,10))}})]})}),Object(y.jsx)(j.a,{children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)(i.a.Label,{children:"Overlap"}),Object(y.jsx)(i.a.Control,{value:I,type:"number",onChange:function(e){return L(parseInt(e.target.value,10))}})]})})]}),Object(y.jsx)(d.a,{children:k.map((function(t){return Object(y.jsxs)(b.a,{children:[Object(y.jsx)(h.a,{width:10,children:t.id}),Object(y.jsx)(h.a,{width:10,children:t.nodeId}),Object(y.jsx)(h.a,{width:10,children:t.exchangeByteStart}),Object(y.jsx)(h.a,{width:10,children:t.exchangeByteEnd}),Object(y.jsx)(h.a,{children:Object(y.jsx)(l.a,{marks:!0,min:0,max:256,valueLabelDisplay:"auto","aria-labelledby":"range-slider",value:[parseInt(e.from(t.exchangeByteStart).toString(),16),parseInt(e.from(t.exchangeByteEnd).toString(),16)],step:1})})]})}))})]})})}}).call(this,n(2).Buffer)},194:function(e,t,n){},197:function(e,t,n){},202:function(e,t){},204:function(e,t){},214:function(e,t){},216:function(e,t){},243:function(e,t){},244:function(e,t){},249:function(e,t){},251:function(e,t){},258:function(e,t){},277:function(e,t){},302:function(e,t){},333:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(82),i=n.n(c),o=(n(194),n(180)),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,353)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},u=(n(332),n(10));i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{})}),document.getElementById("root")),s()},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(39),a=n.n(r),c=n(36),i=n.n(c),o=n(181),s=n.n(o);function u(e){var t=s.a.PrivateKey.fromString(e.privateKey.toString("hex")),n=a.a.createHash("sha256").update(t.toBuffer()).digest();return a.a.createHash("ripemd160").update(n).digest("hex").toString()}function j(e,t){Number.isFinite(t)||(t=1);var n,r,a,c=(n=256,r=e,a=.999,i()(Number.isSafeInteger(n)&&n>0,"t is expected to be integer greater than zero"),i()(Number.isSafeInteger(r)&&r>0,"y is expected to be integer greater than zero"),i()(Number.isFinite(a)&&a>0&&a<1,"p is expected to be number > 0 and < 1"),(Math.pow((a-1)/-1,1/r)-1)*-n);return Math.ceil(c*t/2)}}},[[333,1,2]]]);
//# sourceMappingURL=main.281e782d.chunk.js.map