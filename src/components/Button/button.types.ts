import { TouchableOpacityProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export enum BUTTON_VARIANTS {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

export interface ButtonProps extends TouchableOpacityProps {
  variant?: BUTTON_VARIANTS
  size?: 'sm' | 'md' | 'lg'
  iconRight?: keyof typeof Ionicons.glyphMap
  isLoading?: boolean
}
