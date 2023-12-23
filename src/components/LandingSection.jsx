import React from "react";
import { Heading, VStack, Box, Flex, Button } from "@chakra-ui/react";
import Lottie from 'lottie-react';
import Animation from '../asset/Animation - 1703010727908.json';
import FullScreenSection from "./FullScreenSection";
import { motion } from "framer-motion";

const greeting = "Hello, I am Prithvi!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => {

  // Function to handle resume download
  const handleDownload = () => {
    
    const resumePath = 'https://drive.google.com/file/d/1CiOqFR5JMZ4h7JJYd4TzkC5EpYdpFw3p/view?usp=sharing';

  
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Prithvi_Resume.pdf';


    document.body.appendChild(link);

    link.click();

   
    document.body.removeChild(link);
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#4c408e"
    >
      <Flex width="100%" justify="space-between" align="center">
        {/* Text on the left side */}
        <VStack align="start" spacing={4}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading size="md" color="white">
              {greeting}
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading size="2xl" color="white">
              {bio1}
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heading size="2xl" color="white">
              {bio2}
            </Heading>
          </motion.div>

        
          <Button colorScheme="teal" size="lg" onClick={handleDownload}>
            Download Resume
          </Button>
        </VStack>

        {/* Animation on the right side */}
        <Box  >
          <Lottie animationData={Animation}  />
        </Box>
      </Flex>
    </FullScreenSection>
  );
};

export default LandingSection;
