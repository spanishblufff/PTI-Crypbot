import { SafeAreaView, Dimensions, ScrollView, Button, StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios'
// // import {tableData} from '../data/tableData';

// console.log("HELLOOOOO: ")
// console.log(tableData)

const MyLineChart = () => {
  return (
    <>
      {/* <Text style={styles.header}>Line Chart</Text> */}
      <LineChart
        data={{
          labels: 
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'],
          datasets: [
            {
              data: getTrades(),
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 50}
        height={Dimensions.get('window').height - 600}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
            marginHorizontal: 50,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bot Activity Chart</Text>
      <View>
        <MyLineChart />
      </View>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

function getTrades(): number[]{
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:8080"
  };

  axios.get('http://localhost:8080/trades')
  .then(response => {
    console.log(response.data)
    return [1,2,3,4,5,6,7,8]
  })

  return [1,2,3,4,5,6,7,8]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 50,
    marginHorizontal: 50,
  },
  separator: {
    marginBottom: 50,
    marginTop: 100,
    marginHorizontal: 50,
    height: 1,
    width: '80%',
  },
});
