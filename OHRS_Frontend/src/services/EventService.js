import axios from 'axios';

const EVENT_API_BASE_URL="http://localhost:8080/hotel-reservation/events";

class EventService{
getEventByType(eventType){
     return axios.get(EVENT_API_BASE_URL+"/"+"type"+"/"+eventType);
}
getEventById(eventId){
     return axios.get(EVENT_API_BASE_URL+"/"+eventId);
}
getAllEvents(){
     return axios.get(EVENT_API_BASE_URL+"/");
}

 deleteEvent(eventId) {
     return axios.delete(EVENT_API_BASE_URL+ "/" + eventId)
}
AddEvent(event) {
     return axios.post(EVENT_API_BASE_URL+ "/add",event)
}
UpdateEvent(eventId,event) {
     return axios.put(EVENT_API_BASE_URL+ "/"+eventId,event)
}
}

export default new EventService();