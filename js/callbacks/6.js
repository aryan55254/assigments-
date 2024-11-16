/*Write a function called processUserData that simulates processing user information with the following requirements:

The function should take an array of user objects (each with id and name properties) and a callback function as parameters
For each user:

First simulate fetching their detailed profile (taking 1 second)
Then simulate fetching their purchase history (taking 1.5 seconds)
Finally simulate validating their data (taking 0.5 seconds)


Only process one user at a time (in sequence)
After all users are processed, call the callback function with an array of processed user objects
Each processed user object should include their original data plus:

profileStatus: "completed"
purchaseCount: random number between 1-10
isValidated: true*/
const x = [
    { id: 1, name: "aryan", purchasehistory: "3items" },
    { id: 2, name: "adi", purchasehistory: "4items" }
];

const processUserData = (usersInfo, callback) => {
    const processedUsers = [];  // Array to store processed users
    let currentIndex = 0;      // Track current user

    // Helper function to process a single user
    const processUser = (user) => {
        const fetchProfile = () => {
            console.log("Fetching profile:", user);
            
            // After profile is fetched, get purchase history
            setTimeout(() => {
                fetchPurchaseHistory();
            }, 1000);
        };

        const fetchPurchaseHistory = () => {
            console.log("Fetching history:", user.purchasehistory);
            
            // After history is fetched, validate
            setTimeout(() => {
                validateUser();
            }, 1500);
        };

        const validateUser = () => {
            console.log("Validating user:", user.name);
            
            // After validation, add processed user to array
            setTimeout(() => {
                processedUsers.push({
                    ...user,
                    profileStatus: "completed",
                    isValidated: true
                });

                // Move to next user or finish
                if (currentIndex < usersInfo.length - 1) {
                    currentIndex++;
                    processUser(usersInfo[currentIndex]);
                } else {
                    // All users processed, call final callback
                    callback(processedUsers);
                }
            }, 500);
        };

        // Start processing this user
        fetchProfile();
    };

    // Start with first user
    if (usersInfo.length > 0) {
        processUser(usersInfo[0]);
    } else {
        callback([]);
    }
};

const callbackFunc01 = (processedUsers) => {
    processedUsers.forEach(user => {
        console.log(`profile status: "completed", purchase count: ${user.purchasehistory}, isValidated: "true"`);
    });
};

// Test the function
processUserData(x, callbackFunc01);