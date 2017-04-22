// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {       /* 父级页面路径*/
        url: '/tab',          /*当前页面路径*/
        abstract: true,      /*是否是一级页面*/
        templateUrl: 'templates/tabs.html'
      })


       //真融宝首页路由

      .state('tab.dash', {
        url: '/dash',
        cache:false,//是否清楚缓存
        views: {       //视图
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',   //模版路径
            controller: 'DashCtrl'
          }
        }
      })

      //真融宝收益路由

      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })





        //真融宝收益成绩路由

      .state("tab.result",{
        url:"/result",
        views:{
          'tab-chats':{
            templateUrl:'templates/tab-result.html',
            controller:"ResultCtrl"
          }
        }
      }
      )

      //真融宝服务中心路由

      .state('tab.detail', {
        url: '/detail',
        views: {
          'tab-detail': {
            templateUrl: 'templates/tab-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      //真融宝平台动态路由

      .state('tab.plateform',{
        url:"/plateform",
        views:{
          "tab-detail":{
            templateUrl:"templates/tab-plateform.html",
            controller:"PlateCtrl"
          }
        }
      }

      )

      //真融宝我的 路由

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })


      //真融宝 登录 路由  在我的页面打开

      .state('tab.login', {
        url: '/login',
        cache:false,
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-login.html',
            controller: 'LoginCtrl'
          }
        }
      })

      //真融宝 注册手机号 路由 在我的 页面打开

      .state('tab.sign', {
        url: '/sign',
        cache:false,
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-sign.html',
            controller: 'SignCtrl'
          }
        }
      })

      //真融宝 注册密码 路由 在我的 页面打开

      .state("tab.sign1",{
        url:"/sign1",
        views:{
          'tab-account':{
            templateUrl:"templates/tab-sign1.html",
            controller:"SignCtrl1"
          }
        }
      }
      )


/*.state('isLogin',{
  url:"account2",
  cache:false,
  templateUrl:"templates/tab-account2.html"
})*/




      .state('tab.study', {
        url: '/study/:id',
        cache:false,
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-study.html',
            controller: 'DashCtrl'
          }
        }
      })



      .state("tab.lessonStudy",{
        url:"/lessonStudy/:id",
        cache:false,
        views:{
          "tab-chats":{
            templateUrl:'templates/tab-lessonStudy.html',
            controller:'ChatDetailCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');/*默认加载页面*/

  });
