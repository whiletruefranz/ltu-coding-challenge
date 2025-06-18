import { Ionicons } from '@expo/vector-icons'

export interface IconProps {
  name: keyof typeof Ionicons.glyphMap
  color?: string
  size?: number
  style?: object
}
