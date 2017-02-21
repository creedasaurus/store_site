angular.module('myApp', ['ngMaterial'])
    .controller('ProductController', function ($scope, $products, $mdMedia) {
        $scope.$mdMedia = $mdMedia;

        this.filterBy = "All Jackets";
        this.sortedBy = "Featured"
        this.availableFilters = $products.availableFilters;
        this.availableSorts = $products.availableSorts;
        this.catalog = $products.catalog;
    })
    .factory('$products', function () {
        return {
            availableFilters: ["All Jackets", "2016", "jacket", "Jackets", "layers", "Obermeyer", "Roxy", "womens"],
            availableSorts: ["Featured", "Best Selling", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high", "Price, high to low", "Date, new to old", "Date, old to new"],
            catalog: makeJackets()
        };

        function makeJackets() {
            var list = [],
                master = [{
                        imageURL: "http://res.cloudinary.com/creedasaurus/image/upload/t_LOGO_OVERLAY/dark_red_long_sleeve.jpg",
                        title: "Dark Red shirt",
                        price: "$99.99"
                },
                    {
                        imageURL: "http://res.cloudinary.com/creedasaurus/image/upload/t_LOGO_OVERLAY/light_red_long_sleeve.jpg",
                        title: "Light Red",
                        price: "$99.99"
                },
                    {
                        imageURL: "http://res.cloudinary.com/creedasaurus/image/upload/t_LOGO_OVERLAY/light_green_long_sleeve.jpg",
                        title: "Fall Jacket",
                        price: "$99.99"
                }
                         ]

            //            for (var j = 0; j < 6; j++) {
            //                list.push(angular.extend({}, master));
            //            }
            return master;
        }

    });