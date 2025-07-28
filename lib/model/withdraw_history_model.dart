class WithdrawHistoryModel {
  String? status;
  int? statusCode;
  String? message;
  List<WithdrawData>? withdrawList;

  WithdrawHistoryModel(
      {this.status, this.statusCode, this.message, this.withdrawList});

  WithdrawHistoryModel.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    statusCode = json['status_code'];
    message = json['message'];
    if (json['data'] != null) {
      withdrawList = <WithdrawData>[];
      json['data'].forEach((v) {
        withdrawList!.add(new WithdrawData.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['status'] = this.status;
    data['status_code'] = this.statusCode;
    data['message'] = this.message;
    if (this.withdrawList != null) {
      data['data'] = this.withdrawList!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class WithdrawData {
  int? id;
  String? bankName;
  String? bankAccountNo;
  String? bankIfcCode;
  String? bankBranch;
  String? bankHolderName;
  String? userId;
  String? status;
  String? remarks;
  String? adminId;
  String? createdAt;
  String? updatedAt;
  String? amount;
  String? tokenId;

  WithdrawData(
      {this.id,
      this.bankName,
      this.bankAccountNo,
      this.bankIfcCode,
      this.bankBranch,
      this.bankHolderName,
      this.userId,
      this.status,
      this.remarks,
      this.adminId,
      this.createdAt,
      this.updatedAt,
      this.amount,
      this.tokenId});

  WithdrawData.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    bankName = json['bank_name'];
    bankAccountNo = json['bank_account_no'];
    bankIfcCode = json['bank_ifc_code'];
    bankBranch = json['bank_branch'];
    bankHolderName = json['bank_holder_name'];
    userId = json['user_id'];
    status = json['status'];
    remarks = json['remarks'];
    adminId = json['admin_id'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    amount = json['amount'];
    tokenId = json['tokenId'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['bank_name'] = this.bankName;
    data['bank_account_no'] = this.bankAccountNo;
    data['bank_ifc_code'] = this.bankIfcCode;
    data['bank_branch'] = this.bankBranch;
    data['bank_holder_name'] = this.bankHolderName;
    data['user_id'] = this.userId;
    data['status'] = this.status;
    data['remarks'] = this.remarks;
    data['admin_id'] = this.adminId;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['amount'] = this.amount;
    data['tokenId'] = this.tokenId;
    return data;
  }
}
