import { Text, View } from "react-native";




export default function OrderItem({ items }) {
    console.log(items)
    const { title, price } = items
    return (

        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20, borderBottomWidth: 1, borderBottomColor: "#999" }}>

            <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
            <Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
        </View>
    )
}