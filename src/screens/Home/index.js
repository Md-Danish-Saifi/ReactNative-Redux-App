import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Alert,
  Linking,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import { hitAPI } from '../../action/homeapi';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShareAlt, faComment, faHeart, faSignOut } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home = (props) => {

  useEffect(() => {
    try {
      props.hitAPI();
    } catch (error) {
      console.log('Error in Fetch Post List' + error);
    }
  }, [props])

const logOut = async() => { 
  await AsyncStorage.clear();
  props.navigation.goBack();
 }

  const { Post } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Posts</Text>
        <TouchableOpacity onPress={logOut}>
          <FontAwesomeIcon style={styles.welcome} size={20} icon={faSignOut} />
        </TouchableOpacity>

      </View>

      <FlatList
        data={Post}
        renderItem={({ item, index }) => (
          <View style={styles['mt-20']}>
            <View style={styles.profileBoxShadow}>
              <View style={styles.cardIn}>
                <Text style={styles.title}>{item.userId}</Text>
                <Image style={styles.image} source={{ uri: "https://picsum.photos/1035" }} />
                <View style={styles.cardDetail}>
                  <Text style={styles.cardHeader}>{item.title}</Text>
                  <Text style={styles.cardDescription}>{item.body}. </Text>
                </View>
                <View style={styles.cardButton}>
                  <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon style={styles.icons} size={20} icon={faHeart} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon style={styles.icons} size={20} icon={faComment} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon style={styles.icons} size={20} icon={faShareAlt} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Text>Please wait...</Text>
          </View>
        )}
      />

    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  Post: state.homereducer.Post,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      hitAPI: hitAPI,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  "mt-20": {
    marginTop: 20
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    paddingVertical: 15,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15
  },
  profileBoxShadow: {
    margin: 15,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    borderRadius: 10,
  },
  cardIn: {
    justifyContent: 'center',
  },
  cardDetail: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  cardHeader: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  cardDescription: {
    fontSize: 18,
    fontWeight: '300',
    marginTop: 6,
  },
  image: {
    height: 200,
    width: "100%",
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  cardButton: {
    flexDirection: 'row',
    marginBottom: 15,
    marginHorizontal: 15,
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 50
  }
});