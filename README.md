# scrimba-mobile-app-project
A simple web app that uses Firebase Realtime Database to save, display, and delete user-submitted URLs. It demonstrates basic Firebase setup, real-time data syncing, and responsive design for mobile devices.

The first step is to use the <code>import</code> function to load specific functionalities from Firebase. This allows me to include only the functions I need for developing the app.

The first Firebase function I imported is <code>initializeApp</code>, which is a setup function that must always be called when starting a new Firebase project. It takes a <code>firebaseConfig</code> object containing the configuration details, including the URL for the Firebase Realtime Database.

Next, I used the <code>getDatabase</code> function, another required setup step when working with the Realtime Database. This function takes the app object returned by <code>initializeApp</code> and gives access to the database instance. Before sending any data, I needed to create a reference inside the database using the <code>ref</code> function. This function takes the database instance and a path name (or key) to define where the data will be stored.

To send data from the app to the Firebase Realtime Database, I used the <code>push</code> function. This allows the user to input a URL in the input field and, upon clicking the "SAVE INPUT" button, push that data to the specified reference in the database.

To retrieve and display the data in real time, I used the <code>onValue</code> function. This function listens for changes at the specified reference and returns a snapshot whenever the data is updated. Before working with the snapshot, it’s important to check if it actually exists.

Firebase returns the data in object format, so it needs to be transformed into an array for easier manipulation and display in the app.

Finally, the user can remove all data from the database by clicking the "DELETE ALL" button. This is done using the simple Firebase remove function, which takes the reference to be deleted.

Before publishing the app, I also configured the viewport in the HTML to ensure the layout displays properly on mobile devices.
