class WinnerCountModel {
  String? status;
  int? statusCode;
  String? message;
  Data? data;

  WinnerCountModel({this.status, this.statusCode, this.message, this.data});

  WinnerCountModel.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    statusCode = json['status_code'];
    message = json['message'];
    data = json['data'] != null ? new Data.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['status'] = this.status;
    data['status_code'] = this.statusCode;
    data['message'] = this.message;
    if (this.data != null) {
      data['data'] = this.data!.toJson();
    }
    return data;
  }
}

class Data {
  int? weeklyCount;
  int? dailyCount;

  Data({this.weeklyCount, this.dailyCount});

  Data.fromJson(Map<String, dynamic> json) {
    weeklyCount = json['weeklyCount'];
    dailyCount = json['dailyCount'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['weeklyCount'] = this.weeklyCount;
    data['dailyCount'] = this.dailyCount;
    return data;
  }
}
