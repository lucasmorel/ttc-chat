'use strict';

angular.module('eklabs.angularStarterPack.forms')
    .directive('myUser',function(){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/forms/directives/my-user/myUser.html',
            scope : {
                user : "="
            },link : function(scope){

            }
        }
    });