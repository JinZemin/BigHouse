/**
 * Created by jinzemin on 2017/1/3.
 */
angular.module("sportsStore")
.controller("cartSummaryController",function($scope,cart){
   $scope.cartData=cart.getProducts();
   $scope.total=function(){
       var total=0;
       for(var i=0,len=$scope.cartData.length; i<len; i++){
           total+=($scope.cartData[i].price*$scope.cartData[i].count);
       }
       return total;
   }
   $scope.remove=function(id){
       cart.removeProduct(id)
   }
})