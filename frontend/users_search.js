class UserSearch {
  constructor($el){
    this.$el = $el;
    this.$input = $($el.children("input"));
    this.$ul = $($el.children("ul"));
    this.handleInput();
  }
  searchUsers(queryVal,success){
    $.ajax({
      method: "GET",
      url: "/users/search",
      dataType: "json",
      data: queryVal
    }).then((users)=>{
      console.log(users);
    }).fail(()=>{console.log('hi');});
  }

  handleInput(){
    this.searchUsers(this.$input.val(),()=>{
      console.log(arguments);
      // this.$ul.append()
    });
  }
}

export default UserSearch;
