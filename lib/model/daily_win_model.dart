class DailyWinModel {
  List<Daily>? dailyList;
  String? message;
  bool? status;

  DailyWinModel({this.dailyList, this.message, this.status});

  DailyWinModel.fromJson(Map<String, dynamic> json) {
    if (json['data'] != null) {
      dailyList = <Daily>[];
      json['data'].forEach((v) {
        dailyList!.add(new Daily.fromJson(v));
      });
    }
    message = json['message'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.dailyList != null) {
      data['data'] = this.dailyList!.map((v) => v.toJson()).toList();
    }
    data['message'] = this.message;
    data['status'] = this.status;
    return data;
  }
}

class Daily {
  dynamic id;
  dynamic playerId;
  dynamic tournamentId;
  dynamic tournamentRound;
  dynamic totalTournamentRound;
  dynamic winPrice;
  dynamic createdAt;
  dynamic updatedAt;
  dynamic gameId;
  dynamic winStatus;
  dynamic winPrice2;
  dynamic winPrice3;
  dynamic winPrice4;
  dynamic playerId2;
  dynamic playerId3;
  dynamic playerId4;
  dynamic remarks;
  Player1? player1;
  Player1? player2;
  Player1? player3;
  Player1? player4;

  Daily(
      {this.id,
      this.playerId,
      this.tournamentId,
      this.tournamentRound,
      this.totalTournamentRound,
      this.winPrice,
      this.createdAt,
      this.updatedAt,
      this.gameId,
      this.winStatus,
      this.winPrice2,
      this.winPrice3,
      this.winPrice4,
      this.playerId2,
      this.playerId3,
      this.playerId4,
      this.remarks,
      this.player1,
      this.player2,
      this.player3,
      this.player4});

  Daily.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    playerId = json['player_id'];
    tournamentId = json['tournament_id'];
    tournamentRound = json['tournament_round'];
    totalTournamentRound = json['total_tournament_round'];
    winPrice = json['win_price'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    gameId = json['game_id'];
    winStatus = json['win_status'];
    winPrice2 = json['win_price_2'];
    winPrice3 = json['win_price_3'];
    winPrice4 = json['win_price_4'];
    playerId2 = json['player_id_2'];
    playerId3 = json['player_id_3'];
    playerId4 = json['player_id_4'];
    remarks = json['remarks'];
    player1 =
        json['player1'] != null ? new Player1.fromJson(json['player1']) : null;
    player2 =
        json['player2'] != null ? new Player1.fromJson(json['player2']) : null;
    player3 =
        json['player3'] != null ? new Player1.fromJson(json['player3']) : null;
    player4 =
        json['player4'] != null ? new Player1.fromJson(json['player4']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['player_id'] = this.playerId;
    data['tournament_id'] = this.tournamentId;
    data['tournament_round'] = this.tournamentRound;
    data['total_tournament_round'] = this.totalTournamentRound;
    data['win_price'] = this.winPrice;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['game_id'] = this.gameId;
    data['win_status'] = this.winStatus;
    data['win_price_2'] = this.winPrice2;
    data['win_price_3'] = this.winPrice3;
    data['win_price_4'] = this.winPrice4;
    data['player_id_2'] = this.playerId2;
    data['player_id_3'] = this.playerId3;
    data['player_id_4'] = this.playerId4;
    data['remarks'] = this.remarks;
    if (this.player1 != null) {
      data['player1'] = this.player1!.toJson();
    }
    if (this.player2 != null) {
      data['player2'] = this.player2!.toJson();
    }
    if (this.player3 != null) {
      data['player3'] = this.player3!.toJson();
    }
    if (this.player4 != null) {
      data['player4'] = this.player4!.toJson();
    }
    return data;
  }
}

class Player1 {
  dynamic id;
  dynamic name;
  dynamic profileImage;

  Player1({this.id, this.name, this.profileImage});

  Player1.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    profileImage = json['profile_image'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['name'] = this.name;
    data['profile_image'] = this.profileImage;
    return data;
  }
}
