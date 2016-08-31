{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      info: {
        name,
        uid,
        avatar,
      }
    }
  },
  games: {
    [gameId]: {
      info: {
        text,
        gameId,
        timestamp,
        hostId,
        playerId
      }
    }
  },
  gamesPlaying: {
    isFetching,
    error,
    [uid]: {
      lastUpdated,
      gameIds: [gameId, gameId, gameId]
    }
  },
  gamesHosting: {
    isFetching,
    error,
    [uid]: {
      lastUpdated,
      gameIds: [gameId, gameId, gameId]
    }
  },
  guesses: {
    isFetching,
    error,
    [gameId]: {
      guesses: {
        [guessId]: {
          uid,
          name,
          text
        }
      }
    }
  },
  friendship: {
    [friendshipId]: {
      uid,
      friendId,
      accepted
    }
  },
  userFriends: {
    [uid]: {
      friendshipIds: [friendshipId, friendshipId, friendshipId]
    }
  }
}
