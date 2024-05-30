import React from 'react';
// import { View } from 'react-native';
import Visa from '../Atoms/Visa';
import Animated,{useAnimatedStyle,useAnimatedGestureHandler,useSharedValue,withSpring} from 'react-native-reanimated';
// PanGestureHandler responsible for track object
import { GestureHandlerRootView,PanGestureHandler } from 'react-native-gesture-handler';
function TestDraggable() {
    const containerPositionX = useSharedValue(0);
    const containerPositionY = useSharedValue(0);
    const onPanHandlerStateChange = useAnimatedGestureHandler({
        onStart:(_,ctx) => {
            ctx.StartX = containerPositionX.value;
            ctx.StartY = containerPositionY.value;
        },
        onActive:(event,ctx) => {
            containerPositionX.value = 0 + event.translationX;
            containerPositionY.value = 0 + event.translationY;
        },
        onEnd: _ => {
            containerPositionX.value = withSpring(22);
            containerPositionY.value = withSpring(235);
        },
    });
    const animatedStyle = useAnimatedStyle(()=>({
            transform:[
                {translateX:containerPositionX.value},
                {translateY:containerPositionY.value},
            ],
    }));
    return (
        <GestureHandlerRootView>
            <PanGestureHandler onHandlerStateChange={onPanHandlerStateChange}>
                <Animated.View style={animatedStyle}>
                    <Visa amount="$125,381.15" cardNum={6506} name="AHMAD SAMI AL-SAYED" date="08/25" cvv={123} visaColor="green"/>
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
}

export default TestDraggable;
