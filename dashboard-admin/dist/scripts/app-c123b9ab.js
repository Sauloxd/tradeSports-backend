"use strict";angular.module("inspinia",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(a,i){a.state("index",{"abstract":!0,url:"/index",templateUrl:"components/common/content.html"}).state("index.main",{url:"/main",templateUrl:"app/main/main.html",data:{pageTitle:"Example view"}}).state("index.minor",{url:"/minor",templateUrl:"app/minor/minor.html",data:{pageTitle:"Example view"}}),i.otherwise("/index/main")}]),angular.module("inspinia").controller("MainCtrl",["$scope",function(){this.userName="Example user",this.helloText="Welcome in INSPINIA Gulp SeedProject",this.descriptionText="It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects."}]),$(document).ready(function(){function a(){var a=$("body > #wrapper").height()-61;$(".sidebard-panel").css("min-height",a+"px");var i=$("nav.navbar-default").height(),e=$("#page-wrapper").height();i>e&&$("#page-wrapper").css("min-height",i+"px"),e>i&&$("#page-wrapper").css("min-height",$(window).height()+"px"),$("body").hasClass("fixed-nav")&&$("#page-wrapper").css("min-height",$(window).height()-60+"px")}$(window).bind("load resize scroll",function(){$("body").hasClass("body-small")||a()}),setTimeout(function(){a()})}),$(function(){$(window).bind("load resize",function(){$(this).width()<769?$("body").addClass("body-small"):$("body").removeClass("body-small")})}),angular.module("inspinia").directive("sideNavigation",["$timeout",function(a){return{restrict:"A",link:function(i,e){i.$watch("authentication.user",function(){a(function(){e.metisMenu()})})}}}]).directive("minimalizaSidebar",["$timeout",function(a){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:["$scope","$element",function(i){i.minimalize=function(){angular.element("body").toggleClass("mini-navbar"),!angular.element("body").hasClass("mini-navbar")||angular.element("body").hasClass("body-small")?(angular.element("#side-menu").hide(),a(function(){angular.element("#side-menu").fadeIn(500)},100)):angular.element("#side-menu").removeAttr("style")}}]}}]),angular.module("inspinia").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>{{main.helloText}}</h1><small>{{main.descriptionText}} <i class="glyphicon glyphicon-pencil"></i></small></div></div></div></div>'),a.put("app/minor/minor.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>'),a.put("components/common/content.html",'<div id="wrapper"><div ng-include="\'components/common/navigation.html\'"></div><div id="page-wrapper" class="gray-bg {{$state.current.name}}"><div ng-include="\'components/common/topnavbar.html\'"></div><div ui-view=""></div><div ng-include="\'components/common/footer.html\'"></div></div></div>'),a.put("components/common/footer.html",'<div class="footer"><div class="pull-right">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2014-2015</div></div>'),a.put("components/common/ibox_tools.html",'<div class="ibox-tools dropdown" dropdown=""><a ng-click="showhide()"><i class="fa fa-chevron-up"></i></a> <a class="dropdown-toggle" href="" dropdown-toggle=""><i class="fa fa-wrench"></i></a><ul class="dropdown-menu dropdown-user"><li><a href="">Config option 1</a></li><li><a href="">Config option 2</a></li></ul><a ng-click="closebox()"><i class="fa fa-times"></i></a></div>'),a.put("components/common/navigation.html",'<nav class="navbar-default navbar-static-side" role="navigation"><div class="sidebar-collapse"><ul side-navigation="" class="nav metismenu" id="side-menu"><li class="nav-header"><div class="dropdown profile-element" dropdown=""><a class="dropdown-toggle" dropdown-toggle="" href=""><span class="clear"><span class="block m-t-xs"><strong class="font-bold">{{main.userName}}</strong></span> <span class="text-muted text-xs block">Example menu<b class="caret"></b></span></span></a><ul class="dropdown-menu animated fadeInRight m-t-xs"><li><a href="">Logout</a></li></ul></div><div class="logo-element">IN+</div></li><li ui-sref-active="active"><a ui-sref="index.main"><i class="fa fa-laptop"></i> <span class="nav-label">Main page</span></a></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-desktop"></i> <span class="nav-label">Code Mirror</span></a></li></ul></div></nav>'),a.put("components/common/topnavbar.html",'<div class="row border-bottom"><nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0"><div class="navbar-header"><span minimaliza-sidebar=""></span><form role="search" class="navbar-form-custom" method="post" action=""><div class="form-group"><input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search"></div></form></div><ul class="nav navbar-top-links navbar-right"><li><a href=""><i class="fa fa-sign-out"></i> Log out</a></li></ul></nav></div>')}]);