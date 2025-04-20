import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface AvatarSpeakerProps {
  message: string;
  avatarSource: any;
  style?: StyleProp<ViewStyle>;
}

export const AvatarSpeaker = ({ message, avatarSource, style }: AvatarSpeakerProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, style, { opacity: fadeAnim }]}>
      <View style={styles.avatarWrapper}>
        <Image source={avatarSource} style={styles.avatar} />
      </View>
      <View style={styles.bubble}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingTop: 40,
    margin: 10,
  },
  avatarWrapper: {
    width: 110,
    height: 110,
    left: -15,
    top: 35,
    borderRadius: 100,
    borderColor : 'black',
    borderWidth: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -20,
    zIndex: 2,
    elevation: 6,
  },
  avatar: {
    top: -15,
    width: 150,
    height: 180,
    zIndex: 2,
    // elevation: 5,

   
  },
  bubble: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    padding: 25,
    paddingRight: 20,
    zIndex: 1,
    flex: 1,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
