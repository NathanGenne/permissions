import {View, Text, TouchableOpacity, SafeAreaView, Platform} from 'react-native';
import {request, requestMultiple, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import React, {useState} from 'react';

function askPermissions () {
    if(Platform.OS === 'ios') {
        request(PERMISSIONS.IOS.CAMERA).then((result) => { console.log(result) });
        request(PERMISSIONS.IOS.CAMERA).then((result) => { console.log(result) });
    } else {
        request(PERMISSIONS.ANDROID.CAMERA).then((result) => { console.log(result) });
        request(PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION).then((result) => { console.log(result) });
    }
}

const SwitchButtons = () => {

    const askForPermissions = (permission) => {
        request(permission).then((result) => {
            console.log(result);
        });
    };

    return (
        <SafeAreaView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                style = {{
                    width: '90%',
                    height: 50,
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    alignSelf: 'center',
                }} onPress = {() => {
                    if(Platform.OS === 'ios') {
                        askForPermissions(PERMISSIONS.IOS.CAMERA);
                    } else {
                        askForPermissions(PERMISSIONS.ANDROID.CAMERA);
                    }
                }}>
                    <Text>Camera Permission</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {{
                    width: '90%',
                    height: 50,
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    alignSelf: 'center',
                }} onPress = {() => {
                    if(Platform.OS === 'ios') {
                        askForPermissions(PERMISSIONS.IOS.MEDIA_LIBRARY);
                    } else {
                        askForPermissions(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
                    }
                }}>
                    <Text>Image Gallery Permission</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SwitchButtons;


/* import React, { useEffect } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const requestAndroidPermission = async (permission) => {
  try {
    const status = await PermissionsAndroid.check(permission);
    if (!status) {
      const granted = await PermissionsAndroid.request(permission);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return status;
  } catch (error) {
    console.error("Erreur lors de la demande de permission", error);
    return false;
  }
};

const checkPermissions = async () => {
  // Demander la permission de la caméra
  const cameraPermission = await requestAndroidPermission(PermissionsAndroid.PERMISSIONS.CAMERA);

  // Demander la permission de localisation
  const locationPermission = await requestAndroidPermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

  // Gérer le cas où les permissions ne sont pas accordées
  if (!cameraPermission || !locationPermission) {
    Alert.alert(
      "Permissions requises",
      "L'application a besoin d'accès à la caméra et à la localisation pour fonctionner correctement."
    );
  }
};

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      checkPermissions(); // Vérifier et demander les permissions au lancement
    }
  }, []);

  return (
    // Le contenu de ton application
  );
};

export default App;
 */








/* import React from 'react';
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Permission d\'utiliser la caméra',
        message:
            'Permet à TourPro d\'utiliser la caméra du téléphone ' +
            'pour scanner des QR codes.',
        buttonNegative: 'Non',
        buttonNeutral:  'Plus tard',
        buttonPositive: 'Oui',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.item}>Try permissions</Text>
      <Button title="request permissions" onPress={requestCameraPermission} />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App; */