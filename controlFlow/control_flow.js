// Global variables
let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

//  code to give access based on user role
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
}else {
    accessLevel = "No access granted"
}

console.log("Access Level:", accessLevel);

// code to check if user has logged as admin or manager
if (isLoggedIn) {
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
}  else {
    userMessage = "Please log in to access the system.";
}
console.log("user message:", userMessage);

// output for cases
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);
