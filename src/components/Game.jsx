import { TextInput, Modal, Pressable, Button, View, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { useState, useEffect } from 'react'
import Period from './Period';
import PlayerPicker, {playerArray} from './PlayerPicker';
import { TabView } from 'react-native-tab-view';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  accordContainer: {
    paddingBottom: 4
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#999',
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    padding: 12
  },
  textSmall: {
    fontSize: 16
  },
  seperator: {
    height: 12
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

// function shuffle(array) {
//   var currentIndex = array.length,  randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex > 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }

const fair_games = {
  9: [['a', 'b', 'c', 'd'], ['e', 'f', 'a', 'g'], ['h', 'i', 'e', 'b'], ['c', 'd', 'h', 'f'], ['g', 'a', 'c', 'i'], ['b', 'e', 'g', 'd'], ['f', 'h', 'b', 'a'], ['i', 'c', 'f', 'e'], ['d', 'g', 'i', 'h']],
  8: [['d', 'g', 'e', 'f'], ['e', 'g', 'a', 'c'], ['f', 'b', 'h', 'd'], ['b', 'a', 'f', 'g'], ['h', 'e', 'c', 'd'], ['c', 'f', 'e', 'b'], ['a', 'h', 'b', 'g'], ['d', 'c', 'h', 'a']],
  7: [['a', 'b', 'e', 'c'], ['b', 'g', 'd', 'a'], ['c', 'f', 'e', 'g'], ['f', 'e', 'b', 'a'], ['g', 'a', 'b', 'd'], ['e', 'd', 'c', 'f'], ['c', 'd', 'g', 'f']],
  6: [['c', 'a', 'e', 'f'], ['d', 'a', 'f', 'b'], ['e', 'b', 'd', 'c'], ['f', 'e', 'a', 'c'], ['b', 'f', 'a', 'd'], ['c', 'd', 'b', 'e'], ['c', 'a', 'e', 'f'], ['d', 'a', 'f', 'b'], ['e', 'b', 'd', 'c'], ['f', 'e', 'a', 'c'], ['b', 'f', 'a', 'd'], ['c', 'd', 'b', 'e']],
  5: [['a', 'b', 'c', 'd'], ['b', 'c', 'd', 'e'], ['c', 'd', 'e', 'a'], ['d', 'e', 'a', 'b'], ['e', 'a', 'b', 'c'], ['a', 'b', 'c', 'd'], ['b', 'c', 'd', 'e'], ['c', 'd', 'e', 'a'], ['d', 'e', 'a', 'b'], ['e', 'a', 'b', 'c']]
}

const placeholder_names = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

function create_game_rotations(game, player_map) {
  game = game.map((period) => period.map((player) => player_map[player]))
  var prev_offense = []
  var prev_defense = []
  var period_id = 1
  var period

  var rotations = []
  for (period of game) {
      var period_split = period.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/2)
      
        if(!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }
      
        resultArray[chunkIndex].push(item)
      
        return resultArray
      }, [])
      
      var current_offense = period_split[0]
      var current_defense = period_split[1]

      var move_forward = []
      var move_defense = []
      var stay = []
      var off = []
      var on_forward = []
      var on_defense = []

      var player
      for (player of current_offense) {
          if (prev_offense.includes(player))
              stay.push(player)
          else if (prev_defense.includes(player))
              move_forward.push(player)
          else
              on_forward.push(player)
      }

      for (player of current_defense) {
          if (prev_offense.includes(player))
              move_defense.push(player)
          else if (prev_defense.includes(player))
              stay.push(player)
          else
              on_defense.push(player)
      }

      for (player of prev_offense) {
          if (!current_offense.includes(player) && !current_defense.includes(player))
              off.push(player)
      }
      
      for (player of prev_defense) {
        if (!current_offense.includes(player) && !current_defense.includes(player))
              off.push(player)      
      }  

      rotations.push({
        Offense: current_offense,
        Defense: current_defense,
        MoveForward: move_forward,
        MoveDefense: move_defense,
        Stay: stay,
        Off: off,
        OnForward: on_forward,
        OnDefense: on_defense,
        id: period_id
      })

      prev_offense = current_offense
      prev_defense = current_defense
      period_id++
  }

  return rotations
}

const PickPlayersRoute = () => (
  <View style={{ flex: 1 }} />
);

const PeriodRoute = ({sections, index}) => (
  sections[index-1].content
);

const Game = () => {
  const [ players, setPlayers ] = useState(playerArray)
  const totalSecondsPlayed = 2 * 25 * 60
  const [timePerPeriod, setTimePerPeriod] = useState()
  //console.log(players)

  const [sections, setSections] = useState([]);

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([{key: "pick", title: "Pick Players"}]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'pick':
        return <PickPlayersRoute/>;
      default:
        return <PeriodRoute sections={sections} index={route.key}/>;
    }
  };

  // const [renderScene, setRenderScene] = useState(() => {
  //   return (FirstRoute())
  // });

  function updatePlayers() {
    if(!players || players.length < 5)
      return;

    var shuffled_players = players //shuffle(players)
    shuffled_players.sort()
    const player_map = Object.fromEntries(
      placeholder_names.map((key, index) => [key, shuffled_players[index]]),
    );

    var rotations = create_game_rotations(fair_games[players.length], player_map)

    var s = rotations.map((period) => Object.assign({
      title: "Period " + period.id,
      content: <Period item={period}/>
    }));
    
    setTimePerPeriod(totalSecondsPlayed/rotations.length)
    setManualTimerInput(totalSecondsPlayed/rotations.length)
    setSections(s)
    setRoutes(rotations.map((rotation) => Object.assign({key: rotation.id, title: rotation.id})))
  }

  useEffect(updatePlayers, [players])

  const [isPlaying, setIsPlaying] = useState(false)
  const [key, setKey] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);
  const [manualTimerInput, setManualTimerInput] = useState('');

  function tryUpdateTimePerPeriod() {
    if (typeof manualTimerInput != "string") return // we only process strings!  
    if (isNaN(manualTimerInput) || // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         isNaN(parseFloat(manualTimerInput)))
      return

    setTimePerPeriod(parseInt(manualTimerInput))
  }

  const layout = useWindowDimensions();

  return (
    <View style={styles.container}>
      <PlayerPicker players={players} setPlayers={setPlayers}/>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <View style={styles.timerContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Enter Timer In Seconds:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setManualTimerInput}
                value={manualTimerInput}
                keyboardType="numeric"
              />
              <Button title="Submit" onPress={() => {
                  setModalVisible(!modalVisible)
                  tryUpdateTimePerPeriod()
              }} />
            </View>
          </View>
        </Modal>
        <Pressable onLongPress={() => setModalVisible(!modalVisible)}>
          <CountdownCircleTimer
            key={key}
            isPlaying={isPlaying}
            duration={timePerPeriod}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[timePerPeriod, (3*timePerPeriod)/4, timePerPeriod/2, 0]}
            onComplete={() => ({shouldRepeat: false})}
            updateInterval={1}
          >
            {({ remainingTime, color }) => (
              <Text style={{ color, fontSize: 40 }}>
                {Math.floor(remainingTime / 60)}:{("0" + remainingTime % 60).slice(-2)}
              </Text>
            )}
          </CountdownCircleTimer>
      </Pressable>
      <Button title="Start/Stop" onPress={() => setIsPlaying(prev => !prev)} />

      <Button title="Reset" onPress={() => setKey(prevKey => prevKey + 1)} />
    </View>
    </View>
    );
};

export default Game;
