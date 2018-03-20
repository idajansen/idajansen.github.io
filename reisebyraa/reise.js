 // Initialize Firebase
//@ts-check
 function setup () {
 var config = {
    apiKey: "AIzaSyB7NngX7IsKsmF4EK3zdmRYYXBX6CK73GQ",
    authDomain: "reisebyraa-9c844.firebaseapp.com",
    databaseURL: "https://reisebyraa-9c844.firebaseio.com",
    projectId: "reisebyraa-9c844",
    storageBucket: "reisebyraa-9c844.appspot.com",
    messagingSenderId: "418214319172"
  };
  firebase.initializeApp(config);

  let database = firebase.database();

  let inpFornavn= document.getElementById("Fornavn");
  let inpEtternavn = document.getElementById("Etternavn");
  let inpBrukernavn = document.getElementById("Brukernavn");
  let inpPassord = document.getElementById("Passord");

  let btnlagreBruker = document.getElementById("lagreBruker");
  btnlagreBruker.addEventListener("click", lagreBrukere);

  function lagreBrukere (e) {
      let Fornavn = inpFornavn.value;
      let Etternavn = inpEtternavn.value;
      let Brukernavn = inpBrukernavn.value;
      let Passord = inpPassord.value;
      let ref = database.ref("brukere/" + Brukernavn);
      ref.set({ Fornavn, Etternavn,Passord });
  }

}


