"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 让object具备`for...of功能`
 */
function it1() {
  var obj = _defineProperty({
    name: 'zhangsan',
    age: 23,
    sex: 'man'
  }, Symbol.iterator, function () {
    var _ref;

    var keys = Object.keys(this);

    var _this = this,
        _index = 0;

    return _ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
      return this;
    }), _defineProperty(_ref, "next", function next() {
      console.log("_index=".concat(_index, ", length=").concat(keys.length));
      return {
        done: _index === keys.length,
        value: _this[keys[_index++]]
      };
    }), _ref;
  });

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var v = _step.value;
      console.log('v1=', v);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = obj[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var v = _step2.value;
      console.log('v2=', v);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
} // iterator


function it2() {
  var o1 = {
    name: 'zhangsan',
    age: 23,
    sex: 'man'
  };

  var _itEnable = function _itEnable(obj) {
    obj[Symbol.iterator] = function () {
      var _ref2;

      var keys = Object.keys(obj),
          _index = 0;
      return _ref2 = {}, _defineProperty(_ref2, Symbol.iterator, function () {
        return this;
      }), _defineProperty(_ref2, "next", function next() {
        return {
          done: _index === keys.length,
          value: obj[keys[_index++]]
        };
      }), _ref2;
    };

    return function remove() {
      // 移除
      obj[Symbol.iterator] = undefined;
    };
  }; // 测试


  o1.start = 'start';

  _itEnable(o1);

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = o1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var v = _step3.value;
      console.log('v3=', v);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

it2();