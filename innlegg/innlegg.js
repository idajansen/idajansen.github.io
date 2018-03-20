function setup() {
  var config = {
    apiKey: "AIzaSyArdLGZt9LNrxNllQ5dGaAf5FllfGYatYE",
    authDomain: "webchat-5f8c4.firebaseapp.com",
    databaseURL: "https://webchat-5f8c4.firebaseio.com",
    projectId: "webchat-5f8c4",
    storageBucket: "webchat-5f8c4.appspot.com",
    messagingSenderId: "426717441692"
  };

  firebase.initializeApp(config);

  let database = firebase.database();

let medlemmer = database.ref("medlemmer");
medlemmer.on("child_added", visMedlemmer)

let forum = database.ref("forum");
forum.on("child_added", visForum)

let innlegg = database.ref("innlegg");
innlegg.on("child_added", visInnlegg)

    function visInnlegg(snapshot) {
        let innlegg = snapshot.key;
        let divTarget = document.getElementById("innlegg");
        divTarget.innerHTML += `<div class="box">${innlegg}<div/>`
    }

    function visForum (snapshot) {
        let forum = snapshot.key;
        let divTarget = document.getElementById("forum");
        divTarget.innerHTML += `<div class="box">${forum}<div/>`
    }

    function visMedlemmer (snapshot) {
        let innlegg = snapshot.val();
        let divTarget = document.getElementById("medlemmer");
        divTarget.innerHTML += `<div>
        <br>Fornavnavn ${medlemmer.fornavnnavn}
        <br>Etternavn ${medlemmer.etternavn}
        <br>Adresse ${medlemmer.adresse}
        <br>Epost ${medlemmer.epost}

        </div>`
    }
}