(function () {
"use strict";

var into = (typeof exports !== 'undefined') ? exports : this;
into.<?= $_->{camelized} ?> = <?= $_->{camelized} ?>;

function <?= $_->{camelized} ?> () {
}

<?= $_->{camelized} ?>.prototype.exampleMethod = function () {
    return true;
};

}).call(this);
