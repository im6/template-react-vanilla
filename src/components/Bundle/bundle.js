import React from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".style_green__2rCOg {\n  color: green; }\n";
var style = {"green":"style_green__2rCOg"};
styleInject(css);

var Bar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Bar, _React$Component);

  function Bar() {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bar).apply(this, arguments));
  }

  _createClass(Bar, [{
    key: "render",
    value: function render() {
      return React.createElement("h1", {
        className: style.green
      }, "Hello This is Bar");
    }
  }]);

  return Bar;
}(React.Component);

var css$1 = ".style_red__2r73R {\n  color: crimson; }\n";
var style$1 = {"red":"style_red__2r73R"};
styleInject(css$1);

var Foo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Foo, _React$Component);

  function Foo(prop) {
    var _this;

    _classCallCheck(this, Foo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Foo).call(this, prop));
    _this.state = {
      value: '123'
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Foo, [{
    key: "onChange",
    value: function onChange(evt) {
      this.setState({
        value: evt.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("input", {
        value: this.state.value,
        onChange: this.onChange
      }), React.createElement("h1", {
        className: style$1.red
      }, "Hello from ", this.state.value));
    }
  }]);

  return Foo;
}(React.Component);

export { Bar, Foo };
