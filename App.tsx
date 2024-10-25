/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import SwitchButtons from './switchButtons';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {request, requestMultiple, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {
  TouchableOpacity,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Linking,
  PermissionsAndroid
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const permissionCamera = askPermissionCamera();
  const checkpermission = checkPermission();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Permission Module">
            <Button title="Ask Permission Camera" onPress = {() => {Linking.openSettings()}} />


            {/* Le truc le plus important à faire c'est le truc ci dessous !!! */}

            {/* {PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(response => { console.log('response', response); })} */}
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

function askPermissionCamera () {
  if(Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.CAMERA).then((result) => { console.log(result); return result });
  } else {
      request(PERMISSIONS.ANDROID.CAMERA).then((result) => { console.log(result); return {result} });
  }
}

function checkPermission () {
  if(Platform.OS === 'ios') {
      check(PERMISSIONS.IOS.CAMERA).then((result) => { return result });
  } else {
      check(PERMISSIONS.ANDROID.CAMERA).then((result) => { return {result} });
  }
}

export default App;
