import { View, Text, SafeAreaView, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/Home/HeaderTabs'
import Categoires from '../components/Home/Categories'

import SearchBar from '../components/Home/SearchBar'
import RestaurantItems, { localRestaurants } from '../components/Home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTab from '../components/Home/BottomTab'

// j8hfTX9_wt_2OaEISrxJuQ  //  Client ID


export default function Home() {
  const [city, setCity] = useState("San Francisco");
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  console.log(restaurantData, "===<<")
  const [activeTab, setActiveTab] = useState("Delivery");

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    fetch(`http://localhost:3001/api/yelp?location=${city}&sort_by=best_match&limit=10`, options)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
      .catch(err => console.error(err));
  }, [city, activeTab])



  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
    <View style={{ backgroundColor: 'white', padding: 10 }}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar cityHandler={setCity} />
    </View>

    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categoires />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </View>

    <Divider width={1} />

    <BottomTab />
  </SafeAreaView>
  )
}



