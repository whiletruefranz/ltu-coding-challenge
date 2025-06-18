import { StyleSheet } from 'react-native'
import { ltuBlue, ltuRed, ltuRose } from '../../constants/colors'

export const InputStyles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: ltuRose,
    paddingHorizontal: 10,
    paddingVertical: 11,
    fontFamily: 'PrimaryFont-500',
    color: ltuBlue,
    fontSize: 18,
    borderRadius: 7,
  },
  rightSlot: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
  },
  error: {
    color: ltuRed,
    marginLeft: 5,
  },
})
