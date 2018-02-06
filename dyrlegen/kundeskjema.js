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
      let spanKunde = document.getElementById("kundevelger");
      let divDyr = document.getElementById("dyr");
  
      let ref = firebase.database().ref("kunde");
  
      ref.once("value").then(function (snapshot) {
          let kundene = snapshot.val();
          if (kundene) {
              let dropBox = makeDrop(kundene);
              spanKunde.innerHTML = dropBox;
  
              let drpKunde = document.getElementById("kundenr");
              drpKunde.addEventListener("change", visDyr);
          }
      });
  
      function visDyr(e) {
          let valgt = +document.getElementById("kundenr").value;
          let ref = firebase.database().ref("dyr").orderByChild("kundenr").equalTo(valgt);
          ref.once("value").then(function (snapshot) {
              let dyrene = snapshot.val();
              if (dyrene) {
                  let dyrnr = Object.keys(dyrene);
                  let dyrliste = `<ol>` +
                      dyrnr.map(e => `<li>${dyrene[e].navn} ${dyrene[e].art}</li>`).join("")
                      + `</ol>`;
                  divDyr.innerHTML = dyrliste;
  
              }
          });
      }
  
  
      function makeDrop(kunder) {
          let box = '<select id="kundenr">';
          let kundenr = Object.keys(kunder);
          let navn = kundenr.map(e =>
              `<option value="${e}">${kunder[e].fornavn}</option>`);
          box += navn.join("") + "</select>";
          return box;
      }
  
  }
  