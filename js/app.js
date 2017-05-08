
// Creating a simple commenting Application
//*****************************************************************************

var changeColor = 1;

// Start function on click
document.getElementById('clickMe').onclick = function (){ commentingApp()};


function commentingApp (){
  // Store the user data
  var userName = document.getElementById('name').value;
  var userComment = document.getElementById('comment').value;
  console.log(userName);
  console.log(userComment);

  //Check that the inpunt and the textarea are not empty
  if(userName === "") {
    alert("please enter your username")
    return
  } else if (userComment === "") {
    alert("please enter information in the textarea");
    return
  }
  //Create html elements to display user data
  // Add unordered list
  var newUL = document.getElementById('resultsUL');
  newUL.className = 'results';

  // Create list
  var newList = document.createElement('li');
  newList.className = 'list-group-item';

  // Create Text nodes
  var newUserText = document.createTextNode('Username: '+ userName);
  var newCommentText = document.createTextNode('Comment: '+ userComment);

  //create an image
  var newImage = document.createElement('img');
  newImage.src = 'img/img6.jpg';
  var src = document.getElementById('resultsUL');

  // src.appendChild(newImage);

  // create paragraph and add text to it
  var addUserName = document.createElement('p');
  addUserName.className = 'userText';
  addUserName.appendChild(newUserText);
  var addComment = document.createElement('p');
  addComment.className = 'userText';
  addComment.appendChild(newCommentText);

  //add items to list
  newList.appendChild(addUserName);
  newList.appendChild(addComment);

  // get the list
  var addHere = document.getElementById('resultsUL');
  addHere.appendChild(newList);

  if (changeColor%2 === 0 )
  {

    //changing background color of even lists
    newList.className = 'list-group-item color1';
    console.log(changeColor);
  }


  if ((changeColor%2 !== 0) ){
    newList.className = 'list-group-item color2';
  }



  changeColor++;
}
