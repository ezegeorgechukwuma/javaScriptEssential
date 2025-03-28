// Step 1: Create an object with user roles and messages
const userRoles = {
    Employee: "Access to full services.",
    "Enrolled Member": "Access to both services and one-on-one interaction.",
    Subscriber: "Partial access to services.",
    "Non-Subscriber": "Need to enroll or subscribe."
};

// Step 2: Define a function to check access based on role
function getAccessMessage(role) {
    if (userRoles[role]) {
        console.log(userRoles[role]);  // Print the message if role exists
    } else {
        console.log("Invalid role! Please enter a valid role.");  // Handle invalid roles
    }
}

// Step 3: Test the function with different roles
getAccessMessage("Employee");         // Output: Access to full services.
getAccessMessage("Enrolled Member");  // Output: Access to both services and one-on-one interaction.
getAccessMessage("Subscriber");       // Output: Partial access to services.
getAccessMessage("Non-Subscriber");   // Output: Need to enroll or subscribe.
getAccessMessage("Random Role");      // Output: Invalid role! Please enter a valid role.
