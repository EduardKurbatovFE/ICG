import React from 'react';
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useCountryOfOrigin } from './useCountryOfOrigin';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GLOBAL_STYLES } from '@/styles/global';
import { countryOfOriginStyles } from './countryOfOriginStyles';

const CountryOfOrigin = () => {
  const {
    coountryFlag,
    showCountryModal,
    countryButtonsAssets,
    openCountryModal,
    closeCountryModal,
    selectCarManufacturerCountry,
  } = useCountryOfOrigin();

  return (
    <View>
      <TouchableOpacity onPress={openCountryModal}>
        {coountryFlag}
      </TouchableOpacity>

      <SafeAreaProvider>
        <SafeAreaView style={GLOBAL_STYLES.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={showCountryModal}
            onRequestClose={closeCountryModal}
          >
            <TouchableWithoutFeedback onPress={closeCountryModal}>
              <View style={countryOfOriginStyles.modalBackground}>
                <TouchableWithoutFeedback>
                  <View style={countryOfOriginStyles.modalContent}>
                    {countryButtonsAssets.map(
                      ({ flag, countryname, image, needBorder }, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() =>
                            selectCarManufacturerCountry(countryname)
                          }
                          style={countryOfOriginStyles.countryButton}
                        >
                          <View
                            style={{
                              borderWidth: needBorder ? 1 : 0,
                              ...countryOfOriginStyles.flagWrapper,
                            }}
                          >
                            {flag}
                          </View>
                          <View>{image}</View>
                        </TouchableOpacity>
                      )
                    )}
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

export default CountryOfOrigin;
