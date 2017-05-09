
// Creating a simple commenting Application
//*****************************************************************************
//starting indexes
var changeColor = 1;
var index = 0;

//get time
var month = ["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug",
             "Sep", "Oct", "Nov", "Dec"];


// Start function on click
//------------------------------------------------------------------
document.getElementById('clickMe').onclick = function (){ commentingApp()};

function commentingApp (){
  // Store the user data
  var userName = document.getElementById('name').value;
  var userComment = document.getElementById('comment').value;
  var userImage = document.getElementById('image').src;

  console.log(userName);
  console.log(userComment);

  //Check that the inpunt and the textarea are not empty
  if(userName === "") {
    alert("please enter your username")
    return
  } else if (userComment === "") {
    alert("please enter your comment");
    return
  }

  // Create list and give a class name
  var newList = document.createElement('li');
  newList.className = 'media';
  newList.id = 'list'+index;
  var addNewListHere = document.getElementById('results');
  addNewListHere.appendChild(newList);

  // Create divs, give an id, class name, and add it to the unordered list
  var imageDiv = document.createElement('div');
  var commentDiv = document.createElement('div');
  imageDiv.id = 'image' + index;
  commentDiv.id = 'comment' + index;
  imageDiv.className = 'media-left';
  commentDiv.className = 'media-body';
  var addImageDivHere = document.getElementById('list'+index);
  var addCommentDivHere = document.getElementById('list'+index);
  addImageDivHere.appendChild(imageDiv);
  addCommentDivHere.appendChild(commentDiv);

  //create an image, provide a source and add it to the unordered list
  var newImage = document.createElement('img');
  newImage.className = 'media-object';
  newImage.src = userImage;
  var addImageHere = document.getElementById('image'+ index);
  addImageHere.appendChild(newImage);

  // Create Text nodes to place comments
  var newCommentText = document.createTextNode(userComment);
  var newDate = new Date();
  var date = month[newDate.getMonth()] + " "+ newDate.getDate()+ ", "+newDate.getFullYear();
  console.log(date);
  var newUserText = document.createTextNode( userName + "  |  " + date + "  ·  "+ getTimeAMPM(newDate) );

  // create paragraph and add text to it
  var addComment = document.createElement('p');
  addComment.className = 'userText1';
  addComment.appendChild(newCommentText);

  var addUserName = document.createElement('span');
  addUserName.className = 'userText2';
  addUserName.appendChild(newUserText);

  //add items to list
  commentDiv.appendChild(addComment);
  commentDiv.appendChild(addUserName);

  //create a button
  var newButton = document.createElement('button');
  newButton.className = 'delete-button';
  newButton.id = 'button'+index;
  var newButtonText = document.createTextNode('delete');
  newButton.appendChild(newButtonText);
  commentDiv.appendChild(newButton);


  //changing background color of even lists
  if (changeColor%2 === 0 )
  {
    commentDiv.className = 'media-body color1';
    console.log(changeColor);
  } else {
    commentDiv.className = 'media-body color2';
  }

  //clear values of input and text
  document.getElementById('name').value = "";
  document.getElementById('comment').value = "";

  changeColor++;
  index++;
  return index;
}

//--------------------------------------------------------------------------

function addZero(number){
  if (number< 10 ){
    number = "0" + number;
  }
  return number;
}

//---------------------------------------------------------------------------
function getTimeAMPM(newDate) {
  // get hours, minutes, and seconds
  var h = addZero(newDate.getHours());
  var m = addZero(newDate.getMinutes());
  var s = addZero(newDate.getSeconds());
  var ampm;
  //make sure that the hour is display as an am or pm format
  if (h >=12){
    ampm = 'pm';
    h = h%12;
  } else if (h === 0) {
    h = 12;
    ampm = 'AM';
  } else {
    ampm = 'PM';
  }

  var strTime = h + ":" + m + ":" + s + " " + ampm;
  console.log(strTime);
  return strTime;
}

//----------------------------------------------------------------------------

for (var i = 0; i <= index; i++) {
  var idButton = document.getElementById('button'+i);
  console.log(index);
}
