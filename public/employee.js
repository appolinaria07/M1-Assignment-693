let zak = "Zak Ruvalcaba";
let sally = "Sally Smith";
let holly = "Holly Unlikely";
let amol = 'Amol Shookup';
let robin = 'Robin Banks';
let digit = 'Digit Addams';
let snake = 'Snake Charmers';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, zak), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, digit), /*#__PURE__*/React.createElement("li", null, snake));
ReactDOM.render(element, document.getElementById('content'));