import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const isPortrait = () => {
  const dimension = Dimensions.get("screen");
  return dimension.height >= dimension.width;
};

export function useOrientation(): "PORTRAIT" | "LANDSCAPE" {
  const [orientation, setOrientation] = useState<"PORTRAIT" | "LANDSCAPE">(
    isPortrait() ? "PORTRAIT" : "LANDSCAPE"
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? "PORTRAIT" : "LANDSCAPE");

    Dimensions.addEventListener("change", callback);

    return () => {
      Dimensions.addEventListener("change", callback).remove();
    };
  }, []);

  return orientation;
}
