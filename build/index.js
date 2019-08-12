Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var deviceScreen=_reactNative.Dimensions.get('window');var barrierForward=deviceScreen.width/4;function shouldOpenMenu(dx){return dx>barrierForward;}var SideMenu=function(_React$Component){_inherits(SideMenu,_React$Component);function SideMenu(props){_classCallCheck(this,SideMenu);var _this=_possibleConstructorReturn(this,(SideMenu.__proto__||Object.getPrototypeOf(SideMenu)).call(this,props));_this.prevLeft=0;_this.isOpen=!!props.isOpen;var initialMenuPositionMultiplier=props.menuPosition==='right'?-1:1;var openOffsetMenuPercentage=props.openMenuOffset/deviceScreen.width;var hiddenMenuOffsetPercentage=props.hiddenMenuOffset/deviceScreen.width;var left=new _reactNative.Animated.Value(props.isOpen?props.openMenuOffset*initialMenuPositionMultiplier:props.hiddenMenuOffset);_this.onLayoutChange=_this.onLayoutChange.bind(_this);_this.onStartShouldSetResponderCapture=props.onStartShouldSetResponderCapture.bind(_this);_this.onMoveShouldSetPanResponder=_this.handleMoveShouldSetPanResponder.bind(_this);_this.onPanResponderMove=_this.handlePanResponderMove.bind(_this);_this.onPanResponderRelease=_this.handlePanResponderEnd.bind(_this);_this.onPanResponderTerminate=_this.handlePanResponderEnd.bind(_this);_this.state={width:deviceScreen.width,height:deviceScreen.height,openOffsetMenuPercentage:openOffsetMenuPercentage,openMenuOffset:deviceScreen.width*openOffsetMenuPercentage,hiddenMenuOffsetPercentage:hiddenMenuOffsetPercentage,hiddenMenuOffset:deviceScreen.width*hiddenMenuOffsetPercentage,left:left};_this.state.left.addListener(function(_ref){var value=_ref.value;return _this.props.onSliding(Math.abs((value-_this.state.hiddenMenuOffset)/(_this.state.openMenuOffset-_this.state.hiddenMenuOffset)));});return _this;}_createClass(SideMenu,[{key:'componentWillMount',value:function componentWillMount(){this.responder=_reactNative.PanResponder.create({onStartShouldSetResponderCapture:this.onStartShouldSetResponderCapture,onMoveShouldSetPanResponder:this.onMoveShouldSetPanResponder,onPanResponderMove:this.onPanResponderMove,onPanResponderRelease:this.onPanResponderRelease,onPanResponderTerminate:this.onPanResponderTerminate});}},{key:'onLayoutChange',value:function onLayoutChange(e){var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;var openMenuOffset=width*this.state.openOffsetMenuPercentage;var hiddenMenuOffset=width*this.state.hiddenMenuOffsetPercentage;this.setState({width:width,height:height,openMenuOffset:openMenuOffset,hiddenMenuOffset:hiddenMenuOffset});}},{key:'getContentView',value:function getContentView(){var _this2=this;var overlay=null;if(this.isOpen){overlay=_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){return _this2.openMenu(false);},__source:{fileName:_jsxFileName,lineNumber:133}},_react2.default.createElement(_reactNative.View,{style:_styles2.default.overlay,__source:{fileName:_jsxFileName,lineNumber:134}}));}var scalePercent=this.props.scalePercent;var _state=this.state,width=_state.width,height=_state.height,openMenuOffset=_state.openMenuOffset;var ref=function ref(sideMenu){return _this2.sideMenu=sideMenu;};var style=[_styles2.default.frontView,{width:width,height:height},this.props.animationStyle(this.state.left,openMenuOffset,scalePercent)];return _react2.default.createElement(_reactNative.Animated.View,_extends({style:style,ref:ref},this.responder.panHandlers,{__source:{fileName:_jsxFileName,lineNumber:148}}),this.props.children,overlay);}},{key:'moveLeft',value:function moveLeft(offset){var newOffset=this.menuPositionMultiplier()*offset;this.props.animationFunction(this.state.left,newOffset).start(this.props.onAnimationComplete);this.prevLeft=newOffset;}},{key:'menuPositionMultiplier',value:function menuPositionMultiplier(){return this.props.menuPosition==='right'?-1:1;}},{key:'handlePanResponderMove',value:function handlePanResponderMove(e,gestureState){if(this.state.left.__getValue()*this.menuPositionMultiplier()>=0){var newLeft=this.prevLeft+gestureState.dx;if(!this.props.bounceBackOnOverdraw&&Math.abs(newLeft)>this.state.openMenuOffset){newLeft=this.menuPositionMultiplier()*this.state.openMenuOffset;}this.props.onMove(newLeft);this.state.left.setValue(newLeft);}}},{key:'handlePanResponderEnd',value:function handlePanResponderEnd(e,gestureState){var offsetLeft=this.menuPositionMultiplier()*(this.state.left.__getValue()+gestureState.dx);this.openMenu(shouldOpenMenu(offsetLeft));}},{key:'handleMoveShouldSetPanResponder',value:function handleMoveShouldSetPanResponder(e,gestureState){if(this.gesturesAreEnabled()){var x=Math.round(Math.abs(gestureState.dx));var y=Math.round(Math.abs(gestureState.dy));var touchMoved=x>this.props.toleranceX&&y<this.props.toleranceY;if(this.isOpen){return touchMoved;}var withinEdgeHitWidth=this.props.menuPosition==='right'?gestureState.moveX>deviceScreen.width-this.props.edgeHitWidth:gestureState.moveX<this.props.edgeHitWidth;var swipingToOpen=this.menuPositionMultiplier()*gestureState.dx>0;return withinEdgeHitWidth&&touchMoved&&swipingToOpen;}return false;}},{key:'openMenu',value:function openMenu(isOpen){var _state2=this.state,hiddenMenuOffset=_state2.hiddenMenuOffset,openMenuOffset=_state2.openMenuOffset;this.moveLeft(isOpen?openMenuOffset:hiddenMenuOffset);this.isOpen=isOpen;this.forceUpdate();this.props.onChange(isOpen);}},{key:'gesturesAreEnabled',value:function gesturesAreEnabled(){var disableGestures=this.props.disableGestures;if(typeof disableGestures==='function'){return!disableGestures();}return!disableGestures;}},{key:'render',value:function render(){var boundryStyle=this.props.menuPosition==='right'?{left:this.state.width-this.state.openMenuOffset}:{right:this.state.width-this.state.openMenuOffset};var menu=_react2.default.createElement(_reactNative.View,{style:[_styles2.default.menu,boundryStyle],__source:{fileName:_jsxFileName,lineNumber:236}},this.props.menu);return _react2.default.createElement(_reactNative.View,{style:_styles2.default.container,onLayout:this.onLayoutChange,__source:{fileName:_jsxFileName,lineNumber:242}},menu,this.getContentView());}}]);return SideMenu;}(_react2.default.Component);exports.default=SideMenu;SideMenu.propTypes={edgeHitWidth:_propTypes2.default.number,toleranceX:_propTypes2.default.number,toleranceY:_propTypes2.default.number,menuPosition:_propTypes2.default.oneOf(['left','right']),onChange:_propTypes2.default.func,onMove:_propTypes2.default.func,children:_propTypes2.default.node,menu:_propTypes2.default.node,openMenuOffset:_propTypes2.default.number,hiddenMenuOffset:_propTypes2.default.number,animationStyle:_propTypes2.default.func,disableGestures:_propTypes2.default.oneOfType([_propTypes2.default.func,_propTypes2.default.bool]),animationFunction:_propTypes2.default.func,onAnimationComplete:_propTypes2.default.func,onStartShouldSetResponderCapture:_propTypes2.default.func,isOpen:_propTypes2.default.bool,bounceBackOnOverdraw:_propTypes2.default.bool,autoClosing:_propTypes2.default.bool};SideMenu.defaultProps={toleranceY:10,toleranceX:10,edgeHitWidth:60,children:null,menu:null,openMenuOffset:deviceScreen.width*(2/3),disableGestures:false,menuPosition:'left',hiddenMenuOffset:0,onMove:function onMove(){},onStartShouldSetResponderCapture:function onStartShouldSetResponderCapture(){return true;},onChange:function onChange(){},onSliding:function onSliding(){},animationStyle:function animationStyle(value,openMenuOffset,scalePercent){var scale=_reactNative.Animated.divide(value,new _reactNative.Animated.Value(openMenuOffset)).interpolate({inputRange:[0,1],outputRange:[1,scalePercent]});var translateX=value.interpolate({inputRange:[0,openMenuOffset],outputRange:[0,scalePercent*openMenuOffset]});return{transform:[{translateX:translateX},{scale:scale}]};},animationFunction:function animationFunction(prop,value){return _reactNative.Animated.spring(prop,{toValue:value,friction:8});},onAnimationComplete:function onAnimationComplete(){},isOpen:false,bounceBackOnOverdraw:true,autoClosing:true};

