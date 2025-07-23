import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JapanFlag from '../../common/flagLogos/japan.svg';

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
    }
  };

  return {
    coountryFlag: getSelectedCountryFlag(),
    showCountryModal,
    openCountryModal: () => setShowCountryModal(true),
    closeCountryModal: () => {
      console.log(true);
      setShowCountryModal(false);
    },
  };
};
