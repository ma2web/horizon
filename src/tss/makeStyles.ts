import { createMakeStyles } from 'tss-react';

const theme = {
  backgroundSurfaceColor: 'red',
};

function useTheme() {
  return theme;
}

export const { makeStyles, useStyles } = createMakeStyles({ useTheme });
