webpackJsonp([4],{"7syt":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("+skl");var a={data:function(){var e=this;return{loginName:null,userRole:null,state:null,count:null,groupId:null,newModal:!1,modifyModal:!1,roleModal:!1,total:0,loading:!0,pageInfo:{page:1,pageSize:10},user:{id:null,name:null,loginName:null,password:null,email:null,phone:null},userNew:{id:null,name:null,loginName:null,password:null,passwordAgain:null,email:null,phone:null},userModify:{id:null,name:null,loginName:null,password:null,passwordAgain:null,email:null,phone:null},ruleNew:{loginName:[{required:!0,message:"输入姓名",trigger:"blur"}],name:[{required:!0,message:"输入登录名",trigger:"blur"}],password:[{required:!0,message:"输入密码",trigger:"blur"}],passwordAgain:[{required:!0,message:"输入再次密码",trigger:"blur"}],phone:[{required:!0,message:"输入手机号",trigger:"blur"}]},ruleModify:{name:[{type:"string",required:!0,message:"输入用户名",trigger:"blur"}],password:[{type:"string",required:!0,message:"输入密码",trigger:"blur"}],passwordAgain:[{required:!0,message:"再次输入密码",trigger:"blur"}],phone:[{required:!0,message:"输入手机号",trigger:"blur"}]},columns1:[{type:"selection",width:60,align:"center"},{title:"登录名",key:"loginName"},{title:"姓名",key:"name"},{title:"电话",key:"phone"},{title:"用户类型",align:"center",key:"usertype",render:function(e,t){return 0==t.row.usertype?e("div",[e("strong",null,"管理员")]):1==t.row.usertype?e("div",[e("strong",null,"财务")]):2==t.row.usertype?e("div",[e("strong",null,"调度员")]):3==t.row.usertype?e("div",[e("strong",null,"操作员")]):e("div",[e("strong",null,"无")])}},{title:"操作",align:"center",key:"action",render:function(t,s){return t("div",[t("Button",{props:{type:"info"},on:{click:function(){e.relationSet(s.row)}}},"配置角色")])}}],data1:[],columns2:[{type:"selection",width:60,align:"center"},{title:"角色名称",width:120,key:"name"},{title:"描述",key:"describer"}],data2:[],allRoleList:[],stateList:[{label:"正常",value:0},{label:"注销",value:1}],relationList:null}},mounted:function(){var e=this;this.getTable({pageInfo:this.pageInfo,loginName:this.loginName,role:this.userRole,state:this.state}),this.axios({method:"get",url:"/api/roleManger/getAllRoles.do"}).then(function(t){e.allRoleList=t.data.extend.role}).catch(function(t){e.$Message.error(t)})},methods:{initPageInfo:function(){this.pageInfo.page=1,this.pageInfo.pageSize=10},initUser:function(){this.user.id=null,this.user.name=null,this.user.loginName=null,this.user.password=null,this.user.email=null,this.user.phone=null},initUserNew:function(){this.userNew.id=null,this.userNew.name=null,this.userNew.loginName=null,this.userNew.password=null,this.userNew.passwordAgain=null,this.userNew.email=null,this.userNew.phone=null},initUserModify:function(){this.userModify.id=null,this.userModify.name=null,this.userModify.loginName=null,this.userModify.password=null,this.userModify.passwordAgain=null,this.userModify.email=null,this.userModify.phone=null},userSet:function(e){this.user.id=e.id,this.user.name=e.name,this.user.loginName=e.loginName,this.user.password=e.password,this.user.email=e.email,this.user.phone=e.phone},userNewSet:function(e){this.userNew.id=e.id,this.userNew.name=e.name,this.userNew.loginName=e.loginName,this.userNew.password=e.password,this.userNew.passwordAgain=e.password,this.userNew.email=e.email,this.userNew.phone=e.phone},userModifySet:function(e){this.userModify.id=e.id,this.userModify.name=e.name,this.userModify.loginName=e.loginName,this.userModify.password=e.password,this.userModify.passwordAgain=e.password,this.userModify.email=e.email,this.userModify.phone=e.phone},dateGet:function(e){var t=new Date(parseInt(e));return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()},getTable:function(e){var t=this;this.axios({method:"get",url:"/api/userManger/queryAllUserByAuth.do",params:{page:e.pageInfo.page,pageSize:e.pageInfo.pageSize,loginName:e.loginName,role:e.role,state:e.state}}).then(function(e){t.data1=e.data.extend.user,t.total=e.data.extend.totalCount}).catch(function(e){t.$Message.error(e)})},search:function(){this.initPageInfo(),this.getTable({pageInfo:this.pageInfo,loginName:this.loginName,role:this.userRole,state:this.state})},pageSearch:function(e){this.pageInfo.page=e,this.getTable({pageInfo:this.pageInfo,loginName:this.loginName})},openNewModal:function(){this.newModal=!0,this.initUserNew(),this.data1.sort(),this.count=0,this.groupId=null},newOk:function(e){var t=this;this.$refs[e].validate(function(e){e?t.userNew.password==t.userNew.passwordAgain?(t.initUser(),t.userSet(t.userNew),t.axios({method:"post",url:"/api/userManger/saveUser.do",data:t.user}).then(function(e){this.initUserNew(),200==e.data.resultCode?(this.getTable({pageInfo:this.pageInfo,loginName:this.loginName}),this.$Message.info("添加成功")):this.$Message.error(e.data.resultMsg)}.bind(t)).catch(function(e){alert(e)}),t.newModal=!1):(t.$Message.error("两次输入的密码不相同！"),t.loading=!1,t.$nextTick(function(){t.loading=!0})):(t.$Message.error("表单验证失败!"),setTimeout(function(){t.loading=!1,t.$nextTick(function(){t.loading=!0})},1e3))})},openModifyModal:function(){this.count>1||this.count<1?(this.modifyModal=!1,this.$Message.warning("请至少选择一项(且只能选择一项)")):this.modifyModal=!0},modifyOk:function(){var e=this;this.userModify.password==this.userModify.passwordAgain?(this.initUser(),this.userSet(this.userModify),this.axios({method:"post",url:"/api/userManger/modifyUser.do",data:this.user}).then(function(e){200==e.data.resultCode?(this.getTable({pageInfo:this.pageInfo,loginName:this.loginName}),this.$Message.info("更新成功")):this.$Message.error(e.data.resultMsg),this.initUserModify()}.bind(this)).catch(function(e){this.$Message.info("修改失败")}),this.modifyModal=!1):(this.$Message.error("两次输入的密码不相同！"),this.loading=!1,this.$nextTick(function(){e.loading=!0}))},cancel:function(){},change:function(e){1==e.length&&this.userModifySet(e[0]),this.setGroupId(e)},setGroupId:function(e){this.groupId=[],this.count=e.length;for(var t=0;t<=e.length-1;t++)this.groupId.push(e[t].id)},del:function(){null!=this.groupId&&""!=this.groupId?this.axios({method:"post",url:"/api/userManger/deleteUser.do",data:this.groupId}).then(function(e){this.groupId=null,this.count=0,200==e.data.resultCode?(this.getTable({pageInfo:this.pageInfo,loginName:this.loginName}),this.$Message.info("删除成功")):this.$Message.error(e.data.resultMsg)}.bind(this)).catch(function(e){this.$Message.error("删除失败")}):this.$Message.warning("请至少选择一项删除")},dblclick:function(e){this.userModifySet(e),this.modifyModal=!0,this.data1.sort()},relationSet:function(e){this.roleModal=!0,this.data2=[],this.axios({method:"get",url:"/api/roleManger/getAllRolesByLoginName.do",params:{loginName:e.loginName}}).then(function(t){var s=[];for(var a in t.data.extend.userRole)s.push(t.data.extend.userRole[a].roleId);for(var a in this.allRoleList)-1==s.indexOf(this.allRoleList[a].id)?this.data2.push({id:this.allRoleList[a].id,name:this.allRoleList[a].name,describer:this.allRoleList[a].describer,userName:e.loginName,_checked:!1}):this.data2.push({id:this.allRoleList[a].id,name:this.allRoleList[a].name,describer:this.allRoleList[a].describer,userName:e.loginName,_checked:!0})}.bind(this)).catch(function(e){alert(e)})},roleOk:function(){null!=this.relationList&&(this.axios({method:"post",url:"/api/roleManger/rolesConfigure.do",data:this.relationList}).then(function(e){200==e.data.resultCode?(this.getTable({pageInfo:this.pageInfo,loginName:this.loginName}),this.$Message.info("配置成功")):this.$Message.error(e.data.resultMsg)}.bind(this)).catch(function(e){this.$Message.error(e)}),this.relationList=null)},change2:function(e){for(var t in this.relationList=[],0==e.length&&this.relationList.push({userName:this.data2[0].userName}),e)this.relationList.push({userName:e[t].userName,roleId:e[t].id})}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{margin:"20px"}},[s("div",[s("Row",{staticStyle:{"margin-bottom":"25px"}},[s("Col",{attrs:{span:"8"}},[e._v("登录名：\n                \t"),s("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入..."},model:{value:e.loginName,callback:function(t){e.loginName=t},expression:"loginName"}})],1),e._v(" "),s("Col",{attrs:{span:"6"}},[e._v("用户角色：\n                    "),s("Select",{staticStyle:{width:"100px"},attrs:{filterable:"",clearable:""},model:{value:e.userRole,callback:function(t){e.userRole=t},expression:"userRole"}},e._l(e.allRoleList,function(t){return s("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),e._v(" "),s("Col",{attrs:{span:"6"}},[e._v("用户状态：\n                    "),s("Select",{staticStyle:{width:"100px"},attrs:{filterable:"",clearable:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},e._l(e.stateList,function(t){return s("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),e._v(" "),s("Col",{attrs:{span:"4"}},[s("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"},on:{click:function(t){return e.search()}}},[e._v("搜索")])],1)],1)],1),e._v(" "),s("div",[s("ul",[s("li",[s("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(t){return e.openNewModal()}}},[e._v("新建")]),e._v(" "),s("Button",{attrs:{type:"success",icon:"md-build"},on:{click:function(t){return e.openModifyModal()}}},[e._v("修改")]),e._v(" "),s("Button",{attrs:{type:"error",icon:"md-trash"},on:{click:function(t){return e.del()}}},[e._v("删除")])],1),e._v(" "),s("li",[s("div",{staticStyle:{padding:"10px 0"}},[s("Table",{attrs:{border:"",columns:e.columns1,data:e.data1,height:400},on:{"on-selection-change":function(t){e.change(t)},"on-row-dblclick":function(t){e.dblclick(t)}}})],1)]),e._v(" "),s("li",[s("div",{staticStyle:{"text-align":"right"}},[s("Page",{attrs:{total:e.total,"page-size":e.pageInfo.pageSize,"show-elevator":"","show-total":""},on:{"on-change":function(t){e.pageSearch(t)}}})],1)])])]),e._v(" "),s("Modal",{attrs:{"mask-closable":!1,visible:e.newModal,loading:e.loading,width:"600",title:"添加"},on:{"update:visible":function(t){e.newModal=t},"on-ok":function(t){return e.newOk("userNew")},"on-cancel":function(t){return e.cancel()}},model:{value:e.newModal,callback:function(t){e.newModal=t},expression:"newModal"}},[s("Form",{ref:"userNew",attrs:{model:e.userNew,rules:e.ruleNew,"label-width":80}},[s("Row",[s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"登录名:",prop:"loginName"}},[s("Input",{staticStyle:{width:"204px"},attrs:{type:"text"},model:{value:e.userNew.loginName,callback:function(t){e.$set(e.userNew,"loginName",t)},expression:"userNew.loginName"}})],1)],1),e._v(" "),s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"姓名:",prop:"name"}},[s("Input",{staticStyle:{width:"204px"},attrs:{type:"text"},model:{value:e.userNew.name,callback:function(t){e.$set(e.userNew,"name",t)},expression:"userNew.name"}})],1)],1)],1),e._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"密码:",prop:"password"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"password"},model:{value:e.userNew.password,callback:function(t){e.$set(e.userNew,"password",t)},expression:"userNew.password"}})],1)],1),e._v(" "),s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"确认密码:",prop:"passwordAgain"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"password"},model:{value:e.userNew.passwordAgain,callback:function(t){e.$set(e.userNew,"passwordAgain",t)},expression:"userNew.passwordAgain"}})],1)],1)],1),e._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"邮箱:",prop:"email"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"text"},model:{value:e.userNew.email,callback:function(t){e.$set(e.userNew,"email",t)},expression:"userNew.email"}})],1)],1),e._v(" "),s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"手机:",prop:"phone"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"text"},model:{value:e.userNew.phone,callback:function(t){e.$set(e.userNew,"phone",t)},expression:"userNew.phone"}})],1)],1)],1)],1)],1),e._v(" "),s("Modal",{attrs:{"mask-closable":!1,visible:e.modifyModal,loading:e.loading,width:"600",title:"修改"},on:{"update:visible":function(t){e.modifyModal=t},"on-ok":function(t){return e.modifyOk()},"on-cancel":function(t){return e.cancel()}},model:{value:e.modifyModal,callback:function(t){e.modifyModal=t},expression:"modifyModal"}},[s("Form",{ref:"userModify",attrs:{model:e.userModify,rules:e.ruleModify,"label-width":80}},[s("Row",[s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"登录名:",prop:"loginName"}},[s("Input",{staticStyle:{width:"204px"},attrs:{type:"text",disabled:"disabled"},model:{value:e.userModify.loginName,callback:function(t){e.$set(e.userModify,"loginName",t)},expression:"userModify.loginName"}})],1)],1),e._v(" "),s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"姓名:",prop:"name"}},[s("Input",{staticStyle:{width:"204px"},attrs:{type:"text"},model:{value:e.userModify.name,callback:function(t){e.$set(e.userModify,"name",t)},expression:"userModify.name"}})],1)],1)],1),e._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"密码:",prop:"password"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"password"},model:{value:e.userModify.password,callback:function(t){e.$set(e.userModify,"password",t)},expression:"userModify.password"}})],1)],1),e._v(" "),s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"确认密码:",prop:"passwordAgain"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"password"},model:{value:e.userModify.passwordAgain,callback:function(t){e.$set(e.userModify,"passwordAgain",t)},expression:"userModify.passwordAgain"}})],1)],1)],1),e._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"邮箱:",prop:"email"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"text"},model:{value:e.userModify.email,callback:function(t){e.$set(e.userModify,"email",t)},expression:"userModify.email"}})],1)],1),e._v(" "),s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"手机:",prop:"phone"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"text"},model:{value:e.userModify.phone,callback:function(t){e.$set(e.userModify,"phone",t)},expression:"userModify.phone"}})],1)],1)],1)],1)],1),e._v(" "),s("Modal",{attrs:{width:"500",title:"角色配置"},on:{"on-ok":function(t){return e.roleOk()},"on-cancel":function(t){return e.cancel()}},model:{value:e.roleModal,callback:function(t){e.roleModal=t},expression:"roleModal"}},[s("div",[s("Table",{attrs:{border:"",columns:e.columns2,data:e.data2,height:260},on:{"on-selection-change":function(t){e.change2(t)}}})],1)])],1)},staticRenderFns:[]},n=s("VU/8")(a,i,!1,null,null,null);t.default=n.exports}});
//# sourceMappingURL=4.0bab2f6ab7086c2bf9b1.js.map