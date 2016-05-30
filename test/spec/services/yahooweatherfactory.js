'use strict';

describe('Service: yahooWeatherfactory', function () {

  // load the service's module
  beforeEach(module('yoWeatherAppApp'));

  // instantiate service
  var yahooWeatherfactory;
  beforeEach(inject(function (_yahooWeatherfactory_) {
    yahooWeatherfactory = _yahooWeatherfactory_;
  }));

  it('should do something', function () {
    expect(!!yahooWeatherfactory).toBe(true);
  });

});
