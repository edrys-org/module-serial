function f(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function g(t,d,r){return r={path:d,exports:{},require:function(o,i){return v(o,i??r.path)}},t(r,r.exports),r.exports}function v(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var u=g(function(t,d){!function(r,o){t.exports=o()}(self,function(){return(()=>{var r={775:(i,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.FitAddon=void 0;var a=function(){function s(){}return s.prototype.activate=function(e){this._terminal=e},s.prototype.dispose=function(){},s.prototype.fit=function(){var e=this.proposeDimensions();if(e&&this._terminal){var l=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(l._renderService.clear(),this._terminal.resize(e.cols,e.rows))}},s.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var e=this._terminal._core;if(e._renderService.dimensions.actualCellWidth!==0&&e._renderService.dimensions.actualCellHeight!==0){var l=window.getComputedStyle(this._terminal.element.parentElement),c=parseInt(l.getPropertyValue("height")),m=Math.max(0,parseInt(l.getPropertyValue("width"))),p=window.getComputedStyle(this._terminal.element),_=c-(parseInt(p.getPropertyValue("padding-top"))+parseInt(p.getPropertyValue("padding-bottom"))),h=m-(parseInt(p.getPropertyValue("padding-right"))+parseInt(p.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(h/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(_/e._renderService.dimensions.actualCellHeight))}}}},s}();n.FitAddon=a}},o={};return function i(n){if(o[n])return o[n].exports;var a=o[n]={exports:{}};return r[n](a,a.exports,i),a.exports}(775)})()})}),y=f(u),w=u.FitAddon;export default y;export{w as FitAddon,u as __moduleExports};