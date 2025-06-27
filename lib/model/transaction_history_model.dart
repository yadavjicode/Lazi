class TransactionHistoryModel {
  List<TransactionHistoryList>? transactionHistory;
  String? message;
  bool? status;

  TransactionHistoryModel({this.transactionHistory, this.message, this.status});

  TransactionHistoryModel.fromJson(Map<String, dynamic> json) {
    if (json['data'] != null) {
      transactionHistory = <TransactionHistoryList>[];
      json['data'].forEach((v) {
        transactionHistory!.add(new TransactionHistoryList.fromJson(v));
      });
    }
    message = json['message'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.transactionHistory != null) {
      data['data'] = this.transactionHistory!.map((v) => v.toJson()).toList();
    }
    data['message'] = this.message;
    data['status'] = this.status;
    return data;
  }
}

class TransactionHistoryList {
  int? id;
  String? userId;
  String? transactionId;
  String? amount;
  String? status;
  String? createdAt;
  String? updatedAt;
  String? paymentStatus;
  String? remarks;

  TransactionHistoryList(
      {this.id,
      this.userId,
      this.transactionId,
      this.amount,
      this.status,
      this.createdAt,
      this.updatedAt,
      this.paymentStatus,
      this.remarks});

  TransactionHistoryList.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    userId = json['user_id'];
    transactionId = json['transaction_id'];
    amount = json['amount'];
    status = json['status'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    paymentStatus = json['payment_status'];
    remarks = json['remarks'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['user_id'] = this.userId;
    data['transaction_id'] = this.transactionId;
    data['amount'] = this.amount;
    data['status'] = this.status;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['payment_status'] = this.paymentStatus;
    data['remarks'] = this.remarks;
    return data;
  }
}
