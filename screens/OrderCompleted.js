import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { LottieView } from "lottie-react-native";

import MenuItem from "../components/RestaurantDetail/MenuItem";


import { getFirestore, collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import app from "../firebase.js";

// Assuming `app` is your Firebase app instance, which you've already initialized








export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Bologna",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image:
                    "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
        ],
    });

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const db = getFirestore(app);
        const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'), limit(1));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                setLastOrder(doc.data());
            });
        });

        return () => {
            // Unsubscribe from the snapshot listener when the component unmounts
            unsubscribe();
        };
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            {/* green checkmark */}
            <View
                style={{
                    margin: 15,
                    alignItems: "center",
                    height: "100%",
                }}
            >
                {/* <LottieView
                    style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                    source={require("../assets/animations/check-mark.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}
                /> */}
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Your order at {restaurantName} has been placed for {totalUSD}
                </Text>
                <ScrollView>
                    <MenuItem
                        foods={lastOrder.items}
                        hideCheckbox={true}
                        marginLeft={10}
                    />
                    <LottieView
                        style={{ height: 200, alignSelf: "center" }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}