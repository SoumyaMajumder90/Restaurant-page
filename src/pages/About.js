import React from "react";
import Layout from "../component/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to My restaurant, where culinary excellence meets a warm and inviting ambiance. Nestled in the heart of Siliguri, our restaurant is a celebration of flavors, culture, and exceptional dining experiences.

At my restaurant, we take pride in crafting a diverse menu that reflects our passion for quality ingredients and innovative recipes. Our team of skilled chefs draws inspiration from global cuisines, infusing creativity into every dish to deliver a memorable gastronomic adventure.

From the sizzling grills to the aromatic curries, each item on our menu is a testament to our commitment to authenticity and taste. We source the freshest locally-sourced ingredients to ensure that every plate tells a story of quality and freshness.

Beyond the delightful cuisine, our restaurant is designed to provide a welcoming atmosphere for guests of all occasions. Whether you're seeking an intimate dinner for two, a family celebration, or a corporate event, our versatile spaces and attentive staff are dedicated to creating a memorable dining experience.

Join us at my restaurant and embark on a culinary journey where passion, flavor, and hospitality converge. We look forward to serving you and creating moments that linger on your palate and in your memories. Experience the difference at my restaurant.






        </p>
        <br />
        
      </Box>
    </Layout>
  );
};

export default About;