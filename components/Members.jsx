import { StyleSheet, Image, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const Members = ({
  members,
  previewMode=false,
  hideHeader=false,
}) => {
  return (
    <View style={styles.container}>
        {!hideHeader && <Text style={styles.header}>
            Members:
        </Text>}
        <View style={styles.content}>
          <View style={styles.members}>
              {members.slice(0, previewMode ? 6 : members.length).map((mamber, index) => (
                  <View style={styles.profPicContainer} key={index}>
                      <Image style={styles.profPic} source={mamber.profPicUrl}/>
                  </View>
              ))}
          </View>
          {!previewMode && <View style={styles.arrowIcon}>
            <AntDesign name="caretright" size={24} color="black" />
          </View>}
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  header: {
    fontSize: '15px',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  members: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    overflowX: 'auto',
  },
  profPicContainer: {
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profPic: {
    height: '40px',
    width: '40px',
    borderRadius: '50%'
  }
});

export default Members;