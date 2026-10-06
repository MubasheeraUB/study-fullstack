function variableDeclaration() {

    console.log("----- VAR -----");

    var a = 10;

    if (true) {
        var a = 20;
    }

    console.log("var a:", a); // 20


    console.log("----- LET -----");

    let b = 10;

    if (true) {
        let b = 20;
        console.log("inside block:", b); // 20
    }

    console.log("outside block:", b); // 10


    console.log("----- HOISTING -----");

    console.log("var before declaration:", c); // undefined

    var c = 30;


    console.log("----- CONST -----");

    const d = 40;

    console.log("const d:", d);

    // d = 50; // ❌ TypeError
}

variableDeclaration();