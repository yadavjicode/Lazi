class CreateGameModel {
  bool? success;
  String? message;
  Game? game;

  CreateGameModel({this.success, this.message, this.game});

  CreateGameModel.fromJson(Map<String, dynamic> json) {
    success = json['success'];
    message = json['message'];
    game = json['game'] != null ? new Game.fromJson(json['game']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['success'] = this.success;
    data['message'] = this.message;
    if (this.game != null) {
      data['game'] = this.game!.toJson();
    }
    return data;
  }
}

class Game {
  dynamic gameCode;
  dynamic dailyTournamentId;
  dynamic weeklyTournamentId;
  dynamic totalTournament;
  dynamic tournamentRound;
  dynamic noPlayers;
  dynamic tournamentTime;
  dynamic tournamentTypes;
  dynamic updatedAt;
  dynamic createdAt;
  dynamic id;

  Game(
      {this.gameCode,
      this.dailyTournamentId,
      this.weeklyTournamentId,
      this.totalTournament,
      this.tournamentRound,
      this.noPlayers,
      this.tournamentTime,
      this.tournamentTypes,
      this.updatedAt,
      this.createdAt,
      this.id});

  Game.fromJson(Map<String, dynamic> json) {
    gameCode = json['game_code'];
    dailyTournamentId = json['daily_tournament_id'];
    weeklyTournamentId = json['weekly_tournament_id'];
    totalTournament = json['total_tournament'];
    tournamentRound = json['tournament_round'];
    noPlayers = json['no_players'];
    tournamentTime = json['tournament_time'];
    tournamentTypes = json['tournament_types'];
    updatedAt = json['updated_at'];
    createdAt = json['created_at'];
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['game_code'] = this.gameCode;
    data['daily_tournament_id'] = this.dailyTournamentId;
    data['weekly_tournament_id'] = this.weeklyTournamentId;
    data['total_tournament'] = this.totalTournament;
    data['tournament_round'] = this.tournamentRound;
    data['no_players'] = this.noPlayers;
    data['tournament_time'] = this.tournamentTime;
    data['tournament_types'] = this.tournamentTypes;
    data['updated_at'] = this.updatedAt;
    data['created_at'] = this.createdAt;
    data['id'] = this.id;
    return data;
  }
}
