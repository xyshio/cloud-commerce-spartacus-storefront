import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUserPaymentMethodsReducer from '../reducers/payment-methods.reducer';
import { UserPaymentMethodsState } from '../reducers/payment-methods.reducer';

export const getPaymentMethodsState: MemoizedSelector<
  any,
  UserPaymentMethodsState
> = createSelector(
  fromFeature.getUserState,
  (state: fromFeature.UserState) => state.payments
);

export const getPaymentMethods: MemoizedSelector<any, any> = createSelector(
  getPaymentMethodsState,
  fromUserPaymentMethodsReducer.getPaymentMethods
);

export const getPaymentMethodsLoading: MemoizedSelector<
  any,
  boolean
> = createSelector(
  getPaymentMethodsState,
  fromUserPaymentMethodsReducer.getLoading
);
