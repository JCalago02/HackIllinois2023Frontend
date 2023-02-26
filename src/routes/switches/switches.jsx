import LinkHeader from "../../Components/LinkHeader/LinkHeader"
import ListViewSwitches from "../../Components/ListViewSwitches/ListViewSwitches"
function createKeycap (VendorName, SetName, Price, liveStock, imgUrl, itmURL) {
    const newKeycap = {vendor: VendorName, 
                        itemName: SetName, 
                        price: Price,
                        isLiveStock: liveStock,
                        imgURL: imgUrl,
                        itemURL: itmURL
                    }
    return newKeycap
}
const k1 = createKeycap("TheKeyCo", "Boba U4T", 60.0, false, 'https://ae01.alicdn.com/kf/S9d09714f229b4a2dbab10c08c086fcd11/Gazzew-U4t-Thocky-tactile-switches-for-Mechanical-keyboard-customization-5pin-65g-bottom.jpg_Q90.jpg_.webp', "https://kono.store/products/shuten-doji-keycap-set-by-outva/");
const k2 = createKeycap("KBDFans", "PBTFans Blue", 90.0, false, 'https://cdn.shopify.com/s/files/1/0275/3649/0561/products/pbtfans-klein-blue-keycap-set-doubleshot-abs-853798.webp?v=1667612690', "https://kbdfans.com/products/pbtfans-klein-blue");
const k3 = createKeycap("Cannon Keys", "MW Sogurt", 80.0, false, 'https://i.imgur.com/xTfyyEL.png', "https://spaceholdings.net/products/mw-sogurt");
const k4 = createKeycap("Cannon Keys", "MW Sogurt", 80.0, false, 'https://i.imgur.com/xTfyyEL.png', "https://spaceholdings.net/products/mw-sogurt");
const k5 = createKeycap("Cannon Keys", "MW Sogurt", 80.0, false, 'https://i.imgur.com/xTfyyEL.png', "https://spaceholdings.net/products/mw-sogurt");
const k6 = createKeycap("Cannon Keys", "MW Sogurt", 80.0, false, 'https://i.imgur.com/xTfyyEL.png', "https://spaceholdings.net/products/mw-sogurt");
const k7 = createKeycap("Really Long Name Here", "REALLLY KLSJDJKLFJSKLDFJL SDJFLSDJFLKSJD LFKJSD", 80.0, false, 'https://i.imgur.com/xTfyyEL.png', "https://spaceholdings.net/products/mw-sogurt");
const keycapList = [k1, k2, k3, k4, k5, k7]
export default function KeycapsView() {
    return (
        <div>
            <LinkHeader></LinkHeader>
            <ListViewSwitches list={keycapList} title="Switches"></ListViewSwitches>
        </div>
    )
}