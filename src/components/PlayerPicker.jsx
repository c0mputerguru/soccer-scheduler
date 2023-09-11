import { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const PlayerPicker = ({players, setPlayers}) => {

    const [open, setOpen] = useState(false);
    const playerArray = ["Otto", "Jackson", "Emerson", "Owen", "Brayden", "Brody", "Jett", "Cameron", "Ronan"];

    const playerItemMap = playerArray.map((player) => Object.assign({label: player, value: player}));
    const [items, setItems] = useState(playerItemMap);
  
    return (
      <DropDownPicker
        multiple={true}
        min={0}
        max={9}
        open={open}
        value={players}
        items={items}
        setOpen={setOpen}
        setValue={setPlayers}
        setItems={setItems}
      />
    );
};

export default PlayerPicker;