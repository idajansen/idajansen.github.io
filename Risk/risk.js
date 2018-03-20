function setup() {
    var config = {
        apiKey: "AIzaSyAubvYO0FUkQ9WeKni0zHlS1Ia-T_SY51s",
        authDomain: "risk-2baee.firebaseapp.com",
        databaseURL: "https://risk-2baee.firebaseio.com",
        projectId: "risk-2baee",
        storageBucket: "risk-2baee.appspot.com",
        messagingSenderId: "993148330734"
      };
      firebase.initializeApp(config);

let database = firebase.database();

let land = database.ref("land");
land.on("child_added", visLand)

let kort = database.ref("kort");
kort.on("child_added", visKort)

let spiller = database.ref("spiller");
spiller.on("child_added", visSpiller)
    }

    function visLand(snapshot) {
        let land = snapshot.key;
        let divTarget = document.getElementById("land");
        divTarget.innerHTML += `<div class="box">${land}<div/>`
    }

    function visKort (snapshot) {
        let kort = snapshot.key;
        let divTarget = document.getElementById("kort");
        divTarget.innerHTML += `<div class="box">${kort}<div/>`
    }

    function visSpiller (snapshot) {
        let spiller = snapshot.val();
        let divTarget = document.getElementById("spiller");
        divTarget.innerHTML += `<div>
        <br>Navn ${spiller.navn}
        <br>Farge ${spiller.farge}
        <br>Alder ${spiller.alder}

        </div>`


    }