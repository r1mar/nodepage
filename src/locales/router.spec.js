var app = require('../app');
var request = require("request");

var base_url = "http://localhost:3000/locales";

describe("Home router", function () {

  var server;

  beforeEach(function (done) {
    // starts the server
    server = app.listen( { port: 3000 }, done);
  });

  afterEach(function () {
    server.close();
  });

  describe("POST /en", function () {
    it("switch to en returns status code 200", function (done) {
      request.post(base_url + '/en', function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("POST /de", function () {
    it("switch to de returns status code 200", function (done) {
      request.post(base_url + '/de', function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("POST /ru", function () {
    it("switch to ru status code 200", function (done) {
      request.post(base_url + '/ru', function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

});