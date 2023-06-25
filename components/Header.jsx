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
            <AntDesign name="left" size={24} color="black" />
          </Pressable>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        {onOptionsPress && (
          <Pressable style={styles.options} onPress={onOptionsPress}>
            <AntDesign name="ellipsis1" size={40} color="black" />
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
    marginBottom: '20px',
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
    fontSize: '24px',
  }
});

export default Header;