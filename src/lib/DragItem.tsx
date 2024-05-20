import React, { ReactElement } from "react";
import {
  LayoutChangeEvent,
  PanResponderGestureState,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import Container, {
  ContainerProps,
  ContainerState,
  LayoutProps,
} from "./Container";
import Draggable from "./Draggable";

interface DragItemState extends ContainerState {
  layout: LayoutProps | null;
}
interface DragItemProps extends ContainerProps {
  addedHeight: number;
  onDrag: (
    gestureState: PanResponderGestureState,
    layout: LayoutProps | null,
    cb: Function,
    zoneId: any
  ) => any;
  onGrant: (value: boolean) => any;
  onDragEnd: (gesture: PanResponderGestureState) => boolean;
  draggedElementStyle?: ViewStyle;
  style?: ViewStyle;
  itemsInZoneStyle?: ViewStyle;
  item: any;
  renderItem: (item: any) => ReactElement;
  propsInItems?: TouchableOpacityProps;
  func?: (i?: any, cb?: (i?: any) => void) => void;
}
class DragItem extends Container<DragItemProps, DragItemState> {
  state: DragItemState = {
    layout: null,
    mounted: false,
  };
  ref = React.createRef<View>();
  render() {
    const {
      onDrag,
      onDragEnd,
      item,
      renderItem,
      onGrant,
      addedHeight,
      itemsInZoneStyle,
      draggedElementStyle,
      propsInItems,
    } = this.props;
    const child = renderItem(item);
    const newChild = React.cloneElement(child, {
      style: {},
      ref: this.ref,
      onLayout: (e: LayoutChangeEvent) => this.onSetLayout(e),
    });
    return (
      <Draggable
        layout={this.state.layout}
        onDrag={onDrag}
        onGrant={onGrant}
        draggedElementStyle={draggedElementStyle}
        addedHeight={addedHeight}
        style={{
          ...child.props.style,
          ...itemsInZoneStyle,
        }}
        onDragEnd={() => onDragEnd(item)}
        propsInItems={propsInItems}
        item={item}
        func={this.props.func}
      >
        {newChild}
      </Draggable>
    );
  }
}

export default DragItem;
