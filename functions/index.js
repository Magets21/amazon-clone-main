const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
// const { compose } = require("@mui/system");
const stripe = require("stripe")(
  "sk_test_51LxyGfE0AVHSIowqxXrj3sO5pazcjdMM16yXRFUP2FQ0dCWEzk8auq9eBs1X1I1WnShfHOzZSGpPSCYM4YaV5lia00o7KfiFqM"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// when "get" request comes, handle this
app.get("/", (request, response) => response.status(200).send("hello world"));

// when "post" request comes from this route, handle the following
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  //response created to be sent to frontend
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/aug-bc35b/us-central1/api
