
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Header, Members, Player, SeedSongsList } from './index';
import { AntDesign } from '@expo/vector-icons'; 

const Modal = ({
    title,
    closeModal,
    btnText,
    onBtnPressed,
    children,
}) => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable style={styles.closeContainer} onPress={closeModal}>
              <AntDesign name="close" size={36} color="white" />
            </Pressable>
            <View style={styles.title}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
          </View>
          {btnText && (
            <View style={styles.btnContainer}>
              <Pressable
                  style={styles.btn}
                  onPress={onBtnPressed}
              >
                  <Text>{btnText}</Text>
              </Pressable>
            </View>
          )}
          <View style={styles.children}>
            { children }
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 2,
      padding: '20px',
      backdropFilter: 'blur(10px)',
    },
    header: {
      width: '100%',
      position: 'relative',
      height: '36px',
    },
    closeContainer: {
      position: 'absolute',
      left: 0,
      zIndex: 2,
    },
    title: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: '20px',
      color: 'white',
    },
    btnContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    btn: {
      padding: '10px',
      backgroundColor: 'orange',
      borderRadius: '50px',
    },
    children: {
      flex: 1,
      paddingTop: '20px',
    }
});

export default Modal;