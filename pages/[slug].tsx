import { Box, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import SavingsLifeInsurance from "../components/forms/savings-life-insurance";
import { HomeLayout } from "../components/layouts";
import { InsurancePeople } from "../interfaces";
import { getInsurancePeople, getInsurancePeopleById } from "./api/data";
import "@fontsource/montserrat";
import Image from 'next/image';
import CarouselInsurance from "../components/ui/CarouselInsurance";
import BeforeFooter from "../components/ui/beforeFooter";
import Footer from "../components/ui/footer";

interface Props {
    insurancePeople?: InsurancePeople
}
const InsurancePerson = ({ insurancePeople }: Props) => {

    function drawImage(trade_mark: any): React.ReactNode {
        if (trade_mark) {
            return (
                <>


                    <Image src={trade_mark}
                        width={90} height={70}
                    />

                </>);
        }
        return <div>Sin imagen</div>
    }

    return (
        <HomeLayout title={""} pageDescription={""}>
            <Box mt={12} textAlign='center'>
                <Typography
                    sx={{
                        
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '23px',
                        lineHeight: '65px',
                        letterSpacing: '-0.02em',
                        color: '#151F6D',
                    }}>Más cuesta no tenerlo</Typography>
                <Typography
                sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '45px',
                    lineHeight: '65px',
                    letterSpacing: '-0.02em',
                    color: '#151F6D',
                }}>{insurancePeople.name}</Typography>
            </Box>

            <SavingsLifeInsurance />
            <Box
                sx={{
                    width: '100%',
                    ml: '42%',
                    mt: '5%',
                    padding: '25px'
                }}>
                {drawImage(insurancePeople.image)}
            </Box>

            <CarouselInsurance />

            <BeforeFooter />
            <Footer />
        </HomeLayout>
    )
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    try {

        const slug = params.slug;

        const insurancePeople = await getInsurancePeople(Array.isArray(slug) ? slug[0] : slug);

        return { props: { insurancePeople } }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}
export default InsurancePerson;
