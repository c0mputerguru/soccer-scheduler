import { StyleSheet,Text, View } from 'react-native';
import {Entypo} from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  accordHeader: {
    padding: 12,
    flex: 1,
    flexDirection: 'row',
    fontSize: 20,
  },
  accordTitle: {
    fontSize: 20,
  },
});

const PlayerList = ({title, players, direction_icon, icon, direction_icon_color, icon_color}) => {
  if(players && players.length) {
    return (
      <View style={styles.accordHeader}>
        <Entypo name={direction_icon} size={20} color={direction_icon_color} />
        <Entypo name={icon} size={20} color={icon_color} />
        <Text style={styles.accordTitle}>{title}: {players.join(", ")}</Text>
      </View>
    )
  } else {
    null
  }
}

const Period = ({item}) => {
  return (
    <>
      <PlayerList title="Offense" players={item.Offense} icon="hair-cross" icon_color="orange"/>
      <PlayerList title="Defense" players={item.Defense} icon="shield" icon_color="orange"/>
      <Text fontSize={24}>Changes: </Text>
      <PlayerList title="Move Forward" players={item.MoveForward} direction_icon="swap" icon="hair-cross" icon_color="orange" direction_icon_color="black"/>
      <PlayerList title="Move Defense" players={item.MoveDefense} direction_icon="swap" icon="shield" icon_color="orange" direction_icon_color="black"/>
      <PlayerList title="Stay" players={item.Stay} direction_icon="squared-minus" direction_icon_color="black"/>
      <PlayerList title="Off" players={item.Off} direction_icon="triangle-down" direction_icon_color="red"/>
      <PlayerList title="On Forward" players={item.OnForward} direction_icon="triangle-up" icon="hair-cross" icon_color="orange" direction_icon_color="green"/>
      <PlayerList title="On Defense" players={item.OnDefense} direction_icon="triangle-up" icon="shield" icon_color="orange" direction_icon_color="green"/>
    </>
  );
};

export default Period;