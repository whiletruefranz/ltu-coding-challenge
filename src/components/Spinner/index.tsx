import React, { FC, useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";
import { SpinnerSizeMap, SpinnerStyles } from "./spinner.styles";
import { SPINNER_SIZE, SpinnerProps } from "./spinner.types";
import { ltuBlue } from "../../constants/colors";

export const LtuSpinner: FC<SpinnerProps> = ({
  size = SPINNER_SIZE.MD,
  color = ltuBlue,
}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const dimension = SpinnerSizeMap[size];

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [animation]);

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <View
      style={[
        SpinnerStyles.container,
        {
          width: dimension,
          height: dimension,
        },
      ]}
    >
      <Animated.View
        style={[
          {
            width: dimension * 0.5,
            height: dimension * 0.5,
            borderRadius: (dimension * 0.5) / 2,
            backgroundColor: color,
            transform: [{ scale }],
            opacity,
          },
        ]}
      />
    </View>
  );
};
