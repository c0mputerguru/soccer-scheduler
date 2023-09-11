import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import { useState, useEffect } from 'react'
import Period from './Period';
import PlayerPicker from './PlayerPicker';
import Accordion from 'react-native-collapsible/Accordion';
import {Entypo} from '@expo/vector-icons'

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
  6: [['d', 'e', 'b', 'c'], ['a', 'b', 'f', 'c'], ['e', 'f', 'b', 'a'], ['b', 'c', 'e', 'd'], ['a', 'f', 'd', 'e'], ['d', 'c', 'a', 'f']],
  5: [['a', 'd', 'b', 'e'], ['a', 'c', 'b', 'd'], ['d', 'e', 'a', 'c'], ['b', 'e', 'c', 'a'], ['b', 'c', 'e', 'd']]
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

const Game = () => {
  const [ players, setPlayers ] = useState([])
  //console.log(players)

  const [ activeSections, setActiveSections ] = useState([]);

  const [sections, setSections] = useState([]);

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

    setSections(s)
  }

  useEffect(updatePlayers, [players])

  function renderHeader(section, _, isActive) {
    return (
      <View style={styles.accordHeader}>
        <Text style={styles.accordTitle}>{ section.title }</Text>
        <Entypo name={ isActive ? 'chevron-up' : 'chevron-down' }
              size={20} color="#bbb" />
      </View>
    );
  }

  function renderContent(section, _, isActive) {
    return (
      <View style={styles.accordBody}>
        {section.content}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PlayerPicker players={players} setPlayers={setPlayers}/>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
            <Accordion
              align="bottom"
              sections={sections}
              activeSections={activeSections}
              renderHeader={renderHeader}
              renderContent={renderContent}
              onChange={(sections) => setActiveSections(sections)}
              sectionContainerStyle={styles.accordContainer}
            />
        </ScrollView>
      </SafeAreaView>
    </View>
    );
};

export default Game;