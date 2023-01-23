import React, { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

const useOrientation = () => {
  const [orientation, setOrientation] = useState<any>(1);

  useEffect(() => {
    async function getOrientation() {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(currentOrientation);
    }
    getOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo }) => {
        setOrientation(orientationInfo.orientation);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return orientation;
};

export default useOrientation;
