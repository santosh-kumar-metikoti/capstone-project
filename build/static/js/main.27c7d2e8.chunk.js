(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{225:function(e,t,c){},246:function(e,t,c){},250:function(e,t){},252:function(e,t){},265:function(e,t){},267:function(e,t){},295:function(e,t){},296:function(e,t){},301:function(e,t){},303:function(e,t){},310:function(e,t){},329:function(e,t){},359:function(e,t,c){},360:function(e,t,c){},361:function(e,t,c){},362:function(e,t,c){},367:function(e,t,c){},368:function(e,t,c){},369:function(e,t,c){},370:function(e,t,c){},371:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(16),r=c.n(n),s=c(29),i=c(31),o=c(37),u=Object(s.b)("userAdded"),l=Object(s.b)("userRemoved"),d=(Object(s.b)("addToCart"),Object(s.c)({user:{auth:!1}},{userAdded:function(e,t){e.user=Object(o.a)(Object(o.a)({},e.user),{},{id:t.payload.id,name:t.payload.name,profilePic:t.payload.profilePic,auth:!0})},userRemoved:function(e,t){e.user={auth:!1,postDeleted:!1}}})),j=Object(s.b)("addToCart"),b=Object(s.b)("removeFromCart"),p=Object(s.b)("setCartTotal"),O=Object(s.b)("incTotal"),m=Object(s.b)("decTotal"),h=Object(s.c)({cart:[],total:0},{addToCart:function(e,t){e.cart.push(t.payload.id)},removeFromCart:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{cart:e.cart.filter((function(e){return e!==t.payload.id}))})},setCartTotal:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{total:t.payload.total})},incTotal:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{total:e.total+t.payload.price})},decTotal:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{total:e.total-t.payload.price})}}),f=Object(i.c)({user:d,cart:h});var x=c(18),v=c(22),g=c(26),y=c(7),k=(c(225),c(207)),N=c(417),w=c(416),S=c.p+"static/media/logo.56143542.png",_=c(2);var C=function(){var e=Object(x.c)((function(e){return e.user.user})),t=Object(a.useState)(!0),c=Object(y.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!1),i=Object(y.a)(s,2),o=i[0],u=i[1],l=Object(a.useState)(!1),d=Object(y.a)(l,2),j=d[0],b=d[1],p=Object(a.useState)(),O=Object(y.a)(p,2),m=O[0],h=O[1],f=Object(v.f)(),C=function(){h(null)};return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"nav-bar",children:[Object(_.jsxs)("div",{className:"first",children:[Object(_.jsx)("div",{className:"logo",children:Object(_.jsx)("a",{href:"/",children:Object(_.jsx)("img",{src:S,alt:"logo"})})}),e.auth&&Object(_.jsx)("div",{className:"nav-links",onClick:function(e){h(e.currentTarget)},children:Object(_.jsx)(w.a,{id:"profile",alt:"Profile Pic",src:e.profilePic})}),Object(_.jsxs)(k.a,{id:"simple-menu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:C,children:[Object(_.jsxs)("label",{style:{padding:15},children:["Hello ",null===e||void 0===e?void 0:e.name]}),Object(_.jsx)(N.a,{onClick:function(){f.push("/user/"+e.id)},children:"My account"}),Object(_.jsx)(N.a,{onClick:function(){C(),localStorage.removeItem("auth_token"),f.push("/")},children:"Logout"})]})]}),e.auth&&Object(_.jsx)("div",{className:"second",children:Object(_.jsxs)("div",{className:"nav-links",children:[n?Object(_.jsx)(g.b,{className:"active",to:"/games",children:"Game DB"}):Object(_.jsx)(g.b,{to:"/games",onClick:function(){r(!0),b(!1),u(!1)},children:"Game DB"}),o?Object(_.jsx)(g.b,{className:"active",to:"/store",children:"Store"}):Object(_.jsx)(g.b,{to:"/store",onClick:function(){r(!1),b(!1),u(!0)},children:"Store"}),j?Object(_.jsx)(g.b,{className:"active",to:"/social",children:"Social"}):Object(_.jsx)(g.b,{to:"/social",onClick:function(){r(!1),b(!0),u(!1)},children:"Social"})]})})]})})},I=c(6),A=c.n(I),T=c(12),D=c(199),E=c(14),P=c.n(E),z=(c(246),"https://gamers-dash.herokuapp.com"),F="iajbfakncaicubackajbcahcvisrjngf74t509rwijf2398u329h9v398h3298j",L="https://api.rawg.io/api",R="871b8db4c8c14c308a2a68ddd8621fad",q=(new Date).getFullYear(),U=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),M=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),B="".concat(q,"-").concat(U,"-").concat(M),G="".concat(q-1,"-").concat(U,"-").concat(M),H="".concat(q+1,"-").concat(U,"-").concat(M),Y=("/games?key=".concat(R,"&dates=").concat(G,",").concat(B,"&ordering=-rating&page_size=15"),"/games?key=".concat(R,"&dates=").concat(B,",").concat(H,"&ordering=-added&page_size=15")),J=("/games?key=".concat(R,"&dates=").concat(G,",").concat(B,"&ordering=-released&page_size=15"),c(200)),K=c.n(J),Q=c(405);function V(){var e=Object(x.c)((function(e){return e.user.user})),t=Object(a.useState)(!0),c=Object(y.a)(t,2),n=c[0],r=c[1],s=Object(x.b)(),i=Object(v.f)();function o(){return d.apply(this,arguments)}function d(){return(d=Object(T.a)(A.a.mark((function e(){var t,c,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(){return(a=Object(T.a)(A.a.mark((function e(){var c,a,n,o,d;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=K.a.verify(t,F),e.next=4,P.a.get(z+"/user/"+c.userId);case 4:a=e.sent,n=a.data,o=n.name,d=n.profilePic,s(u({id:c.userId,name:o,profilePic:d})),r(!1),i.push("/games"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error",e.t0),s(l()),r(!1);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)},c=function(){return a.apply(this,arguments)},t=localStorage.getItem("auth_token"),c();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){o()}),[]);var j=function(){var e=Object(T.a)(A.a.mark((function e(t){var c,a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),c=t.tokenObj.id_token,a=P.a.create({baseURL:z+"/user",headers:{Authorization:c}}),e.next=5,a.get("/signin");case 5:n=e.sent,localStorage.setItem("auth_token",n.data.authToken),o(),r(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"main-screen",children:[n&&Object(_.jsx)(Q.a,{color:"secondary"}),!1===e.auth&&Object(_.jsx)("div",{className:"signing",children:Object(_.jsx)(D.GoogleLogin,{clientId:"770137991345-qd5ralem02mqmmekkukfqp4nnhrc47v3.apps.googleusercontent.com",buttonText:"Hop In",onSuccess:j,onFailure:function(e){console.log("Google Login Failed",e),r(!1)},cookiePolicy:"single_host_origin"})}),e.id?Object(_.jsx)("h1",{children:"hello"}):Object(_.jsx)("h1",{children:"you are not logged in"})]})}var W=c(32),X=(c(359),c(407)),Z=c(415),$=(c(360),c(406));function ee(e){var t=e.id,c=e.name,n=e.image,r=e.rating,s=e.ss,i=(e.platforms,e.released),o=Object(a.useState)(),u=Object(y.a)(o,2),l=u[0],d=u[1],j=Object(a.useState)(!0),b=Object(y.a)(j,2),p=b[0],O=b[1];function m(){return(m=Object(T.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.rawg.io/api/games/"+t);case 2:c=e.sent,d(c.data.description),O(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e){m.apply(this,arguments)}(t)}),[]),Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"main-container",children:[Object(_.jsx)("div",{className:"name-r",children:c}),Object(_.jsx)("img",{className:"image-r",src:n,alt:"poster"}),Object(_.jsxs)("div",{className:"rel-r",children:["Release Date: ",i]}),Object(_.jsx)("div",{className:"desc-r",children:p?Object(_.jsx)($.a,{color:"secondary"}):Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:l},id:"description"})}),Object(_.jsx)("div",{className:"ss-r",children:s.map((function(e,t){return Object(_.jsx)("img",{className:"ss-im",src:e.image,alt:"sc_sh"},t)}))}),Object(_.jsxs)("div",{className:"rating-r",children:["Rating: ",r]})]})})}function te(e){var t=e.name,c=e.image,n=e.id,r=e.genres,s=e.ss,i=e.rating,o=e.platforms,u=e.released,l=Object(a.useState)(!1),d=Object(y.a)(l,2),j=d[0],b=d[1],p=function(){b(!1)},O=Object(_.jsxs)("div",{className:"modal-r-r",children:[Object(_.jsx)(X.a,{variant:"contained",color:"secondary",onClick:p,children:"close"}),Object(_.jsx)(ee,{name:t,image:c,id:n,genres:r,ss:s,rating:i,platforms:o,released:u})]});return Object(_.jsxs)("div",{className:"game-card",children:[Object(_.jsx)("div",{className:"game-image",children:Object(_.jsx)("img",{src:c,alt:"bacDrop",onClick:function(){b(!0)}})}),Object(_.jsx)("div",{className:"game-title",children:t}),Object(_.jsx)(Z.a,{open:j,onClose:p,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:O})]})}c(361);function ce(){var e=Object(x.c)((function(e){return e.user.user})),t=Object(v.f)(),c=Object(a.useState)([]),n=Object(y.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(""),o=Object(y.a)(i,2),u=o[0],l=o[1],d=Object(a.useState)(!0),j=Object(y.a)(d,2),b=j[0],p=j[1];Object(a.useEffect)((function(){O("".concat(L).concat(Y))}),[]);var O=function(){var e=Object(T.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(t);case 2:return c=e.sent,e.t0=s,e.t1=[],e.t2=Object(W.a)(r),e.t3=W.a,e.next=9,c.data.results;case 9:e.t4=e.sent,e.t5=(0,e.t3)(e.t4),e.t6=e.t1.concat.call(e.t1,e.t2,e.t5),(0,e.t0)(e.t6),l(c.data.next),console.log(c.data),p(!1);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"games-parent",children:[Object(_.jsx)("div",{className:"games-display-area",children:e.auth?Object(W.a)(r).map((function(e,t){return Object(_.jsx)(te,{name:e.name,image:e.background_image,id:e.id,genres:e.genres,rating:e.rating,platforms:e.platforms,released:e.released,ss:e.short_screenshots},e.id)})):t.push("/")}),b&&Object(_.jsx)(Q.a,{color:"secondary"}),!b&&Object(_.jsx)(X.a,{variant:"contained",color:"primary",onClick:function(){p(!0),O(u)},children:"Load More"})]})}c(362);var ae=c(408),ne=c(409),re=c(410),se=c(411);function ie(e){var t=e.comment,c=Object(a.useState)({}),n=Object(y.a)(c,2),r=n[0],s=n[1];function i(){return(i=Object(T.a)(A.a.mark((function e(){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(z+"/user/"+t.userId);case 2:c=e.sent,s(c.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(_.jsxs)("div",{className:"indi-comment",children:[Object(_.jsxs)("div",{className:"comment-owner",children:[Object(_.jsx)("img",{id:"owner-pic",src:r.profilePic,alt:"owner_pic"}),Object(_.jsx)("div",{className:"owner-name",children:r.name})]}),Object(_.jsx)("div",{className:"comment-data",children:t.comment})]})}function oe(e){var t=e.post,c=Object(x.c)((function(e){return e.user.user})),n=Object(a.useState)([]),r=Object(y.a)(n,2),s=(r[0],r[1]),i=Object(a.useState)({}),o=Object(y.a)(i,2),u=o[0],l=o[1],d=Object(a.useState)([]),j=Object(y.a)(d,2),b=j[0],p=j[1],O=Object(a.useState)(!1),m=Object(y.a)(O,2),h=m[0],f=m[1],v=Object(a.useState)(""),w=Object(y.a)(v,2),S=w[0],C=w[1],I=Object(a.useState)(t.comments.length),D=Object(y.a)(I,2),E=D[0],F=D[1],L=Object(a.useState)("primary"),R=Object(y.a)(L,2),q=R[0],U=R[1],M=Object(a.useState)(t.likes.length),B=Object(y.a)(M,2),G=B[0],H=B[1],Y=Object(a.useState)(),J=Object(y.a)(Y,2),K=J[0],Q=J[1],V=P.a.create({baseURL:z,headers:{Authorization:localStorage.getItem("auth_token")}});Object(a.useEffect)((function(){!function(e){oe.apply(this,arguments)}(t.userId),function(e){de.apply(this,arguments)}(t.comments)}),[]);var Z=function(){Q(null)};function $(){return ee.apply(this,arguments)}function ee(){return(ee=Object(T.a)(A.a.mark((function e(){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("/posts/"+t._id);case 2:c=e.sent,console.log("here",c.data.likes),s(c.data.likes),H(c.data.likes.length);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(){return ce.apply(this,arguments)}function ce(){return(ce=Object(T.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.likes.includes(c.id)?U("secondary"):U("primary");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return(oe=Object(T.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(z+"/user/"+t);case 2:c=e.sent,l(c.data),te();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return(ue=Object(T.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("primary"!==q){e.next=8;break}return e.next=3,V.put("/likeops/"+t._id);case 3:e.sent,$(),U("secondary"),e.next=14;break;case 8:if("secondary"!==q){e.next=14;break}return e.next=11,V.put("/likeops/unlike/"+t._id);case 11:e.sent,$(),U("primary");case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=Object(T.a)(A.a.mark((function e(){var c,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={comment:S},e.next=3,V.post("/comments/"+t._id,c);case 3:a=e.sent,p([].concat(Object(W.a)(b),[a.data])),F(E+1),C("");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=Object(T.a)(A.a.mark((function e(t){var c,a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=[],a=0;case 2:if(!(a<t.length)){e.next=10;break}return e.next=5,P.a.get(z+"/comments/"+t[a]);case 5:n=e.sent,c.push(n.data);case 7:a++,e.next=2;break;case 10:console.log(c),p(c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(){return(je=Object(T.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(z+"/posts/"+t),e.next=3,V.delete("/posts/"+t);case 3:c=e.sent,console.table(c),window.location.reload();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=new Date(t.createdAt);return Object(_.jsxs)("div",{className:"landing-post",children:[Object(_.jsxs)("div",{className:"more-options",children:[Object(_.jsx)("div",{className:"date",children:be.toString().slice(0,15)}),Object(_.jsxs)("div",{className:"options",children:[Object(_.jsx)(ae.a,{onClick:function(e){Q(e.currentTarget)}}),Object(_.jsxs)(k.a,{id:"simple-menu",anchorEl:K,keepMounted:!0,open:Boolean(K),onClose:Z,children:[Object(_.jsx)(N.a,{on:!0,children:"Flag as fake / inappropriate"}),t.userId===c.id&&Object(_.jsx)(N.a,{onClick:function(){!function(e){je.apply(this,arguments)}(t._id),Z()},children:"Delete"})]})]})]}),Object(_.jsxs)("div",{className:"post-user-info",children:[Object(_.jsx)("img",{id:"post-user-image",alt:"user_image",src:u.profilePic}),Object(_.jsx)(g.b,{to:"/user/"+t.userId,children:u.name})]}),Object(_.jsx)("div",{className:"desc",children:t.desc}),Object(_.jsx)("img",{id:"post-image",src:z+"/"+t.postImage,alt:"post-lander"}),Object(_.jsxs)("div",{className:"like-comment-event",children:[Object(_.jsxs)("div",{className:"like-comment",children:[Object(_.jsxs)("div",{className:"like-count",children:[Object(_.jsx)(ne.a,{color:q,onClick:function(){return ue.apply(this,arguments)}})," ",G]}),Object(_.jsxs)("div",{className:"comment-count",children:[Object(_.jsx)(re.a,{color:"primary",onClick:function(){f(!h)}})," ",E]})]}),"true"===t.isEvent&&Object(_.jsxs)(X.a,{className:"isEvent",variant:"contained",color:"primary",target:"_blank",rel:"noopener norefrence",href:"https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=909752796516-tai4asagcrndntlnrr9t1vutbrnak2fp.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground",children:["Add Reminder",Object(_.jsx)(se.a,{})]})]}),h&&Object(_.jsx)("div",{className:"comments-section",children:Object(W.a)(b).map((function(e){return Object(_.jsx)(ie,{comment:e},e._id)}))}),Object(_.jsxs)("div",{className:"add-comment",children:[Object(_.jsxs)("div",{className:"user-info",children:[Object(_.jsx)("img",{id:"user-profile",alt:"u-profile",src:c.profilePic}),c.name]}),Object(_.jsxs)("div",{className:"comment-adding-area",children:[Object(_.jsx)("input",{className:"comment-box",placeholder:"Click here to write a comment",size:65,value:S,onChange:function(e){return C(e.target.value)}}),Object(_.jsx)(X.a,{color:"secondary",variant:"contained",onClick:function(){return le.apply(this,arguments)},children:"post"})]})]})]},t._id)}var ue=c(201),le=c.n(ue),de=c(412);function je(){var e=P.a.create({baseURL:z,headers:{Authorization:localStorage.getItem("auth_token")}}),t=Object(a.useState)(!0),c=Object(y.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)([]),i=Object(y.a)(s,2),o=i[0],u=i[1],l=Object(x.c)((function(e){return e.user})),d=Object(v.f)(),j=Object(a.useState)(!1),b=Object(y.a)(j,2),p=b[0],O=b[1],m=Object(a.useState)(""),h=Object(y.a)(m,2),f=h[0],g=h[1],k=Object(a.useState)(void 0),N=Object(y.a)(k,2),w=N[0],S=N[1],C=function(){O(!1)};function I(){return D.apply(this,arguments)}function D(){return(D=Object(T.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(z+"/posts");case 2:t=e.sent,u(t.data),r(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return F.apply(this,arguments)}function F(){return(F=Object(T.a)(A.a.mark((function t(c){var a,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),(a=new FormData).append("desc",f),a.append("postImage",w),t.next=6,e.post(z+"/posts/",a);case 6:n=t.sent,C(),I(),console.log(n.data);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(a.useEffect)((function(){!1===l.auth?d.push("/"):I()}),[]);var L=Object(_.jsxs)("div",{className:"poster",children:[Object(_.jsxs)("form",{onSubmit:E,children:[Object(_.jsx)("textarea",{id:"description",type:"text",placeholder:"Enter some description here",value:f,onChange:function(e){return g(e.target.value)}}),Object(_.jsx)("input",{id:"upload",type:"file",onChange:function(e){console.log(e.target.files[0]),S(e.target.files[0])}})]}),Object(_.jsx)("button",{className:"btn-upload",type:"submit",onClick:E,children:"Upload Post"}),Object(_.jsx)("button",{className:"btn-cancel",type:"button",onClick:C,children:"Cancel"})]});return Object(_.jsxs)("div",{children:[n?Object(_.jsx)($.a,{color:"secondary"}):Object(_.jsx)("div",{className:"main-posts-area",children:function(){var e=Object(W.a)(o);return(e=e.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)}))).map((function(e){return Object(_.jsx)(oe,{post:e},e._id)}))}()}),Object(_.jsxs)("div",{className:"add-post-btn",title:"Add a new POST",children:[Object(_.jsx)(de.a,{color:"primary","aria-label":"add",onClick:function(){O(!0)},children:Object(_.jsx)(le.a,{})}),Object(_.jsx)(Z.a,{open:p,onClose:C,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:L})]})]})}var be=c(202),pe=(c(367),c(368),c(413)),Oe=c(203),me=c(93);function he(e){var t=e.id,c=e.image,n=e.name,r=e.description,s=e.price,i=e.countInStock,o=Object(a.useState)(!1),u=Object(y.a)(o,2),l=u[0],d=u[1],b=Object(x.c)((function(e){return e.cart.cart})),p=P.a.create({baseURL:z,headers:{Authorization:localStorage.getItem("auth_token")}});Object(a.useEffect)((function(){b.includes(t)?d(!0):d(!1)}),[]);var O=Object(x.b)();function m(){return(m=Object(T.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.includes(t)){e.next=9;break}return O(j({id:t})),e.next=4,p.post("/orders",{productId:t});case 4:e.sent,d(!0),me.b.success("item added to cart"),e.next=10;break;case 9:me.b.error("item already in cart");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(_.jsxs)("div",{className:"prod-card",children:[Object(_.jsx)("div",{className:"prod-image",children:Object(_.jsx)("img",{className:"fit-pic",src:z+"/"+c,alt:"image_prod"})}),Object(_.jsxs)("div",{className:"prod-details",children:[Object(_.jsx)("div",{className:"prod-name",children:n}),Object(_.jsx)("div",{className:"prod-description",children:Object(_.jsx)("ul",{children:r.split(".").map((function(e,t){return Object(_.jsx)("li",{children:e},t)}))})})]}),Object(_.jsxs)("div",{className:"cart-fxns",children:[Object(_.jsxs)("div",{className:"price",children:["Price: \u20b9",s]}),Object(_.jsxs)("div",{className:"in-stock",children:["In Stock : ",i]}),Object(_.jsx)("button",{className:"a2c",onClick:function(){return function(e){return m.apply(this,arguments)}(t)},children:l?Object(_.jsx)(Oe.a,{size:25}):Object(_.jsx)(pe.a,{})})]}),Object(_.jsx)(me.a,{toastOptions:{success:{style:{background:"green"}},error:{style:{background:"yellow"}}}})]})}var fe=c(205),xe=c(204);function ve(){var e=Object(x.c)((function(e){return e.cart.cart})),t=Object(x.b)(),c=Object(v.f)(),n=Object(a.useState)([]),r=Object(y.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(!0),u=Object(y.a)(o,2),l=u[0],d=u[1],b=Object(a.useState)(""),p=Object(y.a)(b,2),O=p[0],m=p[1],h=P.a.create({baseURL:z,headers:{Authorization:localStorage.getItem("auth_token")}});function f(){return(f=Object(T.a)(A.a.mark((function c(){var a,n,r,s;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,h.get("/orders");case 2:a=c.sent,n=Object(be.a)(a.data.doc);try{for(n.s();!(r=n.n()).done;)s=r.value,e.includes(s.productId._id)?console.log("in cart"):t(j({id:s.productId._id}))}catch(i){n.e(i)}finally{n.f()}case 5:case"end":return c.stop()}}),c)})))).apply(this,arguments)}function g(e){return k.apply(this,arguments)}function k(){return(k=Object(T.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i([]),e.next=3,P.a.get(t);case 3:c=e.sent,i(c.data),d(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){f.apply(this,arguments)}(),g(z+"/products")}),[]),Object(_.jsx)("div",{className:"main-landing-page",children:Object(_.jsxs)("div",{className:"store-main",children:[Object(_.jsxs)("div",{className:"store-nav",children:[Object(_.jsxs)("div",{className:"search",children:[Object(_.jsx)("div",{className:"search-icon",children:Object(_.jsx)(xe.a,{size:25})}),Object(_.jsx)("input",{id:"search-bar",placeholder:"search",value:O,onChange:function(e){return function(e){d(!0),m(e.target.value),O?setTimeout((function(){g(z+"/search?key="+O)}),500):g(z+"/products")}(e)}})]}),Object(_.jsxs)("div",{className:"cart-stats",children:[Object(_.jsx)(fe.a,{size:50,onClick:function(){c.push("/cart")}}),Object(_.jsx)("div",{className:"items-in-cart",children:e.length||"0"})]})]}),Object(_.jsx)("div",{className:"store",children:Object(_.jsxs)("div",{className:"products-page",children:[l&&Object(_.jsx)(Q.a,{color:"secondary"}),function(){var e=Object(W.a)(s);return(e=e.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)}))).map((function(e){return Object(_.jsx)(he,{id:e._id,name:e.name,image:e.productImage,description:e.description,price:e.price,countInStock:e.countInStock},e._id)}))}()]})})]})})}c(369);var ge=c(414);function ye(e){var t=e.id,c=P.a.create({baseURL:z,headers:{Authorization:localStorage.getItem("auth_token")}}),n=Object(x.c)((function(e){return e.user})),r=Object(a.useState)(""),s=Object(y.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)(""),l=Object(y.a)(u,2),d=l[0],j=l[1],b=Object(a.useState)(""),p=Object(y.a)(b,2),O=p[0],m=p[1],h=Object(a.useState)(""),f=Object(y.a)(h,2),v=f[0],g=f[1],k=Object(a.useState)({}),N=Object(y.a)(k,2),w=N[0],S=N[1],C=Object(a.useState)(),I=Object(y.a)(C,2),D=I[0],E=I[1],F=Object(a.useState)(!1),L=Object(y.a)(F,2),R=L[0],q=L[1],U=function(){q(!1)};function M(){return(M=Object(T.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:d,about:v,occupation:O},e.next=3,c.patch("/user/"+i,t);case 3:a=e.sent,console.table(a),G(i),U();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){G(t)}),[]);var B=Object(_.jsx)("div",{className:"modal-body",children:Object(_.jsxs)("div",{className:"modal-content",children:[Object(_.jsx)("div",{className:"n-r",children:Object(_.jsx)(ge.a,{label:"Display Name",variant:"outlined",value:d,onChange:function(e){return j(e.target.value)}})}),Object(_.jsx)("div",{className:"a-r",children:Object(_.jsx)(ge.a,{label:"About",variant:"outlined",value:v,onChange:function(e){return g(e.target.value)}})}),Object(_.jsx)("div",{className:"o-r",children:Object(_.jsx)(ge.a,{label:"Occupation",variant:"outlined",value:O,onChange:function(e){return m(e.target.value)}})}),Object(_.jsxs)("div",{className:"btn-r",children:[Object(_.jsx)(X.a,{variant:"outlined",color:"primary",onClick:function(){return M.apply(this,arguments)},children:"Save"}),Object(_.jsx)(X.a,{variant:"outlined",color:"secondary",onClick:U,children:"Cancel"})]})]})});function G(e){return H.apply(this,arguments)}function H(){return(H=Object(T.a)(A.a.mark((function e(t){var c,a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(z+"/user/"+t);case 2:r=e.sent,S(r.data),o(r.data._id),j(r.data.name),g(null===(c=r.data)||void 0===c?void 0:c.about),m(null===(a=r.data)||void 0===a?void 0:a.occupation),console.table(w,n),setTimeout((function(){n.id===r.data._id?E(!0):E(!1)}),200);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(_.jsx)("div",{className:"main-view",children:Object(_.jsxs)("div",{className:"profile",children:[Object(_.jsx)("img",{src:w.profilePic,alt:"profile_Pic"}),Object(_.jsxs)("div",{className:"profile-info",children:[Object(_.jsxs)("div",{className:"user-name",children:["Display Name: ",Object(_.jsx)("div",{className:"name-r",children:w.name})]}),Object(_.jsxs)("div",{className:"user-about",children:["About You: ",Object(_.jsx)("div",{className:"about-r",children:w.about})]}),Object(_.jsxs)("div",{className:"user-occupation",children:["Your Occupation: ",Object(_.jsx)("div",{className:"occupation-r",children:w.occupation})]})]}),D&&Object(_.jsxs)("div",{className:"editing-r",children:[Object(_.jsx)(X.a,{onClick:function(){q(!0)},children:"Edit Profile"}),Object(_.jsx)(Z.a,{open:R,onClose:U,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:B})]})]})})}function ke(){var e=Object(v.g)().search.split("=")[1];function t(){return(t=Object(T.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("http://localhost:3100/calendar",{code:t});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e){t.apply(this,arguments)}(e)}),[]),Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("h1",{children:e})})}c(370);var Ne=c(206),we=c(122);function Se(e){var t=e.order,c=Object(a.useState)(!1),n=Object(y.a)(c,2),r=n[0],s=n[1],i=Object(x.b)(),o=P.a.create({baseURL:z,headers:{Authorization:localStorage.getItem("auth_token")}}),u=Object(a.useState)(t.quantity),l=Object(y.a)(u,2),d=l[0],j=l[1];function p(){j(d+1),function(e){f.apply(this,arguments)}(t._id),i(O({price:t.productId.price}))}function h(){j(d-1),function(e){v.apply(this,arguments)}(t._id),i(m({price:t.productId.price}))}function f(){return(f=Object(T.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o.patch(z+"/orders/"+t,{quantity:d+1})}catch(c){console.table(c)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(T.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o.patch(z+"/orders/"+t,{quantity:d-1})}catch(c){console.table(c)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(T.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o.delete(z+"/orders/"+t._id),i(b({id:t.productId._id})),i(m({price:d*t.productId.price})),s(!0)}catch(c){console.log(c)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return!r&&Object(_.jsxs)("div",{className:"order-comp",children:[Object(_.jsx)("img",{className:"o-img",src:z+"/"+t.productId.productImage,alt:"order_image"}),Object(_.jsx)("div",{className:"o-name",children:t.productId.name}),Object(_.jsxs)("div",{className:"o-quan",children:[Object(_.jsx)("div",{className:"q-rem",children:Object(_.jsx)(we.b,{onClick:function(){return d>1&&h()}})}),Object(_.jsx)("div",{className:"q",children:d}),Object(_.jsx)("div",{className:"q-add",children:Object(_.jsx)(we.a,{onClick:function(){return d<10&&p()}})})]}),Object(_.jsx)("div",{className:"o-price",children:"\u20b9 "+t.productId.price}),Object(_.jsx)("div",{className:"o-delete",children:Object(_.jsx)(Ne.a,{size:25,onClick:function(){return g.apply(this,arguments)}})})]})}function _e(){var e=Object(a.useState)([]),t=Object(y.a)(e,2),c=t[0],n=t[1],r=Object(x.c)((function(e){return e.cart.total})),s=Object(x.b)(),i=P.a.create({baseURL:z,headers:{Authorization:localStorage.getItem("auth_token")}});function o(){return(o=Object(T.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/orders");case 2:t=e.sent,n(t.data.doc),s(p({total:t.data.cartTotal}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(T.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/orders");case 2:t=e.sent,l(t.data.cartTotal);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(T.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post(z+"/payment",{amount:t});case 2:c=e.sent,window.open(c.data.url);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(_.jsx)("div",{className:"fb-h",children:Object(_.jsxs)("div",{className:"fb-c",children:[Object(_.jsx)("div",{className:"cart",children:Object(W.a)(c).map((function(e){return Object(_.jsx)(Se,{order:e},e._id)}))}),Object(_.jsxs)("div",{className:"checkout-area",children:[Object(_.jsx)("button",{className:"checkout",onClick:function(){return u.apply(this,arguments)},children:"Proceed to checkout"}),Object(_.jsxs)("div",{className:"t-amount",children:["Total billable amount : ",Object(_.jsxs)("div",{className:"amount",children:["\u20b9 ",r]})]})]})]})})}var Ce=function(){function e(){var e=Object(v.h)().id;return Object(_.jsx)(ye,{id:e})}return Object(_.jsxs)(g.a,{children:[Object(_.jsx)(C,{}),Object(_.jsxs)(v.c,{children:[Object(_.jsx)(v.a,{exact:!0,path:"/",children:Object(_.jsx)(V,{})}),Object(_.jsx)(v.a,{path:"/games",children:Object(_.jsx)(ce,{})}),Object(_.jsx)(v.a,{path:"/social",children:Object(_.jsx)(je,{})}),Object(_.jsx)(v.a,{path:"/store",children:Object(_.jsx)(ve,{})}),Object(_.jsx)(v.a,{path:"/user/:id",children:Object(_.jsx)(e,{})}),Object(_.jsx)(v.a,{path:"/auth/success",children:Object(_.jsx)(ke,{})}),Object(_.jsx)(v.a,{path:"/cart",children:Object(_.jsx)(_e,{})})]})]})},Ie=Object(s.a)({reducer:f});r.a.render(Object(_.jsx)(x.a,{store:Ie,children:Object(_.jsx)(Ce,{})}),document.getElementById("root"))}},[[371,1,2]]]);
//# sourceMappingURL=main.27c7d2e8.chunk.js.map