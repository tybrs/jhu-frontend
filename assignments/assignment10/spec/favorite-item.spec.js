describe('Favorite Item Suite', function () {

    var menu;
    var $httpBackend;
    var ApiPath;
  
    beforeEach(function () {
      module('common');
  
      inject(function ($injector) {
        menu = $injector.get('MenuService');
        $httpBackend = $injector.get('$httpBackend');
        ApiPath = $injector.get('ApiPath');
      });
    });
  
    it('Favorite item exists in the menu', function() {
      $httpBackend.whenGET(ApiPath + '/menu_items/A/menu_items/0.json').respond(['description', 'name']);
      menu.getMenuItem('A1').then(function(response) {
        expect(response).toEqual(['description', 'name']);
      });
      $httpBackend.flush();
    });
  
  });
  