var card1 = document.getElementById('card_face_front');
var card2 = document.getElementById('card_face_back');

card1.addEventListener( 'click', 
	function() {
		card1.classList.toggle('is_gone');
		setTimeout(() => {
			card1.classList.toggle('hidden');
			card1.classList.toggle('is_gone');
		}, 900)
		setTimeout(() => {
			card2.classList.toggle('is_here');
			card2.classList.toggle('hidden');
		}, 900)
		setTimeout(() => {
			card2.classList.toggle('is_here');
		}, 200)
	});

card2.addEventListener( 'click',
	function() {
		card2.classList.toggle('is_gone');
		setTimeout(() => {
			card2.classList.toggle('hidden');
			card2.classList.toggle('is_gone');
		}, 900)
		setTimeout(() => {
			card1.classList.toggle('is_here');
			card1.classList.toggle('hidden');
		}, 900)
		setTimeout(() => {
			card1.classList.toggle('is_here');
		}, 200)
	})

//for changing images on mobile phones
if (screen.width < 780)
{
	document.write('<script type="text/javascript" src=\'scripts/mobile.js\'></script>');
}