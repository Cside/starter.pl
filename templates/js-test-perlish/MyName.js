(function () {
"use strict";

var global = this;

var <?= $_->{camelized} ?>;
if (typeof exports !== 'undefined') {
    <?= $_->{camelized} ?> = exports;
} else {
    global.<?= $_->{camelized} ?> = <?= $_->{camelized} ?> = {};
}
<?= $_->{camelized} ?>.exampleMethod = exampleMethod;

function exampleMethod () {
    return true;
}

}).call(this);
