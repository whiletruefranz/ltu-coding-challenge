import { StyleSheet } from 'react-native'
import { ltuBlue, ltuRose, ltuWhite } from '../../constants/colors'
import { BUTTON_VARIANTS } from './button.types'

const colorBgVariantMap = {
  [BUTTON_VARIANTS.PRIMARY]: ltuBlue,
  [BUTTON_VARIANTS.SECONDARY]: ltuWhite,
  [BUTTON_VARIANTS.TERTIARY]: ltuRose,
}

const colorTextVariantMap = {
  [BUTTON_VARIANTS.PRIMARY]: ltuWhite,
  [BUTTON_VARIANTS.SECONDARY]: ltuBlue,
  [BUTTON_VARIANTS.TERTIARY]: ltuBlue,
}

const sizeMap = {
  sm: {
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 7,
  },
  md: {
    height: 56,
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  lg: {
    height: 56,
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
}
export const ButtonStyles = ({ variant, size, disabled }) =>
  StyleSheet.create({
    button: {
      height: sizeMap[size].height,
      marginVertical: 4,
      borderRadius: sizeMap[size].borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: sizeMap[size].paddingVertical,
      paddingHorizontal: sizeMap[size].paddingHorizontal,
      flexDirection: 'row',
      width: '100%',
      backgroundColor: colorBgVariantMap[variant],
      opacity: disabled ? 0.4 : 1.0,
    },
    text: {
      color: colorTextVariantMap[variant],
      fontSize: 18,
      fontFamily: 'PrimaryFont-600',
    },
    iconRight: {
      marginLeft: 8,
    },
    loader: {
      width: '100%',
      color: ltuBlue,
      height: 56,
      marginHorizontal: 0,
      marginVertical: 0,
      padding: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  })
