var QUnit = require('./qunit').QUnit,
    qunitTap = require('qunit-tap').qunitTap,
    util = require('util'),
    fs = require('fs');

qunitTap(QUnit, util.puts, {noPlan: true});

QUnit.init();
QUnit.config.updateRate = 0;

var visual_width = require('../my-module.js');
with ({is: QUnit.equal, subtest: QUnit.test}) {
    var content = fs.readFileSync('t/001_basic.js', 'utf-8');
    eval(content);
}

QUnit.start();
