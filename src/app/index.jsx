
import { Redirect } from 'expo-router';

import Logo from '../../../assets/logo.svg';

export default function MinhaTela() {
  return <Logo width={150} height={150} />;
}

export default function Index() {
  return <Redirect href="/(tabs)/login/login" />;
}
