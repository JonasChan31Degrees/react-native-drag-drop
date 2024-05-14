import React, { ReactElement } from "react";
import { PanResponderGestureState, ScrollView, ViewStyle } from "react-native";
import Container, { ContainerProps, ContainerState, Display, LayoutProps } from "./Container";
interface DragAndDropState extends ContainerState {
    items: any[];
    zones: any[];
    dragging: boolean;
    changed: boolean | null;
    scrollY: number;
    counter: number;
    addedHeight: number | null;
    layout: LayoutProps | null;
    contentSize?: {
        width: number;
        height: number;
    } | null;
    itemsContainerLayout: LayoutProps | null;
}
interface DragAndDropProps extends ContainerProps {
    items: any[];
    zones: any[];
    zoneKeyExtractor: (zone: any) => string | number;
    itemKeyExtractor: (zone: any) => string | number;
    maxItemsPerZone?: number;
    onMaj: (zones: any[], items: any[]) => any;
    itemsInZoneStyle?: ViewStyle;
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
    draggedElementStyle?: ViewStyle;
    headerComponent?: ReactElement;
    footerComponent?: ReactElement;
    itemsContainerHeightFixe?: boolean;
    renderItem: (item: any) => ReactElement;
    itemsContainerStyle?: ViewStyle;
    zonesContainerStyle?: ViewStyle;
    renderZone: (zone: any, children?: ReactElement, hover?: boolean) => ReactElement;
    itemsDisplay?: Display;
    itemsInZoneDisplay?: Display;
    itemsNumCollumns?: number;
    itemsInZoneNumCollumns?: number;
}
declare class DragAndDrop extends Container<DragAndDropProps, DragAndDropState> {
    state: DragAndDropState;
    timeout: number | null;
    ref: React.RefObject<ScrollView>;
    UNSAFE_componentWillReceiveProps(nextProps: DragAndDropProps): void;
    onDrag: (gesture: PanResponderGestureState, layoutElement: LayoutProps | null, cb: Function, zoneId: any) => void;
    onDragEnd: (item: any) => boolean;
    render(): React.JSX.Element;
}
export default DragAndDrop;
