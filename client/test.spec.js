describe("myApp", function() {
 
    beforeEach(module('myApp'));
 
    describe("SimpleController", function() {
 

         var scope;
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller("SimpleController", {
                $scope: scope
            });
        }));
        it("should double the numbers", function() {
            scope.doubleIt();
            expect(scope.x).toBe(6);
        });
    });
});