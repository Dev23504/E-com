const initialData={
    Item :[
{
    Mobile :"Apple 15 ",
    AppleImage :"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
    Price: "₹ 66,999" 
},
{
    Mobile:"Apple 15 pro ",
    AppleImage :"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/m/u/-original-imagtc4hv5qhegyb.jpeg?q=70",
    Price: "₹ 1,77,990" 
},

{
    Mobile:"Apple 14",
    AppleImage :"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
    Price: "₹ 56,999" 
},
{
    Mobile:"Apple 14 pro",
    AppleImage :"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
    Price: "₹ 1,49,990" 
},
{
    Mobile:"Apple 13 ",
    AppleImage :"https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
    Price: "₹ 48,799" 
},
{
    Mobile:"Apple 13 pro",
    AppleImage :"https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/z/h/v/iphone-13-pro-mlvq3hn-a-apple-original-imag6vpc6mx3zwhz.jpeg?q=70",
    Price: "₹ 1,49,990" 
},
{
    Mobile:"Apple Watch Series 8 GPS + Cellular with ECG app",
    AppleImage :"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/k/c/-original-imaghxg7vansjnuh.jpeg?q=70",
    Price: "₹ 19,899" 
}
]
    
}


function ItemReducer(state=initialData,action){
    switch (action.type) {
        case 'ADD_ITEM':
          return {
            ...state,
            Item: [...state.Item, action.payload]
          };
        default:
          return state;
      }
}
export default ItemReducer