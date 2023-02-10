import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ISkillsCardProps extends TouchableOpacityProps {
  skill: string;
}

const SkillCard = ({skill, ...rest}: ISkillsCardProps) => {
  return (
    <>
      <TouchableOpacity style={styles.buttonSkills} {...rest}>
        <Text style={styles.textSkill}>{skill}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonSkills: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#FFF',
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
    borderRadius: 20,
  },
});

export default SkillCard;
