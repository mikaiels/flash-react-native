import * as React from 'react';
import { Button, View, Text, StyleSheet,  SafeAreaView, Alert, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardView from 'react-native-cardview';



function HomeScreen({ navigation }) {
  return (
<View >
<ScrollView>
<Text ></Text>
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
 <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles4.cardViewStyle}>
                 <Text style={{ textAlign: "center" }}> LIVE ATTENDANCE </Text>
          <Text onPress={() => navigation.navigate('APRIL')} style={styles.cardView_InsideText}> 07:30 </Text>
          <Text  style={{ textAlign: "center" }}> Monday, 5 Apr 2021 </Text>
 </CardView>
 <Text ></Text>
 </View>
<View style={styles.fixToText}>
<Text title="Left button"
style={{ color: "black",fontSize: 15 }}

         >&nbsp;&nbsp;&nbsp;&nbsp;TODAY'S Schedule
          </Text>
        <Text title="Right button"
style={{ color: "red",fontSize: 15 }}
         >
          Refresh&nbsp;&nbsp;&nbsp;&nbsp;</Text>
</View>
<Text ></Text>
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
<CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles3.cardViewStyle}>
     
          <Text > Mediteranian Garden Residence </Text>
          <Text > 08.00 - 17.00 </Text>

          <View style={styles.fixToText}>
<Text ></Text>
</View>
          <View style={styles.fixToText}>
          <Text ></Text>
        <Button
          title="Clock In"
          onPress={() => navigation.navigate('SCHEDULE')}
        />
        <Button
          title="Clock Out"
          onPress={() => navigation.navigate('SCHEDULE')}
        /> 
         <Text ></Text>
</View>
 </CardView>
 </View>
 <Text ></Text>
<View style={styles.fixToText}
>
<Text title="Left button"
style={{ color: "black",fontSize: 15 }}
         >
         &nbsp;&nbsp;&nbsp;&nbsp;NEXT SCHEDULE
          </Text>
        <Text title="Right button"
        style={{ color: "red",fontSize: 15 }}
onPress={() => navigation.navigate('SCHEDULE')}
         >
          See all&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
</View>
<Text ></Text>
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
<CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles3.cardViewStyle}>
     
          <Text > WEDNESDAY </Text>
          <Text > 7 Apr </Text>
          <Text style={{ fontSize: 9 }} > Mediteranian garden residence </Text>
          <Text ></Text>
          <Text style={{ fontSize: 7 }} > 08.00 - 17.00 </Text>
          <View style={styles.fixToText}>
</View>
 </CardView>
 </View>
 <Text ></Text>
 <View style={styles.fixToText}>
        <Button
          title="Clock In"
          onPress={() => navigation.navigate('SCHEDULE')}
        />
        <Button
          title="Clock Out"
          onPress={() => navigation.navigate('SCHEDULE')}
        />
</View>
<Text ></Text>
</ScrollView>
</View>
  );
}



























function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<ScrollView>
<Text > APRIL 2021 </Text>
<View style={styles.fixToText}>
<Text ></Text>
</View>


<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
  
<CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles3.cardViewStyle}>
          <Text ></Text>
          <Text onPress={() => navigation.navigate('APRIL')} style={styles.cardView_InsideText} style={{ fontSize: 15 }}> Mediteranian Garden Residance </Text>
          <Text style={{ fontSize: 7 }} > 08.00 - 17.00 </Text>
          <View style={styles.fixToText}>
</View>
 </CardView>

 
 </View>
 

 <Text ></Text>



 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
<CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles3.cardViewStyle}>
             <Text ></Text>
          <Text onPress={() => navigation.navigate('APRIL')} style={styles.cardView_InsideText} style={{ fontSize: 15 }}> Mediteranian Garden Residance </Text>
          <Text style={{ fontSize: 7 }} > 08.00 - 17.00 </Text>
          <Text ></Text>
          <View style={styles.fixToText}>
</View>
 </CardView>
 </View>

 <Text ></Text>

 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
<CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles3.cardViewStyle}>
          <Text ></Text>
          <Text onPress={() => navigation.navigate('APRIL')} style={styles.cardView_InsideText} style={{ fontSize: 15 }}> Mediteranian Garden Residance </Text>
          <Text style={{ fontSize: 7 }} > 08.00 - 17.00 </Text>
          <View style={styles.fixToText}>
</View>
 </CardView>
 </View>


 <Text ></Text>

 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
<CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles3.cardViewStyle}>
         <Text ></Text>
          <Text onPress={() => navigation.navigate('APRIL')} style={styles.cardView_InsideText} style={{ fontSize: 15 }}> Mediteranian Garden Residance </Text>
          <View style={styles.fixToText}>
</View>
 </CardView>
 <Text ></Text>
 </View>




 </ScrollView>
    </View>
  );
}
































function DetailsScreen2() {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ScrollView>
    <Text > STORE </Text>
    <View style={styles.fixToText}>
    <Text ></Text>
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
    <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={styles.cardViewStyle}>
              <Text ></Text>
              <Text onPress={() => navigation.navigate('APRIL')} style={styles.cardView_InsideText} style={{ fontSize: 15 }}> Mediteranian Garden Residance </Text>
              <View style={styles.fixToText}>
    </View>
     </CardView>
     </View>
     <Text ></Text>
     <Text > TIME SCHEDULE </Text>
     <Text ></Text>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
    <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={styles3.cardViewStyle}>
                 <Text ></Text>
              <Text onPress={() => navigation.navigate('APRIL')} style={styles.cardView_InsideText} style={{ fontSize: 15 }}> 08.00 - 17.00 </Text>
              <Text ></Text>
              <View style={styles.fixToText}>
    </View>
     </CardView>
     </View>
     <Text ></Text>
     <Text > CLOCK IN </Text>
     <Text ></Text>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
    <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={styles3.cardViewStyle}>
              <Text ></Text>
              <Text onPress={() => navigation.navigate('APRIL')} style={styles.cardView_InsideText} style={{ fontSize: 15 }}> -- : -- </Text>
              <View style={styles.fixToText}>
    </View>
     </CardView>
     </View>
     <Text ></Text>
     <Text > CLOCK OUT </Text>
     <Text ></Text>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
    <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={styles3.cardViewStyle}>
             <Text ></Text>
              <Text onPress={() => navigation.navigate('APRIL')} style={styles.cardView_InsideText} style={{ fontSize: 15 }}> -- : -- </Text>
              <View style={styles.fixToText}>
    </View>
     </CardView>
     <Text ></Text>
     </View>
     </ScrollView>
        </View>
      );
    }
    
    
    
    




const Stack = createNativeStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SCHEDULE" component={DetailsScreen} />
        <Stack.Screen name="APRIL" component={DetailsScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },

  MainContainer: {
 
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  cardViewStyle:{
    width: 250, 
    height: 150,
 
  },
 
  cardView_InsideText:{
    fontSize: 20, 
    color: '#000', 
    textAlign: 'center', 
    marginTop: 50    
 
  }
});


  
const styles2 = StyleSheet.create({
  MainContainer: {

    flex: 1,
    backgroundColor: '#ffd700',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  cardViewStyle:{
    width: 250, 
    height: 50,
 
  },
 
  cardView_InsideText:{
    fontSize: 20, 
    color: '#ffd700', 
    textAlign: 'center', 
    marginTop: 50    
 
  }


});

  
const styles3 = StyleSheet.create({
  MainContainer: {

    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  cardViewStyle:{
    width: 250, 
    height: 100,
 
  },
 
  cardView_InsideText:{
    fontSize: 20, 
    color: '#001', 
    textAlign: 'center', 
    marginTop: 50    
 
  }
});



const styles4 = StyleSheet.create({
  MainContainer: {

    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  cardViewStyle:{
    width: 300, 
    height: 150,
 
  },
 
  cardView_InsideText:{
    fontSize: 20, 
    color: '#001', 
    textAlign: 'center', 
    marginTop: 50    
 
  }
});






export default App;
