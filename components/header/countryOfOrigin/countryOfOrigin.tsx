import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
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
    openCountryModal,
    closeCountryModal,
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
              <View style={styles.modalBackground}>
                <TouchableWithoutFeedback>
                  <View style={styles.modalContent}>
                    <Text>This is your modal content</Text>
                    <Pressable
                      onPress={closeCountryModal}
                      style={styles.closeButton}
                    >
                      <Text>Close</Text>
                    </Pressable>
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

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  openButton: { padding: 10, backgroundColor: 'blue', borderRadius: 5 },
  buttonText: { color: 'white' },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  closeButton: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default CountryOfOrigin;
