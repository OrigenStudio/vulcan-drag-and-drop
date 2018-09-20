import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export default () => Component => {
  const ComponentWithDragAndDropContext = ({ onDragEnd, ...props }) => (
    <DragDropContext onDragEnd={onDragEnd}>
      <Component {...props} />
    </DragDropContext>
  );

  return ComponentWithDragAndDropContext;
};
