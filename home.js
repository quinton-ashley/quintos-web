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

let gamesPerPage = 8;

function generatePreviews(games) {
	let html = '';

	let startIndex = (args.page || 0) * gamesPerPage;
	for (let i = startIndex; i < startIndex + gamesPerPage; i++) {
		let game = games[i];
		if (!game) break;
		let { user, title } = game;
		let url = `./?user=${user}&game=${title}`;
		for (let attr in game) {
			if (attr == 'title' || attr == 'user') continue;
			url += `&${attr}=${game[attr]}`;
		}

		let project = game.sys ? title : 'quintos-games';
		let dir = '';
		if (!game.sys) {
			if (game.language == 'java') dir += 'games_java/';
			else dir += 'GAMES/';
		}
		dir += title;
		let fileName = title[0].toLowerCase() + title.slice(1);
		if (game.language == 'java') fileName = title;
		let fileExt = game.language || 'js';

		html += `
<div class="item">
	<div class="item-content">
		<div class="item-iframe">
			<a href="${url}" class="gameLink"></a>
			<iframe src="${url}&iframe=true" scrolling="no" frameborder="0"></iframe>
		</div>
		<div class="item-info">
			<a href="https://raw.githubusercontent.com/${user}/${project}/main/${dir}/${fileName}.${fileExt}" target="_blank" rel="noopener noreferrer">${title}</a>
			<span>by</span>
			<a href="./home.html?user=${user}${game.language == 'java' ? '&language=java' : ''}">${user}</a>
		</div>
	</div>
</div>`;
	}

	document.getElementById('games').innerHTML += html;

	let url = '?';
	if (args.user) url += 'user=' + args.user;
	if (args.page) {
		document.getElementById('prev').href = url + `&page=${args.page - 1}`;
		if (games.length <= (args.page + 1) * gamesPerPage) {
			document.getElementById('next').hidden = true;
		}
	} else {
		document.getElementById('prev').hidden = true;
	}

	document.getElementById('next').href = url + `&page=${args.page + 1}`;

	const iframes = Array.from(document.getElementsByTagName('iframe'));
	for (const item of iframes) {
		item.contentWindow.console.log = () => {};
	}

	setTimeout(() => {
		for (let i = 0; i < frames.length; i++) {
			frames[i].stop();
		}
	}, 3000);
}

if (args.user) {
	const gameTitles = [
		'Sokoban',
		'SuperJump',
		'SketchBook',
		'Snake',
		'SpeakAndSpell',
		'TicTacAIO',
		'Contain',
		'WheelOfFortune',
		'WorldWideWeb',
		'TicTacToe',
		'ClickAPath',
		'QuickClicks',
		'Hangman',
		'Pong',
		'PickAPath',
		'GuessTheNumber'
	];

	let games = [];

	for (let title of gameTitles) {
		let game = { title: title, user: args.user };
		if (args.language) game.language = args.language;
		games.push(game);
	}
	generatePreviews(games);
} else {
	let games = [
		{ user: 'quinton-ashley', title: 'Wordle' },
		{ user: 'jaximuslim', title: 'Snake' },
		{ user: 'Paeto-Chayarat', title: 'Crazy7', sys: 'arcv' },
		{ user: 'Morz75', title: 'ClickAPath' },
		{ user: 'WarriorFPHS', title: 'QuickClicks' },
		{ user: 'Rayan-Hobballah', title: 'PickAPath' },
		{ user: 'MEDBEDFAKE', title: 'TicTacToe' },
		{ user: 'liljfff', title: 'Pong' },
		{ user: 'rsaijo24', title: 'Contain', language: 'java' },
		{ user: 'jaximuslim', title: 'QuickClicks' },
		{ user: 'quinton-ashley', title: 'Sokoban' },
		{ user: 'quinton-ashley', title: 'Hangman' },
		{ user: 'quinton-ashley', title: 'SuperJump' },
		{ user: 'quinton-ashley', title: 'WheelOfFortune' }
		// { user: 'sophiaaaaaaaaaaaa', title: 'Pong', language: 'java' }
	];
	generatePreviews(games);
}
