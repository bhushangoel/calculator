/**
 * Created by bhushangoel on 1/18/17.
 */
var module = angular.module('app', []);

module.controller('mainCtrl', function ($scope) {
    $scope.keypadArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'X'];
    $scope.formData = {
        taxAmount: 5
    };
    $scope.focus = false;
    var enteredAmt = '';


    $scope.taxInputFocus = function () {
        $scope.focus = !$scope.focus;
    };

    $scope.enterAmount = function (key) {
        if (key != 'X') {
            enteredAmt += key
        }
        else {
            enteredAmt = enteredAmt.substr(0, enteredAmt.length - 1);
        }
        $scope.formData['inputAmount'] = enteredAmt;
        $scope.calculateReversePerc();
    };

    $scope.calculateReversePerc = function () {
        if ($scope.formData.inputAmount && $scope.formData.inputAmount.length <= 10) {
            var perc = 100 + parseFloat($scope.formData.taxAmount);
            var amt = parseFloat($scope.formData.inputAmount);
            var forOnePerc = amt / perc;
            $scope.calculatedAmount = forOnePerc * 100;
            $scope.calculatedTaxAmount = $scope.formData.inputAmount - $scope.calculatedAmount;
        }
    };

    $scope.clearInput = function () {
        $scope.formData['inputAmount'] = enteredAmt = '';
        $scope.calculatedAmount = '';
        $scope.calculatedTaxAmount = '';

    };
    $scope.clearInput();

});