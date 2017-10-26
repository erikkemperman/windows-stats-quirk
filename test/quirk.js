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

  it('returns different dev from fs.lstat and fs.lstatSync', function(done) {

    fs.symlinkSync('package.json', 'link.json', 'file');
    var lstatSync = fs.lstatSync('link.json');

    fs.lstat('link.json', function(err, lstatAsync) {
      fs.unlinkSync('link.json');
      expect(lstatSync.dev).toBe(lstatAsync.dev); // fails on Windows
      done();
    });
  });
});

