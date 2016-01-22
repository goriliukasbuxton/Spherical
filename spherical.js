define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'gis/lib3/latlon-spherical',
    'gis/lib3/dms',
], function (
    declare,
    _WidgetBase,
    LatLon, Dms
) {

    return declare([_WidgetBase], {

        postCreate: function () {
            this.inherited(arguments);
            a = new LatLon(27.165, -80.16);
            console.log(a);
        },

        startup: function () {

        },


    })

});