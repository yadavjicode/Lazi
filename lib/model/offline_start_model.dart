class OfflineStartModel {
  dynamic offlineGameId;
  dynamic offlineTournamentId;

  OfflineStartModel({this.offlineGameId, this.offlineTournamentId});

  OfflineStartModel.fromJson(Map<String, dynamic> json) {
    offlineGameId = json['offline_game_id'];
    offlineTournamentId = json['offline_tournament_id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['offline_game_id'] = this.offlineGameId;
    data['offline_tournament_id'] = this.offlineTournamentId;
    return data;
  }
}
