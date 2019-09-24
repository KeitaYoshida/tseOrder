const functions = require('firebase-functions');
const cors = require('cors')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/messages').push({
    original: original
  });
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});

exports.hello = functions.https.onCall(async (request, response) => {
  return cros(request, response, () => {

    // const save = await admin.database().ref('/test').push({
    //   test: 'value yoshida'
    // })
    // save.ref.toString();
    admin.database().ref('/test')
      .once('value')
      .then(data => {
        response.status(200).send(data.val().test)
      })
      .catch(error => {
        response.status(404).send({
          message: 'Not Found'
        })
      })
  })
})

exports.orderData = functions.https.onCall((request, response) => {
  if (request.method !== 'POST') {
    response.send('This is not post request')
  }

  response.send(request)
})
