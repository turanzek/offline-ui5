sap.ui.define([
		"int/offlinelist/OfflineList/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("int.offlinelist.OfflineList.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);