import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import getContext from 'recompose/getContext';
import withHandlers from 'recompose/withHandlers';

const reorder = (list, source, destination) => {
  const result = Array.from(list);
  const [removed] = result.splice(source.index, 1);
  result.splice(destination.index, 0, removed);
  return result;
};

export default () =>
  compose(
    getContext({
      updateCurrentValues: PropTypes.func,
    }),
    withHandlers({
      onDragEnd: ({ path, value: values, updateCurrentValues }) => ({
        source,
        destination,
      }) => {
        if (!destination) {
          return;
        }

        if (source.droppableId === destination.droppableId) {
          updateCurrentValues({
            [path]: reorder(values, source, destination),
          });
        }
      },
    }),
  );
