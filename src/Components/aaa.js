//Handle Console
const presentDivers = this.props.divers.divers.filter(
    (diver) => diver.day === false && diver.supervisor === false && diver.lead === false
);
console.log(presentDivers.map(el => el.surname))

const consol = presentDivers.filter((diver) => diver.console === true);

const sortedConsole = consol.sort((a, b) =>
    a.perCentOfconsole > b.perCentOfconsole
        ? 1
        : a.perCentOfconsole === b.perCentOfconsole
        ? a.perCentOfDry > b.perCentOfDry
            ? 1
            : -1
        : -1
);

const consoleGuy = sortedConsole[0].surname;
console.log(`C: ${consoleGuy}`)

let objConsole = { diver: `${consoleGuy}`, track: "C" };
tracksPersons.push(objConsole);



//Remove console guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === consoleGuy),
    1
);
console.log(presentDivers.map(el => el.surname))

//Handle CR
const cr = presentDivers.filter((diver) => diver.dcr === true);
const sortedCr = cr.sort((a, b) =>
    a.perCentOfWet > b.perCentOfWet
        ? 1
        : a.perCentOfWet === b.perCentOfWet
        ? a.perCentOfdcr > b.perCentOfdcr
            ? 1
            : -1
        : -1
);
const crGuy = sortedCr[0].surname;
console.log(`CR: ${crGuy}`)

let objCr = { diver: `${crGuy}`, track: "CR" };
tracksPersons.push(objCr);

//Remove CR guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === crGuy),
    1
);
console.log(presentDivers.map(el => el.surname))

//Handle CL
const cl = presentDivers.filter((diver) => diver.dcl === true);
const sortedCl = cl.sort((a, b) =>
    a.perCentOfWet > b.perCentOfWet
        ? 1
        : a.perCentOfWet === b.perCentOfWet
        ? a.perCentOfdcl > b.perCentOfdcl
            ? 1
            : -1
        : -1
);
const clGuy = sortedCl[0].surname;
console.log(`CL: ${clGuy}`)

let objCl = { diver: `${clGuy}`, track: "CL" };
tracksPersons.push(objCl);

//Remove CL guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === clGuy),
    1
);
console.log(presentDivers.map(el => el.surname))

//Handle R1
const r1 = presentDivers.filter((diver) => diver.r1 === true);
const sortedR1 = r1.sort((a, b) =>
    a.perCentOfWet > b.perCentOfWet
        ? 1
        : a.perCentOfWet === b.perCentOfWet
        ? a.perCentOfr1 > b.perCentOfr1
            ? 1
            : -1
        : -1
);
const r1Guy = sortedR1[0].surname;
console.log(`R1: ${r1Guy}`)

let objR1 = { diver: `${r1Guy}`, track: "R1" };
tracksPersons.push(objR1);

//Remove R1 guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === r1Guy),
    1
);
console.log(presentDivers.map(el => el.surname))

//Handle L1
const l1 = presentDivers.filter((diver) => diver.l1 === true);
const sortedL1 = l1.sort((a, b) =>
    a.perCentOfWet > b.perCentOfWet
        ? 1
        : a.perCentOfWet === b.perCentOfWet
        ? a.perCentOfl1 > b.perCentOfl1
            ? 1
            : -1
        : -1
);
const l1Guy = sortedL1[0].surname;
console.log(`L1: ${l1Guy}`)

let objL1 = { diver: `${l1Guy}`, track: "L1" };
tracksPersons.push(objL1);

//Remove L1 guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === l1Guy),
    1
);
console.log(presentDivers.map(el => el.surname))

//Handle R2
const r2 = presentDivers.filter((diver) => diver.r2 === true);
const sortedR2 = r2.sort((a, b) =>
    a.perCentOfWet > b.perCentOfWet
        ? 1
        : a.perCentOfWet === b.perCentOfWet
        ? a.perCentOfr2 > b.perCentOfr2
            ? 1
            : -1
        : -1
);
const r2Guy = sortedR2[0].surname;
console.log(`R2: ${r2Guy}`)

let objR2 = { diver: `${r2Guy}`, track: "R2" };
tracksPersons.push(objR2);

//Remove R2 guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === r2Guy),
    1
);
console.log(presentDivers.map(el => el.surname))

//Handle L2
const l2 = presentDivers.filter((diver) => diver.l2 === true);
const sortedL2 = l2.sort((a, b) =>
    a.perCentOfWet > b.perCentOfWet
        ? 1
        : a.perCentOfWet === b.perCentOfWet
        ? a.perCentOfl2 > b.perCentOfl2
            ? 1
            : -1
        : -1
);
const l2Guy = sortedL2[0].surname;
console.log(`L2: ${l2Guy}`)

let objL2 = { diver: `${l2Guy}`, track: "L2" };
tracksPersons.push(objL2);

//Remove L2 guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === l2Guy),
    1
);
console.log(presentDivers.map(el => el.surname))

//Handle FR
const fr = presentDivers.filter((diver) => diver.fr === true);
const sortedFr = fr.sort((a, b) =>
    a.perCentOffr > b.perCentOffr
        ? 1
        : a.perCentOffr === b.perCentOffr
        ? a.perCentOfdeck < b.perCentOfdeck
            ? 1
            : -1
        : -1
);
const frGuy = sortedFr[0].surname;
console.log(`FR: ${frGuy}`)

let objFr = { diver: `${frGuy}`, track: "FR" };
tracksPersons.push(objFr);

//Remove FR guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === frGuy),
    1
);
console.log(presentDivers.map(el => el.surname))

//Handle FL
let fl = presentDivers.filter((diver) => diver.fl === true);
const sortedFl = fl.sort((a, b) =>
        a.perCentOffl > b.perCentOffl
            ? 1
            : a.perCentOffl === b.perCentOffl
            ? a.perCentOfdeck < b.perCentOfdeck
                ? 1
                : -1
            : -1
    );

let flGuy;
if(fl.length === 0) {
    fl = sortedCr.filter(diver => diver.fl === true)
    flGuy = fl[0].surname
} else {
    flGuy = sortedFl[0].surname;
}

console.log(`FL: ${flGuy}`)

let objFl = { diver: `${flGuy}`, track: "FL" };
tracksPersons.push(objFl);

//Remove FL guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === flGuy),
    1
);
console.log(presentDivers.map(el => el.surname))

//Handle Deck
const deck = presentDivers.filter((diver) => diver.deck === true);
const sortedDeck = deck.sort((a, b) =>
    a.perCentOfdeck > b.perCentOfdeck ? 1 : -1
);
const deckGuy = sortedDeck[0].surname;
console.log(`D/S: ${deckGuy}`)

let objDeck = { diver: `${deckGuy}`, track: "D/S" };
tracksPersons.push(objDeck);

//Remove Deck guy from presentDivers array
presentDivers.splice(
    presentDivers.findIndex((diver) => diver.surname === deckGuy),
    1
);
console.log(presentDivers.map(el => el.surname))


//Push the divers without tracks into the tracksPersons array
presentDivers.map((diver) =>
    tracksPersons.push({ diver: `${diver.surname}`, track: "" })
);

//Push the supervisors, lead day crew into the tracksPersons array
const noTrackAssigned = this.props.divers.divers.filter( diver => diver.supervisor === true || diver.lead === true || diver.day === true);
noTrackAssigned.map(diver => tracksPersons.push({ diver: `${diver.surname}`, track: "" }));