var request = require("request");

var base_url = "http://localhost:3000"

describe("User router", function () {

  beforeEach(function () {
  });

  afterEach(function () {
  });

  describe("GET /user", function () {
    it("returns status code 200", function (done) {

      request.get(base_url + '/user', function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

});