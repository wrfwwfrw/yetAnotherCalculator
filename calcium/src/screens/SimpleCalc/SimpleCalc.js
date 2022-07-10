import React,{
  useState
} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Button from '../../components/Button'



const SimpleCalc = () => {
  const [number, setNumber] = useState("0")

  function appendSymbol(newSymbol){
    if(number == "0"){
      setNumber(newSymbol)
    }else{
      setNumber(number+newSymbol)
    }
  }

  return (
    <View styles={styles.root}>
      <View styles={styles.textArea}>
        <Text style={styles.text}>{number}</Text>
      </View>
      <View style={styles.buttonArea}>
        <View style={styles.smallButton}>
          <Button
            text="AC"
            fgc="white"
            bgc="grey"
            onPress={() => setNumber("0")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="%"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("%")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="M"
            fgc="white"
            bgc="grey"
            onPress={()=>{console.log("xxd")}} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="X"
            fgc="white"
            bgc="grey"
            onPress={()=>{console.log("xxd")}} />
        </View>
     </View>
     <View style={styles.buttonArea}>
       <View style={styles.smallButton}>
         <Button
           text="7"
           fgc="white"
           bgc="grey"
           onPress={() => appendSymbol("7")} />
       </View>
       <View style={styles.smallButton}>
         <Button
           text="8"
           fgc="white"
           bgc="grey"
           onPress={()=>{console.log("xxd")}} />
       </View>
       <View style={styles.smallButton}>
         <Button
           text="9"
           fgc="white"
           bgc="grey"
           onPress={()=>{console.log("xxd")}} />
       </View>
       <View style={styles.smallButton}>
         <Button
           text="-"
           fgc="white"
           bgc="grey"
           onPress={()=>{console.log("xxd")}} />
       </View>
    </View>
    <View style={styles.buttonArea}>
      <View style={styles.smallButton}>
        <Button
          text="4"
          fgc="white"
          bgc="grey"
          onPress={()=>{console.log("xd")}} />
      </View>
      <View style={styles.smallButton}>
        <Button
          text="5"
          fgc="white"
          bgc="grey"
          onPress={()=>{console.log("xxd")}} />
      </View>
      <View style={styles.smallButton}>
        <Button
          text="6"
          fgc="white"
          bgc="grey"
          onPress={()=>{console.log("xxd")}} />
      </View>
      <View style={styles.smallButton}>
        <Button
          text="+"
          fgc="white"
          bgc="grey"
          onPress={()=>{console.log("xxd")}} />
      </View>
   </View>
   <View style={styles.buttonArea}>
     <View style={styles.smallButton}>
       <Button
         text="1"
         fgc="white"
         bgc="grey"
         onPress={()=>{console.log("xd")}} />
     </View>
     <View style={styles.smallButton}>
       <Button
         text="2"
         fgc="white"
         bgc="grey"
         onPress={()=>{console.log("xxd")}} />
     </View>
     <View style={styles.smallButton}>
       <Button
         text="3"
         fgc="white"
         bgc="grey"
         onPress={()=>{console.log("xxd")}} />
     </View>
     <View style={styles.smallButton}>
       <Button
         text="="
         fgc="white"
         bgc="grey"
         onPress={()=>{console.log("xxd")}} />
     </View>
  </View>
  <View style={styles.buttonArea}>
    <View style={styles.smallButton}>
      <Button
        text="0"
        fgc="white"
        bgc="grey"
        onPress={()=>{console.log("xd")}} />
    </View>
    <View style={styles.smallButton}>
      <Button
        text="0"
        fgc="white"
        bgc="grey"
        onPress={()=>{console.log("xxd")}} />
    </View>
    <View style={styles.smallButton}>
      <Button
        text="."
        fgc="white"
        bgc="grey"
        onPress={()=>{console.log("xxd")}} />
    </View>
    <View style={styles.smallButton}>
      <Button
        text=":"
        fgc="white"
        bgc="grey"
        onPress={()=>{console.log("xxd")}} />
    </View>
 </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    width:'100%',
    height:'700',
    flexWrap:"wrap",
    flexDirection:"column"
  },
  smallButton:{
    borderWidth:5,
    borderColor:"white",
    flex:1
  },
  buttonArea:{
    flexWrap:"wrap",
    flexDirection:"row",
  },
  textArea:{
    height:50,
    borderWidth:5,
    borderColor:'white',
    backgroundColor:'white'
  },
  text:{
    marginTop:7,
    fontSize:30,
    textAlign:'right',
    height:50,
    borderWidth:5,
    borderColor:'white',
    backgroundColor:'white'
  }
})
export default SimpleCalc
