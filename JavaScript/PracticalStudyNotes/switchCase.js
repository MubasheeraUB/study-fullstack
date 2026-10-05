/#########################################/

/* There are situations where you have one value and many possible exact matches. switch can make that cleaner than a long else 
if chain. */

const role = "Developer";

switch (role) {
    case "Admin":
        console.log("Full access");
        break;

    case "Developer":
        console.log("Code access");
        break;

    case "User":
        console.log("Basic access");
        break;

    default:
        console.log("Unknown role");
}