class GetKYCModel {
  String? status;
  int? statusCode;
  String? message;
  Data? data;

  GetKYCModel({this.status, this.statusCode, this.message, this.data});

  GetKYCModel.fromJson(Map<String, dynamic> json) {
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
  int? id;
  String? bankName;
  String? bankAccountNo;
  String? bankIfcCode;
  String? bankBranch;
  String? bankHolderName;
  String? createdAt;
  String? updatedAt;
  int? userId;
  String? status;

  Data(
      {this.id,
      this.bankName,
      this.bankAccountNo,
      this.bankIfcCode,
      this.bankBranch,
      this.bankHolderName,
      this.createdAt,
      this.updatedAt,
      this.userId,
      this.status});

  Data.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    bankName = json['bank_name'];
    bankAccountNo = json['bank_account_no'];
    bankIfcCode = json['bank_ifc_code'];
    bankBranch = json['bank_branch'];
    bankHolderName = json['bank_holder_name'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    userId = json['user_id'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['bank_name'] = this.bankName;
    data['bank_account_no'] = this.bankAccountNo;
    data['bank_ifc_code'] = this.bankIfcCode;
    data['bank_branch'] = this.bankBranch;
    data['bank_holder_name'] = this.bankHolderName;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['user_id'] = this.userId;
    data['status'] = this.status;
    return data;
  }
}
