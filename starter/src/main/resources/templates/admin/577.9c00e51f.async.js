"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[577],{60577:function(e,t,n){function r(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}n.r(t),n.d(t,{swift:function(){return z}});var i=r(["_","var","let","actor","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","isolated","nonisolated","catch","do","rethrows","throw","throws","async","await","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),a=r(["var","let","actor","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),o=r(["true","false","nil","self","super","_"]),u=r(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),c=/^\-?0b[01][01_]*/,f=/^\-?0o[0-7][0-7_]*/,s=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,l=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,p=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,d=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,h=/^\#[A-Za-z]+/,m=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;function v(e,t,n){if(e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;var r,v=e.peek();if("/"==v){if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return t.tokenize.push(w),w(e,t)}if(e.match(h))return"builtin";if(e.match(m))return"attribute";if(e.match(c))return"number";if(e.match(f))return"number";if(e.match(s))return"number";if(e.match(l))return"number";if(e.match(d))return"property";if("+-/*%=|&<>~^?!".indexOf(v)>-1)return e.next(),"operator";if(":;,.(){}[]".indexOf(v)>-1)return e.next(),e.match(".."),"punctuation";if(r=e.match(/("""|"|')/)){var _=k.bind(null,r[0]);return t.tokenize.push(_),_(e,t)}if(e.match(p)){var x=e.current();return u.hasOwnProperty(x)?"type":o.hasOwnProperty(x)?"atom":i.hasOwnProperty(x)?(a.hasOwnProperty(x)&&(t.prev="define"),"keyword"):"define"==n?"def":"variable"}return e.next(),null}function _(){var e=0;return function(t,n,r){var i=v(t,n,r);if("punctuation"==i)if("("==t.current())++e;else if(")"==t.current()){if(0==e)return t.backUp(1),n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);--e}return i}}function k(e,t,n){for(var r,i=1==e.length,a=!1;r=t.peek();)if(a){if(t.next(),"("==r)return n.tokenize.push(_()),"string";a=!1}else{if(t.match(e))return n.tokenize.pop(),"string";t.next(),a="\\"==r}return i&&n.tokenize.pop(),"string"}function w(e,t){for(var n;n=e.next();)if("/"===n&&e.eat("*"))t.tokenize.push(w);else if("*"===n&&e.eat("/")){t.tokenize.pop();break}return"comment"}function x(e,t,n){this.prev=e,this.align=t,this.indented=n}function y(e,t){var n=t.match(/^\s*($|\/[\/\*]|[)}\]])/,!1)?null:t.column()+1;e.context=new x(e.context,n,e.indented)}function g(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}const z={name:"swift",startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var n=t.prev;t.prev=null;var r=(t.tokenize[t.tokenize.length-1]||v)(e,t,n);if(r&&"comment"!=r?t.prev||(t.prev=r):t.prev=n,"punctuation"==r){var i=/[\(\[\{]|([\]\)\}])/.exec(e.current());i&&(i[1]?g:y)(t,e)}return r},indent:function(e,t,n){var r=e.context;if(!r)return 0;var i=/^[\]\}\)]/.test(t);return null!=r.align?r.align-(i?1:0):r.indented+(i?0:n.unit)},languageData:{indentOnInput:/^\s*[\)\}\]]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}}}}]);