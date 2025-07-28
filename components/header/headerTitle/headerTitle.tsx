import React from 'react';
import { COLORS } from '@/styles/colors';
import { FONTS } from '@/styles/fonts';
import { Image, Text, View } from 'react-native';

const HeaderTitle = () => {
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
