﻿(function (window, angular, undefined) {
    'use strict';
    angular.module('monitored_endpoints', []);

    require('./services/services.monitoring');
    require('./monitored_endpoints.controller');
    require('./monitored_endpoints.route.js');
}(window, window.angular));