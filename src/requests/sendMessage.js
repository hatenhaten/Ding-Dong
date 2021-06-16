import axios from "axios";

const newMessage = (tennantId) => {
  const data = {
    tennantId: tennantId,
  };
  axios
    .post("https://ding-dong-backend.herokuapp.com/sendsms", data)
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      console.log("This is an error", error);
    });
};

export default newMessage;
