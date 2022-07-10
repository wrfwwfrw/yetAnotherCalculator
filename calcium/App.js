import React from 'react';
import type {Node} from 'react';
import Navigation from './src/navigation';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.bgStyle}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgStyle: {
    flex: 1,
    backgroundColor:'#27213C'
  }
});

export default App;
