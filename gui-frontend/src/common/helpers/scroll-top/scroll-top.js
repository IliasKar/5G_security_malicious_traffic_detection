'use strict';
angular.module('scroll-top', [])
    .directive('scrollToTop', function($window) {
        function backToTop(scope, element) {
            var visibilityVal = 'hidden',
                opacityVal = '0';
            var topScrollTo = function(reduceOffset, timeout) {
                if ($window.pageYOffset !== 0) {
                    setTimeout(function() {
                        $window.scrollTo(0, $window.pageYOffset - reduceOffset);
                        topScrollTo(reduceOffset, timeout);
                    }, timeout);
                }
            };
            element.find('button').bind('click', function() {
                topScrollTo(50, 0);
            });
            angular.element($window).bind('scroll', function() {
                visibilityVal = (this.pageYOffset > 1000) ? 'visible' : 'hidden';
                opacityVal = (this.pageYOffset > 1000) ? '1' : '0';
                element.find('button')
                    .css({
                        'visibility': visibilityVal,
                        'opacity': opacityVal
                    });
            });
        }
        return {
            'restrict': 'E',
            'template': '<button title="back-to-top-button" \n'
            + 'class="back-top btn btn-primary">'
            + '<i class="fa fa-angle-up fa-3x"></i></button>',
            'link': backToTop
        };
    });
