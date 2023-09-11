import { Button, View, StyleSheet, Text, useWindowDimensions } from 'react-native';
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
  }
});

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const fair_games = {
  9: [['i', 'b', 'e', 'a'], ['b', 'f', 'a', 'h'], ['g', 'c', 'f', 'd'], ['f', 'i', 'c', 'e'], ['d', 'a', 'h', 'b'], ['d', 'g', 'i', 'f'], ['e', 'h', 'i', 'c'], ['c', 'a', 'g', 'b'], ['h', 'e', 'd', 'g']],
  8: [['h', 'e', 'b', 'a'], ['c', 'f', 'g', 'a'], ['d', 'c', 'h', 'e'], ['f', 'a', 'b', 'c'], ['h', 'g', 'f', 'e'], ['d', 'a', 'f', 'h'], ['g', 'b', 'd', 'c'], ['b', 'e', 'd', 'g']],
  7: [['b', 'f', 'a', 'e'], ['g', 'b', 'a', 'f'], ['e', 'd', 'f', 'c'], ['c', 'a', 'g', 'b'], ['c', 'e', 'd', 'b'], ['a', 'f', 'd', 'g'], ['g', 'd', 'c', 'e']],
  6: [['d', 'e', 'b', 'c'], ['a', 'b', 'f', 'c'], ['e', 'f', 'b', 'a'], ['b', 'c', 'e', 'd'], ['a', 'f', 'd', 'e'], ['d', 'c', 'a', 'f'], ['d', 'e', 'b', 'c'], ['a', 'b', 'f', 'c'], ['e', 'f', 'b', 'a'], ['b', 'c', 'e', 'd'], ['a', 'f', 'd', 'e'], ['d', 'c', 'a', 'f']],
  5: [['a', 'd', 'b', 'e'], ['a', 'c', 'b', 'd'], ['d', 'e', 'a', 'c'], ['b', 'e', 'c', 'a'], ['b', 'c', 'e', 'd'], ['a', 'd', 'b', 'e'], ['a', 'c', 'b', 'd'], ['d', 'e', 'a', 'c'], ['b', 'e', 'c', 'a'], ['b', 'c', 'e', 'd']]
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

    var shuffled_players = shuffle(players)
    const player_map = Object.fromEntries(
      placeholder_names.map((key, index) => [key, shuffled_players[index]]),
    );

    var rotations = create_game_rotations(fair_games[players.length], player_map)

    var s = rotations.map((period) => Object.assign({
      title: "Period " + period.id,
      content: <Period item={period}/>
    }));
    
    setTimePerPeriod(totalSecondsPlayed/rotations.length)
    setSections(s)
    setRoutes(rotations.map((rotation) => Object.assign({key: rotation.id, title: rotation.id})))
  }

  useEffect(updatePlayers, [players])

  const [isPlaying, setIsPlaying] = useState(false)
  const [key, setKey] = useState(0)

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
      <Button title="Start/Stop" onPress={() => setIsPlaying(prev => !prev)} />

      <Button title="Reset" onPress={() => setKey(prevKey => prevKey + 1)} />
    </View>
    </View>
    );
};

export default Game;