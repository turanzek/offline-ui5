/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"int/offlinelist/OfflineList/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"int/offlinelist/OfflineList/test/integration/pages/Worklist",
	"int/offlinelist/OfflineList/test/integration/pages/Object",
	"int/offlinelist/OfflineList/test/integration/pages/NotFound",
	"int/offlinelist/OfflineList/test/integration/pages/Browser",
	"int/offlinelist/OfflineList/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "int.offlinelist.OfflineList.view."
	});

	sap.ui.require([
		"int/offlinelist/OfflineList/test/integration/WorklistJourney",
		"int/offlinelist/OfflineList/test/integration/ObjectJourney",
		"int/offlinelist/OfflineList/test/integration/NavigationJourney",
		"int/offlinelist/OfflineList/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});