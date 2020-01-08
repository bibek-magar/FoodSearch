import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState([]);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, [id]);

  console.log(result);

  return (
    <View>
      <Text>{result.alias}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
