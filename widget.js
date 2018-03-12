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
            ,1000);
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
            ,1000);
        },
        _setOptions: function (options) {
            this.random();
        }
    });
});