import axios from "axios";

const newMessage = (tennantId) => {
  const data = {
    tennantId: tennantId,
  };
<<<<<<< HEAD
  axios({
    method: "post",
    url: "https://ding-dong-backend.herokuapp.com/sendsms",
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
=======
  axios
    .post(
      //"http://localhost:4000/sendsms",
      "https://ding-dong-backend.herokuapp.com/sendsms",
      data
    )
>>>>>>> 84f14ecd43f2ec2466607f0b8b6db356a74c4d1a
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default newMessage;
