'use strict';

angular.module('eklabs.angularStarterPack.forms')
    .directive('myForm',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/forms/directives/my-form/myFormView.html',
            scope : {
                user : '='

            },link : function(scope){

                scope.$watch('user', function(myUser){
                    scope.myUser = myUser;
                });


                scope.validUser = function(user){
                    $log.info('my user is : ',user)
                }


            }
        }
    });