/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('chcp_updateLoadFailed', this.onUpdateLoadError, false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },


    onUpdateLoadError: function(eventData) {
        var error = eventData.detail.error;
        console.log('error:', error);
        console.log('error code:', error.code);
        console.log('chcp.error.APPLICATION_BUILD_VERSION_TOO_LOW:', chcp.error.APPLICATION_BUILD_VERSION_TOO_LOW);
        
        // 如果主版本更新要做的事情
        if (error && error.code == chcp.error.APPLICATION_BUILD_VERSION_TOO_LOW) {
            var dialogMessage = '有新的版本，請下載更新';

            chcp.requestApplicationUpdate(dialogMessage, this.userWentToStoreCallback, this.userWentToStoreCallback);

        }
    },

    userWentToStoreCallback: function() {
        // user went to the store from the dialog
        console.log('點擊了連到App Store');
    },

    userDeclinedRedirectCallback: function() {
        // User didn't want to leave the app.
        // Maybe he will update later.
        console.log('點擊了稍後更新');
    }
};

app.initialize();