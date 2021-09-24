import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export default StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    borderColor: colors.primary,
    borderBottomWidth: .3,
    borderStyle: 'solid',
    backgroundColor: colors.light,
  },
  mainBody: {
    flexDirection: 'row'
  },
  authorText: {
    fontWeight: '500'
  },
  titleText: {
    fontWeight: 'bold'
  },
  metaContainer: {
    marginTop: 5,

  },
  titleContainer: {
    flex: 4
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  imageStyle: {
    height: 50,
    width: 50
  }
})