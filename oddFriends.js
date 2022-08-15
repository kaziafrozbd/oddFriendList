function oddFriend(friends){
    if(friends.typeOf != 'string'){
        return 'send string please!'
    }
    const newOddFriends = [];
    for(const friend of friends){
        let length = friend.length;
        if(length % 2 == 1){
            newOddFriends.push(friend);
        }
    }
    return newOddFriends;
}
const allFriends = ['samira', 'srishti', 'sifat', 'mowlee', 'neeta', 'mily', 'tasmia', 'jarin'];
const oddFrnds = oddFriend(allFriends);
console.log(oddFrnds);