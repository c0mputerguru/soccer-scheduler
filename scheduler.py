import itertools
import random
import time
import sys
import getopt

def get_players_from_game(game):
    return sorted(list(set(itertools.chain.from_iterable(game))))

def is_valid(game):
    # no single person is in 2 different positions at the same time
    for period in game:
        if (len(set(period)) != len(period)):
            return False
    return True

# TODO make this more generic based on players per position
def is_positions_fair(game, players, print_info=False):
    players_dict = {player: [0,0] for player in players}


    for period in game:
        # first and second players in the period are offense
        players_dict[period[0]][0]+=1
        players_dict[period[1]][0]+=1

        # second and third are defense
        players_dict[period[2]][1]+=1
        players_dict[period[3]][1]+=1

    if(print_info):
        print("Offense/Defense Split: " + str(players_dict))

    #offense_fair = len(list(set(list(map(lambda x: x[0], players_dict.values()))))) == 1
    #defense_fair = len(list(set(list(map(lambda x: x[1], players_dict.values()))))) == 1
    return (len(list(set(list(map(lambda x: x[0], players_dict.values()))))) == 1) and (len(list(set(list(map(lambda x: x[1], players_dict.values()))))) == 1)

def mixed_play_score(game, players, print_info=False):
    players_dict = {player: [] for player in players}

    for period in game:
        for idx, player in enumerate(period):
            others = (v for i, v in enumerate(period) if i != idx)
            players_dict[player].extend(others)
            players_dict[player] = sorted(list(set(players_dict[player])))

    score = 0

    if(print_info):
        print("Players Play With: " + str(players_dict))

    for player, others in players_dict.items():
        score += len(set(others))

    return (score * 100) / (len(players) * (len(players) - 1))

def is_max_2_play(game, players):
    players_dict = {player: 0 for player in players}

    for period in game:
        for player in players_dict.keys():
            if players_dict[player] >= 3:
                return False
            if player in period:
                players_dict[player] += 1
            else:
                players_dict[player] = 0
    return True


def is_max_2_rest(game, players):
    players_dict = {player: 0 for player in players}

    for period in game:
        for player in players_dict.keys():
            if players_dict[player] >= 3:
                return False
            if player in period:
                players_dict[player] = 0
            else:
                players_dict[player] += 1
    return True

def game_sequence(players, players_per_period):
    equal_playtime = players * players_per_period
    while True:
        random.shuffle(equal_playtime)
        game = [equal_playtime[i:i+players_per_period] for i in range(0, len(equal_playtime), players_per_period)]
        yield game

def print_game(game, player_map):
    game = [list(map(lambda x: player_map.get(x, x), i)) for i in game]
    players = get_players_from_game(game)
    score = mixed_play_score(game, players)
    print(str(score) + ": " + str(game))
    print("Is Valid: " + str(is_valid(game)))
    print("Is Positions Fair: " + str(is_positions_fair(game, players)))
    print("Is Max 2 Rest: " + str(is_max_2_rest(game, players)))
    print("Is Max 2 Play: " + str(is_max_2_play(game, players)))
    prev_offense = []
    prev_defense = []
    for period in game:
        period_split = [period[i:i+2] for i in range(0, len(period), 2)]
        current_offense = period_split[0]
        current_defense = period_split[1]
        print("Offense: " + ", ".join(current_offense) + "  Defense: " + ", ".join(current_defense))

        move_forward = []
        move_defense = []
        stay = []
        off = []
        on_forward = []
        on_defense = []

        for player in current_offense:
            if player in prev_offense:
                stay.append(player)
            elif player in prev_defense:
                move_forward.append(player)
            else:
                on_forward.append(player)

        for player in current_defense:
            if player in prev_offense:
                move_defense.append(player)
            elif player in prev_defense:
                stay.append(player)
            else:
                on_defense.append(player)

        for player in prev_offense:
            if (player not in current_offense) and (player not in current_defense):
                off.append(player)
        
        for player in prev_defense:
            if (player not in current_offense) and (player not in current_defense):
                off.append(player)

        if(len(move_forward)):
            print("Move Forward: " + ", ".join(move_forward))
        if(len(move_defense)):
            print("Move Defense: " + ", ".join(move_defense))
        if(len(stay)):
            print("Stay: " + ", ".join(stay))
        if(len(off)):
            print("Off: " + ", ".join(off))        
        if(len(on_forward)):
            print("On Forward: " + ", ".join(on_forward))
        if(len(on_defense)):
            print("On Defense: " + ", ".join(on_defense))   

        print()            

        prev_offense = current_offense
        prev_defense = current_defense

