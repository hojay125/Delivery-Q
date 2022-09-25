import React,{useState} from 'react';
import { Container, ImageWrap, Avatar } from '../../components/bi-react-library/src';
import {Page,P,Space, Scroll,H1, Button} from '../../helpers/elements';
import { Images } from '../../helpers/images';
import {Colors,Fonts} from '../../helpers/constants';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView, Modal} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {WhiteButton, AppModal} from '../../helpers/components';

const OrderDetails = ({images,details,setAccepted}) =>(
    <Container paddingTop={4}>
        <H1 numberOfLines={1} size={Fonts.small}>Target - East Charlotte</H1>
        <Space height={10} />
        <Container direction="row" widthPercent="100%" marginTop={1}>
            <Entypo name="location-pin" color={Colors.primary} size={Fonts.semiMedium}/>
            <Space width="5%"/>
            <P>900 Metropolitan Avenue #2, Charlotte, NC 28204</P>
        </Container>
        <Container direction="row" widthPercent="100%" marginTop={1}>
            <Entypo name="clock" color={Colors.primary} size={Fonts.semiMedium}/>
            <Space width="5%"/>
            <P>Today 10 Feb, 2021{'\n'}
                3pm - 4pm</P>
        </Container>
        <Container direction="row" widthPercent="100%" marginTop={1} verticalAlignment="center">
            <Avatar 
                url={'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU='}
                size={7}
            />
            <Space width="5%"/>
            <P>Jessica R : +1 (234) 890 7865</P>
        </Container>
        <Container marginTop={4}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Container direction="row">
                    {details.map((item,index)=>{
                        return(
                            <Container marginRight={5} key={index}>
                                <P>
                                    {item.label} {'\n'}
                                    {item.value}
                                </P>
                            </Container>
                        )
                    })}
                </Container>
            </ScrollView>
        </Container>
        <Container marginTop={4}>
                        <Container direction="row">
                            <P>5 items (6 units) {' '}</P>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                                <P size={Fonts.semiSmall}>collapse<Entypo name="chevron-small-up" color={Colors.primary}/></P>
                            </TouchableOpacity>
                        </Container>
                        <Space height={10} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>    
                            <Container direction="row">
                                {
                                    images.map((item,index)=>(
                                        <Container marginRight={2} key={index}>
                                            <Avatar url={item} size={15}/>
                                        </Container>
                                    ))
                                }
                            </Container>
                        </ScrollView>
                    </Container>
                    <Container  horizontalAlignment="center" marginTop={4}>
                        <Button text="Accept order" onPress={()=>setAccepted(true)}/>
                    </Container>
    </Container>
)

const ShopDetails = () => {
    const details = [
        {
            label : "Distance",
            value : "3.4miles"
        },
        {
            label : "Time Taken",
            value : "3mins"
        },
        {
            label : "Fastest Route",
            value : "Charllotte"
        }
    ]
    const [visible,setVisible] = useState(true);
    return(
        <Container paddingTop={4}>
            <Container direction="row" horizontalAlignment="space-between">
                <Container widthPercent="50%">
                    <Container direction="row">
                        <Container>
                            <H1 numberOfLines={1} size={Fonts.small}>Target - East Charlotte</H1>
                        </Container>
                    </Container>
                    <Container direction="row" widthPercent="100%" marginTop={1}>
                        <Entypo name="location-pin" color={Colors.primary} size={Fonts.semiMedium}/>
                        <Space width="5%"/>
                        <P>900 Metropolitan Avenue #2, Charlotte, NC 28204</P>
                    </Container>
                    <Container direction="row" widthPercent="100%" marginTop={1}>
                        <Entypo name="location" color={Colors.primary} size={Fonts.semiMedium}/>
                        <Space width="5%"/>
                        <P>Gig's location Charlotte</P>
                    </Container>
                </Container>
                <Container>
                    <WhiteButton text="Call Shopper" />
                </Container>
            </Container>
            <Container marginTop={4}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <Container direction="row">
                        {
                            details.map((item,index)=>(
                                <Container key={index} marginRight={2}>
                                    <P textAlign="center">
                                        {item.label} {'\n'}
                                        <H1 size={Fonts.small}>{item.value}</H1>
                                    </P>
                                </Container>
                            ))
                        }
                    </Container>
                </ScrollView>
            </Container>
            <AppModal visible={visible} setVisible={setVisible} 
                btn_text="start shopping" 
                navigate_to="ShoppingList"
            />
        </Container>
    )
}

export const ViewOrder = () => {
    const details = [
        {
            label : "Distance",
            value : "3.4miles"
        },
        {
            label : "Duration",
            value : "35 mins"
        },
        {
            label : "Estimated Pay",
            value : "$35 - $70"
        },
        {
            label : "Gig Pay",
            value : "$10"
        },
        {
            label : "Tips Pay",
            value : "$5 - $8"
        }
    ];
    const images = [
        "https://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY=",
        "https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg",
        "https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68b0O5wgNnMvg2hrPVjD4cRADRiFNcmXHvQ&usqp=CAU",
        "https://www.amazingclubs.ca/img/fruitgiftclub.jpg"

    ]
    const [accepted,setAccepted] = useState(false);
    return(
        <Page>
            <Container>
                <ImageWrap 
                    source={Images.Map}
                    fit="contain"
                    height={50}
                />
            </Container>
            <Container flex={1} paddingHorizontal={8}>
                <Scroll>
                    {
                        !accepted ? (
                            <OrderDetails images={images} details={details} setAccepted={setAccepted}/>
                        ) : (
                            <ShopDetails setAccepted={setAccepted} />
                        )
                    }
                </Scroll>
            </Container>
        </Page>
    )
} 