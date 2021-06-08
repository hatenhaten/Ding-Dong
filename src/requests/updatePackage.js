import axios from "axios";

const updatePackage = (packageId) => {
  console.log(packageId);
  const data = {
    collected: true,
  };
<<<<<<< HEAD
  axios({
    method: "patch",
    url: `https://ding-dong-backend.herokuapp.com/packages/${packageId}`,
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
=======
  return axios
    .patch(
      `https://ding-dong-backend.herokuapp.com/packages/${packageId}`,
      data
    )
>>>>>>> 84f14ecd43f2ec2466607f0b8b6db356a74c4d1a
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default updatePackage;
