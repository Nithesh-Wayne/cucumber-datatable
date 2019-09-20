$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:pack1/file2.feature");
formatter.feature({
  "name": "login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "First scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser login",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters username in userid field as \"\u003cuid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters password in pwd field as \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user log outs",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uid",
        "pwd"
      ]
    },
    {
      "cells": [
        "lalitha",
        "password123"
      ]
    },
    {
      "cells": [
        "lalith",
        "lalith5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "First scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser login",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.browser_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username in userid field as \"lalitha\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enters_username_in_userid_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password in pwd field as \"password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enters_password_in_pwd_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user log outs",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_log_outs()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "First scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser login",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.browser_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username in userid field as \"lalith\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enters_username_in_userid_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password in pwd field as \"lalith5\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enters_password_in_pwd_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user log outs",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_log_outs()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"header\"]/div[1]/div/div/div[2]/div/ul/a\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CDC2-D-5K7KXH2\u0027, ip: \u002710.236.69.239\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\A08019~1.05\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:57728}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7340f30a9be22dd5f854e55d5d2f21c1\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"header\"]/div[1]/div/div/div[2]/div/ul/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pack1.StepDef.user_log_outs(StepDef.java:45)\r\n\tat ✽.user log outs(classpath:pack1/file2.feature:8)\r\n",
  "status": "failed"
});
});