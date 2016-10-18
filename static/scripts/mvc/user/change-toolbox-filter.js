define(["mvc/form/form-view","mvc/ui/ui-misc"],function(a,b){return Backbone.View.extend({initialize:function(c){var d=this;this.model=c&&c.model||new Backbone.Model(c),this.form=new a({title:"Manage Toolbox Filters",name:"toolbox_filter",id:"toolbox_filter",inputs:d._buildFormInputs(c),operations:{back:new b.ButtonIcon({icon:"fa-caret-left",tooltip:"Return to user preferences",title:"Preferences",onclick:function(){d.remove(),c.onclose()}})},buttons:{savesfilterboxchanges:new b.Button({tooltip:"Save changes",title:"Save changes",cls:"ui-button btn btn-primary",floating:"clear",onclick:function(){d._save()}})}}),this.setElement(this.form.$el)},_buildFormInputs:function(a){var b=[],c={},d={},e={},f=JSON.parse(a.tool_filters),g=JSON.parse(a.label_filters),h=JSON.parse(a.section_filters);if(f.length>0||h.length>0||g.length>0){if(f.length>0){c={name:"Edit ToolBox filters :: Tools",type:"section",label:"",inputs:[],expanded:!0};for(var i=0;i<f.length;i++){var j=f[i],k=j.short_desc+" "+j.desc;c.inputs.push({name:"t_"+j.filterpath,type:"boolean",label:j.filterpath,help:k,value:j.checked})}b.push(c)}if(h.length>0){d={name:"Edit ToolBox filters :: Sections",type:"section",label:"Edit ToolBox filters :: Sections",inputs:[],expanded:!0};for(var i=0;i<h.length;i++){var j=h[i],k=j.short_desc+" "+j.desc;d.inputs.push({name:"s_"+j.filterpath,type:"boolean",label:j.filterpath,help:k,value:j.checked})}b.push(d)}if(g.length>0){e={name:"Edit ToolBox filters :: Labels",type:"section",label:"Edit ToolBox filters :: Labels",inputs:[],expanded:!0};for(var i=0;i<g.length;i++){var j=g[i],k=j.short_desc+" "+j.desc;e.inputs.push({name:"l_"+j.filterpath,type:"boolean",label:j.filterpath,help:k,value:j.checked})}b.push(e)}}return b},_save:function(){var a=Galaxy.root+"api/user_preferences/change_toolbox_filters",b={},c=this;b={edit_toolbox_filter:!0,checked_filters:JSON.stringify(c.form.data.create())},$.getJSON(a,b,function(a){c.form.message.update({message:a.message,status:"error"===a.status?"danger":"success"})})}})});
//# sourceMappingURL=../../../maps/mvc/user/change-toolbox-filter.js.map