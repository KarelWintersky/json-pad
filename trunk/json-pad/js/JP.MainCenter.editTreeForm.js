JP.MainCenter.ediTreeForm = Ext.extend(Ext.Panel, {
    activeTab: 0,
    region: 'center',
    resizeTabs: true,
    layout: 'fit',
    //id: 'JPeditTabs',
    initComponent: function() {
	var me = this;

	this.items = [
	{
	    xtype: 'jp_main_center_ediTreeForm_tabs'
	}
	];

	this.tbar = {
	    items: [{
		iconCls: 'icon_small_save',
		scale: 'small',
		disabled: true,
		tooltip: 'Save data',
		ref: 'save'
	    }]
	};

	JP.MainCenter.ediTreeForm.superclass.initComponent.call(this);

	var tb = me.getTopToolbar()
	tb.save.setHandler(function () {
	    //@note For future ideas..
	    var getActiveTab = this.findByType("jp_main_center_ediTreeForm_tabs")[0].getActiveTab();
	    var activeTabXtype = getActiveTab.getXType();
	    switch (activeTabXtype) {
		case 'jp_main_center_ediTreeForm_tabs_edit':
		    this.findByType("jp_main_center_ediTreeForm_tabs_edit")[0].saveForm( getActiveTab );
		    break;
	    }
	}, me)
    }
});

Ext.reg('jp_main_center_ediTreeForm', JP.MainCenter.ediTreeForm);