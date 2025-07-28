class KYCPostModel {
  String? status;
  int? statusCode;
  String? message;
  String? data;

  KYCPostModel({this.status, this.statusCode, this.message, this.data});

  KYCPostModel.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    statusCode = json['status_code'];
    message = json['message'];
    data = json['data'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['status'] = this.status;
    data['status_code'] = this.statusCode;
    data['message'] = this.message;
    data['data'] = this.data;
    return data;
  }
}
