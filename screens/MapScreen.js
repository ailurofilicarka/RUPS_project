import React, {useEffect, useState} from 'react';
import {Button, PermissionsAndroid, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {set} from 'react-native-reanimated';

function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 46.698073700063475,
    longitude: 15.771328992329696,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
          } else {
            console.log('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {};
  }, []);

  const getNearestStation = async () => {
    console.log('getNearestStation');
    try {
      const res = await axios.get(
        'https://localhost:3002/api/station/nearest',
        {
          params: {lat: region.latitude, lon: region.longitude},
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('res', res.data);
      set.region({
        latitude: res.data.lat,
        longitude: res.data.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }
  };

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        console.log(position);
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{padding: 10}}>
        <Button
          title=" Get nearest station"
          color="#c49000"
          onPress={getNearestStation}
        />
      </View>
      <MapView
        style={{position: 'absolute', top: 70, left: 0, right: 0, bottom: 0}}
        region={region}
      />
    </View>
  );
}

export default MapScreen;
