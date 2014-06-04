/**
 * Created by fede on 03/06/2014.
 */
var myApp = angular.module('myApp', []);

myApp.factory('Data', function(){
    return{msj: 'factory'};
});

function ControllerOne($scope, Data)
{
    $scope.data = Data;

}function ControllerTwo($scope, Data)
{
    $scope.data = Data;
}