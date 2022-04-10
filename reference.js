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

(async () => {
	let ref = await (await fetch('reference_js.md')).text();
	ref = ref.split(/## (.*)\n\n/m).slice(1);
	// log(ref);

	for (let i = 0; i < ref.length; i += 2) {
		pages[ref[i]] = ref[i + 1];
	}
	// log(pages);

	if (args.r) changePage(args.r);

	for (let name in pages) {
		list.innerHTML += `<a onclick="changePage('${name}')">${name}</a>`;
	}
})();

function changePage(name) {
	let url = `?r=${name}`;
	history.pushState({}, 'QuintOS ' + name, url);

	title.innerHTML = name;
	doc.innerHTML = md.render(pages[name]);
}
