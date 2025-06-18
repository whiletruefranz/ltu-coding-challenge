import React, { FC, useEffect, useRef } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ButtonStyles } from './button.styles'
import { BUTTON_VARIANTS, ButtonProps } from './button.types'
import { Ionicons } from '@expo/vector-icons'
import { ltuBlue } from '../../constants/colors'
import LottieView from 'lottie-react-native'

export const LtuButton: FC<ButtonProps> = ({
  children,
  variant = BUTTON_VARIANTS.PRIMARY,
  size = 'md',
  testID,
  style,
  disabled,
  iconRight,
  isLoading,
  ...props
}) => {
  const animationRef = useRef<any>()
  const styles = ButtonStyles({ variant, size, disabled })
  useEffect(() => {
    if (isLoading) {
      animationRef.current?.play()
    } else {
      animationRef.current?.pause()
    }
  }, [isLoading])
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style]}
      accessible
      testID={testID}
      disabled={disabled}
      {...props}
    >
      {isLoading ? (
        <LottieView
          resizeMode="cover"
          style={styles.loader}
          ref={animationRef}
          source={
            variant === BUTTON_VARIANTS.PRIMARY
              ? require('../../../assets/animations/loading3.json')
              : require('../../../assets/animations/loading3_blue.json')
          }
          speed={0.8}
          loop={true}
          autoPlay
        />
      ) : (
        <>
          <Text style={styles.text}>{children}</Text>
          {iconRight && (
            <Ionicons
              name={iconRight}
              size={20}
              color={ltuBlue}
              style={[styles.iconRight]}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  )
}
