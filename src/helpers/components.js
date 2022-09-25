import React, { useState } from 'react';
import {CheckBox,Modal} from 'react-native';
import {H1, Space, P, TextInputBox, Button} from './elements';
import {Container, ImageWrap} from '../components/bi-react-library/src/index';
import { Colors } from '../helpers/constants';
import { Images } from './images';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Fonts } from './constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Entypo from 'react-native-vector-icons/Entypo';

export const Success = (props) => {
    const navigation = useNavigation();
    return(
        <>
            <Container 
                paddingTop={10}
                paddingHorizontal={15}
                backgroundColor={Colors.white}
                borderBottomLeftRadius={30}
                borderBottomRightRadius={30}
                verticalAlignment="center"
            >
                <ImageWrap 
                    source={props.image}
                    height={30}
                    fit="contain"
                />
                <Space height="5%" />
            </Container>
            <Container flex={1}>
                <Container paddingHorizontal={10} height={65}>
                    <Space height="5%"/>
                    <H1 textAlign="center">{props.title}</H1>
                    <Space height="5%"/>
                    <P textAlign="center">{props.body}</P>
                    <Space height="20%"/>
                    <Container horizontalAlignment="center">
                        <Button text={props.buttonTxt} onPress={()=>navigation.navigate(props.buttonPage)}/>
                    </Container>
                    <Space height="10%" />
                </Container>
            </Container>
        </>
    )
};


export const AvailabilityList = (props) => {
    return(
        <Container paddingHorizontal={10} verticalAlignment="center" horizontalAlignment="center">
            <Space height="10%" />
            <ImageWrap 
                height={20}
                source={Images.Calendar}
                fit="contain"
            />
            <Container widthPercent="70%">
                <Space height="10%" />
                <P size={Fonts.semiMedium} textAlign="center">No scheduled date</P>
                <Space height="5%" />
                <P size={Fonts.small} textAlign="center">Click on the set availability button to schedule dates</P>
                <Space height="10%" />
            </Container>
            <Container horizontalAlignment="center">
                <Button text="Set availability" onPress={()=>props.setPage("select_week")}/>
            </Container>
            <Space height="10%" />
        </Container>
    )
}

export const AvailabilityItemList = (props) => {
    return(
        <Container paddingHorizontal={8}>
           <Container direction="row" marginBottom={5} marginTop={4} widthPercent="100%">
                <P>Week 1</P>
                <Space width="60%" />
                <P>120 hours</P>
           </Container>
            <Container>
                <Container marginBottom={5} paddingTop={4}>
                    {
                        [...'123456677'].map(item=>(
                            <Card>
                                <Feather name="calendar" size={Fonts.semiMedium} color={Colors.primary}/>
                                <Space width="2%"/>
                                <P>Monday 02</P>
                                <Space width="50%"/>
                                <TouchableOpacity>
                                    <Feather name="edit-2" size={Fonts.semiMedium} />
                                </TouchableOpacity>
                            </Card>
                        ))
                    }
                </Container>
                <Container horizontalAlignment="center" marginTop={5}>
                    <Button text="Continue" onPress={()=>props.setPage("select_week")}/>
                </Container>
            </Container>
        </Container>
    )
}


