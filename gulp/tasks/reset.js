import { deleteAsync } from 'del';
import { app } from '../../gulpfile.js';

export const reset = () => {
  return deleteAsync(app.path.clean);
};
