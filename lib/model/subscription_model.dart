class SubscriptionModel {
  Data? data;
  String? message;

  SubscriptionModel({this.data, this.message});

  SubscriptionModel.fromJson(Map<String, dynamic> json) {
    data = json['data'] != null ? new Data.fromJson(json['data']) : null;
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.data != null) {
      data['data'] = this.data!.toJson();
    }
    data['message'] = this.message;
    return data;
  }
}

class Data {
  List<Players2>? players2;
  List<Players2>? players4;
  List<Daily>? daily;
  List<Weekly>? weekly;

  Data({this.players2, this.players4, this.daily, this.weekly});

  Data.fromJson(Map<String, dynamic> json) {
    if (json['players_2'] != null) {
      players2 = <Players2>[];
      json['players_2'].forEach((v) {
        players2!.add(new Players2.fromJson(v));
      });
    }
    if (json['players_4'] != null) {
      players4 = <Players2>[];
      json['players_4'].forEach((v) {
        players4!.add(new Players2.fromJson(v));
      });
    }
    if (json['daily'] != null) {
      daily = <Daily>[];
      json['daily'].forEach((v) {
        daily!.add(new Daily.fromJson(v));
      });
    }
    if (json['weekly'] != null) {
      weekly = <Weekly>[];
      json['weekly'].forEach((v) {
        weekly!.add(new Weekly.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.players2 != null) {
      data['players_2'] = this.players2!.map((v) => v.toJson()).toList();
    }
    if (this.players4 != null) {
      data['players_4'] = this.players4!.map((v) => v.toJson()).toList();
    }
    if (this.daily != null) {
      data['daily'] = this.daily!.map((v) => v.toJson()).toList();
    }
    if (this.weekly != null) {
      data['weekly'] = this.weekly!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Players2 {
  dynamic id;
  dynamic entryFee;
  dynamic timerShow;
  dynamic status;
  dynamic createdAt;
  dynamic updatedAt;
  dynamic noOfPlayers;
  dynamic winPrice;

  Players2(
      {this.id,
      this.entryFee,
      this.timerShow,
      this.status,
      this.createdAt,
      this.updatedAt,
      this.noOfPlayers,
      this.winPrice});

  Players2.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    entryFee = json['entry_fee'];
    timerShow = json['timer_show'];
    status = json['status'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    noOfPlayers = json['no_of_players'];
    winPrice = json['win_price'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['entry_fee'] = this.entryFee;
    data['timer_show'] = this.timerShow;
    data['status'] = this.status;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['no_of_players'] = this.noOfPlayers;
    data['win_price'] = this.winPrice;
    return data;
  }
}

class Daily {
  dynamic id;
  dynamic tournamentsName;
  dynamic noOfPlayers;
  dynamic gameLavel;
  dynamic timerInSecond;
  dynamic entryPrice;
  dynamic firstRoundPrice;
  dynamic secondRoundPrice;
  dynamic thirdRoundPrice;
  dynamic finalPrice;
  dynamic iWinPrice;
  dynamic iIWinPrice;
  dynamic iIIWinPrice;
  dynamic iVWinPrice;
  dynamic entryStatus;
  dynamic createdAt;
  dynamic updatedAt;

  Daily(
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
      this.updatedAt});

  Daily.fromJson(Map<String, dynamic> json) {
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
    return data;
  }
}

class Weekly {
  dynamic id;
  dynamic tournamentsName;
  dynamic noOfPlayers;
  dynamic gameLavel;
  dynamic tournamentsDay;
  dynamic entryPrice;
  dynamic firstRoundPrice;
  dynamic secondRoundPrice;
  dynamic thirdRoundPrice;
  dynamic fourthRoundPrice;
  dynamic fifthRoundPrice;
  dynamic semiFinalPrice;
  dynamic finalPrice;
  dynamic semiFinalGamePrice;
  dynamic finalGamePrice;
  dynamic iWinPrice;
  dynamic iIWinPrice;
  dynamic iIIWinPrice;
  dynamic iVWinPrice;
  dynamic entryStatus;
  dynamic createdAt;
  dynamic updatedAt;
  dynamic timerInSecond;

  Weekly(
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
      this.timerInSecond});

  Weekly.fromJson(Map<String, dynamic> json) {
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
    return data;
  }
}
