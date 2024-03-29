// Stack (primitive)
// Heap (Non-primiriv)

  let myYoutubeName = "codewithkaushik"

  let myAnotherYoutubeName = myYoutubeName
  myAnotherYoutubeName = "allcode"

  console.log(myYoutubeName);
  console.log(myAnotherYoutubeName);


  let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
  }

  let userTwo = userOne

  userTwo.email = "kaushik@gmail.com"


  console.log(userOne.email)
  console.log(userTwo.email);