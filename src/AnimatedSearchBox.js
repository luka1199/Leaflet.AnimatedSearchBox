(function (factory, window) {

    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
        define(['leaflet'], factory);

        // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object') {
        module.exports = factory(require('leaflet'));
    }

    // attach your plugin to the global 'L' variable
    if (typeof window !== 'undefined' && window.L) {
        window.L.YourPlugin = factory(L);
    }
}(function (L) {
    L.Control.searchbox = L.Control.extend({
        options: {
            id: '',
            class: '',
            position: 'topright',
            collapsed: true
        },

        onAdd: function (map) {
            this._container = L.DomUtil.create('div', 'leaflet-control leaflet-searchbar-container');
            if (this.options.class != '') {
                L.DomUtil.addClass(this._container, this.options.class);
            }
            this._collapsed = this.options.collapsed;

            this._input = L.DomUtil.create('input', 'leaflet-searchbar', this._container);
            this._input.id = this.options.id;
            this._input.setAttribute('type', 'text');
            this._input.style.width = this.options.width;
            this._input.style.height = this.options.height;

            this._button = L.DomUtil.create('button', 'leaflet-searchbar-button', this._container);
            this._button.setAttribute('type', 'button');
            this._button.style.width = this.options.height;
            this._button.style.height = this.options.height;
            this._icon = L.DomUtil.create('i', 'fa fa-search', this._button);

            if (this.options.collapsed) {
                this.hide();
            }

            L.DomEvent.disableClickPropagation(this._container);

            L.DomEvent.on(this._button, "click", this._onClick, this)

            return this._container;
        },

        onRemove: function (map) {

        },

        getValue: function () {
            return this._input.value
        },

        onInput: function (event, handler) {
            L.DomEvent.on(this._input, event, handler, this);
        },

        offInput: function (event, handler) {
            L.DomEvent.off(this._input, event, handler, this);
        },

        onButton: function (event, handler) {
            var wrapper = this._buttonHandlerWrapper(handler);
            L.DomEvent.on(this._button, event, wrapper, this);
        },

        offButton: function (event, handler) {
            var wrapper = this._buttonHandlerWrapper(handler);
            L.DomEvent.off(this._button, event, wrapper, this);
        },

        hide: function () {
            L.DomUtil.addClass(this._container, "collapsed");
            this._input.blur();
            this._button.blur();
            setTimeout(() => {
                this._collapsed = true;
            }, 600);
        },

        show: function () {
            L.DomUtil.removeClass(this._container, "collapsed");
            setTimeout(() => {
                this._collapsed = false;
            }, 600);
        },

        toggle: function () {
            if (L.DomUtil.hasClass(this._container, "collapsed")) {
                this.show();
            } else {
                this.hide();
            }
        },

        _onClick: function () {
            if (this._collapsed) {
                this.show();
                this._input.focus();
            }
        },

        _buttonHandlerWrapper: function (handler) {
            return function () {
                if (!this._collapsed) {
                    handler();
                }
            }
        }
    });

    return L.Control.searchbox;
}, window));

L.control.searchbox = function (options) {
    return new L.Control.searchbox(options);
}