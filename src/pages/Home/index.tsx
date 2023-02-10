import React, {useEffect, useState} from 'react';
// View é como se fosse uma div e o text é o texto
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '../../components/Button/Button';
import SkillCard from '../../components/SkillCard/SkillCard';

interface ISkillData {
  id: string;
  name: string;
  date: Date;
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<ISkillData[]>([]);
  const [greetings, setGreetings] = useState<string>('');

  const addNewSkillHandle = () => {
    const data: ISkillData = {
      id: Math.random().toString(),
      name: newSkill,
      date: new Date(),
    };
    setMySkills(prev => [...prev, data]);
  };

  const setGreetingsHandle = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreetings('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Good Afternoon');
    } else {
      setGreetings('Good evening');
    }
  };

  const removeSKillHandle = (id: string) => {
    setMySkills(prev => prev.filter(skill => skill.id !== id));
  };

  useEffect(() => {
    setGreetingsHandle();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Mateus</Text>
      <Text style={styles.greetings}>{greetings}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor={'#CCC'}
        onChangeText={setNewSkill}
      />

      <Button onPress={addNewSkillHandle} activeOpacity={0.7} />

      <Text style={[styles.text, {marginVertical: 50}]}>Improving skills</Text>

      {/* ScrollView Não é indicado para a listagem de muitos elementos */}

      {/* Se você usar a FlatList ele não carrega todos os elementos, por exemplo, se tiver 100 elementos
      para serem carregados em uma lista, ele não irá carregar os 100. Irá dar prioridade em carregar os que cabem na tela e conforme a rolagem
      a FlatList traz os novos elementos aos poucos.
      */}
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => removeSKillHandle(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  greetings: {
    color: '#FFF',
    fontSize: 20,
  },
});
