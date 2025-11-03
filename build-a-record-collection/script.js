const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(recordCollection, id, prop, value) {
  if (value === "") {
    delete recordCollection[id][prop];
  } else if (prop === "tracks") {
    if (!recordCollection[id].hasOwnProperty("tracks")) {
      recordCollection[id]["tracks"] = [];
    }
    recordCollection[id]["tracks"].push(value);
  } else {
    recordCollection[id][prop] = value;
  }

  return recordCollection;
}
