let hbCounter = 0;
let hbClient = new discord.Client();
hbClient.login('TOKEN HERE');

function chNickname() {
    const targetguild = hbClient.guilds.cache.get('686002315148394502');
    const me = targetguild.members.cache.get(hbClient.user.id);
    const name = ['Ӈ', 'Ӈƛ', 'ӇƛƦ', 'ӇƛƦƊ', 'ӇƛƦƊ Ɓ', 'ӇƛƦƊ ƁƠ', 'ӇƛƦƊ ƁƠƳ'];

    setInterval(() => {
        if (hbCounter == 7) {
            hbCounter = 0;
            me.setNickname(name[hbCounter]);
            hbCounter++;
        } else {
            me.setNickname(name[hbCounter]);
            hbCounter++;
        }
    }, 4000);
}

function yousamPower() {
    let HardBoy = ['Hard times will always reveal true friends', 'HARDBOY'];
    let Power = Math.floor(Math.random() * HardBoy.length);
    hbClient.user.setActivity(HardBoy[Power], {type: 'WATCHING'});
}

hbClient.on('ready', () => {
    console.log(`Logged in as ${hbClient.user.tag}!`);
    setInterval(yousamPower, 10000);
    chNickname();
});

hbClient.on('message', (msg) => {
    if (msg.content === 'i love you') {
        msg.reply('i love you too');
    }
});
