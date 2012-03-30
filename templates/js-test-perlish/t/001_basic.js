(function () {
"use strict";

var Helper = require('./test/node-test');
Helper.define();
var <?= $_->{camelized} ?> = require('../<?= $_->{name} ?>');
/*
  You can use following methods:
    ok          : QUnit.ok,
    test        : QUnit.test,
    is          : QUnit.equal,
    like        : QUnit.like,
    is_deeply   : QUnit.deepEqual,
    dies_ok     : QUnit.raises,
    subtest     : QUnit.test,
    start       : QUnit.start,
    asyncTest   : QUnit.asyncTest,
    done_testing: QUnit.start,
*/

// Write your tests
subtest('testName', function () {
    var ins = new <?= $_->{camelized} ?>;
    ok(ins.exampleMethod, "test example");
});

done_testing();

}).call(this);
