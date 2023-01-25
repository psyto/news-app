import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: 'gray',
  }
});

const ListItem = () => {
    return (
        <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
              style={{width: 100, height: 100}}
              source={{uri: 'https://picsum.photos/id/10/200/200'}}
            />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text} numberOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitations
          </Text>
          <Text style={styles.subtext}>ReactNews</Text>
        </View>
      </View>
    )
}

export default ListItem;
