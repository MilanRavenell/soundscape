import { StyleSheet, Image, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const Header = ({
  title,
  onBackPressed,
  onOptionsPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {onBackPressed && (
          <Pressable onPress={onBackPressed}>
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        {onOptionsPress && (
          <Pressable style={styles.options} onPress={onOptionsPress}>
            <AntDesign name="ellipsis1" size={40} color="white" />
          </Pressable>
        )}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: '30px',
    fontWeight: '700',
    color:'white'
  }
});

export default Header;