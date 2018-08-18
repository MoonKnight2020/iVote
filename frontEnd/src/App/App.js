import React from 'react';
import { StyleSheet, Text, View, ScrollView, AppRegistry } from 'react-native';
import AccordionView from "./components/ExpandableList/AccordionView";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <ScrollView style={styles.scrollContainer}>
              <AccordionView title="A ExpandableLists with short content text">
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </AccordionView>
              <AccordionView title="A ExpandableLists with long content text">
                  <Text>Lorem ipsumfsajkfl;safjkl;sdjfalsjfsakl;fjskl;fjalk;flas;jfklajf;sadjlfk;ajslkfaj;flaksjfjskalfjl;sajfklasjfklasdjfkl;asdjfl;asjfklsaj;fjkadl;fdjaskfl;sdajkfl;sjfkla;jfklsa;jfdklasj;flasjklfajfkl;asjfkla;sjfkl;asjfkal;jfaskl;jfsakl;jfdkals;fjskl;fajfksl;nvslv;jfkl;fjaskfl;safanfjsakflas;...</Text>
              </AccordionView>
              <AccordionView title="Another ExpandableLists">
                  <Text>Lorem ipsum dolor sit amet...</Text>
              </AccordionView>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    scrollContainer: {
        flex            : 1,
        backgroundColor : '#f4f7f9',
        paddingTop      : 30
    },
});

AppRegistry.registerComponent('AccordionView', () => AccordionView)
