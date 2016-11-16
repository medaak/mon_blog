angular.module('app', ['ngRoute'])
        .service('articleService', articleService)
        .controller('mainController', mainController)
        .config(routes)
        ;
