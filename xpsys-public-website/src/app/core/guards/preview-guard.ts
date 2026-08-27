import { CanActivateFn } from '@angular/router';

export const previewGuard: CanActivateFn = (route, state) => {
  return true;
};
