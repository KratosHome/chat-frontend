interface ICarouselItem {
    id:number;
    title:string;
    underTitle:string;
    src:string;
    typeOfSrc:"video"|"image";
 }
export const carouselData:ICarouselItem[] = [
    {  id:1,
       title:"Add sa many emojis as you want",
       underTitle:"Shift and click in the emoji picker",
       src:"https://a.slack-edge.com/product_help_cards/3555803818016_9c228d4e9c4fdb922936.mp4",
       typeOfSrc:"video"
    },
    {  id:2,
       title:"Get someone’s attention with mentions",
       underTitle:"Use the @ symbol to notify a teammate",
       src:"https://a.slack-edge.com/product_help_cards/3909934508768_6fe387dcacb0606322e3.gif",
       typeOfSrc:"image"
    },
    {  id:3,
       title:"What's new in Slack",
       underTitle:"Discover new features available now",
       src:"https://a.slack-edge.com/product_help_cards/3534399139092_2ff3513abf01c645d3bb.png",
       typeOfSrc:"image"
    }
 ];