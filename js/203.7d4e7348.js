"use strict";(self["webpackChunkshoping_cart"]=self["webpackChunkshoping_cart"]||[]).push([[203],{203:function(e,a,s){s.r(a),s.d(a,{default:function(){return b}});var t=s(3396),l=s(9242),r=s(7139),o=s(237);const i={id:"login"},n={class:"container"},d=(0,t._)("img",{src:o,alt:"logo1"},null,-1),u=(0,t._)("h1",null,"Login",-1),c=(0,t._)("label",{for:"email"},"E-Mail",-1),p={class:"error-msg"},g=(0,t._)("label",{for:"password"},"Password",-1),m={class:"error-msg"},w=(0,t._)("h4",null,"Sign Up",-1);function h(e,a,s,o,h,$){const v=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("section",i,[(0,t._)("div",n,[d,u,c,(0,t.wy)((0,t._)("input",{type:"email","onUpdate:modelValue":a[0]||(a[0]=a=>e.v$.email.$model=a),id:"email",placeholder:"Email Address"},null,512),[[l.nr,e.v$.email.$model]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.v$.email.$errors,((e,a)=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:a},[(0,t._)("div",p,(0,r.zw)(e.$message),1)])))),128)),g,(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=a=>e.v$.password.$model=a),id:"password",placeholder:"Password"},null,512),[[l.nr,e.v$.password.$model]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.v$.password.$errors,((e,a)=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:a},[(0,t._)("div",m,(0,r.zw)(e.$message),1)])))),128)),(0,t._)("button",{onClick:a[2]||(a[2]=(...e)=>$.login&&$.login(...e)),type:"button"},"Login"),(0,t.Wm)(v,{to:"/signup",class:"link"},{default:(0,t.w5)((()=>[w])),_:1})])])}s(7658);var $=s(3053),v=s(9117),_=s(70);const f=v.BM.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/);var y={name:"login",setup:()=>({v$:(0,$.Xw)()}),data(){return{email:"",password:""}},validations(){return{email:{required:v.BM.withMessage("**  Invalid Email.",v.C1),email:v.Do},password:{required:v.BM.withMessage("**  Invalid Password.",v.C1),pass:v.BM.withMessage("**  Must contain at least one number and one uppercase and lowercase letter required.",f)}}},methods:{async login(){const e=await this.v$.$validate();console.log(e),1==e&&await _.ZP.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`).then((e=>{200==e.status&&e.data.length>0?(localStorage.setItem("Userdata",JSON.stringify(e.data[0])),alert("Account is Login."),console.log(e,e.data[0]),this.$router.push({path:"/"})):alert("Type correct email and password....")})).catch((e=>{console.log(e),alert("error.....")}))}},mounted(){let e=localStorage.getItem("Userdata");e&&this.$router.push({path:"/"})}},k=s(89);const M=(0,k.Z)(y,[["render",h]]);var b=M}}]);
//# sourceMappingURL=203.7d4e7348.js.map