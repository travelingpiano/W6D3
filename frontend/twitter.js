import FollowToggle from "./follow_toggle";
import UserSearch from "./users_search";
// window.FollowToggle = FollowToggle;
window.UserSearch = UserSearch;



$(()=>{
  $('.follow-toggle').each((idx,el)=>{
    new FollowToggle($(el));
  });
});
