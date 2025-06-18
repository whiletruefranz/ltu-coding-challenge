import React, { FC } from 'react'
import { Text } from 'react-native'
import { TitleStyles } from './title.styles'
import { TitleProps } from './title.types'

export const LtuTitle: FC<TitleProps> = ({
  children,
  style,
  bold,
  textCenter,
  ...props
}) => (
  <Text
    style={[
      TitleStyles.title,
      bold && { fontWeight: '500', fontFamily: 'PrimaryFont-700' },
      textCenter && { textAlign: 'center' },
      style,
    ]}
    {...props}
  >
    {children}
  </Text>
)
