import { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

export interface CardProps {
  children: ReactNode
  xsBorder?: boolean
  style?: ViewStyle
}
