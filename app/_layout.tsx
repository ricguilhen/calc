import { useState } from 'react';
import 'react-native-reanimated';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function RootLayout() {
  
const [currValue, setCurrValue] = useState('0')
const [lastValue, setLastValue] = useState('')
const [operator, setOperator] = useState('')
const [result, setResult] = useState('')

const handleNum = (num: string) => {
  if (currValue === '0') setCurrValue(num)
  else setCurrValue(prev => prev + num)
}

const handleOperator = (op: string) => {
  setLastValue(currValue)
  setOperator(op)
  setCurrValue('0')
}

const handleIgual = () => {
  const a = parseFloat(lastValue)
  const b = parseFloat(currValue)
  let res = 0

  if (operator === '+') res = a + b
  if (operator === '-') res = a - b
  if (operator === '*') res = a * b
  if (operator === '/') res = a / b

  setResult(String(res))
  setCurrValue(String(res))
  setLastValue('')
  setOperator('')
}

const handleSqrt = () => {
  const n = parseFloat(currValue)
  const res = n >= 0 ? Math.sqrt(n) : 'Erro'
  setCurrValue(String(res))
  setResult(String(res))
}

const handleReset = () => {
  setCurrValue('0')
  setLastValue('')
  setOperator('')
}

const displayExpressao = lastValue
? `${lastValue} ${operator} ${currValue}`
  : currValue

  return (
    <View>
        <SafeAreaView>

        </SafeAreaView>
    </View>
  );
}
