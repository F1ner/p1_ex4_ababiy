import React,{useState} from 'react';
import { StyleSheet,Button,Text, View } from 'react-native';

type CatProps={
  name:string
}

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        Меня зовут {props.name}, и я {isHungry ? 'голоден' : 'сыт'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Покорми меня, пожалуйста!' : 'Спасибо!'}
      />
    </View>
  );
};

const Cafe=()=>{
return(
  <View>
    <Cat name='Черный'/>
    <Cat name='Белый'/>
    <Cat name='Рыжий'/>
  </View>
);
};

export default Cafe;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
