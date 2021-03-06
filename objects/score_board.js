////////////////////////////////////////////////////////////////////////////////
//                            Pirate Ship Battles                             //
//                                                                            //
//                              Server - Score Board                          //
////////////////////////////////////////////////////////////////////////////////

module.exports = class ScoreBoard {
  constructor() {
    this.score_list = {};
  }
  add_player(player_id) {
    this.score_list[player_id] = 0;
  }
  remove_player(player_id) {
    delete this.score_list[player_id];
  }
  update_score(player_id) {
    this.score_list[player_id] += 1;
  }
}