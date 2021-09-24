import { StyleSheet } from "react-native"
import { colors } from '../../theme'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20
  },
  loginButton: {
    width: '100%',
    padding: 20,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  loginText: {
    color: colors.light,
    fontWeight: 'bold'
  }
})