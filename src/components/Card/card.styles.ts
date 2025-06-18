import { StyleSheet } from 'react-native'
import { ltuRose } from '../../constants/colors'

export const CardStyles = ({ xsBorder }) =>
  StyleSheet.create({
    card: {
      borderRadius: xsBorder ? 10 : 20,
      padding: 17,
      backgroundColor: ltuRose,
    },
  })
