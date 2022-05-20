import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {Action, ActionFunction1} from "redux-actions";

export function useReduxSetter<
  Payload,
  Key extends keyof Payload,
  Value extends Payload[Key],
>(actionCreator: ActionFunction1<Payload, Action<Payload>>, key: Key) {
  const dispatch = useDispatch();

  return useCallback(
    (value: Value) => {
      dispatch(
        actionCreator({
          [key]: value,
        } as any),
      );
    },
    [actionCreator, dispatch, key],
  );
}
