var canVisitAllRooms = function(rooms) {
  
    let visitedRooms = [0]
    let keys = [...rooms[0]];
    
    while (keys.length) {
      let currentRoom = keys.shift();
      if (!visitedRooms.includes(currentRoom)){
        visitedRooms.push(currentRoom)
        keys.push(...rooms[currentRoom]);
      }
    };  
    if (visitedRooms.length != rooms.length) return false
    return true;
      
  };