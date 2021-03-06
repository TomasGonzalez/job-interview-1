import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { AuthContextProvider } from './contexts/AuthContext';
import IndexNav from './navigation/IndexNav';
import { colors } from './theme'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthContextProvider>
        <IndexNav />
      </AuthContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});