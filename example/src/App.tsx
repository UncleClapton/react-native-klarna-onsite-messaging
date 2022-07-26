import * as React from 'react';

import { Text, View } from 'react-native';
import {
  KlarnaOnsiteMessagingView,
  KlarnaOSMEnvironment,
  KlarnaOSMRegion,
  KlarnaOSMViewError,
} from 'react-native-klarna-onsite-messaging';
import { useState } from 'react';
import Config from 'react-native-config';
import { styles } from './App.style';

export const CLIENT_ID = Config.CLIENT_ID;
export const PLACEMENT_KEY = Config.PLACEMENT_KEY;

export default function App() {
  const [error, setError] = useState<KlarnaOSMViewError>();

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30 }}>Klarna On-Site Messaging Demo</Text>
      <KlarnaOnsiteMessagingView
        style={styles.box}
        clientId={CLIENT_ID}
        placementKey={PLACEMENT_KEY}
        locale={'en-GB'}
        environment={KlarnaOSMEnvironment.production}
        region={KlarnaOSMRegion.EU}
        purchaseAmount={2000}
        onOSMViewError={setError}
      />
      <Text style={{ marginTop: 30 }}>Klarna On-Site Messaging Demo</Text>
      <Text style={{ marginTop: 20, textAlign: 'center' }}>
        {JSON.stringify(error)}
      </Text>
    </View>
  );
}
