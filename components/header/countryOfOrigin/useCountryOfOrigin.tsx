import { useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JapanFlag from '../../common/flagLogos/japan.svg';
import USAFlag from '../../common/flagLogos/usa.svg';
import GermanyFlag from '../../common/flagLogos/germany.svg';
import { Image } from 'react-native';

enum AvailableCounties {
  Japan = 'japan',
  Germany = 'germany',
  USA = 'usa',
}

export const useCountryOfOrigin = () => {
  const [showCountryModal, setShowCountryModal] = useState(false);

  useEffect(() => {
    const checkSelectedCountry = async () => {
      const selectedCountry = await AsyncStorage.getItem('selectedCountry');

      if (selectedCountry) {
        return;
      }

      await AsyncStorage.setItem('selectedCountry', 'japan');
    };

    checkSelectedCountry();
  }, []);

  const getSelectedCountryFlag = async () => {
    const selectedCountry = (await AsyncStorage.getItem(
      'selectedCountry'
    )) as AvailableCounties;

    switch (selectedCountry) {
      case 'japan':
      default:
        return <JapanFlag width={30} height={30} />;
      case 'usa':
        return <USAFlag width={30} height={30} />;
      case 'germany':
        return <GermanyFlag width={30} height={30} />;
    }
  };

  const countryButtonsAssets = useMemo(() => {
    return [
      {
        flag: <JapanFlag width={38} height={28} />,
        countryname: AvailableCounties.Japan,
        image: (
          <Image
            style={{ width: 70, height: 50 }}
            source={require('../../common/countryCarImages/toyota.png')}
          />
        ),
        needBorder: true,
      },
      {
        flag: <GermanyFlag width={40} height={30} />,
        countryname: AvailableCounties.Germany,
        image: (
          <Image
            style={{ width: 70, height: 50 }}
            source={require('../../common/countryCarImages/mercedes.png')}
          />
        ),
      },
      {
        flag: <USAFlag width={40} height={30} />,
        countryname: AvailableCounties.USA,
        image: (
          <Image
            style={{ width: 70, height: 50 }}
            source={require('../../common/countryCarImages/dodge.png')}
          />
        ),
      },
    ];
  }, []);

  const selectCarManufacturerCountry = async (
    countryName: AvailableCounties
  ) => {
    await AsyncStorage.setItem('selectedCountry', countryName);
    setShowCountryModal(false);
  };

  return {
    coountryFlag: getSelectedCountryFlag(),
    showCountryModal,
    countryButtonsAssets,
    openCountryModal: () => setShowCountryModal(true),
    closeCountryModal: () => setShowCountryModal(false),
    selectCarManufacturerCountry,
  };
};
