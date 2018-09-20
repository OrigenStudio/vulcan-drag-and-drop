import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

export default () => Component => {
  const ComponentWithDroppable = ({
    droppableId,
    DroppableComponent = 'div',
    DroppableProps = {},
    children = null,
    ...props
  }) => (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <DroppableComponent
          {...DroppableProps}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Component {...props} {...snapshot}>
            {children}
          </Component>

          {provided.placeholder}
        </DroppableComponent>
      )}
    </Droppable>
  );

  return ComponentWithDroppable;
};
