webpackJsonp([5],{faMj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o("+skl");var i={data:function(){var e=this;return{count:null,groupId:null,newModal:!1,modifyModal:!1,settingModal:!1,total:0,loading:!0,pageInfo:{page:1,pageSize:10},role:{id:null,role:null,name:null,modules:null,describer:null},roleNew:{id:null,role:null,name:null,modules:null,describer:null},roleModify:{id:null,role:null,name:null,modules:null,describer:null},ruleNew:{role:[{type:"string",required:!0,message:"输入角色",trigger:"blur"}],name:[{type:"string",required:!0,message:"输入角色名",trigger:"blur"}]},ruleModify:{role:[{type:"string",required:!0,message:"输入角色",trigger:"blur"}],name:[{type:"string",required:!0,message:"输入角色名",trigger:"blur"}]},columns1:[{type:"selection",width:60,align:"center"},{title:"角色",key:"role"},{title:"角色名",key:"name"},{title:"描述",key:"describer"},{title:"操作",key:"action",width:180,align:"center",render:function(t,o){return t("div",[t("Button",{props:{type:"info"},on:{click:function(){e.setting(o.row)}}},"配置权限")])}}],data1:[],columns2:[{title:"权限",key:"name"},{title:"操作",align:"center",render:function(t,o){return t("div",[t("i-switch",{attrs:{value:o.row.value},on:{"on-change":function(t){var i=e.moduleArr.indexOf(o.row.id+"");t?-1==i&&e.moduleArr.push(o.row.id+""):-1!=i&&e.moduleArr.splice(i,1)}}})])}}],data2:[],moduleArr:[],submenusList:[]}},mounted:function(){this.getTable({pageInfo:this.pageInfo}),this.axios({method:"get",url:"/api/menuManger/getAllSecMenu.do"}).then(function(e){this.submenusList=e.data.extend.secMenu}.bind(this)).catch(function(e){alert(e)})},methods:{initPageInfo:function(){this.pageInfo.page=1,this.pageInfo.pageSize=10},initRole:function(){this.role.id=null,this.role.role=null,this.role.name=null,this.role.modules=null,this.role.describer=null},initRoleNew:function(){this.roleNew.id=null,this.roleNew.role=null,this.roleNew.name=null,this.roleNew.modules=null,this.roleNew.describer=null},initRoleModify:function(){this.roleModify.id=null,this.roleModify.role=null,this.roleModify.name=null,this.roleModify.modules=null,this.roleModify.describer=null},roleSet:function(e){this.role.id=e.id,this.role.role=e.role,this.role.name=e.name,this.role.modules=e.modules,this.role.describer=e.describer},roleNewSet:function(e){this.roleNew.id=e.id,this.roleNew.role=e.role,this.roleNew.name=e.name,this.roleNew.modules=e.modules,this.roleNew.describer=e.describer},roleModifySet:function(e){this.roleModify.id=e.id,this.roleModify.role=e.role,this.roleModify.name=e.name,this.roleModify.modules=e.modules,this.roleModify.describer=e.describer},getTable:function(e){this.axios({method:"get",url:"/api/roleManger/getAllRolesForPage.do",params:{page:e.pageInfo.page,pageSize:e.pageInfo.pageSize}}).then(function(e){this.data1=e.data.extend.role,this.total=e.data.extend.totalCount}.bind(this)).catch(function(e){alert(e)})},pageSearch:function(e){this.pageInfo.page=e,this.getTable({pageInfo:this.pageInfo})},openNewModal:function(){this.newModal=!0,this.initRoleNew(),this.data1.sort(),this.count=0,this.groupId=null},newOk:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.initRole(),t.roleSet(t.roleNew),t.axios({method:"post",url:"/api/roleManger/saveRole.do",data:t.role}).then(function(e){this.initRoleNew(),200==e.data.resultCode?(this.getTable({pageInfo:this.pageInfo}),this.$Message.info("添加成功")):this.$Message.error(e.data.resultMsg)}.bind(t)).catch(function(e){alert(e)}),t.newModal=!1):setTimeout(function(){t.loading=!1,t.$nextTick(function(){t.loading=!0})},1e3)})},openModifyModal:function(){this.count>1||this.count<1?(this.modifyModal=!1,this.$Message.warning("请至少选择一项(且只能选择一项)")):this.modifyModal=!0},modifyOk:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.initRole(),t.roleSet(t.roleModify),t.axios({method:"post",url:"/api/roleManger/modifyRole.do",data:t.role}).then(function(e){this.initRoleModify(),200==e.data.resultCode?(this.getTable({pageInfo:this.pageInfo}),this.$Message.info("修改成功")):this.$Message.error(e.data.resultMsg)}.bind(t)).catch(function(e){alert(e)}),t.modifyModal=!1):setTimeout(function(){t.loading=!1,t.$nextTick(function(){t.loading=!0})},1e3)})},setting:function(e){this.data1.sort(),this.settingModal=!0,this.roleModifySet(e),null==e.modules||""==e.modules?this.moduleArr=[]:this.moduleArr=e.modules.split(";");for(var t=[],o=0;o<this.submenusList.length;o++)-1==this.moduleArr.indexOf(this.submenusList[o].id+"")?t.push({id:this.submenusList[o].id,name:this.submenusList[o].name,value:!1}):t.push({id:this.submenusList[o].id,name:this.submenusList[o].name,value:!0});this.data2=t},settingOk:function(){var e="";for(var t in this.moduleArr)""!=this.moduleArr[t]&&null!=this.moduleArr&&(e=e+this.moduleArr[t]+";");this.roleModify.modules=e,this.initRole(),this.roleSet(this.roleModify),this.axios({method:"post",url:"/api/roleManger/menuConfigure.do",data:this.role}).then(function(e){this.initRoleModify(),200==e.data.resultCode?(this.getTable({pageInfo:this.pageInfo}),this.$Message.info("配置成功")):this.$Message.error(e.data.resultMsg)}.bind(this)).catch(function(e){alert(e)})},cancel:function(){},change:function(e){1==e.length&&this.roleModifySet(e[0]),this.setGroupId(e)},setGroupId:function(e){this.groupId=[],this.count=e.length;for(var t=0;t<=e.length-1;t++)this.groupId.push(e[t].id)},del:function(){null!=this.groupId&&""!=this.groupId?this.axios({method:"post",url:"/api/roleManger/deleteRole.do",data:this.groupId}).then(function(e){this.groupId=null,this.count=0,200==e.data.resultCode?(this.getTable({pageInfo:this.pageInfo}),this.$Message.info("删除成功")):this.$Message.error(e.data.resultMsg)}.bind(this)).catch(function(e){alert(e)}):this.$Message.warning("请至少选择一项删除")},dblclick:function(e){this.roleModifySet(e),this.modifyModal=!0,this.data1.sort()}}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{margin:"20px"}},[o("div",[o("ul",[o("li",[o("Button",{attrs:{type:"primary",icon:"plus-round"},on:{click:function(t){return e.openNewModal()}}},[e._v("新建")]),e._v(" "),o("Button",{attrs:{type:"success",icon:"wrench"},on:{click:function(t){return e.openModifyModal()}}},[e._v("修改")]),e._v(" "),o("Button",{attrs:{type:"error",icon:"trash-a"},on:{click:function(t){return e.del()}}},[e._v("删除")])],1),e._v(" "),o("li",[o("div",{staticStyle:{padding:"10px 0"}},[o("Table",{attrs:{border:"",columns:e.columns1,data:e.data1,height:400},on:{"on-selection-change":function(t){e.change(t)},"on-row-dblclick":function(t){e.dblclick(t)}}})],1)]),e._v(" "),o("li",[o("div",{staticStyle:{"text-align":"right"}},[o("Page",{attrs:{total:e.total,"page-size":e.pageInfo.pageSize,"show-elevator":"","show-total":""},on:{"on-change":function(t){e.pageSearch(t)}}})],1)])])]),e._v(" "),o("Modal",{attrs:{"mask-closable":!1,visible:e.newModal,loading:e.loading,width:"600",title:"新建"},on:{"update:visible":function(t){e.newModal=t},"on-ok":function(t){return e.newOk("roleNew")},"on-cancel":function(t){return e.cancel()}},model:{value:e.newModal,callback:function(t){e.newModal=t},expression:"newModal"}},[o("Form",{ref:"roleNew",attrs:{model:e.roleNew,rules:e.ruleNew,"label-width":80}},[o("Row",[o("Col",{attrs:{span:"12"}},[o("Form-item",{attrs:{label:"角色:",prop:"role"}},[o("Input",{staticStyle:{width:"204px"},model:{value:e.roleNew.role,callback:function(t){e.$set(e.roleNew,"role",t)},expression:"roleNew.role"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"12"}},[o("Form-item",{attrs:{label:"角色名:",prop:"name"}},[o("Input",{staticStyle:{width:"204px"},model:{value:e.roleNew.name,callback:function(t){e.$set(e.roleNew,"name",t)},expression:"roleNew.name"}})],1)],1)],1),e._v(" "),o("Form-item",{attrs:{label:"描述:",prop:"describer"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5}},model:{value:e.roleNew.describer,callback:function(t){e.$set(e.roleNew,"describer",t)},expression:"roleNew.describer"}})],1)],1)],1),e._v(" "),o("Modal",{attrs:{"mask-closable":!1,visible:e.modifyModal,loading:e.loading,width:"600",title:"修改"},on:{"update:visible":function(t){e.modifyModal=t},"on-ok":function(t){return e.modifyOk("roleModify")},"on-cancel":function(t){return e.cancel()}},model:{value:e.modifyModal,callback:function(t){e.modifyModal=t},expression:"modifyModal"}},[o("Form",{ref:"roleModify",attrs:{model:e.roleModify,rules:e.ruleModify,"label-width":80}},[o("Row",[o("Col",{attrs:{span:"12"}},[o("Form-item",{attrs:{label:"角色:",prop:"role"}},[o("Input",{staticStyle:{width:"204px"},attrs:{disabled:"disabled"},model:{value:e.roleModify.role,callback:function(t){e.$set(e.roleModify,"role",t)},expression:"roleModify.role"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"12"}},[o("Form-item",{attrs:{label:"角色名:",prop:"name"}},[o("Input",{staticStyle:{width:"204px"},model:{value:e.roleModify.name,callback:function(t){e.$set(e.roleModify,"name",t)},expression:"roleModify.name"}})],1)],1)],1),e._v(" "),o("Form-item",{attrs:{label:"描述:",prop:"describer"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5}},model:{value:e.roleModify.describer,callback:function(t){e.$set(e.roleModify,"describer",t)},expression:"roleModify.describer"}})],1)],1)],1),e._v(" "),o("Modal",{attrs:{width:"500",title:"配置权限","mask-closable":!1},on:{"on-ok":function(t){return e.settingOk()},"on-cancel":function(t){return e.cancel()}},model:{value:e.settingModal,callback:function(t){e.settingModal=t},expression:"settingModal"}},[o("Row",[o("Col",{attrs:{span:"24"}},[o("Table",{attrs:{border:"",columns:e.columns2,data:e.data2}})],1)],1)],1)],1)},staticRenderFns:[]},n=o("VU/8")(i,l,!1,null,null,null);t.default=n.exports}});
//# sourceMappingURL=5.609c0d293a20121f99a3.js.map