import { FC } from 'react'
import { InputProps } from './input.types'
import { TextInput, View } from 'react-native'
import React from 'react'
import { InputStyles } from './input.styles'
import { LtuText } from '../typography/Text'
import { ltuRed } from '../../constants/colors'

export const LtuInput: FC<InputProps> = ({
  style,
  error,
  slotRight,
  ...props
}) => (
  <View style={InputStyles.wrapper}>
    <TextInput
      style={[
        InputStyles.input,
        style,
        !!error && { borderWidth: 1, borderColor: ltuRed },
      ]}
      {...props}
    />
    {slotRight && <View style={InputStyles.rightSlot}>{slotRight}</View>}
    {Boolean(error) && <LtuText style={InputStyles.error}>{error}</LtuText>}
  </View>
)
