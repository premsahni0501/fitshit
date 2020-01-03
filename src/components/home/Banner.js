import React from 'react';
import {Layout} from 'react-native-ui-kitten';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    height: 400,
  },
  bannerImg: {
    flex: 1,
    height: 400,
  },
});
export const Banner = ({imgSource}) => (
  <Layout style={{...styles.banner}}>
    <Image
      source={imgSource}
      style={{...styles.bannerImg}}
      resizeMode="cover"
    />
  </Layout>
);
