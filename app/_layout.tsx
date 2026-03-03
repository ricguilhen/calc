import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
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

const handleEqual = () => {
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

const handleComma = () => {
    if (!currValue.includes('.')) {
      setCurrValue(prev => prev + '.')
    }
  }

const displayExpressao = lastValue
? `${lastValue} ${operator} ${currValue}`
  : currValue

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.calculadora}>

        
        <View style={styles.display}>
          <Text style={styles.displayTexto} numberOfLines={1} adjustsFontSizeToFit>
            {displayExpressao}
          </Text>
        </View>

        
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={handleReset}>
            <Text style={styles.botaoTexto}>c</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={handleSqrt}>
            <Text style={styles.botaoTexto}>raiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleOperator('/')}>
            <Text style={styles.botaoTexto}>div</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('7')}>
            <Text style={styles.botaoTexto}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('8')}>
            <Text style={styles.botaoTexto}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('9')}>
            <Text style={styles.botaoTexto}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleOperator('*')}>
            <Text style={styles.botaoTexto}>mult</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('4')}>
            <Text style={styles.botaoTexto}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('5')}>
            <Text style={styles.botaoTexto}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('6')}>
            <Text style={styles.botaoTexto}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleOperator('+')}>
            <Text style={styles.botaoTexto}>ad</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('1')}>
            <Text style={styles.botaoTexto}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('2')}>
            <Text style={styles.botaoTexto}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('3')}>
            <Text style={styles.botaoTexto}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleOperator('-')}>
            <Text style={styles.botaoTexto}>sub</Text>
          </TouchableOpacity>
        </View>

        {/* Linha 5: vírgula, 0, = */}
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={handleComma}>
            <Text style={styles.botaoTexto}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => handleNum('0')}>
            <Text style={styles.botaoTexto}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaoIgual]} onPress={handleEqual}>
            <Text style={styles.botaoTexto}>=</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculadora: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#222',
    padding: 16,
    width: 300,
    gap: 10,
  },
  display: {
    borderWidth: 1.5,
    borderColor: '#222',
    borderRadius: 12,
    padding: 12,
    marginBottom: 6,
    backgroundColor: '#fafafa',
    minHeight: 56,
    justifyContent: 'center',
  },
  displayTexto: {
    fontSize: 28,
    textAlign: 'right',
    color: '#111',
  },
  linha: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-start',
  },
  botao: {
    borderWidth: 1.5,
    borderColor: '#222',
    borderRadius: 10,
    width: 62,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  botaoIgual: {
    width: 130,
  },
  botaoTexto: {
    fontSize: 16,
    color: '#111',
    fontWeight: '500',
  },
});
