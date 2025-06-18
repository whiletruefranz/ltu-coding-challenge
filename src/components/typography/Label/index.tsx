import React, { FC } from 'react'
import { Text } from 'react-native'
import { LabelProps } from './label.types'
import { LabelStyles } from './label.styles'
export const LtuLabel: FC<LabelProps> = ({ children, style, ...props }) => (
  <Text style={[LabelStyles.label, style]} {...props}>
    {children}
  </Text>
)
