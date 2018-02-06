function setup() {
     // Initialize Firebase
     var config = {
        apiKey: "AIzaSyDkgLs3sjn_72YoCZm0R0iANVVQPS-cRCY",
        authDomain: "dyrlegen-cdc94.firebaseapp.com",
        databaseURL: "https://dyrlegen-cdc94.firebaseio.com",
        projectId: "dyrlegen-cdc94",
        storageBucket: "dyrlegen-cdc94.appspot.com",
        messagingSenderId: "965984129777"
      };
    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("kunde")

    function visKunder (snapshot) {
        let land = snapshot.val();
        divListe.innerHTML += `
        <div>${land.capital}</div>
        `;
    }
    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Kunde nr ${kundenr}</h4>
            <ul>
             <li>Fornavn ${info.fornavn}
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}

             
            </ul>
          </div>
        `;
    }
ref.on("child_added", visKunder);
}
let divListe2 = document.getElementById("liste");
let ref2 = firebase.database().ref("dyr");

function visDyr (snapshot) {
    let land = snapshot.val();
    divListe.innerHTML += `
    <div>${land.capital}</div>
    `;
}
function visDyr(snapshot) {
    let dyrnr = snapshot.key;
    let info = snapshot.val();
    divListe2.innerHTML += `
      <div>
        <h4>dyr nr ${dyrnr}</h4>
        <ul>
         <li>navn ${info.navn}
         <li>kjønn ${info.kjønn}
         <li>vekt ${info.vekt}
         <li>art ${info.art}
         <li>kundenr : ${info.kundenr}

         
        </ul>
      </div>
    `;
}
ref2.on("child_added", visKunder);