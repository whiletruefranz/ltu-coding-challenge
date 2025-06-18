import { TextStyle, TextProps } from 'react-native'
import { ReactNode } from 'react'

export interface TitleProps extends TextProps {
  children: ReactNode
  style?: TextStyle
  bold?: boolean
  textCenter?: boolean
}
