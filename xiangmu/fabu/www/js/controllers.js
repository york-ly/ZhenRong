var x = angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope,$http,$ionicSlideBoxDelegate,$ionicPopup) {



  $scope.myPopup = {
    'isPopup':false
  };

  //点击分享按钮，弹出弹框，显示列表，
  $scope.showShare = function() {

    $scope.optionsPopup = $ionicPopup.show({
      title: '欢迎投资', // String. 弹窗的标题。
      subTitle: '', // String (可选)。弹窗的子标题。
      template: "<img src='img/02.jpg' alt='' style='width: 100%;height:25em;'>", // String (可选)。放在弹窗body内的html模板。
      templateUrl: '', // String (可选)。在弹窗body内的html模板的URL。
      scope: null, // Scope (可选)。一个链接到弹窗内容的scope（作用域）。
      buttons: [/*{ //Array[Object] (可选)。放在弹窗footer内的按钮。
       text: 'Cancel',
       type: 'button-default',
       onTap: function(e) {
       // 当点击时，e.preventDefault() 会阻止弹窗关闭。
       e.preventDefault();
       }
       },*/ {
       text: '关闭',
       type: 'button-positive',
      /* onTap: function(e) {
       // 返回的值会导致处理给定的值。
       return scope.data.response;
       }*/
       }]
    });

    //弹出框弹出后，isPopup标志为true状态。
    $scope.myPopup = {
      'isPopup': true
    };

  }


  $http({
    url: "/Handler/OfflineCourseHandler.ashx?action=indexshow",
    method: "post",
    params: ""
  }).success(function (result) {
       $scope.data = result.data.bannerList;
      //实时更新轮播图
      //$ionicSlideBoxDelegate     配合页面当中手势滑动事件去使用
      $ionicSlideBoxDelegate.$getByHandle("slide").update();
      //无缝轮播
      $ionicSlideBoxDelegate.$getByHandle("slide").loop(true);

    $scope.shopList=result.data.chooseList.slice(0,5);
  })



})


//收益主页面

  .controller('ChatsCtrl', function($scope,$http,$timeout,$rootScope) {

    $scope.a=function(){       //显示用户信息隐私
      window.location="#/tab/login"
    }
    $scope.b=function(){
      window.location="#/tab/sign"
    }

   /* $scope.$on("$ionicView.beforeEnter",function(){//每次进入页面前判断是否登录
      //判断登录代码
      if($rootScope.is==true){
        window.location="#/tab/chats"
      }
    });*/

    //设置图片的高度，使它自适应屏幕高度

    $scope.height=document.documentElement.clientHeight;


    //选项卡切换功能
    $scope.showtext=true;
    $scope.showeye=true;
    $scope.text=function(){
      $scope.showtext=!$scope.showtext;
      $scope.showeye=!$scope.showeye;
      $scope.showpic=true;
      $scope.showclose=true;
      console.log($scope.height);
    }


    $scope.pic=function(){
      $scope.showpic=!$scope.pic;
      $scope.showclose=!$scope.showclose;
      $scope.showtext=true;
      $scope.showeye=true;
    }


    //点击换一换
    $scope.index=1;
    $scope.change=function(){
        $scope.x = parseInt(Math.random()*2)+1;
      if($scope.index==$scope.x){
        if($scope.x==1){
          $scope.index=2
        }
        if($scope.x==2){
          $scope.index=3
        }
        if($scope.x==3){
          $scope.index=1
        }
      }else{
        $scope.index=$scope.x;
      }
    }


    //到达收益成绩的跳转

    $scope.goRec=function(){
      window.location="#/tab/result"
    }
})





//左右侧滑栏的控制器
.controller('ResultCtrl',function($scope,$http,$ionicNavBarDelegate){
  $scope.goBack=function(){
    $ionicNavBarDelegate.back();
  }
})


  //平台动态控制器

  .controller('PlateCtrl',function($scope){

    $scope.nowPage=0;
    $scope.moreDate=true;
    $scope.newlist = [];
    $scope.id="";


    $scope.goPage=function(page){

        ajax("get", "getText.php", "page=" + page+"&id="+$scope.id, function (str) { //向php请求多个data数据的写法
          $scope.json = JSON.parse(str);
          $scope.size = Math.ceil($scope.json.count / $scope.json.num);
          $scope.nowPage = page;
          if(page<=$scope.size) {
            $scope.newlist = $scope.newlist.concat($scope.json.list);
          }

          if ($scope.nowPage >=6) {
            $scope.moreDate = false;
          }

          console.log($scope.nowPage);
        })

    }


    $scope.loadMore=function(){
      if($scope.moreDate){
        $scope.goPage($scope.nowPage+1);
        $scope.$broadcast("scroll.infiniteScrollComplete");
      }
    }

    $scope.goPage(1)
    $scope.goPage(2)




    $scope.dosearch=function(id){
      $scope.id=id;
      $scope.moreDate=true; //防止拉到底部变为false，导致再刷新不出来，不影响其他
      $scope.$broadcast("scroll.infiniteScrollComplete");
      $scope.newlist=[];  //每次刷新重新定义容器
      $scope.nowPage=0;  //防止下拉nowPage值变化，导致刷新时变空
      $scope.loadMore();
    }

    $scope.dorefresh=function(){
      $scope.dosearch("");
      $scope.$broadcast("scroll.refreshComplete")
    }



  })


  //我的课程页面控制器

  .controller('ChatDetailCtrl', function($scope,$http,$rootScope) {

  })


  //我的页面控制器

