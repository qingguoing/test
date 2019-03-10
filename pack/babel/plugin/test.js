function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// @filter
// let { a: { b: { c }, d }, e } = test;
const _test = test,
      _test2 = _slicedToArray(_test, 2),
      a = _test2[0],
      _test2$ = _test2[1],
      _test2$2 = _test2$ === void 0 ? [] : _test2$,
      _test2$3 = _slicedToArray(_test2$2, 2),
      b = _test2$3[0],
      _test2$3$ = _test2$3[1],
      c = _test2$3$ === void 0 ? 'xxx' : _test2$3$;

console.log(c);