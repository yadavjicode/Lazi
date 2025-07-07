class DashboardBannerModel {
  Data? data;
  String? message;

  DashboardBannerModel({this.data, this.message});

  DashboardBannerModel.fromJson(Map<String, dynamic> json) {
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
  Banner? banner;

  Data({this.banner});

  Data.fromJson(Map<String, dynamic> json) {
    banner =
        json['banner'] != null ? new Banner.fromJson(json['banner']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.banner != null) {
      data['banner'] = this.banner!.toJson();
    }
    return data;
  }
}

class Banner {
  int? id;
  Null? createdAt;
  String? updatedAt;
  String? topBanners1;
  String? topBanners2;
  String? topBanners3;
  String? topBanners4;
  String? middleBanners1;
  String? middleBanners2;
  String? middleBanners3;
  String? middleBanners4;
  String? bottomBanners1;
  String? bottomBanners2;
  String? bottomBanners3;
  String? bottomBanners4;

  Banner(
      {this.id,
      this.createdAt,
      this.updatedAt,
      this.topBanners1,
      this.topBanners2,
      this.topBanners3,
      this.topBanners4,
      this.middleBanners1,
      this.middleBanners2,
      this.middleBanners3,
      this.middleBanners4,
      this.bottomBanners1,
      this.bottomBanners2,
      this.bottomBanners3,
      this.bottomBanners4});

  Banner.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    topBanners1 = json['top_banners_1'];
    topBanners2 = json['top_banners_2'];
    topBanners3 = json['top_banners_3'];
    topBanners4 = json['top_banners_4'];
    middleBanners1 = json['middle_banners_1'];
    middleBanners2 = json['middle_banners_2'];
    middleBanners3 = json['middle_banners_3'];
    middleBanners4 = json['middle_banners_4'];
    bottomBanners1 = json['bottom_banners_1'];
    bottomBanners2 = json['bottom_banners_2'];
    bottomBanners3 = json['bottom_banners_3'];
    bottomBanners4 = json['bottom_banners_4'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['top_banners_1'] = this.topBanners1;
    data['top_banners_2'] = this.topBanners2;
    data['top_banners_3'] = this.topBanners3;
    data['top_banners_4'] = this.topBanners4;
    data['middle_banners_1'] = this.middleBanners1;
    data['middle_banners_2'] = this.middleBanners2;
    data['middle_banners_3'] = this.middleBanners3;
    data['middle_banners_4'] = this.middleBanners4;
    data['bottom_banners_1'] = this.bottomBanners1;
    data['bottom_banners_2'] = this.bottomBanners2;
    data['bottom_banners_3'] = this.bottomBanners3;
    data['bottom_banners_4'] = this.bottomBanners4;
    return data;
  }
}
