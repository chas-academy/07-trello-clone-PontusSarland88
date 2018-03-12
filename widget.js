$(function () {
    $.widget("custom.changeColor", {
        options: {
            colors: ['crimson', 'darkseagreen', 'darksalmon', 'darkgoldenrod']
        },
        _create: function () {
            this.element.toggleClass(
                this.options.colors[
                    Math.floor(Math.random() * this.options.colors.length)
                ]
            );
            this._refresh();
        },

        _refresh: function () {
            this._trigger("change");
        },

        random: function () {
            this.element.toggleClass(
                this.options.colors[
                    Math.floor(Math.random() * this.options.colors.length)
                ]
            );
        },
        _setOptions: function (options) {
            this.random();
        }
    });
});