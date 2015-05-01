;(function(){
    'use strict';
    var paths = {
        "loli" : "/public/js/root/loli",
        "avalon" : "/public/js/avalon/avalon.mobile.shim",
        "av" : "/public/js/root/loli.avalon",
        "require.custom" : "/public/js/require/require.custom",
        "ratchet" : "/public/js/ratchet",
        "common" :　"/public/js/common"
    };
    window.require = {
        paths:paths,
        deps : [
            "/public/js/require/require.config.js?v="+new Date().valueOf(),
            "require.custom",
            "ratchet",
            "common"

        ]
    };
})();