def find_game(num_players):
    players = placeholder_names[0:num_players]
    players_per_period = 4
    sessions = num_players

    start_time = time.process_time()
    count = 0
    for game in game_sequence(players, players_per_period):
        #print(game)
        if(is_valid(game) and is_positions_fair(game, players) and is_max_2_rest(game, players) and is_max_2_play(game, players)):
            score = mixed_play_score(game, players)
            print(str(score) + ": " + str(game))

        # count+=1
        # if(count % 1000000 == 0):
        #     end_time = time.process_time()
        #     print("tested " + str(count) + " in " + str(end_time-start_time))
        #     start_time = end_time

# Found Games
games = {
    'nine_player_game': [['e', 'b', 'g', 'd'], ['f', 'c', 'i', 'h'], ['h', 'b', 'a', 'e'], ['g', 'f', 'a', 'd'], ['i', 'd', 'b', 'c'], ['a', 'e', 'f', 'h'], ['d', 'h', 'g', 'f'], ['a', 'i', 'b', 'c'], ['g', 'c', 'i', 'e']], #b and f don't play together
    'nine_player_d3plays_game': [['i', 'b', 'e', 'a'], ['b', 'f', 'a', 'h'], ['g', 'c', 'f', 'd'], ['f', 'i', 'c', 'e'], ['d', 'a', 'h', 'b'], ['d', 'g', 'i', 'f'], ['e', 'h', 'i', 'c'], ['c', 'a', 'g', 'b'], ['h', 'e', 'd', 'g']], # d plays 3 in a row
    'eight_player_game': [['d', 'g', 'e', 'f'], ['e', 'g', 'a', 'c'], ['f', 'b', 'h', 'd'], ['b', 'a', 'f', 'g'], ['h', 'e', 'c', 'd'], ['c', 'f', 'e', 'b'], ['a', 'h', 'b', 'g'], ['d', 'c', 'h', 'a']],
    'seven_player_game': [['a', 'b', 'e', 'c'], ['b', 'g', 'd', 'a'], ['c', 'f', 'e', 'g'], ['f', 'e', 'b', 'a'], ['g', 'a', 'b', 'd'], ['e', 'd', 'c', 'f'], ['c', 'd', 'g', 'f']],
    'six_player_game': [['c', 'a', 'e', 'f'], ['d', 'a', 'f', 'b'], ['e', 'b', 'd', 'c'], ['f', 'e', 'a', 'c'], ['b', 'f', 'a', 'd'], ['c', 'd', 'b', 'e']],
    'five_player_game': [['a', 'b', 'c', 'd'], ['b', 'c', 'd', 'e'], ['c', 'd', 'e', 'a'], ['d', 'e', 'a', 'b'], ['e', 'a', 'b', 'c']],
}
player_names = ["Otto", "Jackson", "Emerson", "Owen", "Brayden", "Brody", "Jett", "Cameron", "Ronan"]
random.shuffle(player_names)
placeholder_names = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

player_map = {placeholder_names[i]: player_names[i] for i in range(len(placeholder_names))}

def main(argv):
    opts, args = getopt.getopt(argv,"p:f:",["print=","find="])
    for opt, arg in opts:
        if opt in ("-p", "--print"):
            print_game(games[arg], player_map)
            sys.exit()
        if opt in ("-f", "--find"):
            find_game(int(arg))
            sys.exit()  

if __name__ == "__main__":
   main(sys.argv[1:])