.controller('AccountCtrl', function($scope,$rootScope) {



})


    //登录页面


  .controller('LoginCtrl', function($scope,$http,$ionicPopup,$ionicNavBarDelegate,$rootScope,$state) {

    //自定义后退的函数，将原来的后退按钮隐藏  替换为自己的按钮 并添加这个事件

    $scope.goBack = function() {
      $ionicNavBarDelegate.back();
    }

    //点击关闭眼睛显示密码   点击眼睛变成密文

    $scope.showeye1=true;
    $scope.type="password";

    $scope.show=function(){
        $scope.showeye1=!$scope.showeye1;
       if(!$scope.showeye1){
         $scope.showeye2=true;
        $scope.type="text";
       }else{
         $scope.showeye2=false;
         $scope.type="password";
       }
    }



    //登录验证

    $scope.LoginData={
      phone:"",
      pass:""
    }

    $scope.isLogin=function(){

      if($rootScope.SignArr.length>0){
      for(var i=0;i<$rootScope.SignArr.length;i++){
      if($rootScope.SignArr[i].phonenum==$scope.LoginData.phone&&$rootScope.SignArr[i].pass== $scope.LoginData.pass){
        alert("登录成功");
        window.location="#/tab/account";
        $rootScope.T=false;
        $rootScope.F=true;
        $rootScope.is=true;
        $rootScope.PHONE=$rootScope.SignArr[i].phonenum;
        $rootScope.before=$rootScope.PHONE.substr(0,3);
        $rootScope.after=$rootScope.PHONE.substr(7);
        break;
      }else if($rootScope.SignArr[i].phonenum!=$scope.LoginData.phone||$rootScope.SignArr[i].pass!= $scope.LoginData.pass){
        $ionicPopup.alert({
          title:"账号密码错误"
        })
      }
      }
      }else{
        $ionicPopup.alert({
          title:"账号不存在，请注册账号"
        })
      }
    }




  })

/*  x.directive('closePopupBackDrop', function($ionicGesture) {
    return {
      scope: false,//共享父scope
      restrict: 'A',
      replace: false,
      link: function(scope, element, attrs, controller) {

        var  $htmlEl= angular.element(document.querySelector('html'));
        $ionicGesture.on("touch", function(event) {
          if ( scope.myPopup.isPopup) {
            scope.optionsPopup.close();
            scope.myPopup.isPopup = false;
          }
        },$htmlEl);
      }
    };
  })*/



  //注册页面1
  .controller('SignCtrl', function($scope,$ionicPopup,$ionicNavBarDelegate,$rootScope) {   /*注册页面控制器*/

    $scope.goBack = function() {
      $ionicNavBarDelegate.back();
    };

    $scope.PhoneNum={
      "phone":""
    };

    var regphone = /^1(5|7|3|8)\d{9}$/;

    $scope.goTo=function(){

      if(regphone.test($scope.PhoneNum.phone)){

        $rootScope.SignData.phonenum=$scope.PhoneNum.phone;   //为全局json添加电话号码值
        console.log($rootScope.SignData)
        window.location="#/tab/sign1";
      }else{
        $ionicPopup.show({
          'title':"手机号格式不正确",
          buttons:[
            {
              text:"关闭"
            }
          ]
        }
        )
      }
    }

  })

  //注册页面2

  .controller('SignCtrl1', function($scope,$http,$ionicPopup,$ionicNavBarDelegate,$rootScope) {   /*注册页面控制器*/

    $scope.goBack = function () {
      $ionicNavBarDelegate.back();
    };


    $scope.Pass={
      "pass":""
    };
    var regpass= /^[a-z]{1,6}\d{5,8}$/;


    $scope.Finish=function(){

      if(regpass.test($scope.Pass.pass)){

        $rootScope.SignData.pass=$scope.Pass.pass;  //为全局json添加password值


        $scope.a={};        //动态创建json地址，一定要在函数内每次执行函数创建地址，在外边的话会被覆盖

        for(x in $rootScope.SignData){         //循环json

          $scope.a[x]=$rootScope.SignData[x];     //赋值给空数组

        }

        $rootScope.SignArr.push($scope.a);       //添加到全局数组中


        console.log($rootScope.SignArr);

        window.location="#/tab/login";
      }else{
        $ionicPopup.show({
            'title':"长度至少6位,开头字母",
            buttons:[
              {
                text:"关闭"
              }
            ]
          }
        )
      }
    }


  } )


  //全局变量，存取json和数组

  .run(function($rootScope){
     $rootScope.PHONE="";
     $rootScope.SignData={};
     $rootScope.SignArr=[];
     $rootScope.is=false;
    $rootScope.T=true;
    $rootScope.F=false;
    $rootScope.before="";
    $rootScope.after="";

  })

/*隐藏tab*/
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          scope.$watch(attributes.hideTabs, function(value){
            $rootScope.hideTabs = value;
          });
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  });



