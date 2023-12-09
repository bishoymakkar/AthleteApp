import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("screen");
// all sizes based on iPhone 5s
const guidelineBaseWidth = Platform.OS === "ios" ? 320 : 360;
const guidelineBaseHeight = 568;

// Will return linear scaled result of the provided size, based on your device's screen width.
const scale = size => (width / guidelineBaseWidth) * size;

// Will return linear scaled result of the provided size, based on your device's screen height.
const verticalScale = size => (height / guidelineBaseHeight) * size;

const moderateScale = (size, ceil = true, factor = 0.5) => {
  if (ceil) return Math.ceil(size + (scale(size) - size) * factor);
  return size + (scale(size) - size) * factor;
};

export { scale, moderateScale, verticalScale };
