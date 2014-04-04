// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 // Called when the user clicks on the browser action.
console.log('mimimi');

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.insertCSS(null, {
    file : "css/custom.css"
  });
  chrome.tabs.executeScript(null, {file:"js/jquery-2.1.0.min.js"});
  chrome.tabs.executeScript(null, {file:"js/bootstrap.min.js"});
  chrome.tabs.executeScript(null, {file:"prueba.js"});

});

