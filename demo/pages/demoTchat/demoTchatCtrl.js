  

'use strict';

angular.module('demoApp')
    .controller('demoTchatCtrl', function($scope,$mdDialog){


        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default
             */
            case        : 'Default Case',
            urlSocket        : undefined,
            callback    : undefined
        },{
            /**
             * Case urlSocket
             */
            case       : 'Case urlSocket',
            urlSocket    : {
                url : 'TEST'
            },
            callback : {
                onValid : function(urlSocket){
                    displayCode('onValid', urlSocket)
                }
            }
        }];

        $scope.chooseParams = function(index){
            // --- Define current status
            $scope.myUrlSocket    = $scope.params[index].urlSocket;
            $scope.myCallback = $scope.params[index].callback;

            $scope.index          = index;
            $scope.refresh        = moment().valueOf();
            $scope.haveResult     = false;
        };

        // --- Init
        $scope.chooseParams(0);

        // --- Update result viewer
        var displayCode = function(from,code,isError){

            $scope.haveResult   = true;

            $scope.result       = {
                code : code,
                isError : isError,
                title : from
            };
        };
        // ----------------------------------------------------------------------------------------------------
        // ---- DISPLAY CODE MODE
        // ----------------------------------------------------------------------------------------------------
        $scope.displayCode  = false;
        $scope.maxHeight    = $(window).height() - 250;

        $scope.showCode = function(){
            $scope.displayCode = !$scope.displayCode;
        };

        /**
         * Page description
         * @type {{title: string, icon: string, haveCodeSource: boolean}}
         */
        $scope.page         = {
            title : 'directive my tchat',
            haveCodeSource : true,
            code : [{
                link : 'pages/demoTchat/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive demo-tchat'
            },{
                link : 'pages/demoTchat/code/contract.json',
                language : 'json',
                title : 'Params available for the directive demo-tchat'
            }]
        };

        /**
         * MODE Fullscreen
         */
        $scope.fullScreenMode = true;
        $scope.hideParams     = false;
        $scope.fullScreen = function(){
            $scope.hideParams = !$scope.hideParams;
        };

    });