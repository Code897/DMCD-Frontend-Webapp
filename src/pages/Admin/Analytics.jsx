import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Religion from '../../components/data-charts/Religion'
import City from '../../components/data-charts/City'
import AgeGender from '../../components/data-charts/AgeGender'
import { Link } from 'react-router-dom'
import { WarningTwoIcon } from '@chakra-ui/icons'

const Analytics = () => {
    const user = useSelector(state => state.user.user)
    const userLoggedIn = useSelector(state => state.userLoggedIn)
    return (
        <>
            {
                userLoggedIn && user.usertype === "ADMIN" ? (
                    <Box className='pt-96 lg:pt-0 xl:pt-0 2xl:pt-0 lg:h-full xl:h-full 2xl:h-full lg:grid xl:grid 2xl:grid justify-center items-center w-full grid-cols-3 flex flex-col overflow-x-scroll md:px-10' style={{height:"100dvh"}}>
                        <Box className='col-span-1 '><Link to="/dashboard/analytics/religionChart"><Religion/></Link></Box>
                        <Box className='col-span-1 '><Link to="/dashboard/analytics/cityChart"><City/></Link></Box>
                        <Box className='col-span-1 '><Link to="/dashboard/analytics/ageGenderChart"><AgeGender/></Link></Box>
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
                )
            }
        </>
    )
}

export default Analytics