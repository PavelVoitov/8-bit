"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[672],{3672:function(t,s,r){r.r(s),r.d(s,{default:function(){return M}});var n=r(1413),e=r(5671),i=r(3144),o=r(136),u=r(5716),a=r(2791),c="ProfileInfo_description__YGZb+",l="ProfileInfo_avatar__7Rxtf",d=r(6644),p=r(885),f=r(184),h=function(t){var s=(0,a.useState)(!1),r=(0,p.Z)(s,2),n=r[0],e=r[1],i=(0,a.useState)(t.status),o=(0,p.Z)(i,2),u=o[0],c=o[1];(0,a.useEffect)((function(){c(t.status)}),[t.status]);return(0,f.jsxs)(f.Fragment,{children:[!n&&(0,f.jsx)("div",{children:(0,f.jsx)("span",{onDoubleClick:function(){e(!0)},children:t.status||"-----"})}),n&&(0,f.jsx)("div",{children:(0,f.jsx)("input",{onKeyDown:function(s){"Enter"===s.key&&(e(!1),t.updateStatus(u))},autoFocus:!0,onBlur:function(){e(!1),t.updateStatus(u)},onChange:function(t){c(t.currentTarget.value)},value:u})})]})},m=function(t){var s=t.profile,r=t.status,n=t.updateStatus;return null===s?(0,f.jsx)(d.p,{}):(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("img",{className:l,src:s.photos.large,alt:"avatar"}),(0,f.jsx)("p",{children:s.fullName}),(0,f.jsx)(h,{status:r,updateStatus:n}),(0,f.jsx)("h2",{children:"Contacts:"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:s.contacts.vk}),(0,f.jsx)("li",{children:s.contacts.facebook}),(0,f.jsx)("li",{children:s.contacts.twitter}),(0,f.jsx)("li",{children:s.contacts.instagram})]})]})})},x=r(4136),j=r(8687),v="MyPosts_postsBlock__OcqCW",Z="MyPosts_posts__mwbYL",_="Post_item__aDN5L",g=function(t){(0,o.Z)(r,t);var s=(0,u.Z)(r);function r(){return(0,e.Z)(this,r),s.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){return(0,f.jsxs)("div",{className:_,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:"https://ih1.redbubble.net/image.455464050.9428/flat,750x,075,f-pad,750x1000,f8f8f8.u10.jpg",alt:"user"}),this.props.message]}),(0,f.jsx)("div",{children:(0,f.jsxs)("span",{children:[this.props.likesCount," like"]})})]})}}]),r}(a.Component),C=r(6139),S=r(704),y=r(5298),k=r(1117),P=(0,y.D)(100),b=(0,S.Z)({form:"postAddPostForm"})((function(t){return(0,f.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,f.jsx)("div",{children:(0,f.jsx)(C.Z,{component:k.g,placeholder:"Enter your post...",name:"post",validate:[y.C,P]})}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{children:"Add post"})})]})})),N=(0,a.memo)((function(t){var s=t.post,r=t.addPost;return(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)("h3",{children:"My posts"}),(0,f.jsx)(b,{onSubmit:function(t){r(t.post)}}),(0,f.jsx)("div",{className:Z,children:s.map((function(t){return(0,f.jsx)(g,{message:t.message,likesCount:t.likesCount},t.id)}))})]})})),F=(0,j.$j)((function(t){return{post:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,x.Pi)(s))}}}))(N),w=function(t){return(0,f.jsxs)("div",{children:[(0,f.jsx)(m,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,f.jsx)(F,{})]})},D=r(9271),I=r(7781),E=function(t){(0,o.Z)(r,t);var s=(0,u.Z)(r);function r(){return(0,e.Z)(this,r),s.apply(this,arguments)}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{children:(0,f.jsx)(w,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})})}}]),r}(a.Component),M=(0,I.qC)((0,j.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{setUserProfile:x.$l,getUserProfile:x.et,getStatus:x.lR,updateStatus:x.Nf}),D.EN)(E)},1117:function(t,s,r){r.d(s,{g:function(){return l},I:function(){return d}});var n=r(1413),e=r(5987),i=r(232),o=(r(2791),r(184)),u=["input","meta"],a=["input","meta"],c=function(t){var s=t.meta,r=s.touched,n=s.error,e=t.children,u=r&&n;return(0,o.jsxs)("div",{className:i.Z.formControl+" "+(u?i.Z.error:""),children:[(0,o.jsx)("div",{children:e}),u&&(0,o.jsx)("span",{children:n})]})},l=function(t){var s=t.input,r=(t.meta,(0,e.Z)(t,u));return(0,o.jsx)(c,(0,n.Z)((0,n.Z)({},t),{},{children:(0,o.jsx)("textarea",(0,n.Z)((0,n.Z)({},s),r))}))},d=function(t){var s=t.input,r=(t.meta,(0,e.Z)(t,a));return(0,o.jsx)(c,(0,n.Z)((0,n.Z)({},t),{},{children:(0,o.jsx)("input",(0,n.Z)((0,n.Z)({},s),r))}))}},5298:function(t,s,r){r.d(s,{C:function(){return n},D:function(){return e}});var n=function(t){if(!t)return"Field is required"},e=function(t){return function(s){if(s&&s.length>t)return"Max length is ".concat(t," symbols")}}},232:function(t,s){s.Z={formControl:"FormControls_formControl__NSDV3",error:"FormControls_error__eWZI7",formSummaryError:"FormControls_formSummaryError__zQsfM"}}}]);
//# sourceMappingURL=672.0edeb583.chunk.js.map