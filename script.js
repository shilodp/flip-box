angular.module('Animation', ['ngAnimate'])
    .controller('ImageChange', function($scope) {
		$scope.Ansver='';
        $scope.switch= function (event) {
            var change=function () {
                document.getElementById('div').src='http://lorempixel.com/400/200';
                $scope.color= !$scope.color;
                if ($scope.color) {
                    document.getElementById('div').classList.add('green');
                } else {
                    document.getElementById('div').classList.remove('green');
                }
            };
            var img=$('#div');
            var CDx = event.offsetX;
            var CDy = event.offsetY;
            var ABx = document.getElementById('div').scrollWidth;
            var ABy = document.getElementById('div').scrollHeight;
            if ((ABx*CDy-ABy*CDx)>0) {
                if ((ABx*(CDy-ABy)+ABy*CDx)<0) {
                    $scope.Ansver='left';
                    img.animate({ rotateY: '-=90deg' }, 300, "linear");
                    setTimeout(change,300);
                    img.animate({ rotateY: '90deg' }, 0);
                    img.animate({ rotateY: '-=90deg' }, 300, "linear");
                } else {
                    $scope.Ansver='down';
                    img.animate({ rotateX: '-=90deg' }, 300, "linear");
                    setTimeout(change,300);
                    img.animate({ rotateX: '90deg' }, 0);
                    img.animate({ rotateX: '-=90deg' }, 300, "linear");
                }
            } else {
                if ((ABx*(CDy-ABy)+ABy*CDx)<0) {
                    $scope.Ansver='up';
                    img.animate({ rotateX: '+=90deg' }, 300, "linear");
                    setTimeout(change,300);
                    img.animate({ rotateX: '-90deg' }, 0);
                    img.animate({ rotateX: '+=90deg' }, 300, "linear");
                } else {
                    $scope.Ansver='right';
                    img.animate({ rotateY: '+=90deg' }, 300, "linear");
                    setTimeout(change,300);
                    img.animate({ rotateY: '-90deg' }, 0);
                    img.animate({ rotateY: '+=90deg' }, 300, "linear");
                }
            }
        }
    }
    )