import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import db from '../config';

export default class WriteScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      storyTitle: '',
      authorName: '',
      story: '',
    }
  }

  submitStory = () => {
    db.collection("stories").add({
      storyTitle: this.state.storyTitle,
      authorName: this.state.authorName,
      story: this.state.story,
      //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
    })
    this.setState({
      storyTitle: '',
      authorName: '',
      story: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#6200EE'}
          centerComponent={{
            text: 'Bed Time Stories',
            style: { color: 'white', fontSize: 20 },
          }}
        />
        <TextInput
          placeholder="Story storyTitle"
          style={styles.storyTitle}
          onChangeText={(text) => {
            this.setState({
              storyTitle: text
            })
          }}
          value={this.state.storyTitle}
        />
        <TextInput
          placeholder="AuthorName"
          style={styles.authorName}
          onChangeText={(text) => {
            this.setState({
              authorName: text
            })
          }}
          value={this.state.authorName} />
        <TextInput
          placeholder="Write your story"
          style={styles.story}
          multiline={true}
          onChangeText={(text) => {
            this.setState({
              story: text
            })
          }}
          value={this.state.story} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text
            style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storyTitle: {
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
  },
  authorName: {
    height: 40,
    borderWidth: 2,
    margin: 10,
  },
  story: {
    height: 250,
    borderWidth: 2,
    margin: 10,
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#6200EE',
    width: 80,
    height: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
