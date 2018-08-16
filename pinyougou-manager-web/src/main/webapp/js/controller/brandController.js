// var app=angular.module('pinyougou', []);//定义模块
// var app=angular.module('pinyougou',['pagination']);//定义品优购模块
/*app.controller('brandController' ,function($scope,$http){
    //读取列表数据绑定到表单中
    $scope.findAll=function(){
        $http.get('../brand/findAll.do').success(
            function(response){
                $scope.list=response;
            }
        );
    }
});*/
app.controller('brandController' ,function($scope,$controller,brandService) {
    $controller('baseController',{$scope:$scope});
//重新加载列表 数据

//分页
    $scope.findPage = function (page, rows) {
       brandService.findPage(page,rows).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    };

    //保存
    $scope.save=function(){
        brandService.save($scope.entity.id,$scope.entity).success(
            function(response){
                if(response.success){
                    //重新查询
                    $scope.reloadList();//重新加载
                }else{
                    alert(response.message);
                }
            }
        );
    };

    $scope.findOne = function(id){
       brandService.findOne(id).success(
            function (response) {
                $scope.entity = response;
            }
        )
    };
/*
    $scope.update = function () {
        $http.post('../brand/update.do',$scope.entity).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                }else{
                    alert(response.message);
                }
            }
        )
    }*/
    // $scope.selectIds=[];//选中的ID集合
//更新复选
  /*  $scope.updateSelection = function($event, id) {
        if($event.target.checked){//如果是被选中,则增加到数组
            $scope.selectIds.push( id);
        }else{
            var idx = $scope.selectIds.indexOf(id);
            $scope.selectIds.splice(idx, 1);//删除
        }
    };*/



    $scope.dele= function(){
       brandService.dele($scope.selectIds).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                    $scope.selectIds=[];
                }else{
                    alert(response.message);
                }
            }
        )
    };
    $scope.searchEntity={};//定义搜索对象为空对象防止传递给null的情况。
//条件查询
    $scope.search=function(page,rows){
       brandService.search(page,rows,$scope.searchEntity).success(
            function(response){
                $scope.paginationConf.totalItems=response.total;//总记录数
                $scope.list=response.rows;//给列表变量赋值
            }
        );
    };


});
