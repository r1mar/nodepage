var request = require("request");
var app = require('../app');

var base_url = "http://localhost:3000"

describe("Home router", function() {

  beforeEach(function(){
    request.defaults({'proxy':'http://10.100.253.28:3128/'})
  });

  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        console.log('Error:', error);
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
  
  describe("GET /user", function() {
    it("returns status code 200", function(done) {
        
      request.get(base_url + '/user', function(error, response, body) {
        console.log('Error:', error);
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

});