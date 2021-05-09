(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(17),s=c.n(a),i=(c(47),c(23)),o=(c(48),c(4)),l=c(3),u=(c(49),c(7)),d=c(0),j=function(e){var t=e.click,c=Object(u.c)((function(e){return e.cart})).cartItems;return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("div",{className:"navbar__logo",children:Object(d.jsx)(o.b,{to:"/",children:Object(d.jsx)("h2",{children:"Ecommerce M3G"})})}),Object(d.jsxs)("ul",{className:"navbar__links",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(o.b,{to:"/cart",className:"cart__link",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),Object(d.jsxs)("span",{children:["Cart ",Object(d.jsx)("span",{className:"cartlogo__badge",children:c.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/",children:"Shop"})})]}),Object(d.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})]})},p=(c(56),function(e){var t=e.show,c=e.click,n=["sidedrawer"];return t&&n.push("show"),Object(d.jsx)("div",{className:n.join(" "),children:Object(d.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(d.jsx)("li",{children:Object(d.jsxs)(o.b,{to:"/cart",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),Object(d.jsxs)("span",{children:["Cart",Object(d.jsx)("span",{className:"sidedrawer__cartbadge",children:"0"})]})]})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/",children:" Shop"})})]})})}),b=(c(57),function(e){var t=e.click;return e.show&&Object(d.jsx)("div",{className:"backdrop",onClick:t})}),O=(c(58),c(59),function(e){var t=e.imageUrl,c=e.description,n=e.price,r=e.name,a=e.productId;return Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:t,alt:r}),Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{className:"info__name",children:r}),Object(d.jsxs)("p",{className:"info__description",children:[c.substring(0,100),"..."]}),Object(d.jsxs)("p",{className:"info__price",children:["$",n]}),Object(d.jsx)(o.b,{to:"/product/".concat(a),className:"info__button",children:"View"})]})]})}),h=c(11),m=c.n(h),f=c(14),x="GET_PRODUCTS_REQUEST",g="GET_PRODUCTS_SUCCESS",_="GET_PRODUCTS_FAIL",v="GET_PRODUCT_DETAILS_REQUEST",y="GET_PRODUCT_DETAILS_SUCCESS",S="GET_PRODUCT_DETAILS_FAIL",N="GET_PRODUCT_DETAILS_RESET",I=c(15),C=c.n(I),k=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.getProducts})),c=t.products,r=t.loading,a=t.error;return Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(m.a.mark((function e(t){var c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x}),e.next=4,C.a.get("/api/products");case 4:c=e.sent,n=c.data,t({type:g,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:_,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(d.jsxs)("div",{className:"homescreen",children:[Object(d.jsx)("h2",{className:"homescreen__title",children:"Latest Products"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"homescreen__products",children:r?Object(d.jsx)("h2",{children:"Loading.."}):a?Object(d.jsx)("h2",{children:a}):c.map((function(e){return Object(d.jsx)(O,{name:e.name,description:e.description,price:e.price,imageUrl:e.imageUrl,productId:e._id},e._id)}))})]})},T=c(16),E=(c(79),"ADD_TO_CART"),w="REMOVE_FROM_CART",D="DELETE_THE_CART",P=function(e,t){return function(){var c=Object(f.a)(m.a.mark((function c(n,r){var a,s;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,C.a.get("/api/products/".concat(e));case 2:a=c.sent,s=a.data,n({type:E,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(r().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},U=function(e){var t=e.match,c=e.history,r=Object(n.useState)(1),a=Object(i.a)(r,2),s=a[0],o=a[1],l=Object(u.b)(),j=Object(u.c)((function(e){return e.getProductDetails})),p=j.loading,b=j.error,O=j.product;Object(n.useEffect)((function(){var e;O&&t.params.id!==O._id&&l((e=t.params.id,function(){var t=Object(f.a)(m.a.mark((function t(c){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:v}),t.next=4,C.a.get("/api/products/".concat(e));case 4:n=t.sent,r=n.data,c({type:y,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:S,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[l,t,O]);return Object(d.jsx)("div",{className:"productscreen",children:p?Object(d.jsx)("h2",{children:"Loading..."}):b?Object(d.jsx)("h2",{children:b}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"productscreen__left",children:[Object(d.jsx)("div",{className:"left__image",children:Object(d.jsx)("img",{src:O.imageUrl,alt:O.name})}),Object(d.jsxs)("div",{className:"left__info",children:[Object(d.jsx)("p",{className:"left__name",children:"PlayStation 5"}),Object(d.jsxs)("p",{children:["Price: $",O.price]}),Object(d.jsxs)("p",{children:["Description: ",O.description]})]})]}),Object(d.jsx)("div",{className:"productscreen__right",children:Object(d.jsxs)("div",{className:"right__info",children:[Object(d.jsxs)("p",{children:["Price:",Object(d.jsxs)("span",{children:["$",O.price]})]}),Object(d.jsxs)("p",{children:["Status:",Object(d.jsx)("span",{children:O.countInStock>0?"In Stock":"Out of Stock"})]}),Object(d.jsxs)("p",{children:["Qty",Object(d.jsx)("select",{value:s,onChange:function(e){return o(e.target.value)},children:Object(T.a)(Array(O.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{type:"button",onClick:function(){l(P(O._id,s)),c.push("/cart")},children:"Add To Cart"})})]})})]})})},R=(c(80),c(81),function(e){var t=e.item,c=e.qtyChangeHandler,n=e.removeHandler;return Object(d.jsxs)("div",{className:"cartitem",children:[Object(d.jsx)("div",{className:"cartitem__image",children:Object(d.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(d.jsx)(o.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(d.jsx)("p",{children:t.name})}),Object(d.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(d.jsx)("select",{value:t.qty,onChange:function(e){return c(t.product,e.target.value)},className:"cartItem__select",children:Object(T.a)(Array(t.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(d.jsx)("button",{className:"cartItem__deleteBtn",onClick:function(){return n(t.product)},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}),A=c(36),L=c(37),F=c(42),G=c(41),q=c(38),J=c.n(q),H=function(e){Object(F.a)(c,e);var t=Object(G.a)(c);function c(){return Object(A.a)(this,c),t.apply(this,arguments)}return Object(L.a)(c,[{key:"render",value:function(){var e=this,t=Number(this.props.toPay);return Object(d.jsx)(J.a,{env:"sandbox",client:{sandbox:"ASbC3CVtAZl4icx8S8dwQ2UQuSgHurczlwxsRurbIBAnnKdvyJMyGJAKhcID4NS6uQ7XV2do40L8zquh",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.onSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"large",color:"blue",shape:"rect"}})}}]),c}(r.a.Component),M=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.cart})).cartItems,c=function(t,c){e(P(t,c))},n=function(t){e(function(e){return function(t,c){t({type:w,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))},r=function(){e((function(e,t){console.log("im here\n"),e({type:D}),localStorage.setItem("cart",JSON.stringify(t().cart.cartItems))}))},a=function(){return t.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)},s=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"cartscreen",children:[Object(d.jsxs)("div",{className:"cartscreen__left",children:[Object(d.jsx)("h2",{children:"Shopping Cart"}),0===t.length?Object(d.jsxs)("div",{children:["Your Cart Is Empty ",Object(d.jsx)(o.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(d.jsx)(R,{item:e,qtyChangeHandler:c,removeHandler:n},e.product)}))]}),Object(d.jsxs)("div",{className:"cartscreen__right",children:[Object(d.jsxs)("div",{className:"cartscreen__info",children:[Object(d.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(d.jsxs)("p",{children:["$",a()]})]}),Object(d.jsx)("div",{children:Object(d.jsx)(H,{toPay:a(),onSuccess:function(e){var c={cartdetails:t,paymentData:e};console.log(c),C.a.post("/api/products/order",c).then((function(e){})),console.log("im in post"),r()},transactionError:function(){},transactionCanceleld:function(){},onSubmit:s})})]})]})})};var Q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{click:function(){return r(!0)}}),Object(d.jsx)(p,{show:c,click:function(){return r(!1)}}),Object(d.jsx)(b,{show:c,click:function(){return r(!1)}}),Object(d.jsx)("main",{className:"app",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:k}),Object(d.jsx)(l.a,{exact:!0,path:"/product/:id",component:U}),Object(d.jsx)(l.a,{exact:!0,path:"/cart",component:M}),Object(d.jsx)(l.a,{exact:!0,path:"/order",component:M})]})})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,87)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))},$=c(20),V=c(39),z=c(40),K=c(12),Y={cartItems:[]},W=Object($.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var c=t.payload,n=e.cartItems.find((function(e){return e.product===c.product}));return n?Object(K.a)(Object(K.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===n.product?c:e}))}):Object(K.a)(Object(K.a)({},e),{},{cartItems:[].concat(Object(T.a)(e.cartItems),[c])});case w:return Object(K.a)(Object(K.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case D:return Object(K.a)(Object(K.a)({},e),{},{cartItems:[]});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0,products:[]};case g:return{products:t.payload,loading:!1};case _:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case y:return{loading:!1,product:t.payload};case S:return{loading:!1,error:t.payload};case N:return{product:{}};default:return e}}}),X=[V.a],Z={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},ee=Object($.createStore)(W,Z,Object(z.composeWithDevTools)($.applyMiddleware.apply(void 0,X)));s.a.render(Object(d.jsxs)(u.a,{store:ee,children:[Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(Q,{})}),","]}),document.getElementById("root")),B()}},[[86,1,2]]]);
//# sourceMappingURL=main.88566595.chunk.js.map