export const PickAvailableDay = (props) => {
    const [hours,setHours] =  useState([
        "8am - 9am",
        "9am - 10am",
        "10am - 11am",
        "11am - 12pm",
        "12pm - 1pm",
        "1pm - 2pm",
        "2pm - 3pm",
        "4pm - 5pm",
        "5pm - 6pm",
        "6pm - 7pm",
        "7pm - 8pm",
        "8pm - 9pm",
        "9pm - 10pm",
        "10pm - 11pm",
        "11pm - 12am",
    ])
    return(
        <Container paddingHorizontal={8}>
            {/* <Space height="10%" /> */}
           <Container direction="row" marginBottom={5} marginTop={4}>
                <Container verticalAlignment="center" widthPercent="55%">
                    <P>Set availability for {props.week === "this_week" ? "week 1" : "week 2"}</P>
                </Container>
                <Space width="10%"/>
                <Container 
                    borderColor={Colors.primary}
                    borderRadius={20}
                    borderWidth={1}
                    padding={2.5}
                    paddingLeft={5}
                    paddingRight={5}
                    verticalAlignment="center"
                    widthPercent="35%"

                >
                    <P textAlign="center">{moment().format("MMMM")}</P>
                </Container>
           </Container>
            <Container>
                <Calendar 
                    current={moment.utc().format('YYYY-MM-DD')}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={moment().startOf("week").format("YYYY-MM-DD")}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={moment().endOf("week").format("YYYY-MM-DD")}
                    hideArrows={true}
                    monthFormat={''}
                    disableAllTouchEventsForDisabledDays={true}
                    markedDates={{
                        '2021-02-24': {selected: true, selectedColor: Colors.primary},
                        '2021-02-25': {selected: true, selectedColor: Colors.primary}
                      }}
                />
                <Container marginBottom={5} paddingTop={4}>
                    <P>Pick days and set time alocation</P>
                    <Card>
                        <Feather name="calendar" size={Fonts.semiMedium} color={Colors.primary}/>
                        <Space width="2%"/>
                        <P>Monday 02</P>
                        <Space width="50%"/>
                        <TouchableOpacity>
                            <Feather name="x" size={Fonts.semiMedium} />
                        </TouchableOpacity>
                    </Card>
                </Container>
                {
                    hours.map(hour=>(
                        <Container direction="row" verticalAlignment="center">
                            <CheckBox/>
                            <Space width="10%"/>
                            <P>{hour}</P>
                        </Container>
                    ))
                }
                <Container horizontalAlignment="center" marginTop={10}>
                    <Button text="Save details" onPress={()=>props.setPage("available_items")}/>
                </Container>
            </Container>
        </Container>
    )
}

export const SetAvailability = (props) => {
    const navigation = useNavigation();
    return(
        <Container paddingHorizontal={10} verticalAlignment="center">
            <Space height="20%" />
            <Container>
                <P>Primary Location</P>
                <TextInputBox 
                    backgroundColor={Colors.appWhite}
                    borderBottomWidth={0.8}
                    borderColor={Colors.primary}
                    color={Colors.primary}
                    width={70}
                    size={Fonts.small}
                    leftIcon="map-marker"
                />
                <Space height="10%" />
                <TouchableOpacity>
                    <Container direction="row">
                        <Container verticalAlignment="center">
                            <FontAwesome name="exclamation-circle" size={Fonts.semiSmall} />  
                        </Container>
                        <Space width="2%" />
                        <P size={Fonts.semiSmall}>Use my current location</P>
                    </Container>
                </TouchableOpacity>
            </Container>
            <Container flex={1}>
                <TouchableOpacity onPress={()=>{
                    props.setPage('pick_available_days')
                    props.setWeek("this_week");
                }}>
                    <Card>
                        <Container widthPercent="80%">
                            <P>This Week</P>
                            <P size={Fonts.semiSmall}>{moment().startOf("week").format("MMM DD")} - {moment().endOf("week").format("MMM DD")}</P>
                        </Container>
                        <Container verticalAlignment="center">
                            <Feather name="chevron-right" size={Fonts.semiMedium}/>
                        </Container>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    props.setPage('pick_available_days')
                    props.setWeek("this_week")
                }}>
                    <Card>
                        <Container widthPercent="80%">
                            <P>Next Week</P>
                            <P size={Fonts.semiSmall}>{moment().add(1,'week').startOf("week").format("MMM DD")} - {moment().add(1,'week').endOf("week").format("MMM DD")}</P>
                        </Container>
                        <Container verticalAlignment="center">
                            <Feather name="chevron-right" size={Fonts.semiMedium}/>
                        </Container>
                    </Card>
                </TouchableOpacity>
            </Container>
            <Container horizontalAlignment="center" marginTop={4}>
                <Button text="Continue" onPress={()=>navigation.navigate("HealthCheck")}/>
            </Container>
        </Container>
    )
}

export const Card = (props) => {
    return(
        <Container direction="row" marginBottom={2} marginTop={2}
            paddingVertical={3}
            paddingHorizontal={3}
            paddingLeft={7}
            elevation={0.45}
            borderWidth={0.01}
            borderRadius={5}
            borderColor="grey"
            {...props}
        >
            {props.children}
        </Container>
    )
}

export const ColumnCard = (props) => {
    return(
        <Container marginBottom={2} marginTop={2}
            paddingVertical={3}
            paddingHorizontal={3}
            paddingLeft={7}
            elevation={0.45}
            borderWidth={0.01}
            borderRadius={5}
            borderColor="grey"
        >
            {props.children}
        </Container>
    )
}

