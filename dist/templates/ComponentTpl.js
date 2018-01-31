'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ComponentTpl
 */
var ComponentTpl =
/**
 *
 * @param name - the component name
 * @param container - has the container option
 */
function ComponentTpl(name, container) {
  _classCallCheck(this, ComponentTpl);

  this.type = 'component';
  this.name = name;
  this.container = container;
};

exports.default = ComponentTpl;