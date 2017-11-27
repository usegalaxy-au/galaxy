define("mvc/history/hdca-li-edit",["exports","mvc/history/hdca-li","mvc/collection/collection-view-edit","ui/fa-icon-button","utils/localization"],function(e,t,i,l,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(t),d=o(i),s=o(l),c=o(n),a=r.default.HDCAListItemView,u=a.extend({_getFoldoutPanelClass:function(){var e=this.model.get("collection_type");switch(e){case"list":return d.default.ListCollectionViewEdit;case"paired":return d.default.PairCollectionViewEdit;case"list:paired":return d.default.ListOfPairsCollectionViewEdit;case"list:list":return d.default.ListOfListsCollectionViewEdit}throw new TypeError("Unknown collection_type: "+e)},_renderPrimaryActions:function(){return this.log(this+"._renderPrimaryActions"),a.prototype._renderPrimaryActions.call(this).concat([this._renderDeleteButton()])},_renderDeleteButton:function(){var e=this,t=this.model.get("deleted");return(0,s.default)({title:t?(0,c.default)("Dataset collection is already deleted"):(0,c.default)("Delete"),classes:"delete-btn",faIcon:"fa-times",disabled:t,onclick:function(){e.$el.find(".icon-btn.delete-btn").trigger("mouseout"),e.model.delete()}})},toString:function(){return"HDCAListItemEdit("+(this.model?""+this.model:"(no model)")+")"}});e.default={HDCAListItemEdit:u}});