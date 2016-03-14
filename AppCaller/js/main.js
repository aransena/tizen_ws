/*
 * Copyright (c) 2015 Samsung Electronics Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var init = null;

function changeImg(imgPath) {
    document.getElementById("calleeSaidDiv").style.visibility = 'visible';
    document.getElementById("calleeEmoticon").setAttribute("src", imgPath);
}

function launchApp() {
	alert('Hello');
    var appControl = null,
        appControlReplyCallback = null;

    appControl = new tizen.ApplicationControl(
        'http://tizen.org/appcontrol/operation/appcall',
        null,
        null,
        null);

    appControlReplyCallback = {
        // callee sent a reply
        onsuccess: function(data) {
            var i = 0;

            for (i = 0; i < data.length; i++) {
                changeImg(data[i].value[0]);
            }
        },
        // callee returned failure
        onfailure: function() {
            alert('The launch application control failed');
            console.error('The launch application control failed');
        }
    };

    try {
        tizen.application.launchAppControl(
            appControl,
            null,
            function() {
                console.log("launch application control succeed");
            },
            function(e) {
                alert("launch application control failed. reason: " + e.message);
                console.error("launch application control failed. reason: " + e.message);
            },
            appControlReplyCallback
        );
    } catch (error) {
        console.error("launchAppControl(): " + error.message);
    }
}

//Initialize function
init = function() {
    document.getElementById('btnCall').addEventListener('click', launchApp);

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (error) {
                console.error("getCurrentApplication(): " + error.message);
            }
        }
    });
};

window.onload = init;