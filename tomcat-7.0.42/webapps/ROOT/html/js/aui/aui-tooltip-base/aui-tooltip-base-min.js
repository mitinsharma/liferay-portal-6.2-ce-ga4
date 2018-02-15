YUI.add("aui-tooltip-base",function(e,t){var n=e.Lang,r="bodyContent",i="boundingBox",s="contentBox",o="duration",u="formatter",a="hover",f="in",l="mouseenter",c="opacity",h="stickDuration",p="title",d="tooltip",v="trigger",m="visible",g="data-title",y=e.getClassName,b=y("tooltip-arrow"),w=y("tooltip-inner");e.Tooltip=e.Base.create(d,e.Widget,[e.WidgetCssClass,e.WidgetPosition,e.WidgetStdMod,e.WidgetToggle,e.WidgetAutohide,e.WidgetPositionAlign,e.WidgetPositionAlignSuggestion,e.WidgetPositionConstrain,e.WidgetTrigger],{_hideTimer:null,initializer:function(){var t=this;e.after(t._afterUiSetTrigger,t,"_uiSetTrigger"),e.after(t._afterUiSetVisible,t,"_uiSetVisible")},renderUI:function(){var t=this,n=t.get(i),r=t.get(s);r.addClass(w),n.append(e.Tooltip.TEMPLATES.arrow),t._afterUiSetVisible(t.get(m))},bindUI:function(){var t=this,n=t.get(v);n&&n.on(a,e.bind(t._onBoundingBoxMouseenter,t),e.bind(t._onBoundingBoxMouseleave,t)),t.get(i).on(a,e.bind(t._onBoundingBoxMouseenter,t),e.bind(t._onBoundingBoxMouseleave,t))},destructor:function(){var e=this;e._clearHideTimer()},_afterUiSetVisible:function(t){var n=this,r=n.get(h);t?(n._loadTooltipContentFromTitle(),n._maybeShow()):e.Lang.isNumber(r)||n._maybeHide()},_afterUiSetTrigger:function(e){var t=this;t.suggestAlignment(e)},_borrowTitleAttribute:function(){var e=this.get("trigger"),t=e.getAttribute("title");t&&e.setAttribute("data-title",t).removeAttribute("title")},_clearHideTimer:function(){var e=this;e._hideTimer&&(e._hideTimer.cancel(),e._hideTimer=null)},_setStdModSection:function(t){var r=this.get("formatter");return n.isString(t)&&(r&&(t=r.call(this,t)),this.get("html")||(t=e.Escape.html(t))),t},_loadTooltipContentFromTitle:function(){var t=this.get("trigger"),n;if(!t)return;this._borrowTitleAttribute(),n=t.getAttribute("data-title"),n&&this.setStdModContent(e.WidgetStdMod.BODY,n)},_maybeHide:function(){var t=this,n;n=t.get(h),e.Lang.isNumber(n)?t._hideTimer=e.later(n,t,t._transition):(t._transition(),t.hide())},_maybeShow:function(){var e=this;e._transition(!0)},_onBoundingBoxMouseenter:function(){var e=this;e._clearHideTimer()},_onBoundingBoxMouseleave:function(){var e=this;e._maybeHide()},_transition:function(e){var t=this,n=t.get(i);n.transition({duration:t.get(o),opacity:e?t.get(c):0},function(){n.toggleClass(f,e),e||t.hide()})}},{CSS_PREFIX:y(d),ATTRS:{bodyContent:{setter:"_setStdModSection"},constrain:{value:!0},duration:{validator:n.isNumber,value:.15},footerContent:{setter:"_setStdModSection"},formatter:{validator:e.Lang.isFunction},headerContent:{setter:"_setStdModSection"},html:{value:!1,validator:n.isBoolean},opacity:{validator:n.isNumber,value:.8},stickDuration:{validator:e.Lang.isNumber},triggerShowEvent:{validator:n.isString,value:l}},TEMPLATES:{arrow:'<div class="'+b+'"></div>'}})},"2.0.0",{requires:["escape","event-hover","transition","widget","widget-autohide","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod","aui-classnamemanager","aui-component","aui-widget-cssclass","aui-widget-toggle","aui-widget-trigger","aui-widget-position-align-suggestion","aui-node-base"]});