import React, { ReactElement } from "react";
import { PanResponderGestureState, View, ViewStyle } from "react-native";
import Container, { ContainerProps, ContainerState, Display, LayoutProps } from "./Container";
interface ItemsContainerState extends ContainerState {
    layout: LayoutProps | null;
}
interface ItemsContainerProps extends ContainerProps {
    addedHeight: number;
    onDrag: (gestureState: PanResponderGestureState, layout: LayoutProps | null, cb: Function, zoneId: any) => any;
    onGrant: (value: boolean) => any;
    onDragEnd: (gesture: PanResponderGestureState) => boolean;
    draggedElementStyle?: ViewStyle;
    layout?: LayoutProps | null;
    style?: ViewStyle;
    dragging: boolean;
    itemsContainerHeightFixe?: boolean;
    itemKeyExtractor: (item: any) => number | string;
    itemsInZoneStyle?: ViewStyle;
    itemsContainerStyle?: ViewStyle;
    onLayout?: (layout: LayoutProps | null) => any;
    items: any[];
    renderItem: (item: any) => ReactElement;
    itemsDisplay?: Display;
    numCollumns?: number;
}
declare class ItemsContainer extends Container<ItemsContainerProps, ItemsContainerState> {
    ref: React.RefObject<View>;
    onLayoutCallback: () => void;
    render(): JSX.Element;
}
export default ItemsContainer;
