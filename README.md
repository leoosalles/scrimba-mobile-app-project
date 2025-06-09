<h1>Leads Tracker - Firebase & JavaScript Project 🚀</h1>
<h2>Overview</h2>
<p>
  This project is the <strong>final challenge</strong> of the <strong>"Learn JavaScript"</strong> module in the <strong>Frontend Development</strong> specialization course offered by <strong>Scrimba</strong>. It is a <strong>simple web app</strong> that uses <strong>Firebase Realtime Database</strong> to <strong>save, display, and delete user-submitted URLs</strong>. The goal is to practice <strong>real-time data syncing, database interaction, and responsive UI design</strong>, ensuring a seamless user experience across devices.
</p>
<h2>Features ✨</h2>
<p>
  ✅ <strong>Real-time storage and retrieval</strong> of URLs using Firebase.
</p>
<p>
  ✅ <strong>User-friendly interface</strong>, allowing users to track leads easily.
</p>
<p>
  ✅ <strong>Data persistence</strong>, ensuring leads remain accessible across sessions.
</p>
<p>
  ✅ <strong>Delete functionality</strong>, enabling users to remove all stored URLs with one click.
</p>
<p>
  ✅ <strong>Mobile-first responsive design</strong>, adapting to different screen sizes.
</p>
<h2>Technologies Used 🛠️</h2>
<p>
  🖥️ <strong>HTML5</strong> – Structuring the web app for accessibility.
</p>
<p>
  🎨 <strong>CSS3</strong> – Styling with modern UI principles.
</p>
<p>
  ⚡ <strong>JavaScript (ES6)</strong> – Handling dynamic interactions and logic.
</p>
<p>
  🗄️ <strong>Firebase Realtime Database</strong> – Storing and retrieving leads efficiently.
</p>
<h2>Firebase Implementation 🗄️</h2>
<p>
  The app is set up to communicate with Firebase by following these steps:
</p>
<p>
  📌 <strong>Firebase Initialization:</strong>
</p>
<ul>
  <li>
    The <code>initializeApp</code> function is used to set up the Firebase instance.
  </li>
  <li>
    A <code>firebaseConfig</code> object contains the database URL and necessary credentials.
  </li>
</ul>
<p>
  📌 <strong>Database Setup:</strong>
</p>
<ul>
  <li>
    The <code>getDatabase</code> function connects to Firebase’s <strong>Realtime Database</strong>.
  </li>
  <li>
    The <code>ref</code> function creates a <strong>specific reference point</strong> in the database to store leads.
  </li>
</ul>
<p>
  📌 <strong>Adding Data:</strong>
</p>
<ul>
  <li>
    The user enters a <strong>URL</strong> and clicks the <strong>SAVE INPUT</strong> button.
  </li>
  <li>
    The <code>push</code> function stores the URL at the designated database reference.
  </li>
</ul>
<p>
  📌 <strong>Retrieving & Displaying Data:</strong>
</p>
<ul>
  <li>
    The <code>onValue</code> function listens for changes in the database.
  </li>
  <li>
    It checks if data exists, then transforms it into an <strong>array for rendering</strong>.
  </li>
</ul>
<p>
  📌 <strong>Deleting Data:</strong>
</p>
<ul>
  <li>
    Clicking <strong>DELETE ALL</strong> triggers the <code>remove</code> function, which deletes all stored URLs.
  </li>
  <li>
    A <strong>confirmation prompt</strong> ensures accidental deletions are avoided.
  </li>
</ul>
