(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{299:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var n=s(5),c=s(36),i=s(37),o=s(40),r=s(39),a=s(0),u=s.n(a),j=s(10),p=s(18),d=s(1),b=function(t){return{isAuth:t.auth.isAuth}},l=function(t){var e=function(e){Object(o.a)(a,e);var s=Object(r.a)(a);function a(){return Object(c.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(t,Object(n.a)({},this.props)):Object(d.jsx)(j.a,{to:"/login"})}}]),a}(u.a.Component);return Object(p.b)(b)(e)}},300:function(t,e,s){t.exports={description:"ProfileInfo_description__2yWda"}},301:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},302:function(t,e,s){t.exports={item:"Post_item__ihtu9"}},304:function(t,e,s){"use strict";s.r(e);var n=s(5),c=s(36),i=s(37),o=s(40),r=s(39),a=s(0),u=s.n(a),j=s(300),p=s.n(j),d=s(67),b=s(127),l=s(1),h=function(t){var e=Object(a.useState)(!1),s=Object(b.a)(e,2),n=s[0],c=s[1],i=Object(a.useState)(t.status),o=Object(b.a)(i,2),r=o[0],u=o[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(l.jsxs)("div",{children:[!n&&Object(l.jsx)("div",{children:Object(l.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"no status"})}),n&&Object(l.jsx)("div",{children:Object(l.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},onBlur:function(){c(!1),t.updateStatus(r)},value:r,autoFocus:!0})})]})},f=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",alt:"img"})}),Object(l.jsxs)("div",{className:p.a.description,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.photos.large,alt:""})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{status:s,updateStatus:n}),Object(l.jsxs)("div",{children:["\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442: ",e.fullName]}),Object(l.jsxs)("div",{children:["\u041e\u0431\u043e \u043c\u043d\u0435: ",e.aboutMe]}),Object(l.jsxs)("div",{children:["\u0420\u0430\u0431\u043e\u0442\u0443 ",e.lookingForAJob?e.lookingForAJobDescription:"\u0438\u0449\u0443 :("]}),Object(l.jsxs)("div",{children:[" \u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:",Object.keys(e.contacts).map((function(t,e){return Object(l.jsxs)("span",{children:[" ",t,", "]},e)}))]})]})]})]}):Object(l.jsx)(d.a,{})},O=s(95),x=s(301),m=s.n(x),v=s(302),g=s.n(v),P=function(t){return Object(l.jsxs)("div",{className:g.a.item,children:[Object(l.jsx)("img",{src:"https://i.pinimg.com/236x/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860--mr-bean-funny-color-blue.jpg",alt:""}),t.message,Object(l.jsxs)("div",{children:["Likes: ",t.likesCount]})]})},k=s(90),y=s(126),S=s(87),_=s(32),A=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(l.jsx)(P,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(l.jsxs)("div",{className:m.a.postsBlock,children:[Object(l.jsx)("h3",{children:"My Posts"}),Object(l.jsx)(w,{onSubmit:function(e){t.addPost(e.newPost)}}),Object(l.jsx)("div",{className:m.a.posts,children:e})]})})),C=Object(S.a)(10),w=Object(y.a)({form:"profileAddPostForm"})((function(t){return Object(l.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)(k.a,{component:_.b,name:"newPost",placeholder:"Add your post",validate:[S.b,C]})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Add Post"})})]})})),I=A,M=s(18),N=Object(M.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(O.a)(e))}}}))(I),B=function(t){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(l.jsx)(N,{})]})},F=s(10),J=(s(299),s(8)),U=function(t){Object(o.a)(s,t);var e=Object(r.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(l.jsx)(B,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(J.d)(Object(M.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:O.d,getStatus:O.c,updateStatus:O.e}),F.f)(U)}}]);
//# sourceMappingURL=3.ba1287af.chunk.js.map