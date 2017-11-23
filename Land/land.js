function setup() {
     // Initialize Firebase
     var config = {
        apiKey: "AIzaSyCTsdSBVNRnn4_A11QYo6mRDoiG4ebEEXg",
        authDomain: "civcountries-8687f.firebaseapp.com",
        databaseURL: "https://civcountries-8687f.firebaseio.com",
        projectId: "civcountries-8687f",
        storageBucket: "civcountries-8687f.appspot.com",
        messagingSenderId: "342670409582"
      };
    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("nations")

    function visLand (snapshot) {
        let land = snapshot.val();
        divListe.innerHTML += `
        <div>${land.capital}</div>
        `;
    }
    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
ref.on("child_added", visLand);
}