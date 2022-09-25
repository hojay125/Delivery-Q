import React from 'react';
import {P, Space ,H1} from '../../../../helpers/elements';
import { Container, ImageWrap } from '../../../../components/bi-react-library/src';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Fonts, Colors } from '../../../../helpers/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Card,ShopCard } from '../../../../helpers/components';

export const InReview = (props) =>{
    const items = [
        {
            name : "Spanish Onions",
            upc : "126893 83000",
            size : "4lb",
            quantity : 2,
            amount : "$5",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zhdFG92DSrD-EGlS1Qp-bs9suq06xbEw9Q&usqp=CAU",
            id : 1
        },
        {
            name : "Great Value Grade A Large",
            upc : "126893 83000",
            size : "4lb",
            quantity : 2,
            amount : "$5" ,
            image : "https://c.files.bbci.co.uk/32E6/production/_113903031_mediaitem113903028.jpg",
            id : 2
        },
        {
            name : "White Bread",
            upc : "126893 83000",
            size : "4lb",
            quantity : 2,
            amount : "$5",
            image : "https://platedcravings.com/wp-content/uploads/2019/07/White-Bread-Plated-Cravings-11-500x375.jpg",
            id : 3
        },
        {
            name : "Peak Milk Can",
            upc : "126893 83000",
            size : "4lb",
            quantity : 2,
            amount : "$5",
            image : "https://allfoodmarketplace.com/wp-content/uploads/2020/08/Peak-milk-powered.jpg",
            id : 4
        }
    ]
    return(
        <Container flex={1} paddingHorizontal={5} backgroundColor={Colors.appWhite}>
            <Space height="5%" />
            <TouchableOpacity>
                <P>Instructions</P>
            </TouchableOpacity>
            <FlatList 
                data={items}
                extraData={items.id}
                renderItem={({item,index})=><ShopCard item={item} index={index} />}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}