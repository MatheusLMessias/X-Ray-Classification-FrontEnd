import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface HeaderLoginProps {
    name: String;
}

const HeaderLoginComponent = (props: HeaderLoginProps) => {
  return (
    <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../../../img/user.png')}
            tintColor="#688591"
            />
        <Text style={styles.headerText}>{props.name}</Text>
      </View>
    );
  };
  
  export default HeaderLoginComponent;