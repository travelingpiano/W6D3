class FollowToggle {
  constructor ($el) {
    this.$el = $el;
    this.userId = $el.attr("data-user-id");
    this.followState = $el.attr("data-initial-follow-state");
    this.render($el);
    this.$el.on("click",this.handleClick.bind(this));
    this.states = ["unfollowed","followed"];
  }
  render($el){
    this.$el.prop("disabled",false);
    $el.text(this.followState);
  }
  handleClick(event){
    event.preventDefault();
    this.$el.prop("disabled",true);
    if (this.followState === this.states[0]) {
      this.ajax('POST', 1);
    } else {
      this.ajax('DELETE', 0);
    }
  }

  ajax(method, state) {
    $.ajax({
      method: `${method}`,
      url: `/users/${this.userId}/follow`,
      dataType: "json",
    }).then(()=>{
      this.followState = this.states[state];
      this.render(this.$el);
    });
  }
}



export default FollowToggle;
