/*
 Copyright (c) 2014 Andrew Rea
 Copyright (c) 2014 James Allen

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,30
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

require('should');
var utils = require('../lib/utils');
var assert = require('assert');

describe.only('FakeDate', function() {

    it('setDate', function() {
        var d = new Date();
        var day = d.getDate();
        utils.fakeDate.overrideDate();
        utils.fakeDate.control.setDate(5);

        var dateValue = new Date().getDate();
        assert.equal(dateValue, 5);
        utils.fakeDate.resetDate();

        var afterDate = new Date();
        assert.equal(day, afterDate.getDate());
    });

    it.only('setsTimeout', function(done){
        utils.fakeDate.overrideDate();
        setTimeout(done, 2000);
        utils.fakeDate.tick("2s");
        utils.fakeDate.resetDate();
    });
});
