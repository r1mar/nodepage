var request = require("request");

var base_url = "http://localhost:3000"

describe("Error router", function () {

  beforeEach(function () {
  });

  afterEach(function () {
  });

  describe("GET /nirwana", function () {
    it("returns status code 404", function (done) {
      request.get(base_url + '/nirwana', function (error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });

});