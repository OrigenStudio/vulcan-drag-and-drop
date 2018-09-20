import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default ({ mapDragHandleProps } = {}) => Component => {
  const ComponentWithDraggable = ({
    DraggableComponent = 'div',
    DraggableProps = {},
    draggableId,
    ...props
  }) => (
    <Draggable draggableId={draggableId} index={props.index}>
      {(provided, snapshot) => (
        <DraggableComponent
          {...DraggableProps}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...(mapDragHandleProps ? {} : provided.dragHandleProps)}
        >
          <Component
            {...props}
            {...(mapDragHandleProps
              ? mapDragHandleProps({
                  ...props,
                  dragHandleProps: provided.dragHandleProps,
                })
              : {})}
            {...snapshot}
          />
        </DraggableComponent>
      )}
    </Draggable>
  );

  return ComponentWithDraggable;
};
