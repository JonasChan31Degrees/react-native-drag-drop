import React, { Component, ReactNode } from "react";
import { Animated, GestureResponderEvent, PanResponderGestureState, PanResponderInstance, ViewStyle } from "react-native";
import { LayoutProps } from "./Container";
export interface DraggableState {
    pan: Animated.ValueXY;
    dragging: boolean;
    pressed: boolean;
}
export interface DraggableProps {
    addedHeight: number;
    layout: LayoutProps | null;
    children: ReactNode;
    onDrag: (gestureState: PanResponderGestureState, layout: LayoutProps | null, cb: () => any, zoneId?: any) => any;
    onGrant: (value: boolean) => any;
    onDragEnd: (gesture: PanResponderGestureState) => boolean;
    draggedElementStyle?: ViewStyle;
    style: ViewStyle;
}
declare class Draggable extends Component<DraggableProps, DraggableState> {
    state: {
        pan: Animated.ValueXY;
        dragging: boolean;
        pressed: boolean;
    };
    panResponder?: PanResponderInstance;
    onResponderMove: (e: GestureResponderEvent, gesture: PanResponderGestureState) => void;
    onDragEnd: (e: GestureResponderEvent, gesture: PanResponderGestureState) => void;
    onEnd: (e: GestureResponderEvent, gesture: PanResponderGestureState) => void;
    UNSAFE_componentWillMount(): void;
    render(): React.JSX.Element;
}
export default Draggable;
