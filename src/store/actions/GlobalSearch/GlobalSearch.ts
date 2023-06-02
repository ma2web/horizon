import { ToggleModalAction } from '../../../types/types';

export const toggleModal = (
  open: boolean,
  dispatch: React.Dispatch<ToggleModalAction>
) => {
  dispatch({
    type: 'TOGGLE_MODAL',
    open,
  });
};
