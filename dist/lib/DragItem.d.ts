import React, { ReactElement } from "react";
import { PanResponderGestureState, View, ViewStyle } from "react-native";
import Container, { ContainerProps, ContainerState, LayoutProps } from "./Container";
interface DragItemState extends ContainerState {
    layout: LayoutProps | null;
}
interface DragItemProps extends ContainerProps {
    addedHeight: number;
    onDrag: (gestureState: PanResponderGestureState, layout: LayoutProps | null, cb: Function, zoneId: any) => any;
    onGrant: (value: boolean) => any;
    onDragEnd: (gesture: PanResponderGestureState) => boolean;
    draggedElementStyle?: ViewStyle;
    style?: ViewStyle;
    itemsInZoneStyle?: ViewStyle;
    item: any;
    renderItem: (item: any) => ReactElement;
}
declare class DragItem extends Container<DragItemProps, DragItemState> {
    state: DragItemState;
    ref: React.RefObject<View>;
    render(): React.JSX.Element;
}
export default DragItem;
