import React from 'react'
import { StyleSheet, View, Image} from 'react-native'

const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
    },
    stretch: {
      width: '120%',
      height: '30%',
      resizeMode: 'stretch',
    },
  });
  
  const DisplayAnImageWithStyle = () => {
    return (
      <Image
        style={styles.stretch}
        source={require('../assets/batman.jpg')}
        />
    );
  };
  
  export default DisplayAnImageWithStyle