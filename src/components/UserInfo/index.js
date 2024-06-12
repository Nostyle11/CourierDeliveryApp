import React from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';



const UserInfo = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}> 
        <View style={{padding: 10, flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1}}>
          <Image
            source={require('../../../assets/images/full1.jpg')}
            style={{height: 70, width: 70, borderRadius: 40, marginBottom: 5}}
          />
          <View style={{marginLeft: 15, justifyContent: 'center'}}>
          <Text style={{fontSize: 18 ,marginBottom: 5,}}>
            Joel Owusu
          </Text>
            <Text >
              Online
            </Text>
          </View>

        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center',
            backgroundColor: 'lightblue', padding: 15, borderRadius: 10, margin: 10,
          }}>
            <Text style={{fontSize: 15,marginLeft: 5, }}>
              Delivery Mode
            </Text>
          </View>
        </TouchableOpacity>

      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={{fontSize: 15,marginLeft: 5, }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={{fontSize: 15,marginLeft: 5, }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default UserInfo;
