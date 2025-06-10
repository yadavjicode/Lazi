class ProfileModel {
  int? id;
  String? mobileNo;
  String? otp;
  String? email;
  String? name;
  String? age;
  String? dateOfBirth;
  String? gender;
  String? userId;
  String? createdAt;
  String? updatedAt;
  String? profileImage;
  int? status;
  int? wallet;

  ProfileModel({
    this.id,
    this.mobileNo,
    this.otp,
    this.email,
    this.name,
    this.age,
    this.dateOfBirth,
    this.gender,
    this.userId,
    this.createdAt,
    this.updatedAt,
    this.profileImage,
    this.status,
    this.wallet,
  });

  factory ProfileModel.fromJson(Map<String, dynamic> json) {
    return ProfileModel(
      id: json['id'],
      mobileNo: json['mobile_no'],
      otp: json['otp'],
      email: json['email'],
      name: json['name'],
      age: json['age'],
      dateOfBirth: json['date_of_birth'],
      gender: json['gender'],
      userId: json['user_id'],
      createdAt: json['created_at'],
      updatedAt: json['updated_at'],
      profileImage: json['profile_image'],
      status: json['status'],
      wallet: json['wallet'],
    );
  }
}
