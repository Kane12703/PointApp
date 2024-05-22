import * as React from 'react';
import Svg, {SvgProps, Path,Rect,G} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 100 60">
    <Rect fill="#cc5577" width="100" height="60" />
    <G>
      <Rect fill="#cc5577" width="11" height="11" />
      <Rect fill="#ce5776" x="10" width="11" height="11" />
      <Rect fill="#d05a76" y="10" width="11" height="11" />
      <Rect fill="#d15c75" x="20" width="11" height="11" />
      <Rect fill="#d35f74" x="10" y="10" width="11" height="11" />
      <Rect fill="#d46174" y="20" width="11" height="11" />
      <Rect fill="#d66473" x="30" width="11" height="11" />
      <Rect fill="#d76673" x="20" y="10" width="11" height="11" />
      <Rect fill="#d96972" x="10" y="20" width="11" height="11" />
      <Rect fill="#da6c72" y="30" width="11" height="11" />
      <Rect fill="#db6e71" x="40" width="11" height="11" />
      <Rect fill="#dc7171" x="30" y="10" width="11" height="11" />
      <Rect fill="#dd7471" x="20" y="20" width="11" height="11" />
      <Rect fill="#de7671" x="10" y="30" width="11" height="11" />
      <Rect fill="#df7971" y="40" width="11" height="11" />
      <Rect fill="#e07c71" x="50" width="11" height="11" />
      <Rect fill="#e17e71" x="40" y="10" width="11" height="11" />
      <Rect fill="#e28171" x="30" y="20" width="11" height="11" />
      <Rect fill="#e38471" x="20" y="30" width="11" height="11" />
      <Rect fill="#e38771" x="10" y="40" width="11" height="11" />
      <Rect fill="#e48972" y="50" width="11" height="11" />
      <Rect fill="#e58c72" x="60" width="11" height="11" />
      <Rect fill="#e58f73" x="50" y="10" width="11" height="11" />
      <Rect fill="#e69173" x="40" y="20" width="11" height="11" />
      <Rect fill="#e69474" x="30" y="30" width="11" height="11" />
      <Rect fill="#e79775" x="20" y="40" width="11" height="11" />
      <Rect fill="#e79a75" x="10" y="50" width="11" height="11" />
      <Rect fill="#e89c76" x="70" width="11" height="11" />
      <Rect fill="#e89f77" x="60" y="10" width="11" height="11" />
      <Rect fill="#e8a278" x="50" y="20" width="11" height="11" />
      <Rect fill="#e9a47a" x="40" y="30" width="11" height="11" />
      <Rect fill="#e9a77b" x="30" y="40" width="11" height="11" />
      <Rect fill="#e9aa7c" x="20" y="50" width="11" height="11" />
      <Rect fill="#e9ac7e" x="80" width="11" height="11" />
      <Rect fill="#eaaf7f" x="70" y="10" width="11" height="11" />
      <Rect fill="#eab281" x="60" y="20" width="11" height="11" />
      <Rect fill="#eab482" x="50" y="30" width="11" height="11" />
      <Rect fill="#eab784" x="40" y="40" width="11" height="11" />
      <Rect fill="#eaba86" x="30" y="50" width="11" height="11" />
      <Rect fill="#ebbc88" x="90" width="11" height="11" />
      <Rect fill="#ebbf8a" x="80" y="10" width="11" height="11" />
      <Rect fill="#ebc18c" x="70" y="20" width="11" height="11" />
      <Rect fill="#ebc48e" x="60" y="30" width="11" height="11" />
      <Rect fill="#ebc790" x="50" y="40" width="11" height="11" />
      <Rect fill="#ebc992" x="40" y="50" width="11" height="11" />
      <Rect fill="#ebcc94" x="90" y="10" width="11" height="11" />
      <Rect fill="#ebce97" x="80" y="20" width="11" height="11" />
      <Rect fill="#ebd199" x="70" y="30" width="11" height="11" />
      <Rect fill="#ecd39c" x="60" y="40" width="11" height="11" />
      <Rect fill="#ecd69e" x="50" y="50" width="11" height="11" />
      <Rect fill="#ecd8a1" x="90" y="20" width="11" height="11" />
      <Rect fill="#ecdba4" x="80" y="30" width="11" height="11" />
      <Rect fill="#ecdda6" x="70" y="40" width="11" height="11" />
      <Rect fill="#ece0a9" x="60" y="50" width="11" height="11" />
      <Rect fill="#ede2ac" x="90" y="30" width="11" height="11" />
      <Rect fill="#ede4af" x="80" y="40" width="11" height="11" />
      <Rect fill="#ede7b2" x="70" y="50" width="11" height="11" />
      <Rect fill="#ede9b5" x="90" y="40" width="11" height="11" />
      <Rect fill="#eeecb8" x="80" y="50" width="11" height="11" />
      <Rect fill="#EEB" x="90" y="50" width="11" height="11" />
    </G>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
