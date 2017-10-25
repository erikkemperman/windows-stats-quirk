var expect = require('expect');
var fs = require('fs');

describe('windows quirk', function() {

  it('returns different dev from fs.stat and fs.statSync', function(done) {

    var statSync = fs.statSync('package.json');

    fs.stat('package.json', function(err, statAsync) {
      expect(statSync.dev).toBe(statAsync.dev); // fails on Windows
      done();
    });
  });
});

