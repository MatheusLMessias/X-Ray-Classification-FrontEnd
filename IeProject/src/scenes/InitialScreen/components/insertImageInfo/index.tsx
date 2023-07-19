import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import styles from './styles';
import { RAIOX_INSERT_IMAGE_INFO, DATA_INSERT_IMAGE_INFO, PACIENTE_INSERT_IMAGE_INFO, IDADE_INSERT_IMAGE_INFO } from '../../../../resources/values/strings';
import InputInsertComponent from '../../components/inputComponent';
import useInitialScreen from '../../hooks/useInitialScreen';
import ButtonComponent from '../button';

interface InsertImageInfoProps {
  data: any
}

const InsertImageInfo = (props: InsertImageInfoProps) => {
  const {        
    raioxName,
    date,
    patient,
    age,
    setRaioxName,
    setDate,
    setPatient,
    setAge,
  } = useInitialScreen()
  
  return (
    <View style={styles.containerList}>
      <InputInsertComponent
      label={RAIOX_INSERT_IMAGE_INFO}
      placeholder="Digite o nome do raio-x"
      type="default"
      secure={false}
      data={raioxName}
      setData={setRaioxName}
      />
      <InputInsertComponent
      label={DATA_INSERT_IMAGE_INFO}
      placeholder="Digite a data"
      type="default"
      secure={false}
      data={date}
      setData={setDate}
      />
      <InputInsertComponent
      label={PACIENTE_INSERT_IMAGE_INFO}
      placeholder="Digite a identificação do paciente"
      type="default"
      secure={false}
      data={patient}
      setData={setPatient}
      />
      <InputInsertComponent
      label={IDADE_INSERT_IMAGE_INFO}
      placeholder="Digite a idade"
      type="default"
      secure={false}
      data={age}
      setData={setAge}
      />
    </View>
  );
};

export default InsertImageInfo;
