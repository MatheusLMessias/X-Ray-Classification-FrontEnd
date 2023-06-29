import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface HeaderRegisterProps {
    name: String;
    route: any;
}

const HeaderRegisterComponent = (props: HeaderRegisterProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.buttonHeader} onPress={props.route}>
          <Image
            style={styles.image}
            source={require('../../../../img/previous.png')}
            tintColor="#688591"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>{props.name}</Text>
      </View>
    );
  };
  
  export default HeaderRegisterComponent;