class apiutils {



   async gettoken() {
 const response = await apiContext.post(
  "https://rahulshettyacademy.com/api/ecom/auth/login",
  {
    data: {
      userEmail: "test33342@gmail.com",
      userPassword: "Test@54321"
    }
  }
  

);
const loginResponse = await response.json();
   token = loginResponse.token;
  console.log("Token:", token);
   return token

    }
   
}