import React, { useEffect, useState } from 'react';
import {View, Image, Animated, StyleSheet, StyleProp, ViewStyle, Text} from 'react-native';

interface AvatarSpeakerProps {
  message: string;
  avatarSource: any;
  style?: StyleProp<ViewStyle>;
}

export const AvatarSpeaker = ({ message, avatarSource, style }: AvatarSpeakerProps) => {
  const words = (message ?? "").split(' ');
  const [animations, setAnimations] = useState<Animated.Value[]>([]);

  useEffect(() => {
    const newAnimations = words.map(() => new Animated.Value(0));
    setAnimations(newAnimations);

    const animationsSequence = newAnimations.map((anim, i) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 150,
        delay: i * 150,
        useNativeDriver: true,
      })
    );

    Animated.stagger(250, animationsSequence).start();
  }, [message]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.avatarWrapper}>
        <Image source={avatarSource} style={styles.avatar} />
      </View>
      <View style={styles.bubble}>
        <View style={styles.messageContainer}>
          {words.map((word, index) => {
            const animatedValue = animations[index];
            if (!animatedValue) return null;

            return (
              <Animated.Text
                key={index}
                style={[
                  styles.message,
                  {
                    opacity: animatedValue,
                    transform: [
                      {
                        translateY: animatedValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: [10, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                {word + ' '}
              </Animated.Text>
            );
          })}
        </View>
      </View>
    </View>
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
    left: -10,
    top: 55,
    borderRadius: 100,
    borderColor: 'black',
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
  messageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
