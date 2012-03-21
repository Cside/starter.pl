var QUnit = require('./qunit'),
    qunitTap = require('./node-modules/qunit-tap').qunitTap,
    util = require('util'),
    fs = require('fs');

QUnit.like = function(actual, expected, message) {
    QUnit.push(expected.test(actual), actual, expected.toString(), message);
};

qunitTap(QUnit, util.puts, {noPlan: true});

QUnit.init();
QUnit.config.updateRate = 0;

var <?= $_->{camelized} ?> = require('../../<?= $_->{name} ?>.js');
with ({
    ok         : QUnit.ok,
    is         : QUnit.equal,
    like       : QUnit.like,
    is_deeply  : QUnit.deepEqual,
    dies_ok    : QUnit.raises,
    subtest    : QUnit.test,
    start      : QUnit.start,
    asyncTest  : QUnit.asyncTest,
    <?= $_->{camelized} ?> : <?= $_->{camelized} ?>,
}) {

    var content = fs.readFileSync('t/001_basic.js', 'utf-8');
    eval(content);
}

QUnit.start();
