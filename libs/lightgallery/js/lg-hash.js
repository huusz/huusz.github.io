!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).LgHash=e()}}(function(){return function e(t,o,i){function n(s,l){if(!o[s]){if(!t[s]){var a="function"==typeof require&&require;if(!l&&a)return a(s,!0);if(r)return r(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var d=o[s]={exports:{}};t[s][0].call(d.exports,function(e){var o=t[s][1][e];return n(o||e)},d,d.exports,e,t,o,i)}return o[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(e,t,o){!function(e,t){if(void 0!==o)t();else{var i={exports:{}};t(),e.lgHash=i.exports}}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},t={hash:!0},o=function(o){return this.el=o,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=e({},t,this.core.s),this.core.s.hash&&(this.oldHash=window.location.hash,this.init()),this};o.prototype.init=function(){var e,t=this;utils.on(t.core.el,"onAfterSlide.lgtm",function(e){window.location.hash="lg="+t.core.s.galleryId+"&slide="+e.detail.index}),utils.on(window,"hashchange.lghash",function(){e=window.location.hash;var o=parseInt(e.split("&slide=")[1],10);e.indexOf("lg="+t.core.s.galleryId)>-1?t.core.slide(o,!1,!1):t.core.lGalleryOn&&t.core.destroy()})},o.prototype.destroy=function(){this.core.s.hash&&(this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0?window.location.hash=this.oldHash:history.pushState?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",utils.off(this.core.el,".lghash"))},window.lgModules.hash=o})},{}]},{},[1])(1)});