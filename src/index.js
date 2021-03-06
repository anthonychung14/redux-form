import createAll from './createAll'
import plain from './structure/plain'

export const {
  actionTypes,
  arrayInsert,
  arrayMove,
  arrayPop,
  arrayPush,
  arrayRemove,
  arrayRemoveAll,
  arrayShift,
  arraySplice,
  arraySwap,
  arrayUnshift,
  blur,
  autofill,
  change,
  destroy,
  Field,
  Fields,
  FieldArray,
  focus,
  formValueSelector,
  getFormValues,
  getFormSyncErrors,
  initialize,
  isDirty,
  isInvalid,
  isPristine,
  isValid,
  propTypes,
  reducer,
  reduxForm,
  reset,
  setSubmitFailed,
  setSubmitSucceeded,
  startAsyncValidation,
  startSubmit,
  stopAsyncValidation,
  stopSubmit,
  SubmissionError,
  touch,
  untouch,
  values
} = createAll(plain)
