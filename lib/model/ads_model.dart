class AdsModel {
  List<UrlList>? urlList;
  String? message;

  AdsModel({this.urlList, this.message});

  AdsModel.fromJson(Map<String, dynamic> json) {
    if (json['data'] != null) {
      urlList = <UrlList>[];
      json['data'].forEach((v) {
        urlList!.add(new UrlList.fromJson(v));
      });
    }
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.urlList != null) {
      data['data'] = this.urlList!.map((v) => v.toJson()).toList();
    }
    data['message'] = this.message;
    return data;
  }
}

class UrlList {
  int? id;
  String? video;
  int? status;
  String? createdAt;
  String? updatedAt;

  UrlList({this.id, this.video, this.status, this.createdAt, this.updatedAt});

  UrlList.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    video = json['video'];
    status = json['status'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['video'] = this.video;
    data['status'] = this.status;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    return data;
  }
}
