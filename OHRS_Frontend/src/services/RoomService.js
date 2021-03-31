import axios from 'axios';

const ROOM_API_BASE_URL="http://localhost:8080/hotel-reservation/rooms";

class RoomService{
getRoomByType(roomType){
     return axios.get(ROOM_API_BASE_URL+"/"+"type"+"/"+roomType);
}
getAllRooms(){
     return axios.get(ROOM_API_BASE_URL+"/");
}
 deleteRoom(roomId) {
     return axios.delete(ROOM_API_BASE_URL+ "/" + roomId)
}
AddRoom(room) {
     return axios.post(ROOM_API_BASE_URL+ "/add",room)
}
UpdateRoomStatus(roomId) {
     return axios.put(ROOM_API_BASE_URL+ "/"+"status"+"/"+roomId)
}
}

export default new RoomService();