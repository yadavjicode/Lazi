class DailyGameListModel {
  bool? success;
  DataList? dataList;
  String? message;

  DailyGameListModel({this.success, this.dataList, this.message});

  DailyGameListModel.fromJson(Map<String, dynamic> json) {
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
  LockStatus? lockStatus;

  DataList({this.data, this.lockStatus});

  DataList.fromJson(Map<String, dynamic> json) {
    data = json['data'] != null ? new Data.fromJson(json['data']) : null;
    lockStatus = json['lock_status'] != null
        ? new LockStatus.fromJson(json['lock_status'])
        : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.data != null) {
      data['data'] = this.data!.toJson();
    }
    if (this.lockStatus != null) {
      data['lock_status'] = this.lockStatus!.toJson();
    }
    return data;
  }
}

class Data {
  int? id;
  String? tournamentsName;
  String? noOfPlayers;
  String? gameLavel;
  String? timerInSecond;
  String? entryPrice;
  String? firstRoundPrice;
  String? secondRoundPrice;
  String? thirdRoundPrice;
  String? finalPrice;
  String? iWinPrice;
  String? iIWinPrice;
  String? iIIWinPrice;
  String? iVWinPrice;
  String? entryStatus;
  String? createdAt;
  String? updatedAt;
  int? totalTournamentRound;

  Data(
      {this.id,
      this.tournamentsName,
      this.noOfPlayers,
      this.gameLavel,
      this.timerInSecond,
      this.entryPrice,
      this.firstRoundPrice,
      this.secondRoundPrice,
      this.thirdRoundPrice,
      this.finalPrice,
      this.iWinPrice,
      this.iIWinPrice,
      this.iIIWinPrice,
      this.iVWinPrice,
      this.entryStatus,
      this.createdAt,
      this.updatedAt,
      this.totalTournamentRound});

  Data.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    tournamentsName = json['tournaments_name'];
    noOfPlayers = json['no_of_players'];
    gameLavel = json['game_lavel'];
    timerInSecond = json['timer_in_second'];
    entryPrice = json['entry_price'];
    firstRoundPrice = json['first_round_price'];
    secondRoundPrice = json['second_round_price'];
    thirdRoundPrice = json['third_round_price'];
    finalPrice = json['final_price'];
    iWinPrice = json['I_win_price'];
    iIWinPrice = json['II_win_price'];
    iIIWinPrice = json['III_win_price'];
    iVWinPrice = json['IV_win_price'];
    entryStatus = json['entry_status'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    totalTournamentRound = json['total_tournament_round'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['tournaments_name'] = this.tournamentsName;
    data['no_of_players'] = this.noOfPlayers;
    data['game_lavel'] = this.gameLavel;
    data['timer_in_second'] = this.timerInSecond;
    data['entry_price'] = this.entryPrice;
    data['first_round_price'] = this.firstRoundPrice;
    data['second_round_price'] = this.secondRoundPrice;
    data['third_round_price'] = this.thirdRoundPrice;
    data['final_price'] = this.finalPrice;
    data['I_win_price'] = this.iWinPrice;
    data['II_win_price'] = this.iIWinPrice;
    data['III_win_price'] = this.iIIWinPrice;
    data['IV_win_price'] = this.iVWinPrice;
    data['entry_status'] = this.entryStatus;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['total_tournament_round'] = this.totalTournamentRound;
    return data;
  }
}

class LockStatus {
  int? tournamentRound;
  String? status;

  LockStatus({this.tournamentRound, this.status});

  LockStatus.fromJson(Map<String, dynamic> json) {
    tournamentRound = json['tournament_round'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['tournament_round'] = this.tournamentRound;
    data['status'] = this.status;
    return data;
  }
}
