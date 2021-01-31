const { hash } = window.location;

const input = document.querySelector('#message-input');
const output = document.querySelector('#link-input');

const message = atob(hash.replace(/#/, ''));
if (message) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');

	document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (e) => {
	// browser default action: on form submit -> send to backend server. but, we don't have a backend in same directory, so this will never work...
	e.preventDefault();

	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#link-form').classList.remove('hide');

	const encrypted = btoa(input.value);

	output.value = `${window.location}#${encrypted}`;
});

// copy to clipboard
const copyButton = document.querySelector('#copy-button');
copyButton.addEventListener('click', (e) => {
	output.select();
	document.execCommand('copy');

	document.querySelector('.copy-msg').classList.remove('hide');
});

/*
// Implement base64 decoding

    -ASCII ('ass-key') chars can be represented by a number between 0 and 127 (a-z + A-Z + special characters)

    -base64 chars can be represented with a number between 0 and 63 (a-z, A-Z, 0-9)
    
    -Conversion from ascii to base64
        --ASCII code of each char is converted to binary (e.g. 115 = 01110011)
        --binarys code of whole string are concatonated 
        --split the long number into groups of 6
        --use this number for finding the correct base64 char equivalent for each char
        --return the whole string of joined base64 chars

*/

/*
URL construction
    -domain: www.google.com
    -path: /search
    -query: /?<prop>=<val>&<prop>=<val>
    -hash/fragment: information for browser only
        --scroll section
        --hash-history
        --this proj: encrypted string
*/