export const ItemCard = ({is_active_tab,index,navigate_to}) => {
    const navigation = useNavigation();
    return(
        <ColumnCard key={index}>
            <Container direction="row" horizontalAlignment="space-between">
                <Container widthPercent="50%" paddingTop={5}>
                    <P numberOfLines={1}>Target - East Charlotte</P>
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
                    <Container direction="row" widthPercent="100%" marginTop={1}>
                        <Entypo name="shopping-cart" color={Colors.primary} size={Fonts.semiMedium}/>
                        <Space width="5%"/>
                        <P>5 items (6 units)</P>
                    </Container>
                </Container>
                <Container widthPercent="35%" paddingTop={5}>
                    <P>Estimate Pay</P>
                    <Space height={12} />
                    <P>$15 - $18</P>
                </Container>
            </Container>
                {
                    !is_active_tab ? (
                        <Container 
                            direction="row" 
                            horizontalAlignment="space-between"
                            verticalAlignment="center"
                            marginTop={4}
                            paddingRight={2}
                        >
                            <Button 
                                text="view order"
                                height={4}
                                width={40}
                                padding={20}
                                onPress={()=>navigation.navigate(navigate_to ? navigate_to  : "ViewOrder")}
                            />
                            {
                                !navigate_to ? (
                                    <TouchableOpacity>
                                        <P>Accept Order</P>
                                    </TouchableOpacity>
                                ) : null
                            }
                        </Container>
                    ) : (
                        <Container 
                            direction="row" 
                            horizontalAlignment="space-between"
                            verticalAlignment="center"
                            marginTop={4}
                            paddingRight={3}
                        >
                            <Button 
                                text="navigate to store"
                                height={4}
                                width={40}
                                size={14}
                                padding={20}
                            />
                            <Space width="1%"/>
                            <Button 
                                text="start shopping"
                                height={4}
                                width={40}
                                size={14}
                                padding={20}
                            />
                        </Container>
                    )
                }
        </ColumnCard>
    )
    
}

export const WhiteButton = (props) => (
    <Button 
        text={props.text}
        height={props.height || 5}
        width={props.width || 30}
        size={props.size || 14}
        padding={props.padding || 15}
        backgroundColor={Colors.appWhite}
        color={Colors.primary}
        borderWidth={1}
        borderColor={Colors.primary}
        {...props}
    />
);

export const AppModal = ({setVisible,visible,btn_text,navigate_to}) => {
    const navigation = useNavigation();
    return(
        <Modal transparent={false} visible={visible}>
            <Container horizontalAlignment="center" verticalAlignment="center" flex={1}>
                <Container widthPercent="80%" 
                    backgroundColor={Colors.primary} 
                    borderTopLeftRadius={20}
                    borderTopRightRadius={20}
                    padding={5}>
                    <H1 size={Fonts.semiMedium} color={Colors.appWhite} textAlign="center">
                        You have successfully arrived at your destination
                    </H1>
                </Container>
                <Container widthPercent="80%"
                    paddingVertical={5}
                    direction="row"
                    horizontalAlignment="space-evenly"
                    borderWidth={0.5}
                    borderColor={Colors.primary}
                    borderBottomLeftRadius={20}
                    borderBottomRightRadius={20}
                >
                    <WhiteButton 
                        text="Dismiss"
                        onPress={()=>setVisible(false)}
                    />
                    <Button text={btn_text}
                        height={5}
                        width={40}
                        padding={15}
                        onPress={()=>{
                            setVisible(false)
                            navigation.navigate(navigate_to)
                        }}
                    />
                </Container>
            </Container>
        </Modal>
    )
}

export const ShopCard = ({item,index}) => (
    <TouchableOpacity key={index}>
        <Card>
            <Container widthPercent="30%" verticalAlignment="center" marginRight={3}>
                <ImageWrap 
                    height={20}
                    fit="contain"
                    url={item.image}
                />
            </Container>
            <Container verticalAlignment="center" widthPercent="45%" marginRight={3}>
                <H1 size={Fonts.small} numberOfLines={1}>{item.name}</H1>
                <P>UPC : {item.upc}</P>
                <P>Size : {item.size}</P>
                <TouchableOpacity>
                    <P size={Fonts.semiSmall}>
                        <FontAwesome name="exclamation" size={Fonts.semiSmall}/> 
                        {' '}Substitute Comment
                    </P>
                </TouchableOpacity>
            </Container>
            <Container widthPercent="15%" verticalAlignment="center">
                <P>{item.quantity} x</P>
                <Space height={20}/>
                <H1 size={Fonts.small}>{item.amount}.00</H1>
            </Container>
        </Card>
    </TouchableOpacity>
)