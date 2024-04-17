import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const userLoggedIn = useSelector((state) => state.userLoggedIn);
  return (
    <>
      {userLoggedIn && user.usertype === "ADMIN" ? (
        <Box className="grid justify-center items-center grid-cols-2 grid-rows-2 gap-4 h-full pt-20">
          <Box className="col-span-1 flex justify-center items-center flex-col mx-4 h-full">
            <Text className="font-bold text-lg my-3 text-blue-500">
              DASHBOARD
            </Text>
            <Link
              to="/dashboard/blogs"
              className="bg-blue-800 rounded-xl flex justify-center items-center"
              style={{ height: "70%", width: "100%" }}
            >
              <Box className="font-bold text-white">BLOGS</Box>
            </Link>
          </Box>
          <Box className="col-span-1 flex justify-center items-center mx-4 h-full">
            <Link
              to="/dashboard/customise"
              className="bg-red-600 rounded-xl flex justify-center items-center"
              style={{ height: "80%", width: "100%" }}
            >
              <Box className="font-bold text-white">CUSTOMISE</Box>
            </Link>
          </Box>
          <Box className="col-span-2 flex justify-center items-center h-full flex-col">
            <Text className="font-bold text-xl my-3 text-green-500">
              ANALYTICS
            </Text>
            <Link
              to="/dashboard/analytics"
              className="bg-cyan-400 rounded-xl flex justify-center items-center"
              style={{ height: "80%", width: "80%" }}
            ></Link>
          </Box>
        </Box>
      ) : (
        <Box className="h-full grid grid-rows-2 justify-center items-center">
          <Box className="h-full flex justify-center items-end row-span-1">
            <WarningTwoIcon
              style={{ color: "red", height: "25%", width: "25%" }}
            />
          </Box>
          <Box  className="h-full flex justify-center items-start row-span-1 font-bold">This Page is only accessible to admin</Box>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
