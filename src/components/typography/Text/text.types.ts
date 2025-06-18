import { TextProps } from 'react-native'
import { ReactNode } from 'react'

export interface LtuTextProps extends TextProps {
  children: ReactNode
  size?: 'xs'
  bold?: boolean
  textCenter?: boolean
}
