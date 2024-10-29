import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { group } from "console";
import { ethers } from 'ethers'

const signer = ethers.Wallet.createRandom();

const admin = await PushAPI.initialize(signer, {
    env: CONSTANTS.ENV.STAGING,
})

// console.log(admin, "admin");

const adminInfo = await admin.info();
// console.log(adminInfo, "adminInfo");

const adminProfile = await admin.profile.info();
// console.log(adminProfile, "adminProfile");

const updateAdminProfile = await admin.profile.update(
    {
        name: "Ekolance",
        desc: "Onboarding developers to opportunities in web3",
        picture: "https://group-image.com",
    
    }
)
// console.log(updateAdminProfile, "updateAdminProfile");

//create group chat
const ekolanceHangoutForum = await admin.chat.group.create(
    "Ekolance Hangout Forum",
    {
        description: "A place for web3 enthusiast and developers",
        image: "https://group-image.com"
    }
    
)

// console.log(ekolanceHangoutForum, "ekolanceHangoutForum");

const chatID =
    "3d568eb45a730dd291314a22bb16de97ad13b98a7d09343b42a969d4e524ea6f";
  
//fetch group info
const fetchGroupInfo = await admin.chat.group.info(chatID)
console.log(fetchGroupInfo, "fetchGroupInfo");

//join group
const joinEkolanceHangoutForum = await admin.chat.group.join(chatID)
// console.log(joinEkolanceHangoutForum, "joinEkolanceHangoutForum");

// leave group
const leaveEkolanceHangoutForum = await admin.chat.group.leave(chatID);
// console.log(leaveEkolanceHangoutForum, "leaveEkolanceHangoutForum")

//send message to group
// const sendMessageEkolanceHangoutForum = await admin.chat.send(chatID, {
//     content: "Hi my name is Manu",
//     type: 'Text'
// });

// console.log(sendMessageEkolanceHangoutForum, "sendMessageEkolanceHangoutForum");

// const sendMessi = await admin.chat.send(
//     "0x0000000000000000000000000000"
//     {
//         content: "Hi my name is Manu",
//         type: 'Text'
//     }
// )

//add a group
// const removeFromGroup = await admin.chat.group.remove(chatID,
//     {
//         role: "MEMBER",
//         accounts:["000000000000000000000000000000"]
//     }
// )

const updatedGroup = await admin.chat.group.update(
    chatID,
    {
        name: "web3 Builders",
        desc: "PLace to build the network for web3",
        picture: "URL_or_path_to_image",
    }
)

console.log(updatedGroup, "updatedGroup");