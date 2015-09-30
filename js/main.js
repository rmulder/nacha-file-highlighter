angular.module('app', [])
    .controller('cntrl', function ($scope, RowReader) {
        $scope.input = tempdata;
        $scope.hoveredCell = {};

        $scope.$watch('input', function(){
            $scope.rows = RowReader($scope.input);
        });
        
        $scope.onMouseOver = function (cell) {
            $scope.hoveredCell = cell;
        }
    })
    .service('RowReader', function () {
        var ninesRow = new Array(95).join('9');

        return function (input) {
            var rows = input.split('\n');
            var output = [];

            rows.forEach(function (row, index) {
                var rowChars = row.split('');
                var cells = [];

                var rowType = '9row';
                if (row != ninesRow){
                    var firstChat = rowChars[0];
                    rowType = rowTypes[firstChat];
                }
                var metadata = records[rowType];

                metadata.forEach(function (metaItem) {
                    var spliced = rowChars.splice(0, metaItem.size);
                    spliced.forEach(function (spl) {
                        cells.push({
                            rowType: rowType,
                            info: metaItem,
                            color: recordsNamesColors[metaItem.name],
                            value: spl
                        });
                    });
                });

                output.push({
                    color: "#000",
                    data: cells
                });
            });
            return output;
        }
    });
;
