import React from 'react'
import { FC } from 'react'
import { Text } from 'react-native'
import { HeadlineProps } from './headline.types'
import { HeadlineStyles } from './headline.styles'

export const LtuHeadline: FC<HeadlineProps> = ({
  children,
  style,
  textCenter,
}) => (
  <Text
    style={[
      HeadlineStyles.headline,
      style,
      textCenter && { textAlign: 'center' },
    ]}
  >
    {children}
  </Text>
)
