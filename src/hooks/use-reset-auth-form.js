import { useEffect } from "react";
import { useStore } from "react-redux";

export const useResetAuthForm = (reset) => {
  const store = useStore();

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout;

    const unsubscribe = store.subscribe(() => {
      let prevWasLogout = currentWasLogout;
      currentWasLogout = store.getState().app.wasLogout;
      if (prevWasLogout !== currentWasLogout) {
        reset();
      }
    });

    return () => unsubscribe();
  }, [reset, store]);
};
