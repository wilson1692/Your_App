import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Camera, useCameraDevices } from 'expo-camera';

function App() {
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) 
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
    />
  )
}

export default App