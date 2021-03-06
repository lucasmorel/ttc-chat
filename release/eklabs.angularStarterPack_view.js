angular.module('eklabs.angularStarterPack').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('eklabs.angularStarterPack/modules/forms/directives/my-form/myFormView.html',
    "<form name=\"myForm\" ng-submit=\"actions.onValid(myUser)\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div layout=\"column\" >\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>FirstName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.firstname\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>LastName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.lastname\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <md-button type=\"submit\">\r" +
    "\n" +
    "        <md-icon md-svg-src=\"material-design:done\"></md-icon>\r" +
    "\n" +
    "        Valider\r" +
    "\n" +
    "    </md-button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/json-editor/directives/editor/view.html',
    "<form id        =   \"myJsonEditor\"\r" +
    "\n" +
    "      name      =   \"myForm\"\r" +
    "\n" +
    "      novalidate\r" +
    "\n" +
    "      layout    =   \"column\"\r" +
    "\n" +
    "      ng-submit =   \"myForm.$valid && !editorError && !eerror.length && actions.valid(currentJson)\"\r" +
    "\n" +
    "      ng-style  =   \"{'min-height' : currentHeight, 'max-height' : currentHeight}\"\r" +
    "\n" +
    "      style=\"overflow-y: hidden;overflow-x: hidden\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- FORM CONTENT -->\r" +
    "\n" +
    "    <div flex\r" +
    "\n" +
    "         layout     =   \"column\"\r" +
    "\n" +
    "         style      =   \"overflow-y:auto;overflow-x: hidden;\"\r" +
    "\n" +
    "         ng-style   =   \"{'min-height' : maxHeightContainer , 'max-height' : maxHeightContainer}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div layout=\"column\" flex ng-if=\"aceAvailable\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <h2 class=\"title\">Editeur JSON </h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div ui-ace=\"aceOption\" ng-model=\"aceModel\" style=\"width: 100%\" ng-style = \"{'max-height' : aceMaxHeight }\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- BOUTON ACTIONS -->\r" +
    "\n" +
    "    <div layout=\"row\" layout-align=\"start center\" class=\"shadow_up\" >\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div ng-if=\"errors.length || editorError\" layout=\"row\" class=\"warn-font\" style=\"font-size: 0.9em\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <md-icon md-svg-src=\"material-design:error_outline\" class=\"ic_16px warn-font\"></md-icon>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span ng-if=\"errors.length\" ng-repeat=\"error in errors\">{{error}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span ng-if=\"editorError\" style=\"margin-left: 10px;\">{{editorError}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div flex></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <md-button type=\"submit\" aria-label=\"test\" ng-disabled=\"editorError || errors.length\">\r" +
    "\n" +
    "            <md-icon md-svg-src=\"material-design:done\"></md-icon>\r" +
    "\n" +
    "            <span style=\"font-weight:200\">Valider</span>\r" +
    "\n" +
    "        </md-button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/tchat/directives/my-tchat/myTchatView.html',
    "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" integrity=\"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7\" crossorigin=\"anonymous\">\r" +
    "\n" +
    "<link rel=\"stylesheet\" href=\"http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css\">\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .popup-box {\r" +
    "\n" +
    "        bottom: 0;\r" +
    "\n" +
    "        display: none;\r" +
    "\n" +
    "        height: 415px;\r" +
    "\n" +
    "        position: fixed;\r" +
    "\n" +
    "        right: 70px;\r" +
    "\n" +
    "        width: 300px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .popup-box-on {\r" +
    "\n" +
    "        display: block !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .popup-messages-footer {\r" +
    "\n" +
    "        background: #fcfcfc none repeat scroll 0 0;\r" +
    "\n" +
    "        bottom: 0;\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        padding: 2px 5px 5px 6px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .popup-box2 {\r" +
    "\n" +
    "        height: 50px;\r" +
    "\n" +
    "        margin-bottom: 0.5em;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<form name=\"myTchat\" ng-submit=\"actions.onValid(myUrlSocket)\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div layout=\"column\">\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>Saisir l'url de votre API</label>\r" +
    "\n" +
    "            <input name=\"urlSocket\" ng-model=\"myUrlSocket.url\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "        <md-button id=\"validate\" type=\"submit\">\r" +
    "\n" +
    "            <md-icon md-svg-src=\"material-design:done\"></md-icon>\r" +
    "\n" +
    "            Valider\r" +
    "\n" +
    "        </md-button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"popup-box chat-popup\" id=\"qnimate\"  style=\"background: white;\">\r" +
    "\n" +
    "        <!-- header à laisser afficher -->\r" +
    "\n" +
    "        <div class=\"popup-head\" id=\"removeClass\">\r" +
    "\n" +
    "            <md-toolbar md-scroll-shrink>\r" +
    "\n" +
    "                <div class=\"md-toolbar-tools\">Fenêtre de discussion</div>\r" +
    "\n" +
    "            </md-toolbar>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "            <div class=\"popup-messages\" >\r" +
    "\n" +
    "                <div class=\"direct-chat-messages\" >\r" +
    "\n" +
    "                    <md-content style=\"background: white;\">\r" +
    "\n" +
    "                    <section>\r" +
    "\n" +
    "                        <!--<md-subheader class=\"md-primary\">Unread Messages</md-subheader> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-list layout-padding >\r" +
    "\n" +
    "                            <md-list-item class=\"md-3-line\" style=\"background: white;\" ng-repeat=\"message in messages\">\r" +
    "\n" +
    "                                <img ng-src=\"{{message.face}}\" class=\"md-avatar\" alt=\"{{message.who}}\">\r" +
    "\n" +
    "                                <div class=\"md-list-item-text\">\r" +
    "\n" +
    "                                    <h3>{{message.what}}</h3>\r" +
    "\n" +
    "                                    <h4>{{message.who}}</h4>\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        {{message.notes}}\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-list-item>\r" +
    "\n" +
    "                        </md-list>\r" +
    "\n" +
    "                    </section>\r" +
    "\n" +
    "                    </md-content>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <md-content class=\"popup-messages-footer\">\r" +
    "\n" +
    "                <md-content>\r" +
    "\n" +
    "                    <form name=\"messageForm\">\r" +
    "\n" +
    "                        <md-input-container class=\"md-block\" flex=\"250\" style=\"float:left;\">\r" +
    "\n" +
    "                            <input id=\"status_message\" placeholder=\"Entrez votre message\" name=\"message\">\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "                            <md-button style=\"float:right;\" type=\"submit\" class=\"md-fab\" aria-label=\"Comment\" >\r" +
    "\n" +
    "                             <md-icon md-svg-src=\"material-design:comment\"></md-icon>\r" +
    "\n" +
    "                            </md-button>\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                </md-content>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"popup-box2 popup-box popup-box-on\" id=\"qnimate2\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"popup-head\" id=\"addClass\">\r" +
    "\n" +
    "            <md-toolbar md-scroll-shrink>\r" +
    "\n" +
    "                <div class=\"md-toolbar-tools\">Fenêtre de discussion</div>\r" +
    "\n" +
    "            </md-toolbar>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js\"></script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Angular Material Library -->\r" +
    "\n" +
    "    <script src=\"http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js\"></script>\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"panel panel-primary\">\r" +
    "\n" +
    "                    <div class=\"panel-heading\">\r" +
    "\n" +
    "                        <span class=\"glyphicon glyphicon-comment\"></span> Chat\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel-body\" style=\"\">\r" +
    "\n" +
    "                        <ul class=\"chat\" id=\"messages\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel-footer\">\r" +
    "\n" +
    "                        <div class=\"input-group\">\r" +
    "\n" +
    "                            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Tapez votre mot doux ici...\" />\r" +
    "\n" +
    "                  <span class=\"input-group-btn\" id=\"msg-input\">\r" +
    "\n" +
    "                      <md-button class=\"btn btn-sm\" id=\"btn-chat\">\r" +
    "\n" +
    "                          Envoyer votre mot doux</md-button>\r" +
    "\n" +
    "                  </span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script src=\"https://cdn.socket.io/socket.io-1.2.0.js\"></script>\r" +
    "\n" +
    "    <script src=\"http://code.jquery.com/jquery-1.11.1.js\"></script>\r" +
    "\n" +
    "    <script>\r" +
    "\n" +
    "        $(document).ready(function(){\r" +
    "\n" +
    "\r" +
    "\n" +
    "            var arr = document.location.search.replace(\"?\",\"\").split(\"&\");\r" +
    "\n" +
    "            var param = arr[0].replace(\"token=\",\"\");\r" +
    "\n" +
    "            var user = arr[1].replace(\"user=\",\"\");\r" +
    "\n" +
    "\r" +
    "\n" +
    "            $.ajax({\r" +
    "\n" +
    "                method: \"GET\",\r" +
    "\n" +
    "                url: \"http://localhost:9000/msg/\" + param\r" +
    "\n" +
    "            })\r" +
    "\n" +
    "                    .done(function( res ) {\r" +
    "\n" +
    "                        for (var i = 0; i < res.length; i++) {\r" +
    "\n" +
    "                            displayMsg(res[i].txt, res[i].personneid);\r" +
    "\n" +
    "                        }\r" +
    "\n" +
    "                    });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            var socket = io();\r" +
    "\n" +
    "\r" +
    "\n" +
    "            socket.emit('create', param);\r" +
    "\n" +
    "\r" +
    "\n" +
    "            $('#btn-chat').click(function(){\r" +
    "\n" +
    "                var json = {\r" +
    "\n" +
    "                    room: param,\r" +
    "\n" +
    "                    val : $('#btn-input').val(),\r" +
    "\n" +
    "                    user : user\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "\r" +
    "\n" +
    "                socket.emit('chat message',json);\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                $('#btn-input').val('');\r" +
    "\n" +
    "                return false;\r" +
    "\n" +
    "            });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            socket.on('chat message', function(msg){\r" +
    "\n" +
    "\r" +
    "\n" +
    "                displayMsg(msg.val, msg.user);\r" +
    "\n" +
    "            });\r" +
    "\n" +
    "\r" +
    "\n" +
    "            function displayMsg(msg, userid) {\r" +
    "\n" +
    "                var cls = user != userid ? \"me\" : \"you\";\r" +
    "\n" +
    "                $('#messages').append($('<li class=\"'+cls+'\">').text(msg));\r" +
    "\n" +
    "                $(\"#messages\").animate({ scrollTop: $('#messages').prop(\"scrollHeight\")}, 1000);\r" +
    "\n" +
    "        };\r" +
    "\n" +
    "        });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "</form>\r" +
    "\n" +
    "<script>\r" +
    "\n" +
    "    $(function(){\r" +
    "\n" +
    "        $(\"#addClass\").click(function () {\r" +
    "\n" +
    "            $('#qnimate').addClass('popup-box-on');\r" +
    "\n" +
    "            $('#qnimate2').removeClass('popup-box-on');\r" +
    "\n" +
    "        });\r" +
    "\n" +
    "\r" +
    "\n" +
    "        $(\"#removeClass\").click(function () {\r" +
    "\n" +
    "            $('#qnimate').removeClass('popup-box-on');\r" +
    "\n" +
    "            $('#qnimate2').addClass('popup-box-on');\r" +
    "\n" +
    "        });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    })\r" +
    "\n" +
    "</script>\r" +
    "\n"
  );

}]);
