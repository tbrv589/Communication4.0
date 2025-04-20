import React from 'react';
import { Text, TextProps } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function TextResponsive({ children, style, ...props }: TextProps) {
  return (
    <Text style={[{ fontSize: RFPercentage(2.2) }, style]} {...props}>
      {children}
    </Text>
  );
}
