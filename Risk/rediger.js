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

    let inpLAnd = document.getElementById("land");
    let inpRegion = document.getElementById("region");

    let btnLagreLand = document.getElementById("lagreland");
    bntLagreLand.addEventlistner("click", lagreLand);

    let inpKort = document.getElementById("kort");
    let inpAntallNye = document.getElementById("antallnye");

    let btnLagreKort = document.getElementById("lagrekort");
    bntLagreKort.addEventlistner("click", lagreKort);

    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let inpFarge = document.getElementById("farge");
    let inpBruker = document.getElementById("bruker");

    let btnLagreSpiller = document.getElementById("lagrespiller");
    bntLagreSpiller.addEventlistner("click", lagreSpiller);

    function lagreData(e) {
        let land = inpLand.value;
        let kortid = inpkortid.value;
        let ref = database.ref("land/" + land)
        ref.set({ kortid });
    }
    function lagreKort(e) {
        let kort = inpLand.value;
        let antallnye = inpAntallNye.value;
        let ref = database.ref("kort/" + kort)
        ref.set({ antallnye });
    }
    function lagreSpiller(e) {
        let brukernavn = inpBruker.value;
        let navn = inpNavn.value;
        let alder = inpAlder.value;
        let farge = inpFarge.value;
        let ref = database.ref("spiller/" + brukernavn)
        ref.set({ alder, farge, navn });
    }
}

