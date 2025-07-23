import { COLORS } from '@/styles/colors';
import { FONTS } from '@/styles/fonts';
import { GLOBAL_STYLES } from '@/styles/global';
import { METRICS } from '@/styles/metrics';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const HeaderTitle = () => {
  const [loaded, error] = useFonts({
    'Winky-Rough': require('../../../assets/fonts/WinkyRough-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <View>
        <Image
          source={require('../../../assets/logos/ICGMainLogo.png')}
          style={{
            width: 35,
            height: 35,
          }}
        />
      </View>

      <View>
        <Text
          style={{
            color: COLORS.white,
            fontSize: FONTS.sizes.large,
            fontFamily: 'WinkyRough-Regular',
          }}
        >
          ICG
        </Text>
      </View>
    </View>
  );
};

export default HeaderTitle;
