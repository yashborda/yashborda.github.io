"use strict";(self["webpackChunkshoping_cart"]=self["webpackChunkshoping_cart"]||[]).push([[123],{9123:function(l,t,i){i.r(t),i.d(t,{default:function(){return U}});var a=i(3396);const s={id:"ProductDetailsview",class:"my-5 py-5"},e={class:"container"};function o(l,t,i,o,m,c){const n=(0,a.up)("Navbar"),r=(0,a.up)("ProductDetails"),u=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n),(0,a._)("section",s,[(0,a._)("div",e,[(0,a.Wm)(r)])]),(0,a.Wm)(u)],64)}var m=i(1443),c=i(8723),n=i(7139);const r={class:"col-lg-5 col-12"},u=["src"],g=["src"],d=["src"],_=["src"],p=["src"],b={class:"small-img-group"},h={class:"small-img-col"},v=["src"],w={class:"small-img-col"},f=["src"],k={class:"small-img-col"},y=["src"],P={class:"small-img-col"},C=["src"],D={class:"col-lg-7 col-12 px-3"},x={class:"mb-4"},S={class:"mb-3"},F={class:"mb-3"},L=(0,a.uE)('<select class="my-3"><option value="">Select Size</option><option value="s">S</option><option value="m">M</option><option value="l">L</option><option value="xl">XL</option><option value="xxl">XXL</option></select>',1),T={class:"d-flex align-items-baseline"},W=(0,a._)("input",{type:"number",max:"5",min:"1",value:"1"},null,-1),Z=(0,a._)("h4",null,"Product Details ",-1),$=(0,a._)("div",{class:"details"},[(0,a._)("p",null,"Care Instructions: Machine Wash"),(0,a._)("p",null,"Fit Type: Regular Fit"),(0,a._)("p",null,"Fabric Composition : 100% Cotton"),(0,a._)("p",null,"Premium Super combed cotton jersey fabric is soft & comfortable for all day wear due to its good absorbency & breathability"),(0,a._)("p",null,"Crew neck with rib trim for neck finishing"),(0,a._)("p",null,"Authentic USPA Graphic print at the centre front"),(0,a._)("p",null,"Tagless label at the inside back of the garment for all day comfort")],-1);function z(l,t,i,s,e,o){const m=(0,a.up)("Buttton");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.Product_list,(({Product_main_image:l,category:i,small_image_1:s,small_image_2:c,small_image_3:z,small_image_4:A,Product_name:R,Product_price:X,id:j})=>((0,a.wg)(),(0,a.iD)("div",{key:R,class:"row mt-5 ProductDetails"},[(0,a._)("div",r,[1===e.small_img?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"img-fluid w-100 mb-md-3",id:"main_img",src:o.get_img(s),alt:""},null,8,u)):2===e.small_img?((0,a.wg)(),(0,a.iD)("img",{key:1,class:"img-fluid w-100 mb-md-3",id:"main_img",src:o.get_img(c),alt:""},null,8,g)):3===e.small_img?((0,a.wg)(),(0,a.iD)("img",{key:2,class:"img-fluid w-100 mb-md-3",id:"main_img",src:o.get_img(z),alt:""},null,8,d)):4===e.small_img?((0,a.wg)(),(0,a.iD)("img",{key:3,class:"img-fluid w-100 mb-md-3",id:"main_img",src:o.get_img(A),alt:""},null,8,_)):((0,a.wg)(),(0,a.iD)("img",{key:4,class:"img-fluid w-100 mb-md-3",id:"main_img",src:o.get_img(l),alt:""},null,8,p)),(0,a._)("div",b,[(0,a._)("div",h,[(0,a._)("img",{onClick:t[0]||(t[0]=l=>e.small_img=1),src:o.get_img(s),class:"small-img",alt:""},null,8,v)]),(0,a._)("div",w,[(0,a._)("img",{onClick:t[1]||(t[1]=l=>e.small_img=2),src:o.get_img(c),class:"small-img",alt:""},null,8,f)]),(0,a._)("div",k,[(0,a._)("img",{onClick:t[2]||(t[2]=l=>e.small_img=3),src:o.get_img(z),class:"small-img",alt:""},null,8,y)]),(0,a._)("div",P,[(0,a._)("img",{onClick:t[3]||(t[3]=l=>e.small_img=4),src:o.get_img(A),class:"small-img",alt:""},null,8,C)])])]),(0,a._)("div",D,[(0,a._)("h6",x,"Category / "+(0,n.zw)(i),1),(0,a._)("h3",S,(0,n.zw)(R),1),(0,a._)("h2",F,"$"+(0,n.zw)(X)+".00",1),L,(0,a._)("div",T,[W,(0,a.Wm)(m,{onClick:l=>o.changeRoute(j),class:"mb-5 button_1",button_text:e.button_text,btnLoader:e.loader},null,8,["onClick","button_text","btnLoader"])]),Z,$])])))),128)}i(7658);var A=i(2919),R=i(1020),X=i(8134),j={name:"ProductDetails",data(){return{small_img:"",button_text:"Add To Cart",Product_list:(0,X.a)().getcurrentProduct(this.$route.params.id),router_id:this.$route.params.id,loader:!1}},components:{Buttton:A.Z},methods:{...(0,R.nv)(X.a,["getcurrentProduct","addtocart"]),get_img(l){return i(4026)("./"+l+".jpg")},changeRoute(l){this.loader=!0;let t=localStorage.getItem("Userdata");t?setTimeout((()=>{this.$router.push({name:"Cartview"}),(0,X.a)().addtocart(l),this.loader=!1}),500):setTimeout((()=>{this.$router.push({name:"ShopView"}),this.loader=!1}),500)}}},B=i(89);const H=(0,B.Z)(j,[["render",z]]);var I=H,M={name:"ProductDetailsview",components:{ProductDetails:I,Navbar:c.Z,Footer:m.Z}};const N=(0,B.Z)(M,[["render",o]]);var U=N}}]);
//# sourceMappingURL=123.bbbb70cc.js.map