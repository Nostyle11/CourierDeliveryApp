import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { Feather, FontAwesome } from '@expo/vector-icons'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';
import VehicleSelection from './VehicleSection';
import PackageListing from './PackageListing';
import { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CreateOrder = () => {
  const [checked, setChecked] = useState(false);
  const [itemName, setItemName] = useState('');
  const [textItems, setTextItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onPressContinue = () => {
    navigation.navigate('OrderList');
  }; 


  const navigation = useNavigation();
  const route = useRoute();
  const { Packtype } = route.params;

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setTextItems([...textItems, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    setTextItems(textItems.filter((_, i) => i !== index));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <TouchableOpacity onPress={() => removeItem(index)}>
        <FontAwesome name="trash" size={24} color="#f00732" />
      </TouchableOpacity>
    </View>
  );

  const data = [
    {
      key: 'header',
      content: (
        <View style={styles.headerContainer}>
          <Feather 
            name='chevron-left' 
            size={30} 
            color={'black'} 
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header}>{Packtype}</Text>
        </View>
      ),
    },
    {
      key: 'checkbox',
      content: (
        <View>
        <Text style={{fontSize: 20, margin: 10, fontWeight: '500'}}>Select Vehicle</Text>
        <BouncyCheckbox
        size={30}
        textStyle={styles.textStyle}
        style={{margin: 16}}
        iconImageStyle={styles.iconImageStyle}
        fillColor={'#e6760e'}
        unFillColor={'transparent'}
        isChecked={checked}
        text="Don't request for a delivery person"
        onPress={() => setChecked(!checked)}
      />
      </View>
      ),
    },
    
    {
      key: 'vehicleSelection',
      content: !checked && <VehicleSelection />,
    },
    {
      key: 'addItemSection',
      content: (
        <View style={styles.addItemContainer}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>Add Item(s)</Text>
        </View>
      ),
    },
    {
      key: 'packageListing',
      content: <PackageListing />,
    },
    {
      key: 'photoSection',
      content: (
        <View style={{marginTop: 50, borderTopWidth: 1, borderTopColor: 'lightgray', paddingTop: 10,}}>
          <Text style={{fontSize: 20, fontWeight: '500', marginHorizontal: 10}}>Add Photo</Text>
          <Text style={styles.itemNameLabel}>Add at least one photo for the item(s)*</Text>
          <TouchableOpacity style={styles.photoButton}>
            <FontAwesome name="camera" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.supportedFormat}>Supported format is *.jpg</Text>
        </View>
      ),
    },
    {
      key: 'bottomView',
      content: (
        <View style={styles.bottomview}>
          <View style={styles.price}>
            <Text style={{marginTop: 10}}>Category Price Range</Text>
            <Text style={{color: '#ff6600', marginTop: 10}}>GH₵ 10 - 50</Text>
          </View>
          <TouchableOpacity onPress={onPressContinue} style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      ),
    },
  ];

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => item.content}
      keyExtractor={(item) => item.key}
    />
  );
};

export default CreateOrder;
