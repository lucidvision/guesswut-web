/users
  uid
    name
    username
    avatar

/games
  gameId
    hostId
    playersIds
    guesses
    timestamp
    gameId

/gamesHosting
  uid
    gameId

/gamesPlaying
  uid
    gameId

/guesses
  gameId
    guessId
      name
      uid
      text

/friendship
  friendshipId
    uid
    friendId
    accepted

/userFriends
  uid
    friendId
