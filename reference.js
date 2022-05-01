const log = console.log;
const md = window.markdownit();

let args = {};

{
	let url = location.href.split('?');
	if (url.length > 1) {
		let params = new URLSearchParams(url[1]);
		for (let pair of params.entries()) {
			args[pair[0]] = pair[1];
		}
	}
}

let title = document.getElementById('title');
let doc = document.getElementById('doc');
let list = document.getElementById('list');
let pages = {};

if (!args.language || args.language == 'js') {
	loadReferenceJS();
} else if (args.language == 'html') {
	loadReferenceHTML();
}

async function loadReferenceHTML() {
	let ref = await (await fetch('reference_html.md')).text();
	title.innerHTML = 'Common HTML tags';
	doc.innerHTML = md.render(ref).replaceAll('&lt;li&gt; ', '<li> ');
}

async function loadReferenceJS() {
	let ref = await (await fetch('reference_js.md')).text();

	ref = ref.split(/(?:^|\n)# (.*)\n/m).slice(1);
	log(ref);
	for (let i = 0; i < ref.length; i += 2) {
		let ref2 = ref[i + 1].split(/\n## (.*)\n\n/m).slice(1);
		log(ref2);
		pages[ref[i]] = {};
		for (let j = 0; j < ref2.length; j += 2) {
			pages[ref[i]][ref2[j]] = ref2[j + 1];
		}
	}
	log(pages);

	if (args.r) changePage(args.r);

	let html = '';
	for (let header in pages) {
		log(header);
		html += `<div><h3>${header}</h3>`;
		for (let name in pages[header]) {
			html += `<a onclick="changePage('${name}')">${name}</a>`;
		}
		html += '</div>';
	}
	list.innerHTML += html;
}

function changePage(name) {
	let url = `?r=${name}`;
	history.pushState({}, 'QuintOS ' + name, url);

	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

	title.innerHTML = name;
	for (let header in pages) {
		if (!pages[header][name]) continue;
		doc.innerHTML = md.render(pages[header][name]);
		break;
	}
}
