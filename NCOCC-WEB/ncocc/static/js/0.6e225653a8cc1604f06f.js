webpackJsonp([0],{FMYm:function(t,e){},W4St:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{userName:null,menuList:[],menuSub:[],breadcrumbData:[]}},mounted:function(){this.axios({method:"get",url:"/api/userManger/getUserByToken.do"}).then(function(t){this.userName=t.data.extend.name}.bind(this)).catch(function(t){alert("Token校验失败，请重新登录!")}),this.axios({method:"get",url:"/api/menuManger/getMenuByLoginName.do",params:{loginName:window.localStorage.getItem("currentUser_name")}}).then(function(t){for(var e in this.menuList=t.data.extend.allMenu,this.menuList)for(var n in this.menuList[e].children)this.menuSub.push(this.menuList[e].children[n])}.bind(this)).catch(function(t){alert("请求异常!")})},methods:{menuSelect:function(t){1==t&&this.$store.dispatch("users/loginOut",{router:this.$router})},select:function(t){var e=this.menuSub.filter(function(e){return null!=e.url&&""!=e.url&&e.id==t});this.$router.push(e[0].url),this.breadcrumbData.splice(0,1,e[0])},backHome:function(){this.$router.push("/index")}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Row",{staticStyle:{position:"absolute",left:"0",top:"0",width:"100%"},attrs:{type:"flex"}},[a("Col",{staticClass:"layout-menu-left",attrs:{span:"4"}},[a("div",{staticClass:"layout-logo-left"},[a("a",{on:{click:function(e){return t.backHome()}}},[a("img",{staticStyle:{width:"200px",height:"50px"},attrs:{src:n("bPD/"),align:"absmiddle"}})])]),t._v(" "),a("Menu",{attrs:{"active-name":"1-2",theme:"dark",width:"auto","open-names":["1"]},on:{"on-select":function(e){t.select(e)}}},t._l(t.menuList,function(e){return a("Submenu",{key:e.id,attrs:{name:e.id}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:e.icon}}),t._v("\n                        "+t._s(e.name)+"\n                    ")],1),t._v(" "),t._l(e.children,function(e){return a("MenuItem",{key:e.id,attrs:{name:e.id}},[a("Icon",{attrs:{type:e.icon}}),t._v("\n                        "+t._s(e.name)+"\n                    ")],1)})],2)}),1)],1),t._v(" "),a("Col",{attrs:{span:"20"}},[a("div",{staticClass:"layout-header"},[a("Menu",{style:{height:"65px",width:"100%"},attrs:{mode:"horizontal",theme:"light"},on:{"on-select":function(e){t.menuSelect(e)}}},[a("div",{staticStyle:{width:"95%",margin:"0 auto"}},[a("div",{staticClass:"layout-nav"},[a("MenuItem",{attrs:{name:"2"}},[a("Icon",{attrs:{type:"ios-person"}}),t._v("\n                                "+t._s(t.userName)+"\n                            ")],1),t._v(" "),a("MenuItem",{attrs:{name:"1"}},[a("Icon",{attrs:{type:"md-log-out"}}),t._v("\n                                退出\n                            ")],1)],1)])])],1),t._v(" "),a("div",{staticClass:"layout-breadcrumb"},[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{to:"/base/welcome"}},[t._v("首页")]),t._v(" "),t._l(t.breadcrumbData,function(e){return a("BreadcrumbItem",{key:e.id,attrs:{to:e.url}},[t._v(t._s(e.name))])})],2)],1),t._v(" "),a("div",{staticClass:"layout-content"},[a("router-view")],1),t._v(" "),a("div",{staticClass:"layout-copy"},[t._v("\n                tz_tech Copyright © 2018~2020 All Right Reserved\n            ")])])],1)],1)},staticRenderFns:[]};var s=n("VU/8")(a,i,!1,function(t){n("FMYm")},"data-v-c2e4a8be",null);e.default=s.exports},"bPD/":function(t,e,n){t.exports=n.p+"static/img/logo.8b3d518.png"}});
//# sourceMappingURL=0.6e225653a8cc1604f06f.js.map