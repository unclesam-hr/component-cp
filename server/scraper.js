const path = require('path');
const Scraper = require('images-scraper');
const download = require('image-downloader');
const google = new Scraper.Google()

var options = {
	url: '',
	dest: __dirname
};
console.log('options dir:', options['dest']);
// test scrape
google.list({
	keyword: 'westelm chair',
	num: 150,
	detail: true,
	nightmare: {
		show: true
	}
})
	.then((res) => {
		// console.log('Results from google', res);
		res.forEach((img, i) => {
			options['url'] = img['url'];
			download.image(options)
				.then(({filename, image}) => {
					console.log('Image saved to', filename)
				})
				.catch((err) => {
					console.error(err);
				})
		})

	})
	.catch((err) => {
		console.log('err', err);
	});

google.on('result', function (item) {
    console.log('out', item);
});