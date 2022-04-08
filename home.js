// [
// 	'GuessTheNumber',
// 	'PickAPath',
// 	'Pong',
// 	'Hangman',
// 	'QuickClicks',
// 	'ClickAPath',
// 	'TicTacToe',
// 	'WorldWideWeb',
// 	'WheelOfFortune',
// 	'Contain',
// 	'TicTacAIO',
// 	'SpeakAndSpell',
// 	'Snake',
// 	'SketchBook',
// 	'SuperJump',
// 	'Sokoban'
// ];

let args = {
	page: 0
};

{
	let url = location.href.split('?');
	if (url.length > 1) {
		let params = new URLSearchParams(url[1]);
		for (let pair of params.entries()) {
			if (pair[0] == 'page') pair[1] = Number(pair[1]);
			args[pair[0]] = pair[1];
		}
	}
}

let games = [
	{ user: 'quinton-ashley', title: 'Hangman' },
	{ user: 'jaximuslim', title: 'Snake' },
	{ user: 'Paeto-Chayarat', title: 'Crazy7', sys: 'arcv' },
	{ user: 'rsaijo24', title: 'Contain', language: 'java' },
	{ user: 'WarriorFPHS', title: 'QuickClicks' },
	{ user: 'Rayan-Hobballah', title: 'PickAPath' },
	{ user: 'Morz75', title: 'ClickAPath' },
	{ user: 'MEDBEDFAKE', title: 'TicTacToe' },
	{ user: 'jaximuslim', title: 'QuickClicks' },
	{ user: 'quinton-ashley', title: 'Sokoban' },
	{ user: 'quinton-ashley', title: 'WheelOfFortune' },
	{ user: 'quinton-ashley', title: 'SuperJump' },
	{ user: 'quinton-ashley', title: 'SketchBook' }
	// { user: 'sophiaaaaaaaaaaaa', title: 'Pong', language: 'java' }
];

let html = '';

let startIndex = (args.page || 0) * 8;
for (let i = startIndex; i < startIndex + 8; i++) {
	let game = games[i];
	if (!game) break;
	let { user, title } = game;
	let url = `./?user=${user}&game=${title}`;
	for (let attr in game) {
		if (attr == 'title' || attr == 'user') continue;
		url += `&${attr}=${game[attr]}`;
	}
	html += `
<div class="item">
	<div class="item-content">
		<div class="item-iframe">
			<a href="${url}" class="gameLink"></a>
			<iframe src="${url}&iframe=true" scrolling="no" frameborder="0"></iframe>
		</div>
		<div class="item-info">
			<a href="https://raw.githubusercontent.com/${user}/quintos-games/main/${
		game.language == 'java' ? 'games_java' : 'GAMES'
	}/${title}/${title[0].toLowerCase() + title.slice(1)}.${game.language || 'js'}";>${title}</a>
			<span>by</span>
			<a>${user}</a>
		</div>
	</div>
</div>`;
}

document.getElementById('games').innerHTML += html;

if (args.page) {
	document.getElementById('prev').href = `?page=${args.page - 1}`;
} else {
	document.getElementById('prev').hidden = true;
}
document.getElementById('next').href = `?page=${args.page + 1}`;

const iframes = Array.from(document.getElementsByTagName('iframe'));
for (const item of iframes) {
	item.contentWindow.console.log = () => {};
}

setTimeout(() => {
	for (let i = 0; i < frames.length; i++) {
		frames[i].stop();
	}
}, 3000);
