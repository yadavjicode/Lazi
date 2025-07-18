class WeeklyGameListModel {
  bool? success;
  DataList? dataList;
  String? message;

  WeeklyGameListModel({this.success, this.dataList, this.message});

  WeeklyGameListModel.fromJson(Map<String, dynamic> json) {
    success = json['success'];
    dataList = json['dataList'] != null
        ? new DataList.fromJson(json['dataList'])
        : null;
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['success'] = this.success;
    if (this.dataList != null) {
      data['dataList'] = this.dataList!.toJson();
    }
    data['message'] = this.message;
    return data;
  }
}

class DataList {
  Data? data;
  LocksStatus? locksStatus;

  DataList({this.data, this.locksStatus});

  DataList.fromJson(Map<String, dynamic> json) {
    data = json['data'] != null ? new Data.fromJson(json['data']) : null;
    locksStatus = json['locks_status'] != null
        ? new LocksStatus.fromJson(json['locks_status'])
        : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.data != null) {
      data['data'] = this.data!.toJson();
    }
    if (this.locksStatus != null) {
      data['locks_status'] = this.locksStatus!.toJson();
    }
    return data;
  }
}

class Data {
  int? id;
  String? tournamentsName;
  String? noOfPlayers;
  String? gameLavel;
  String? tournamentsDay;
  String? entryPrice;
  String? firstRoundPrice;
  String? secondRoundPrice;
  String? thirdRoundPrice;
  String? fourthRoundPrice;
  String? fifthRoundPrice;
  String? semiFinalPrice;
  String? finalPrice;
  String? semiFinalGamePrice;
  String? finalGamePrice;
  String? iWinPrice;
  String? iIWinPrice;
  String? iIIWinPrice;
  String? iVWinPrice;
  String? entryStatus;
  String? createdAt;
  String? updatedAt;
  int? timerInSecond;
  int? totalTournamentRound;

  Data(
      {this.id,
      this.tournamentsName,
      this.noOfPlayers,
      this.gameLavel,
      this.tournamentsDay,
      this.entryPrice,
      this.firstRoundPrice,
      this.secondRoundPrice,
      this.thirdRoundPrice,
      this.fourthRoundPrice,
      this.fifthRoundPrice,
      this.semiFinalPrice,
      this.finalPrice,
      this.semiFinalGamePrice,
      this.finalGamePrice,
      this.iWinPrice,
      this.iIWinPrice,
      this.iIIWinPrice,
      this.iVWinPrice,
      this.entryStatus,
      this.createdAt,
      this.updatedAt,
      this.timerInSecond,
      this.totalTournamentRound});

  Data.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    tournamentsName = json['tournaments_name'];
    noOfPlayers = json['no_of_players'];
    gameLavel = json['game_lavel'];
    tournamentsDay = json['tournaments_day'];
    entryPrice = json['entry_price'];
    firstRoundPrice = json['first_round_price'];
    secondRoundPrice = json['second_round_price'];
    thirdRoundPrice = json['third_round_price'];
    fourthRoundPrice = json['fourth_round_price'];
    fifthRoundPrice = json['fifth_round_price'];
    semiFinalPrice = json['semi_final_price'];
    finalPrice = json['final_price'];
    semiFinalGamePrice = json['semi_final_game_price'];
    finalGamePrice = json['final_game_price'];
    iWinPrice = json['I_win_price'];
    iIWinPrice = json['II_win_price'];
    iIIWinPrice = json['III_win_price'];
    iVWinPrice = json['IV_win_price'];
    entryStatus = json['entry_status'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    timerInSecond = json['timer_in_second'];
    totalTournamentRound = json['total_tournament_round'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['tournaments_name'] = this.tournamentsName;
    data['no_of_players'] = this.noOfPlayers;
    data['game_lavel'] = this.gameLavel;
    data['tournaments_day'] = this.tournamentsDay;
    data['entry_price'] = this.entryPrice;
    data['first_round_price'] = this.firstRoundPrice;
    data['second_round_price'] = this.secondRoundPrice;
    data['third_round_price'] = this.thirdRoundPrice;
    data['fourth_round_price'] = this.fourthRoundPrice;
    data['fifth_round_price'] = this.fifthRoundPrice;
    data['semi_final_price'] = this.semiFinalPrice;
    data['final_price'] = this.finalPrice;
    data['semi_final_game_price'] = this.semiFinalGamePrice;
    data['final_game_price'] = this.finalGamePrice;
    data['I_win_price'] = this.iWinPrice;
    data['II_win_price'] = this.iIWinPrice;
    data['III_win_price'] = this.iIIWinPrice;
    data['IV_win_price'] = this.iVWinPrice;
    data['entry_status'] = this.entryStatus;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['timer_in_second'] = this.timerInSecond;
    data['total_tournament_round'] = this.totalTournamentRound;
    return data;
  }
}

class LocksStatus {
  String? gameDay;
  int? tournamentRound;
  int? totalTournamentRound;
  String? joinStatus;
  String? startDate;
  String? endDate;

  LocksStatus(
      {this.gameDay,
      this.tournamentRound,
      this.totalTournamentRound,
      this.joinStatus,
      this.startDate,
      this.endDate});

  LocksStatus.fromJson(Map<String, dynamic> json) {
    gameDay = json['game_day'];
    tournamentRound = json['tournament_round'];
    totalTournamentRound = json['total_tournament_round'];
    joinStatus = json['join_status'];
    startDate = json['start_date'];
    endDate = json['end_date'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['game_day'] = this.gameDay;
    data['tournament_round'] = this.tournamentRound;
    data['total_tournament_round'] = this.totalTournamentRound;
    data['join_status'] = this.joinStatus;
    data['start_date'] = this.startDate;
    data['end_date'] = this.endDate;
    return data;
  }
}
