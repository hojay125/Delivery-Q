import React from 'react';
import { Container } from '../components/bi-react-library/src';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { Fonts,Colors } from './constants';
import { P,H1, Space } from './elements';

const homeIcons = ["home","typing","wallet"];
const drawerIcons = ["home","user","calendar","help-with-circle",'text-document','gift'];
export const BottomTabMenu = (props) => {
    const {routeNames} = props.state;
    return(
        <Container 
            direction="row"
            horizontalAlignment="space-between"
            widthPercent="100%"
        >
            {
                routeNames.map((item,index)=>{
                    return(
                        <Container 
                            paddingVertical={1}
                            backgroundColor={Colors.appWhite}
                            horizontalAlignment="space-evenly"
                            direction="row"
                            key={index}
                        >
                           <Container widthPercent="33.30%"
                                horizontalAlignment="center"
                           >
                                <TouchableOpacity key={index}
                                    onPress={()=>props.navigation.navigate(item)}
                                >
                                        <P textAlign="center">
                                            <Entypo name={homeIcons[index]} size={Fonts.semiMedium}
                                                color={props.state.index === index ? Colors.primary : Colors.appGrey}
                                            />
                                        </P>
                                        <P size={Fonts.semiSmall}  color={props.state.index === index ? Colors.primary : Colors.appGrey}>{item}</P>
                                </TouchableOpacity>
                            </Container>
                        </Container>
                    )
                })
            }
        </Container>
    )
}

export const TwoMenuTab = (props) => {
    const {routeNames} = props.state;
    return(
        <Container direction="row" horizontalAlignment="space-between">
            {
                routeNames.map((item,index)=>(
                    
                    <Container widthPercent="50%" key={index}>
                        <TouchableOpacity key={index} 
                            onPress={()=>props.navigation.navigate(item)}
                        >
                                <Container
                                    borderBottomWidth={props.state.index === index ? 5 : 0 }
                                    borderColor={Colors.primary}
                                    horizontalAlignment="center"
                                >
                                    <H1 size={Fonts.semiMedium}>{item}</H1>
                                </Container>
                        </TouchableOpacity>
                    </Container>
                ))
            }
        </Container>
    )
}

export const ThreeMenuTab = (props) => {
    const {routeNames} = props.state;
    return(
        <Container direction="row" horizontalAlignment="space-between">
            {
                routeNames.map((item,index)=>(
                    
                    <Container widthPercent="33.3%" key={index}>
                        <TouchableOpacity key={index} 
                            onPress={()=>props.navigation.navigate(item)}
                        >
                                <Container
                                    borderBottomWidth={props.state.index === index ? 5 : 0 }
                                    borderColor={Colors.primary}
                                    horizontalAlignment="center"
                                >
                                    <H1 size={Fonts.small}>{item.replace('_',' ')}</H1>
                                </Container>
                        </TouchableOpacity>
                    </Container>
                ))
            }
        </Container>
    )
}

export const DrawerMenu = (props) => {
    const {routeNames} = props.state;
    return(
        <Container paddingTop={20}>
        {
            routeNames.map((item,index)=>{
                return(
                    <Container 
                        paddingVertical={1}
                        backgroundColor={props.state.index === index ? Colors.primary : Colors.appWhite}
                        key={index}
                        borderBottomWidth={1}
                        borderColor={Colors.appLineColor}
                    >
                        <TouchableOpacity key={index}
                            onPress={()=>props.navigation.navigate(item)}
                        >
                            <Container direction="row" 
                                horizontalAlignment="flex-start"
                                paddingVertical={2}
                                paddingLeft={10}
                            >
                                {
                                        drawerIcons[index] !== 'gift' ? (
                                            <Entypo name={drawerIcons[index]} size={Fonts.semiMedium}
                                            color={props.state.index === index ? Colors.appWhite : Colors.primary}
                                        />
                                        ) : (
                                            <Feather name="gift" size={Fonts.semiMedium} 
                                                color={props.state.index === index ? Colors.appWhite : Colors.primary}
                                            />
                                        )
                                    }
                                <Space width="5%" />
                                <P size={Fonts.small}  
                                    color={props.state.index === index ? Colors.appWhite : Colors.primary}
                                    textAlign="center"
                                >{item}</P>
                            </Container>
                            </TouchableOpacity>
                    </Container>
                )
            })
        }
    </Container>
    )
}