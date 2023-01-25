import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

export default function App() {
  const items = articles.map( article => {return (
    <ListItem 
      imageUrl={article.UrlToImage}
      title={article.title}
      author={article.author}
    />
  )})

  return (
    <View style={styles.container}>
      {items}
    </View>
  );
}
