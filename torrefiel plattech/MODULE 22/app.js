const friendsData = [
    { name: 'Kein' },
    { name: 'Jhen' },
    { name: 'Telly' }
];

function populateFriendList() {
    const friendList = document.getElementById('friend-list');
    friendsData.forEach((friend) => {
        const listItem = document.createElement('li');
        listItem.textContent = friend.name;
        friendList.appendChild(listItem);
    });
}

function updateWeatherInfo() {
    document.getElementById('weather').textContent = 'Cloudy';
    document.getElementById('temperature').textContent = 25;
    document.getElementById('wind-speed').textContent = '7';
}

populateFriendList();
updateWeatherInfo();
