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
  const [operations, setOperations] = useState("+-X:%")
  function appendSymbol(newSymbol){
    if(number == "0"){
      setNumber(newSymbol)
    }else{
      setNumber(number+newSymbol)
    }
  }

  function compute(){
    let firstNumber = ""
    let secondNumber = ""
    let operation = ""
    let state = 0
    for(let i = 0; i<number.length; i++){
      if(operations.includes(number[i])){
        if(secondNumber.length!=0){
          console.log(firstNumber)
          console.log(secondNumber)
          switch (operation) {
            case "+":
              firstNumber = ""+(parseFloat(firstNumber)+parseFloat(secondNumber))
              secondNumber = ""
              break;
            case "-":
              firstNumber = ""+(parseFloat(firstNumber)-parseFloat(secondNumber))
              secondNumber = ""
              break;
            case "X":
              firstNumber = ""+(parseFloat(firstNumber)*parseFloat(secondNumber))
              secondNumber = ""
              break;
            case ":":
              if(secondNumber=="0"){
                setNumber("NaN");
                break;
              }
              firstNumber = ""+(parseFloat(firstNumber)/parseFloat(secondNumber))
              secondNumber = ""
              break;
            case "%":
              firstNumber = ""+(parseFloat(firstNumber)-parseFloat(secondNumber))
              secondNumber = ""
              break;
            default:
          operation=number[i]
          }
        }else{
          operation=number[i]
        }
      }else{
        if(operation.length==0){
          firstNumber=firstNumber+number[i]
        }else{
          secondNumber=secondNumber+number[i]
        }
      }
    }
    if(secondNumber.length!=0){
      switch (operation) {
        case "+":
          firstNumber = ""+(parseFloat(firstNumber)+parseFloat(secondNumber))
          secondNumber = ""
          break;
        case "-":
          firstNumber = ""+(parseFloat(firstNumber)-parseFloat(secondNumber))
          secondNumber = ""
          break;
        case "X":
          firstNumber = ""+(parseFloat(firstNumber)*parseFloat(secondNumber))
          secondNumber = ""
          break;
        case ":":
          if(secondNumber=="0"){
            setNumber("NaN");
            break;
          }
          firstNumber = ""+(parseFloat(firstNumber)/parseFloat(secondNumber))
          secondNumber = ""
          break;
        case "%":
          firstNumber = ""+(parseFloat(firstNumber)-parseFloat(secondNumber))
          secondNumber = ""
          break;
        default:
      }
    }
    setNumber(firstNumber)
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
            text="x"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("X")} />
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
            onPress={() => appendSymbol("8")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="9"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("9")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="-"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("-")} />
        </View>
      </View>
      <View style={styles.buttonArea}>
        <View style={styles.smallButton}>
          <Button
            text="4"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("4")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="5"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("5")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="6"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("6")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="+"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("+")} />
        </View>
      </View>
      <View style={styles.buttonArea}>
        <View style={styles.smallButton}>
          <Button
            text="1"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("1")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="2"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("2")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="3"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("3")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="/"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol(":")} />
        </View>
      </View>
      <View style={styles.buttonArea}>
        <View style={styles.zeroButton}>
          <Button
            text="0"
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol("0")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="."
            fgc="white"
            bgc="grey"
            onPress={() => appendSymbol(".")} />
        </View>
        <View style={styles.smallButton}>
          <Button
            text="="
            fgc="white"
            bgc="grey"
            onPress={() => compute()} />
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
  zeroButton:{
    borderWidth:5,
    borderColor:"white",
    flex:2
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
