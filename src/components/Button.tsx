import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface IButtonProps {
  title: string;
}

export function Button({ title }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        {title}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 17
  }
})