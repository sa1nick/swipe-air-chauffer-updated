import {StyleSheet} from 'react-native';

import SAD from '../../SAD';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  skipButton: {
    position: 'absolute',
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  skipText: {
    color: SAD.colors.orange,
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    marginRight: 15,
  },
});
