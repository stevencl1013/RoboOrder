'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
/* app.intent('favorite color', (conv, {color}) => {
    const luckyNumber = color.length;
    // Respond with the user's lucky number and end the conversation.
    conv.close('Your lucky number is ' + luckyNumber);
}); */

app.intent('food_ordering', (conv, {input}) => {
	var words = input.toUpperCase().split(" ");
	var ourMenu = [HAMBURGER. CHEESEBURGER, FRIES]; // to be changed later
	var customOrder = commonArray(words, ourMenu);
	console.log(customOrder);
})

function commonArray(arr1, arr2) {
	const len1 = arr1.length;
	const len2 = arr2.length;
	var commons = [];
	var relNum = 1;
	for(i = 0; i < len1; i++) {
		var isnum = /^\d+$/.test(arr1[i]);
		if (isnum) {
			// save the number
			relNum = parseInt(arr1[i]);
		} else {
			// checking for menu items + collect referencing numbers
			for (j = 0; j < len2; j++) {
				
				// if there is an exact match
				if (arr1[i] == arr2[j]) {
					commons.push([relNum, arr1[i]]);
					relNum = 1;
				} // if there is a match with 2 words
/*				else if (i < len1 - 1 && arr[i] + " " + arr[i + 1] == arr2[j]) {
					commons.push(arr1[i]);
					relNum = 1;
				} */
			}
		}
	}
	return commons;
}

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);