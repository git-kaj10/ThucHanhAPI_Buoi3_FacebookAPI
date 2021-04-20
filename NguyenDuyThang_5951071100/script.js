let data = null;

axios.get("https://graph.facebook.com/nguyenduythang78/posts?fields=likes.summary(true),message,comments&access_token=EAAAAZAw4FxQIBAABv35jsFcxE5Kin7oMUAZB4f7OXVpiB1508R27Fofza6bZAynjluEe99AZCuAET7ZBaf3ABFwcmizlSBalTtZAUmrAfXYEUdOcLg3LZCqrsr7dZCmTidfQWmRCAuPOirfEzaSYpZA7U7pMOuhh2L4ZBMzKA6uHQjZALGtmXicjGHvCsnRLp5YRVQZD")
  .then(function (response) {
    data = response.data;
    console.log(response.data);
    let output = "";
    for(var i = 0; i < 3; i++){
        output +=  "<tr><th scope='row'>" + (i + 1) + "</th>" +
            "<td>" + response.data.data[i].message + "</td>" +
            "<td id='id" + i + "'>" + response.data.data[i].id + "</td>" +
            "<td> " + response.data.data[i].likes.summary.total_count + "</td>" +
            "<td ><input type='text' id='msg" + i + "'" + " placeholder='Enter a comment'/></td>" +
            "<td><button type='submit' id='" + i + "'" + ">Comment</button></td></tr>";
    }
    document.getElementById('content').innerHTML = output;

    var i = 0;
    for(; i < 3; i++){
       let button = document.getElementById(i);
       let postId = data.data[i].id;

       button.onclick = function(event){
        let inputMessage = document.getElementById('msg' + event.target.id);
        axios.post('https://graph.facebook.com/'+ postId + '/comments', {
            access_token: 'EAAAAZAw4FxQIBAABv35jsFcxE5Kin7oMUAZB4f7OXVpiB1508R27Fofza6bZAynjluEe99AZCuAET7ZBaf3ABFwcmizlSBalTtZAUmrAfXYEUdOcLg3LZCqrsr7dZCmTidfQWmRCAuPOirfEzaSYpZA7U7pMOuhh2L4ZBMzKA6uHQjZALGtmXicjGHvCsnRLp5YRVQZD',
            message: inputMessage.value
          })
          .then(function (response) {
            console.log(response);
            alert("Comment Successfull");
            inputMessage.value = "";
          })
          .catch(function (error) {
            console.log(error);
            alert("Comment fail");
          });
       };
    }

  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });

  




