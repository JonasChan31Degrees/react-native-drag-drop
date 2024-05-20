import React from "react";
import Container from "./Container";
import Draggable from "./Draggable";
class DragItem extends Container {
    state = {
        layout: null,
        mounted: false,
    };
    ref = React.createRef();
    render() {
        const { onDrag, onDragEnd, item, renderItem, onGrant, addedHeight, itemsInZoneStyle, draggedElementStyle, propsInItems, } = this.props;
        const child = renderItem(item);
        const newChild = React.cloneElement(child, {
            style: {},
            ref: this.ref,
            onLayout: (e) => this.onSetLayout(e),
        });
        return (React.createElement(Draggable, { layout: this.state.layout, onDrag: onDrag, onGrant: onGrant, draggedElementStyle: draggedElementStyle, addedHeight: addedHeight, style: {
                ...child.props.style,
                ...itemsInZoneStyle,
            }, onDragEnd: () => onDragEnd(item), propsInItems: propsInItems, item: item, func: this.props.func }, newChild));
    }
}
export default DragItem;
