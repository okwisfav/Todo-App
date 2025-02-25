import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const todoData = [
    {
      id: 1,
      title: "Todo 1",
      isDone: false,
    },
    {
      id: 2,
      title: "Todo 2",
      isDone: false,
    },
    {
      id: 3,
      title: "Todo 3",
      isDone: false,
    },
    {
      id: 4,
      title: "Todo 4",
      isDone: true,
    },
    {
      id: 5,
      title: "Todo 5",
      isDone: false,
    },
    {
      id: 6,
      title: "Todo 6",
      isDone: false,
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList 
        data={todoData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.title}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
 