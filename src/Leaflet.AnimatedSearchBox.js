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
    L.Control.Searchbox = L.Control.extend({
        options: {
            class: '',
            id: '',
            position: 'topright',
            expand: 'left',
            collapsed: true
        },
        
        onAdd: function (map) {
            this._create();
            
            this._collapsed = this.options.collapsed;
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

        setValue: function (value) {
            this._input.value = value;
            return this
        },
        
        hide: function () {
            L.DomUtil.addClass(this._container, "collapsed");
            this._input.blur();
            this._button.blur();
            setTimeout(() => {
                this._collapsed = true;
            }, 600);
            
            return this;
        },
        
        show: function () {
            L.DomUtil.removeClass(this._container, "collapsed");
            setTimeout(() => {
                this._collapsed = false;
            }, 600);
            
            return this;
        },
        
        toggle: function () {
            if (L.DomUtil.hasClass(this._container, "collapsed")) {
                this.show();
            } else {
                this.hide();
            }
            
            return this;
        },

        isCollapsed: function () {
            return L.DomUtil.hasClass(this._container, "collapsed")
        },
        
        clear: function () {
            this._input.value = '';
            
            return this;
        },

        onInput: function (event, handler) {
            L.DomEvent.on(this._input, event, handler, this);

            return this
        },

        offInput: function (event, handler) {
            L.DomEvent.off(this._input, event, handler, this);

            return this
        },

        onButton: function (event, handler) {
            var wrapper = this._buttonHandlerWrapper(handler);
            L.DomEvent.on(this._button, event, wrapper, this);

            return this
        },

        offButton: function (event, handler) {
            var wrapper = this._buttonHandlerWrapper(handler);
            L.DomEvent.off(this._button, event, wrapper, this);

            return this
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
        },
        
        _create: function () {
            this._container = L.DomUtil.create('div', 'leaflet-control leaflet-searchbox-container');
            if (this.options.class != '') {
                L.DomUtil.addClass(this._container, this.options.class);
            }
            if (this.options.id != '') {
                this._container.id = this.options.id;
            }

            if (this.options.expand == 'left') {
                this._createInput('left');
                this._createButton('right');
            } else if (this.options.expand == 'right') {
                this._createButton('left');
                this._createInput('right');
            }
        },

        _createInput: function (position) {
            this._input = L.DomUtil.create(
                'input', 
                'leaflet-searchbox leaflet-searchbox-' + position, 
                this._container);
            this._input.setAttribute('type', 'text');
            this._input.style.width = this.options.width;
            this._input.style.height = this.options.height;
        },

        _createButton: function (position) {
            this._button = L.DomUtil.create(
                'button', 
                'leaflet-searchbox-button leaflet-searchbox-button-' + position, 
                this._container);
            this._button.setAttribute('type', 'button');
            this._button.style.width = this.options.height;
            this._button.style.height = this.options.height;
            this._icon = L.DomUtil.create('i', 'material-icons', this._button);
            this._icon.innerHTML = 'search';
        }
    });

    return L.Control.Searchbox;
}, window));

L.control.searchbox = function (options) {
    return new L.Control.Searchbox(options);
}