import { CanActivateFn } from '@angular/router';

export const featureGuard: CanActivateFn = (route, state) => {
  return true;
};
