/**
 * Created by Wang on 03/11/2016.
 */

'use strict';

angular.module('eklabs.angularStarterPack.tchat')
    .directive('myTchat',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/tchat/directives/my-tchat/myTchatView.html',
            scope : {
                urlSocket        : '=',
                callback    : '=?'
            },link : function(scope){

                /**
                 *
                 */
                scope.$watch('urlSocket', function(myUrlSocket){
                    scope.myUrlSocket = myUrlSocket;
                });


                /**
                 * Default Actions
                 * @type {{onValid: default_actions.onValid}}
                 */
                var default_actions = {
                    onValid : function(urlSocket){
                        $log.info('my socketApi is : ',urlSocket)
                    }
                };

                /**
                 * Catch Callback
                 */
                scope.$watch('callback', function(callback){
                    if(callback instanceof Object){
                        scope.actions = angular.extend({},default_actions,callback);
                    }else{
                        scope.actions = default_actions;
                    }
                });

            }
        }
    });