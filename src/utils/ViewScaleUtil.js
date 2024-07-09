import SAD from '../SAD';

export function scaleFactor(val) {
  let scaleVal = 0;
  scaleVal = val * (SAD.constant.screenWidth / 414);
  return scaleVal;
}
