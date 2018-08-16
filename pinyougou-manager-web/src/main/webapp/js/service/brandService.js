//品牌服务层

app.service('brandService',function ($http) {
    this.findAll=function(){
        return  $http.get('../brand/findAll.do');
    };



    this.findPage = function (page, rows) {
        return $http.get('../brand/findPage.do?page=' + page + '&rows=' + rows);
    };
    this.save=function(id,entity) {
        var methodName = 'add';
        if (id != null) {//如果有ID
            methodName = 'update';//则执行修改方法
        }

        return  $http.post('../brand/' + methodName + '.do',entity);
    };


    this.findOne = function(id) {
        return $http.post('../brand/findOne.do?id=' + id);
    };



    this.dele= function(ids) {
        return $http.post('../brand/delete.do?ids=' + ids);
    };

    this.search=function(page,rows,searchEntity) {
        return $http.post('../brand/search.do?page=' + page + "&rows=" + rows,searchEntity);
    };

    //下拉列表数据
    this.selectOptionList=function(){
        return $http.get('../brand/selectOptionList.do');
    }

});
