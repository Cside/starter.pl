var QUnit = require('./qunit').QUnit,
    qunitTap = require('./node-modules/qunit-tap').qunitTap,
    util = require('util'),
    fs = require('fs');

qunitTap(QUnit, util.puts, {noPlan: true});

QUnit.init();
QUnit.config.updateRate = 0;

var <?= $_->{camelized} ?> = require('../../<?= $_->{name} ?>.js');
with ({
    ok         : QUnit.ok,
    is         : QUnit.equal,
    like       : function (re, str) { QUnit.ok(re.test(str)) },
    is_deeply  : QUnit.deepEqual,
    dies_ok    : QUnit.raises,
    subtest    : QUnit.test,
    <?= $_->{camelized} ?> : <?= $_->{camelized} ?>,
}) {

    var content = fs.readFileSync('t/001_basic.js', 'utf-8');
    eval(content);
}

QUnit.start();
